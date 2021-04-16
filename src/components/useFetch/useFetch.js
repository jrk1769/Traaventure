import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // CleanUp functions
        const abortConst = new AbortController();
        fetch(url, { signal: abortConst.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldnt fetch data. Try again");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Fetch Aborted");
                } else {
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        return () => abortConst.abort();
    }, [url]);

    return { data, error, isLoading };
}

export default useFetch;
import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const abortConst = new AbortController();
        fetch(url)
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
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]);

    return { data, error, isLoading };
}

export default useFetch;
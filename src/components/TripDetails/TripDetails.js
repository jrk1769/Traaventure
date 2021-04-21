import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetch/useFetch';

/**
* @author
* @function TripDetails
**/

const TripDetails = () => {

    const { id } = useParams();
    const { data: trip, error, isLoading } = useFetch('http://localhost:8000/trips/'+ id);

  return(
    <div className="tripDetails">
        { isLoading && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { trip && 
        <>
          <h2>{trip.title}</h2>
          <p>{trip.category}</p>
        </> }
    </div>
   )

 }

export default TripDetails
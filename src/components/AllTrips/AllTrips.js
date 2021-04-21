import React from 'react'
import useFetch from '../useFetch/useFetch'
import "./AllTrips.css"
import { Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

/**
* @author
* @function AllTrips
**/

const AllTrips = () => {

  const { data: trips, error: tripsErr, isLoading: tripsLoad } = useFetch('http://localhost:8000/trips');

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="allTripsImg"></div>
      <div className="tripContainer">
        {tripsErr && <div>{tripsErr}</div>}
        {tripsLoad && <div>Loading...</div>}
        {trips &&
          trips.map((trip) => (
            <Link to={`/trips/${trip.id}`}>
              <Card className={classes.root} key={trip.id} style={{ cursor: "pointer" }}>
                <CardHeader
                  title={trip.title}
                  subheader={trip.date}
                />
                <CardMedia
                  className={classes.media}
                  image={trip.imgSrc}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="span">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                  <Typography component="span">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p>{trip.duration}</p>
                      <p>₹ {trip.price}</p>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))

        }
      </div>
    </>
  )

}

export default AllTrips
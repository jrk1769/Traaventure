import React from 'react'
import { useParams } from 'react-router'
import trip from "../../assets/trips.json";
import "./TripDetails.css";


// For itenary display as accordian
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const TripDetails = () => {

  const { id } = useParams();

  // For itenary state and panel
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      { trip[id - 1] &&
        <div>
          <div className="tripDetails">
            <h1 className="imageTitle">{trip[id - 1].title}</h1>
          </div>
          <div className="main" style={{ margin: '20px' }}>
            <h2>Overview</h2>
            <p>{trip[id - 1].description}</p>
            <div style={{ width: '50%' }} className={classes.root}>
              <h2>Itenary</h2>
              {
                trip[id - 1].itenary.map((day, index) => (
                  <Accordion 
                  expanded={expanded === `panel_${index}`} 
                  onChange={handleChange(`panel_${index}`)}
                  key={index}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel_${index}bh-content`}
                      id={`panel_${index}bh-header`}
                    >
                      <Typography className={classes.heading}>{day.title} : </Typography>
                      <Typography className={classes.secondaryHeading}>{day.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ textDecoration: "none" }}>
                        {
                          day.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))
                        }
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
            </div>
            <div style={{ width: '50%' }}>
              <div>
                <h2>Inclusions</h2>
                {
                  trip[id - 1].inclusions.map((inc, index) => (
                    <Accordion
                      expanded={expanded === `panel_${index}`}
                      onChange={handleChange(`panel_${index}`)}
                      key={index}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel_${index}bh-content`}
                        id={`panel_${index}bh-header`}
                      >
                        <Typography className={classes.heading}>{inc.title} </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {
                            inc.description.map((desc, index) => (
                              <li key={index}>{desc}</li>
                            ))
                          }
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  ))
                }
              </div>
              <div>
                <h2>Exclusions</h2>
                <ul>
                  {
                    trip[id - 1].exclusions.map((exc, index) => (
                      <li key={index}>{exc}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="note">
              <h2><b>Note : </b></h2>
              <ul>
                {
                  trip[id - 1].note.map((notes, index) => (
                    <li key={index}>{notes}</li>
                  ))
                }
              </ul>
            </div>
          </div>



        </div>
      }
    </div>
  )

}

export default TripDetails
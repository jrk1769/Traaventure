import React, { useState } from 'react';
import "./ContactButton.css";
import { Popover } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

/**
* @author
* @function ContactButton
**/

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: "5px",
    zIndex: "100",
    border: "5px",
    height: "40px",
    width: "100px"
  }
}));

const ContactButton = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div >
      <button
        className="btn"
        aria-describedby={id}
        onClick={handleClick}
      >
        <i className="fas fa-phone-alt align-icon"></i>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <div className={classes.typography}>
          <a onClick={handleClose} className="whatsapp" href="https://api.whatsapp.com/send?phone=919022266503" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp fa-2x"></i></a>

          <Link onClick={handleClose} to="/contactUs" className="contact"><i className="fas fa-user-alt fa-2x"></i></Link>

        </div>
      </Popover>
    </div>
  )

}

export default ContactButton
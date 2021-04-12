import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="box">
      <Grid>
        <Grid item xs={6} sm={3}>
          Terms &amp; Conditions
        </Grid>
        <Grid item xs={6} sm={2}>
          Disclaimer
        </Grid>
        <Grid item xs={6} sm={2}>
          Privacy Policy
        </Grid>
        <Grid item xs={6} sm={2}>
          Contact Us
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid item xs={6} sm={6}>
            Why Us?
          </Grid>
          <Grid item xs={6} sm={6}>
            <Grid item xs={4} sm={4} href="#">
              <i className="fab fa-facebook-f"></i>
            </Grid>
            <Grid item xs={4} sm={4} href="#">
              <i className="fab fa-instagram"></i>
            </Grid>
            <Grid item xs={4} sm={4} href="#">
              <i className="fab fa-youtube"></i>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="copyrights-text">
        &copy; 2021 Traaventure
      </Grid>
    </div>
  );
};
export default Footer;

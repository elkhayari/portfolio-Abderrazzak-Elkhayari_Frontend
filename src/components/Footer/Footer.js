import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div>
        <Typography className="footer_copyright">
          Designed and Developer by <a>Abderrazzak El khayari</a>
          <br />
          Clone idea from <a>Travonline</a>.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

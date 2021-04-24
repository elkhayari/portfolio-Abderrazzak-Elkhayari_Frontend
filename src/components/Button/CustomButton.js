import React from "react";
import { Button } from "@material-ui/core";

import './CustomButton.css'
const CustomButton = ({ text, icon }) => {
  return (
    <Button
      classname="custom_btn"
      variant="contained"
      color="primary"
      endIcon={icon ? <div className="btn_icon_container"> {icon}</div> : null}
    >
     <span className='btn_text'>{text}</span>
    </Button>
  );
};

export default CustomButton;

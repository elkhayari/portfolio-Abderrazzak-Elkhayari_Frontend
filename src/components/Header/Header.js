import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
//Bootstrap
import { Navbar, Nav } from "react-bootstrap";

//Icons
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  facebook,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import TelegramIcon from '@material-ui/icons/Telegram';

import resumeData from "../../utils/resumeData";
import CustomButton from '../Button/CustomButton'

function Header(props) {
  const pathName = props?.location?.pathname;
  console.log("pathname", pathName, props);

  return (
    <Navbar expand="lg" sticky="top" className="header">
    {/**Home Link */}
      <Nav.Link as={NavLink} to="/" className='header_navlink'>
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          {/**Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "Header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/**Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "Header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {" "}
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={'Hire me'} icon={<TelegramIcon />}/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

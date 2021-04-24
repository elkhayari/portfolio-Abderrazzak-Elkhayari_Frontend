import { Typography } from "@material-ui/core";
import React from "react";

//Componenets
import CustomTimeLine, { CustomTimeLineSeparator } from "../TimeLine/TimeLine";
import CustomButton from '../Button/CustomButton'
// MUI
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// Icons
import PersonIcon from "@material-ui/icons/Person";
import GetAppIcon from '@material-ui/icons/GetApp';
// CSS
import "./Profile.css";

import image from "../../assets/images/Profile_Image.jpg";

import resumeData from "../../utils/resumeData";


const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimeLineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title }:</span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography  className='timelineItem_text'>
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>

        <figure className="profile_image">
          <img src={image} alt="ProfileImage" />
        </figure>

        {/** Profile Information */}
        <div className="profile_information">
          <CustomTimeLine icon={<PersonIcon />}>
            <CustomTimelineItem title="name" text={resumeData.name} />
            <CustomTimelineItem title="title" text={resumeData.title} />
            <CustomTimelineItem title="email" text={resumeData.email} />

            {Object.keys(resumeData.socials).map((key) => {
              console.log(key);
              return (
                <CustomTimelineItem
                  key= {key}
                  title={key}
                  text={resumeData.socials[key].text}
                  link={resumeData.socials[key].link}
                />
              );
            })}
          </CustomTimeLine>
          <br />
          <div className='button_container'>
             <CustomButton text='Download Cv' icon={<GetAppIcon />}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { Component } from 'react';
import "./About.css";
import <profile_pic_name> from "../assets/profile_pic_name.JPG";
  
export default class About extends Component {
  render() {
    return (
    <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profile_pic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Your Name</div>
          <div className="brief_description">
            // Details about you goes here
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}
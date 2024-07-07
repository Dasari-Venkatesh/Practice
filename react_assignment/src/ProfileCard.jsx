import React from 'react';
import './ProfileCard.css';
import profilePic from './assets/micky.jpg'; 
import backPic from './assets/green_stairs.jpg'; 

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="header">
        <img src={backPic} alt="Background" className="background" />
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="info">
        <h2>Venkatesh Dasari <span className="age">23</span></h2>
        <p>Hyderabad</p>
        <div className="stats">
          <div>
            <strong>9.9M</strong>
            <p>Followers</p>
          </div>
          <div>
            <strong>803M</strong>
            <p>Likes</p>
          </div>
          <div>
            <strong>1.4K</strong>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

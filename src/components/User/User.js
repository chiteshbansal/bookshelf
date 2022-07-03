import React, { useState } from "react";
import classes from "./User.module.css";
import Img from "../../images/image1.jpg";
import {useSelector} from 'react-redux';

function User(props) {
  let fileInputRef = null;
  
  const user = useSelector(state => state.Auth.user)
  const [userData, setUserData] = useState(user);
  const [ProfileImg, setProfileImg] = useState(Img);
  const onInputChangeHandler = (field, event) => {
    let updatedDate = { ...userData };
    updatedDate[field] = event.target.value;
    setUserData(updatedDate);
  };
  const onProfileImgChangeHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className={classes.User}>
      <div className={classes.UpperCnt}>
        <div className={classes.ProfilePhoto}>
          <img className={classes.profileImage} src={ProfileImg} />
          <input
            type="file"
            name="profileImg"
            accept="image/*"
            onChange={onProfileImgChangeHandler}
            style={{ display: "none" }}
            ref={(fileInput) => (fileInputRef = fileInput)}
          />
          <div className={classes.ImageUploadBtn}>
            <img src="https://img.icons8.com/nolan/96/slr-camera.png" onClick={()=>{fileInputRef.click()}} />
          </div>
        </div>
      </div>
      <div className={classes.ProfileContent}>
        <div>
          <div className={classes.ProfileItem}>
            <div>Name</div>
            <div>
              <input
                type="text"
                name="userName"
                disabled
                value={userData.name}
                onChange={(event) => {
                  onInputChangeHandler("userName", event);
                }}
              />
            </div>
          </div>
          <div className={classes.ProfileItem}>
            <div>Email</div>
            <div>
              <input
                type="email"
                name="email"
                disabled
                value={userData.email}
                onChange={(event) => {
                  onInputChangeHandler("email", event);
                }}
              />
            </div>
          </div>
          <div className={classes.ProfileItem}>
            <div>Contact No.</div>
            <div>
              <input
                type="tel"
                name="contact"
                disabled
                value={userData.contactNo}
                onChange={(event) => {
                  onInputChangeHandler("contactNo", event);
                }}
              />
            </div>
          </div>
          <div className={classes.ProfileItem}>
            <div>Profession</div>
            <div>
              <input
                type="text"
                name="profession"
                disabled
                value={userData.profession}
                onChange={(event) => {
                  onInputChangeHandler("profession", event);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

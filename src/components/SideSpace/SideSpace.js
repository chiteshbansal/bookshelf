import React from "react";
import classes from "./SideSpace.module.css";
import MyFavListImg from "../../images/image1.jpg";
import UserProfileImg from "../../images/userProfileSideBar.jpg";

function SideSpace(props) {
  let SideSpaceImg = MyFavListImg;
  switch (props.location.pathname) {
    case "/MyFavList":
      SideSpaceImg = MyFavListImg;
      break;
    case "/User":
      SideSpaceImg = UserProfileImg;
      break;
    default:
      SideSpaceImg = MyFavListImg;
  }
  console.log(SideSpaceImg, props.location.pathname, props);
  return (
    <div className={classes.SideSpace}>
      <img src={SideSpaceImg} />
    </div>
  );
}

export default SideSpace;

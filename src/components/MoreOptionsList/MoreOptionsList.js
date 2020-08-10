import React from "react";
import classes from "./MoreOptionsList.module.css";

function MoreOptionsList(props) {
  return (
    <div className={classes.MoreOptionsListCnt}>
      <ul className={classes.MoreOptionsList}>
        <li
          onClick={() => {
            props.click();
            props.search("Philosophy");
          }}
        >
          Philosophy
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Religion");
          }}
        >
          Religion
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Finance");
          }}
        >
          Finance
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Self-Help");
          }}
        >
          Self-Help
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Personal Development");
          }}
        >
          Personal Development
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Programming");
          }}
        >
          Programming
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("History");
          }}
        >
          History
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Mystery");
          }}
        >
          Mystery
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Comic");
          }}
        >
          Comic
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Children");
          }}
        >
          Children
        </li>
        <li
          onClick={() => {
            props.click();
            props.search("Adult");
          }}
        >
          Adult
        </li>
      </ul>
    </div>
  );
}

export default MoreOptionsList;

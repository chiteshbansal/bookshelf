import React from "react";
import classes from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.heading}>
        <h3>Books</h3>
      </div>
      <div className={classes.Sidebar__searchBox}>
        <input
          type="text"
          onKeyPress={props.change}
          onSubmit={props.submit}
          placeholder="Search Books via author,title name or isbn number"
        />
      </div>
      <div className={classes.Sidebar__differentSections}>
        <ul>
          {props.options.map((option) => {
            let link = "#" + option.topic;
            if (option.topic === "Cooking") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/color/48/000000/bento.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            } else if (option.topic === "Poem") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/emoji/48/000000/memo-emoji.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            } else if (option.topic === "Romance") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/fluent/48/000000/filled-like.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            } else if (option.topic === "Fiction") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/nolan/48/robot-3.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            } else if (option.topic === "Literature") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/color/64/000000/literature.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            } else if (option.topic === "Animation") {
              return (
                <a href={link}>
                  <li>
                    <img
                      src="https://img.icons8.com/dusk/64/000000/naruto.png"
                      style={{ display: "inline" }}
                    />
                    {option.topic}
                  </li>
                </a>
              );
            }
            return (
              <a href={link}>
                <li>{option.topic}</li>
              </a>
            );
          })}
          <li onClick={props.click}>
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/details-pane.png"
              style={{ display: "inline" }}
            />
            More
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

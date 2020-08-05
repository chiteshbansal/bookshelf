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
            }
            return (
              <a href={link}>
                <li>{option.topic}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

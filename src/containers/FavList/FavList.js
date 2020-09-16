import React from "react";
import classes from "./FavList.module.css";
import Book from "../../components/Book/Book";

function FavList(props) {
  let books = <div className={classes.EmptyFavList}>No Favourite Books To Show</div>;
  if (props.books.length > 0) {
    books = props.books.map((book) => {
      return <Book />;
    });
  }
  return <div className={classes.FavList}>{books}</div>;
}

export default FavList;

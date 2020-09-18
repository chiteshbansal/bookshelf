import React from "react";
import Book from "../Book/Book";
import classes from "./BookShelf.module.css";
import Button from "../UI/Button/Button";

function BookShelf(props) {
  const { books } = props;
  let Books = null;
  if (books.length > 0) {
    Books = books.map((book) => {
      return (
        <Book
          MyFavoriteList={props.MyFavoriteList}
          book={book}
          add={props.addToFav}
          remove={props.removefromFav}
          SearchByCategory={props.click}
          addToFav={props.addToFav}
        />
      );
    });
  }
  return (
    <div id={props.id} className={classes.BookShelf}>
      <div className={classes.BookShelf__header}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.BookShelf__BooksCnt}>{Books}</div>
    </div>
  );
}

export default BookShelf;

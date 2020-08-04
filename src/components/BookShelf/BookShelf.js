import React from "react";
import Book from "../Book/Book";
import classes from "./BookShelf.module.css";
import Button from '../UI/Button/Button';

function BookShelf(props) {
  const { books } = props;
  let Books = null;
  if (books.length > 0) {
    Books = books.map((book) => {
      return <Book book={book} SearchByCategory={props.click} />;
    });
  }
  return (
    <div id={props.id} className={classes.BookShelf}>
      <div className={classes.BookShelf__header}>
        <h2>{props.title}</h2>
        <div>
          {props.searchShelf ? (
            <Button click={props.MoreSearch}>More</Button>
          ) : null}
        </div>
      </div>
      <div className={classes.BookShelf__BooksCnt}>{Books}</div>
    </div>
  );
}

export default BookShelf;

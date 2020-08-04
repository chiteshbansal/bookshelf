import React from "react";
import classes from "./BookDetail.module.css";

function BookDetail(props) {
  const { book } = props;
  return (
    <div className={classes.BookDetail}>
      <div className={classes.title}>
        <div>
          <div>{book.volumeInfo.title}</div>
          <span>By :- {book.volumeInfo.authors.join(" ,")}</span>
        </div>
        <div>
            <img src={book.volumeInfo.imageLinks.thumbnail}/>
        </div>
      </div>
      <div className={classes.description}>{book.volumeInfo.description}</div>
      <div className={classes.actions}>
        <a href={book.volumeInfo.previewLink} target="__blank">
          Preview
        </a>
        <a href={book.volumeInfo.infoLink} target="__blank">
          More Info
        </a>
      </div>
    </div>
  );
}

export default BookDetail;

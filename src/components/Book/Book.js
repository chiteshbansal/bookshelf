import React, { useState } from "react";
import classes from "./Book.module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import BookDetail from '../Book/BookDetail/BookDetail';

function Book(props) {
  const [show, setshow] = useState(false);
  const { book } = props;
  const { volumeInfo } = book;
  return (
    <div key={book.id} className={classes.Book}>
      <div className={classes.Book__Image}>
        <a href={book.accessInfo.webReaderLink} target="__blank">
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : ""
            }
            alt="bookimg"
          />
        </a>
      </div>
      <div className={classes.Book__description}>
        <span className={classes.Book__description__title}>
          {volumeInfo.title}
        </span>
        {/* <span className={classes.Book__description__content}>
                {volumeInfo.description}
              </span> */}
        <div className={classes.Book__description__Info}>
          <span className={classes.Book__description__author}>
            {volumeInfo.authors ? volumeInfo.authors.join(" ,") : ""}
          </span>
          <span
            className={classes.Book__description__categories}
            onClick={
              volumeInfo.categories && volumeInfo.categories.length !== 0
                ? () => {
                    props.SearchByCategory(volumeInfo.categories.join(" ,"));
                  }
                : () => {}
            }
          >
            {volumeInfo.categories
              ? volumeInfo.categories.length !== 0
                ? volumeInfo.categories.join(" ,")
                : "unknown category"
              : "unknown category"}
          </span>
        </div>
        <div className={classes.Book__description__actions}>
          <span>
            {book.accessInfo.epub.isAvailable ? (
              <a href={book.accessInfo.epub.acsTokenLink}>
                <i className="fas fa-cloud-download-alt"></i>
              </a>
            ) : null}
          </span>
          <span className={classes.knowMoreBtn}>
            <Button
              click={() => {
                setshow(!show);
              }}
            >
              Know More
            </Button>
          </span>
        </div>
      </div>
      <Modal show={show} click={()=>{setshow(false)}}>
        <BookDetail book = {book}/>
      </Modal>
    </div>
  );
}

export default Book;

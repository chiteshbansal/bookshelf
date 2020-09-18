import React, { useState } from "react";
import classes from "./Book.module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import BookDetail from "../Book/BookDetail/BookDetail";
import Aux from "../../Utils/Hoc/Hoc";

function Book(props) {
  const [show, setshow] = useState(false);

  const { book } = props;
  const { volumeInfo } = book;
  let IsMyFav = -1;
  IsMyFav = props.MyFavoriteList.findIndex((b) => b.id === book.id);
  return (
    <Aux>
      <div key={book.id} className={classes.Book}>
        <div className={classes.Book__Image}>
          <a href={book.accessInfo.webReaderLink} target="__blank">
            {book.volumeInfo.imageLinks ? (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="bookimg" />
            ) : (
              <img
                width="150"
                height="150"
                style={{ objectFit: "contain" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqa3W1Wk7Oiwxyso4yiFkpmFokuMEtiayj0A&usqp=CAU"
              />
            )}
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
            <div>
              <i
                class={
                  IsMyFav != -1
                    ? "far fa-heart " + classes.favorite
                    : "far fa-heart"
                }
                onClick={() => {
                  IsMyFav != -1
                    ? props.remove(book.id)
                    : props.add
                    ? props.add(book)
                    : (function () {})();
                }}
              ></i>
            </div>
            <div>
              <i class="fas fa-plus-circle"></i>
            </div>

            <div>
              {book.accessInfo.epub.isAvailable ? (
                <a href={book.accessInfo.epub.acsTokenLink}>
                  <i className="fas fa-cloud-download-alt"></i>
                </a>
              ) : null}
            </div>
            <div
              className={classes.knowMoreBtn}
              onClick={() => {
                setshow(!show);
              }}
            >
              More
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        click={() => {
          setshow(false);
        }}
      >
        <BookDetail book={book} />
      </Modal>
    </Aux>
  );
}

export default Book;

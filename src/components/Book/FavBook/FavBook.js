import React, { useState } from "react";
import classes from "./FavBook.module.css";
import Aux from "../../hoc/Wrapper";
import Modal from "../../UI/Modal/Modal";
import BookDetail from "../BookDetail/BookDetail";

function FavBook(props) {
  const [showMoreInfo, setshowMoreInfo] = useState(false);
  const { book } = props;
  const { volumeInfo } = book;
  return (
    <Aux>
      <div className={classes.FavBookCnt}>
        <div className={classes.FavBook}>
          <div className={classes.FavBook_Cover}>
            <div className={classes.Book_Title}>{volumeInfo.title}</div>
            <div className={classes.Book_Author}>
              {volumeInfo.authors ? volumeInfo.authors.join(" ,") : ""}
            </div>
            <div className={classes.Book_Image}>
              {volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.thumbnail} />
              ) : (
                <img
                  width="150"
                  height="150"
                  style={{ objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqa3W1Wk7Oiwxyso4yiFkpmFokuMEtiayj0A&usqp=CAU"
                />
              )}
            </div>
            <div className={classes.Book__description}>
              {volumeInfo.description}
            </div>
          </div>
        </div>
        <div className={classes.Book_toolbar}>
          <div
            onClick={() => {
              props.remove(book.id);
            }}
          >
            <i className={"far fa-heart " + classes.favorite}></i>
          </div>
          <div>
            <i class="fas fa-plus-circle"></i>
          </div>
          <div onClick={() => setshowMoreInfo(true)}>
            <img
              width="19"
              height="20"
              src="https://img.icons8.com/fluent/48/000000/info.png"
            />
          </div>
        </div>
      </div>
      <Modal
        show={showMoreInfo}
        click={() => {
          setshowMoreInfo(false);
        }}
      >
        <BookDetail book={book} />
      </Modal>
    </Aux>
  );
}

export default FavBook;

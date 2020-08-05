import React, { Component } from "react";
import classes from "./layout.module.css";
import axios from "axios";
import BookShelf from "../../components/BookShelf/BookShelf";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import Spinner from "../../components/UI/Spinner/Spinner";

class Layout extends Component {
  constructor() {
    super();
    this.layoutref = React.createRef();
  }
  state = {
    searchText: "",
    searchIndex: 0,
    books: null,
    Shelf: [
      {
        topic: "Poem",
        books: [],
      },
      {
        topic: "Romance",
        books: [],
      },
      {
        topic: "Fiction",
        books: [],
      },
      {
        topic: "Cooking",
        books: [],
      },
      {
        topic: "Literature",
        books: [],
      },
      {
        topic: "Animation",
        books: [],
      },
    ],
    loading: false,
  };

  componentDidMount() {
    this.state.Shelf.map((slf) => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${slf.topic}&maxResults=15&orderBy=newest&key=AIzaSyCek_y86DrRvTdMBu0f30JIMiE1c1QmPXE`
        )
        .then((response) => {
          console.log("response is ", response.data);
          console.log(response.data.items[0].volumeInfo);
          let UpdateShelf = this.state.Shelf.map((shelf) => {
            if (shelf.topic === slf.topic) {
              return {
                topic: slf.topic,
                books: response.data.items,
              };
            }

            return shelf;
          });

          this.setState({
            Shelf: UpdateShelf,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  onSearchChangeHandler = (event) => {
    if (event.key === "Enter") {
      window.scrollTo(0, 0);
      return this.onSubmitSearchHandler(this.state.searchText);
    }
    let text = this.state.searchText + event.key;
    console.log(this.state.searchText);
    this.setState({
      searchText: text,
    });
  };

  onMoreSearchHandler = () => {
    console.log("in more search", this.state);
    this.onSubmitSearchHandler(this.state.searchText);
  };
  onSubmitSearchHandler = (SearchText = "") => {
    let search = SearchText;
    console.log("ref si ", this.layoutref);
    this.layoutref.current.scrollTo(0, 0);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=6&orderBy=newest&key=AIzaSyCek_y86DrRvTdMBu0f30JIMiE1c1QmPXE`;
    // when not clicked on the category
    if (SearchText === "") {
      search = this.state.searchText;
      url = `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${this.state.searchIndex}&maxResults=6&orderBy=newest&key=AIzaSyCek_y86DrRvTdMBu0f30JIMiE1c1QmPXE`;
    }
    console.log("search text ", SearchText);

    this.setState({
      loading: true,
    });
    console.log("url is ", url);
    axios
      .get(url)
      .then((response) => {
        console.log("response is ", response.data);
        if (response.data.items) {
          window.scrollTo(0, 0);
          this.setState({
            loading: false,
            searchText: SearchText !== "" ? SearchText : "",
            searchIndex: this.state.searchIndex + 1,
            books: response.data.items,
          });
        }else{
          this.setState({
            loading:false,
            books:[],
          })
        }
      })
      .catch((error) => {
        console.log("error is ", error.response.data);
      });
  };

  render() {
    let books = this.state.loading ? <Spinner /> : null;
    if (this.state.books && this.state.books.length > 0 && !this.state.loading) {
      console.log(this.state.books, "fetched books are ");
      books = (
        <BookShelf
          searchShelf
          MoreSearch={this.onMoreSearchHandler}
          books={this.state.books}
          title={"Search Result"}
          click={this.onSubmitSearchHandler}
        />
      );
    }else if(this.state.books && this.state.books.length ===0 && !this.state.loading){
        books = <div>No Results to show</div>
    }
    let shelves = null;
    shelves = this.state.Shelf.map((slf) => {
      return (
        <BookShelf
          title={slf.topic}
          books={slf.books}
          click={this.onSubmitSearchHandler}
          id={slf.topic}
        />
      );
    });
    console.log("state is ", this.state);
    return (
      <div className={classes.layout}>
        <Sidebar
          change={this.onSearchChangeHandler}
          submit={this.onSubmitSearchHandler}
          click={this.scrollDownto}
          options={this.state.Shelf}
          value={this.state.searchText}
        />
        <div className={classes.booksSection} ref={this.layoutref}>
          {books}
          {shelves}
        </div>
      </div>
    );
  }
}

export default Layout;

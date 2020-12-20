import React, { Component } from "react";
import classes from "./layout.module.css";
import axios from "axios";
import BookShelf from "../../components/BookShelf/BookShelf";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import MoreOptionsList from "../../components/MoreOptionsList/MoreOptionsList";
import NavBar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Route, Switch } from "react-router-dom";
import FavList from "../FavList/FavList";
import Aux from "../../Utils/Hoc/Hoc";
import * as actions from "../../Store/actions/index";
import { connect } from "react-redux";
import SideSpace from "../../components/SideSpace/SideSpace";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import User from "../../components/User/User";
import Auth from "../../components/Auth/Auth";

class Layout extends Component {
  constructor() {
    super();
    this.layoutref = React.createRef();
  }
  state = {
    searchText: "",
    searchIndex: 0,
    books: null,
    showLoginForm: false,
    showSideDrawer: false,
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
    ShowMoreOptions: false,
  };

  componentDidMount() {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("token", undefined);
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

  onToggleSideDrawer = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
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
            searchText: "",
            searchIndex: this.state.searchIndex + 1,
            books: response.data.items,
          });
        } else {
          this.setState({
            searchText: "",
            loading: false,
            books: [],
          });
        }
      })
      .catch((error) => {
        console.log("error is ", error.response.data);
      });
  };
  onToggleMoreOptionModal = () => {
    this.setState((prevState) => {
      return {
        ShowMoreOptions: !prevState.ShowMoreOptions,
      };
    });
  };
  onToggleLoginForm = () => {
    this.setState((prevState) => {
      return {
        showLoginForm: !prevState.showLoginForm,
      };
    });
  };
  render() {
    let MoreOptionsModal = null;
    let loginFormModal = null;
    if (this.state.showLoginForm) {
      loginFormModal = (
        <Modal show={this.state.showLoginForm} click={this.onToggleLoginForm}>
          <LoginForm />
        </Modal>
      );
    }
    if (this.state.ShowMoreOptions) {
      MoreOptionsModal = (
        <Modal
          show={this.state.ShowMoreOptions}
          click={this.onToggleMoreOptionModal}
        >
          <MoreOptionsList
            search={this.onSubmitSearchHandler}
            click={this.onToggleMoreOptionModal}
          />
        </Modal>
      );
    }
    let books = this.state.loading ? <Spinner /> : null;
    if (
      this.state.books &&
      this.state.books.length > 0 &&
      !this.state.loading
    ) {
      console.log(this.state.books, "fetched books are ");
      books = (
        <BookShelf
          searchShelf
          MyFavoriteList={this.props.MyFavoriteList}
          addToFav={this.props.addToMyFav}
          removefromFav={this.props.removeFromMyFav}
          books={this.state.books}
          title={"Search Result"}
          click={this.onSubmitSearchHandler}
        />
      );
    } else if (
      this.state.books &&
      this.state.books.length === 0 &&
      !this.state.loading
    ) {
      books = <div>No Results to show</div>;
    }
    let shelves = null;
    shelves = this.state.Shelf.map((slf) => {
      return (
        <BookShelf
          MyFavoriteList={this.props.MyFavoriteList}
          title={slf.topic}
          books={slf.books}
          click={this.onSubmitSearchHandler}
          id={slf.topic}
          addToFav={this.props.addToMyFav}
          removefromFav={this.props.removeFromMyFav}
        />
      );
    });
    console.log("this props", this.props);
    return (
      <div className={classes.layout}>
        <div
          className={classes.SideDrawerToggler}
          onClick={this.onToggleSideDrawer}
        >
          <div></div>
        </div>
        {loginFormModal}
        {MoreOptionsModal}
        <Switch>
          <Route path="/MyFavList" component={SideSpace} />
          <Route path="/User" component={SideSpace} />
          <Route path="/auth" component={SideSpace} />
          <Route
            path="/"
            render={() => {
              return (
                <Sidebar
                  change={this.onSearchChangeHandler}
                  submit={this.onSubmitSearchHandler}
                  click={this.onToggleMoreOptionModal}
                  options={this.state.Shelf}
                  value={this.state.searchText}
                />
              );
            }}
          />
        </Switch>
        <SideDrawer
          show={this.state.showSideDrawer}
          toggle={this.onToggleSideDrawer}
        />
        <div className={classes.MainBody}>
          <NavBar />
          <div className={classes.booksSection} ref={this.layoutref}>
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route
                path="/MyFavList"
                render={() => {
                  return (
                    <Aux>
                      <FavList books={this.state.FavList} />
                    </Aux>
                  );
                }}
              />
              <Route
                path="/User"
                render={() => {
                  return <User />;
                }}
              />
              <Route
                path="/"
                render={() => {
                  return (
                    <div>
                      {books}
                      {shelves}
                    </div>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    MyFavoriteList: state.MyFavoriteList,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    addToMyFav: (book) => {
      dispatch(actions.addToFavoriteList(book));
    },
    removeFromMyFav: (bookId) => {
      dispatch(actions.removeFromFavList(bookId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Layout);

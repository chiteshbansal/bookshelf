import React from "react";
import classes from "./FavList.module.css";
import FavBook from "../../components/Book/FavBook/FavBook";
import * as actions from "../../Store/actions/index";
import { connect } from "react-redux";
class FavList extends React.Component {
  render() {
    let books = (
      <div className={classes.EmptyFavList}>No Favourite Books To Show</div>
    );
    if (this.props.MyFavoriteList.length > 0) {
      books = this.props.MyFavoriteList.map((book) => {
        return (
          <FavBook
            book={book}
            add={this.props.addToFavList}
            MyFavoriteList={this.props.MyFavoriteList}
            remove={this.props.removeFromMyFav}
          />
        );
      });
    }
    return <div className={classes.FavList}>{books}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    MyFavoriteList: state.list.MyFavoriteList,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    addToFavList: (book) => {
      dispatch(actions.addToFavoriteList(book));
    },
    removeFromMyFav: (bookId) => {
      dispatch(actions.removeFromFavList(bookId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(FavList);

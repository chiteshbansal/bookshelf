import * as actionTypes from "../actions/actionTypes";

const initState = {
  MyFavoriteList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITE_LIST: {
      let updatedMyFavoriteList = [...state.MyFavoriteList, action.book];
      return {
        ...state,
        MyFavoriteList: updatedMyFavoriteList,
      };
    }

    case actionTypes.REMOVE_FROM_FAVORITE_LIST: {
      let updatedMyFavoriteList = state.MyFavoriteList.filter(
        (book) => book.id !== action.bookId
      );
      return {
        ...state,
        MyFavoriteList: updatedMyFavoriteList,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

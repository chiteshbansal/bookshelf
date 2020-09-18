import * as actionTypes from './actionTypes';

export const addToFavoriteList = (book)=>{
    return {
        book:book,
        type:actionTypes.ADD_TO_FAVORITE_LIST,
    }
}

export const removeFromFavList  = (bookId) =>{
    return{
        bookId:bookId,
        type:actionTypes.REMOVE_FROM_FAVORITE_LIST
    }
}
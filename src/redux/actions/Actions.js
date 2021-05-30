export const SEARCH = 'SEARCH';
export const ADD_BOOK = 'ADD_BOOK';
export const BOOK_NOW = 'BOOK_NOW';
export const SET_USER = 'SET_USER';
export const SET_SUCCESS = 'SET_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const bookingNow = (isTrue) => {
    return{
        type: BOOK_NOW,
        isTrue
    }
}

export const setSuccess = isTrue => {
    return{
        type: SET_SUCCESS,
        isTrue
    }
}
export const searchResult = (data, location="dhaka", date) => {
    return{
        type: SEARCH,
        data,
        location,
        date
    }
}
export const bookNow = id => {
    return{
        type: ADD_BOOK,
        id
    }
}
export const setUser = data => {
    return{
        type: SET_USER,
        data
    }
}
export const Logout = (data) => {
    return{
        type: LOGOUT,
        data
    }
}
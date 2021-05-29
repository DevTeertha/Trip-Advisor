export const SEARCH = 'SEARCH';
export const BOOK_NOW = 'BOOK_NOW';
export const SET_USER = 'SET_USER';

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
        type: BOOK_NOW,
        id
    }
}
export const setUser = data => {
    return{
        type: SET_USER,
        data
    }
}
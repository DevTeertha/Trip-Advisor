export const SEARCH = 'SEARCH';
export const BOOK_NOW = 'BOOK_NOW';

export const searchResult = (data, location="dhaka") => {
    return{
        type: SEARCH,
        data,
        location
    }
}
export const bookNow = id => {
    return{
        type: BOOK_NOW,
        id
    }
}
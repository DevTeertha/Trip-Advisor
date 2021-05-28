export const SEARCH = 'SEARCH';
export const BOOK_NOW = 'BOOK_NOW';

export const searchResult = location => {
    return{
        type: SEARCH,
        location
    }
}
export const bookNow = id => {
    return{
        type: BOOK_NOW,
        id
    }
}
export const searchResult = id => {
    return{
        type: 'SEARCH',
        id
    }
}
export const bookNow = id => {
    return{
        type:'BOOK_NOW',
        id
    }
}
const initialState = {
    hotels: [],
    result: [],
    bookList:[]
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        case 'BOOK_NOW':{
            return {
                bookList: [...state.bookList, action.id]
            };
        }
        default:
            return state;
    }
}
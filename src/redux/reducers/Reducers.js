const initialState = {
    hotels: [],
    result: [],
    bookList:[]
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        case 'BOOK_NOW':{
            const newState = {
                ...state,
                bookList: [...state.bookList, action.id]
            }
            return newState;
        }
        default:
            return state;
    }
}
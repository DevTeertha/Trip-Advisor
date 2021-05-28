import { BOOK_NOW, SEARCH } from "../actions/Actions";
import { homeData } from "../../FakeData/Database";

const initialState = {
    places: homeData,
    results: [],
    bookList:[]
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:{
            const searchPlaces = state.places.filter(place=>place.location===action.location);
            return {
                results: [...searchPlaces, action.location]
            }
        }
        case BOOK_NOW:{
            return {
                ...state,
                bookList: [action.id]
            };
        }
        default:
            return state;
    }
}
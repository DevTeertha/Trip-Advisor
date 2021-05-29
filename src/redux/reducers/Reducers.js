import { BOOK_NOW, SEARCH } from "../actions/Actions";
import { homeData } from "../../FakeData/Database";
import { hotelsData } from "../../FakeData/Database";

const initialState = {
    places: homeData,
    results: [],
    bookList:{},
    hotels: hotelsData
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:{
            return {
                ...state,
                results: action
            }
        }
        case BOOK_NOW:{
            const booking = state.places.find(place=>place.id===action.id);
            return {
                ...state,
                bookList:  booking
            };
        }
        default:
            return state;
    }
}
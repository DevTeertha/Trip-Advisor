import { BOOK_NOW, SEARCH, SET_USER, SET_SUCCESS, ADD_BOOK } from "../actions/Actions";
import { homeData, experienceData } from "../../FakeData/Database";
import { hotelsData } from "../../FakeData/Database";

const initialState = {
    bookNow: false,
    success: false,
    places: {homeData, experienceData},
    results: {
        data:[],
        date: {
            startDate: new Date(),
            endDate: new Date()
        }
    },
    bookList: {},
    hotels: hotelsData,
    user: {
        data: {
            isSignIn: false,
            name: "",
            email: "",
            img: ""
        }
    }
}

export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_NOW: {
            return{
                ...state,
                bookNow: action.isTrue
            }
        }
        case SET_SUCCESS: {
            return {
                ...state,
                success: action.isTrue
            }
        }
        case SET_USER: {
            return {
                ...state,
                user: action
            }
        }
        case SEARCH: {
            return {
                ...state,
                results: action
            }
        }
        case ADD_BOOK: {
            const booking = state.places.find(place => place.id === action.id);
            return {
                ...state,
                bookList: booking
            };
        }
        default:
            return state;
    }
}
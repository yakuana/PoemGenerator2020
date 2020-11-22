import {
    FETCH_WHEATLEY_POEM_DATA_START, 
    FETCH_WHEATLEY_POEM_DATA_SUCCESS, 
    FETCH_WHEATLEY_POEM_DATA_FAILURE,
    FETCH_DUNBAR_POEM_DATA_START, 
    FETCH_DUNBAR_POEM_DATA_SUCCESS,
    FETCH_DUNBAR_POEM_DATA_FAILURE,
    FETCH_HAMMON_POEM_DATA_START, 
    FETCH_HAMMON_POEM_DATA_SUCCESS, 
    FETCH_HAMMON_POEM_DATA_FAILURE
} from '../actions/index.js'; 

// initial state data 
const initialState = {
    poems: [], 
    wheatleyLoading: false, 
    wheatleyError: "",
    dunbarLoading: false, 
    dunbarError: "", 
    hammonLoading: false, 
    hammonError: ""
}

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_WHEATLEY_POEM_DATA_START:
            return {
                ...state, 
                wheatleyLoading: true, 
                error: ""
            };
        case FETCH_WHEATLEY_POEM_DATA_SUCCESS:
            return {
                ...state, 
                wheatleyLoading: false, 
                poems: [...state.poems, ...action.payload],
                wheatleyError: ""
            }; 
        case FETCH_WHEATLEY_POEM_DATA_FAILURE:
            return {
                ...state, 
                wheatleyLoading: false, 
                wheatleyError: action.payload 
            };
        case FETCH_DUNBAR_POEM_DATA_START:
            return {
                ...state, 
                dunbarLoading: true, 
                dunbarError: ""
            };
        case FETCH_DUNBAR_POEM_DATA_SUCCESS:
            return {
                ...state, 
                dunbarLoading: false, 
                poems: [...state.poems, ...action.payload],
                dunbarError: ""
            }; 
        case FETCH_DUNBAR_POEM_DATA_FAILURE:
            return {
                ...state, 
                dunbarLoading: false, 
                dunbarError: action.payload 
            };
        case FETCH_HAMMON_POEM_DATA_START:
            return {
                ...state, 
                hammonLoading: true, 
                hammonError: ""
            };
        case FETCH_HAMMON_POEM_DATA_SUCCESS:
            return {
                ...state, 
                hammonLoading: false, 
                poems: [...state.poems, ...action.payload],
                hammonError: ""
            }; 
        case FETCH_HAMMON_POEM_DATA_FAILURE:
            return {
                ...state, 
                hammonLoading: false, 
                hammonError: action.payload 
            };
        default: 
            return state; 
    }
} 
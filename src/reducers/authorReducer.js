import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state=initialState.authors, action){
    switch(action.type){
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            // create duplicate state list and add new state from action. 
            return action.authors;
        default:
            return state;
    }

}
import * as actionTypes from "../actions/actionTypes";

export default function courseReducer(state=[], action){
    switch(action.type){
        case actionTypes.LOAD_COURSES_SUCCESS:
            // create duplicate state list and add new state from action. 
            return action.courses;
        default:
            return state;
    }

}
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state=initialState.courses, action){
    switch(action.type){
        case actionTypes.LOAD_COURSES_SUCCESS:
            // create duplicate state list and add new state from action. 
            return action.courses;
        case actionTypes.CREATE_COURSES_SUCCESS:
            return [
				...state,
				Object.assign({}, action.course)
            ];
        case actionTypes.UPDATE_COURSES_SUCCESS:
            return [
				...state.filter(course => course.id != action.course.id), // insert all Courses expect one that we are updating 
				Object.assign({}, action.course)
            ];
        default:
            return state;
    }

}
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type){
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxCallsInProgressReducer(state=initialState.numAjaxCallsInProgress, action){
    if(action.type == actionTypes.BEGIN_AJAX_CALL){
        state = state+1;
    }else if(action.type == actionTypes.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
        state = state-1;
    }

    return state;
}
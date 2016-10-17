import * as actionTypes from "./actionTypes";
import authorsApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
    return {type: actionTypes.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return authorsApi.getAllAuthors().then((authors)=>{
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error=>{
			throw(error);
		});
	};
}
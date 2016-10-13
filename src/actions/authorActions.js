import * as actionTypes from "./actionTypes";
import authorsApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
    return {type: actionTypes.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
	return function(dispatch){
		return authorsApi.getAllAuthors().then((authors)=>{
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error=>{
			throw(error);
		});
	};
}
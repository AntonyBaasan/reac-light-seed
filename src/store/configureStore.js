import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initState){
	return createStore(
		rootReducer, 
		initState, 
		applyMiddleware(redux-immutable-state-invariant())
		);	
}
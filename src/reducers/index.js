import {combinedReducers} from 'redux';
import courses from './courceReducer';

const rootReducer = combinedReducers({
	courses
});

export default rootReducer;
export default function courseReducer(state=[], action){
    switch(action.type){
        case "CREATE_COURSE":
            // create duplicate state list and add new state from action. 
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }

}
import { userListConstants } from "../actions/constants"

const initState = {
    emails: [],
}

export default (state = initState,action) => {
    switch(action.type){
        case userListConstants.GET_ALL_EMAILS_SUCCESS:
            state = {
                ...state,
                emails: action.payload.emails,
            }
        break;

    }
    return state;
}
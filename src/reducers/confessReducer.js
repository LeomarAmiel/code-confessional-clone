import { POST_SUCCESS, POST_FAIL, CHANGE_CONFESS_FORM } from "../actions";

const initialState = {
    fetching: false,
    error: null,
    confess: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
		case 'POST_REQUEST':
			return state;
			break;
        case POST_SUCCESS:
            return { confess: "", error: null };
            break;
        case POST_FAIL:
            return { ...state, error: action.payload };
            break;
        case CHANGE_CONFESS_FORM:
            return { confess: action.payload };
            break;
        default:
            return state;
    }
};

import {API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS} from '../actions';

const initialState = {
	fetching: false,
	confessions: null,
	error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
            break;
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, confessions: action.payload };
            break;
        case API_CALL_FAILURE:
			return { ...state, fetching: false, confessions: null, error: action.payload };
			break;
        case "persist/REHYDRATE":
            return { ...state, persistedState: action.payload };
            break;
        default:
            return state;
    }
};

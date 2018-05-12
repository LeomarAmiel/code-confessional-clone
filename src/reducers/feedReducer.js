import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS, CHANGE_CATEGORY, SORT_CONFESSIONS, REACT_SUCCESS } from '../actions';

const initialState = {
	fetching: false,
	confessions: null,
	error: null,
	category: 'new',
	itemsReactedTo: []
};

export default (state = initialState, action) => {
	console.log(state);
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
		case CHANGE_CATEGORY:
            return { ...state, category: action.payload };
			break;
		case SORT_CONFESSIONS: 
			return { ...state, confessions: action.payload };
			break;
		case REACT_SUCCESS:
			const newArr = [...state.itemsReactedTo]
			newArr.push({ id: action.payload.id, action: action.payload.action});
			return { ...state, itemsReactedTo: newArr, confessions: updateConfessions(state.confessions, action.payload)}
			break;
		case "persist/REHYDRATE":
            return { ...action.payload.feed };
            break;
        default:
			return state;
			break;
    }
};

function updateConfessions (confessions, payload) {
	return confessions.map((val) => {
		if(payload.id === val.id) {
			let confession = {
				...payload,
				[payload.action]: payload[payload.action] + 1
			}
			delete confession.action;
			return confession;
		}
		return val;
	})
} 
const initialState = {};

export default (state = initialState, action) => {
	switch(action.type) {
        case 'GET_TODO': 
			return [...state, ...action.payload];
			break;
		case 'persist/REHYDRATE':
			return {...state, persistedState: action.payload}
			break;
		default: 
			return state;
	} 
	
}
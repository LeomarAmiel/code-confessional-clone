const initialState = {};

export default (state = initialState, action) => {
	switch(action.type) {
        case 'GET_TODO': 
            return [...state, ...action.payload];
		default: 
			return state;
	} 
}
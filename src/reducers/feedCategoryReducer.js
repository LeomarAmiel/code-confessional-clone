const initialState = {
	feedCategory: 'new',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return { feedCategory: action.payload };
            break;
        default:
            return state;
    }
};

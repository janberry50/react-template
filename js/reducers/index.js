import actionTypes from '../constants/actionTypes';

const initialState = {
    articles: [
        { id: 0, title: 'My first article' }
    ]
};

const rootReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            newState = Object.assign({}, state, { articles: state.articles.concat(action.payload) });
            break;
        default:
            newState = state;
            break;
    }

    return newState;
};

export default rootReducer;
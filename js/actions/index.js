import actionTypes from '../constants/actionTypes';

export const addArticle = article => ({
    type: actionTypes.ADD_ARTICLE,
    payload: article
});
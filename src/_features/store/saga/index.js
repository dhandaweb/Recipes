import fetchRecipeList from './fetchRecipeList';
import { actions as ActionTypes } from '../actions/constants';
import { takeLatest } from 'redux-saga/effects';
import getMockRecipeListing from '../../mock/mockRecipeListing';

export default function* recipeWatch(dispatch, getState) {
    const commandResult= getMockRecipeListing();
    yield takeLatest(ActionTypes.REQUEST_RECIPE_LIST, fetchRecipeList, commandResult);
}



import { put } from 'redux-saga/effects';
import {actions as ActionTypes} from '../reducers';

  export default function* fetchRecipeList(state: any) {
    try {
      yield put(ActionTypes.requestListSuccess(state));
    } catch (error) {
      yield put(ActionTypes.requestListFailed());
    }
  }
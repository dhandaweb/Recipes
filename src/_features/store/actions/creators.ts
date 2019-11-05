
import {  actions as ActionTypes } from '../actions/constants';
export function requestMockData() {
    console.log("action call");
    return {
      type: ActionTypes.REQUEST_RECIPE_LIST
    };
  }
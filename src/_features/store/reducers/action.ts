import { actions as ActionTypes } from '../actions/constants';

export function requestList() {
    return {
      type: ActionTypes.REQUEST_RECIPE_LIST
    };
  }
  export function requestListSuccess(state:any) {
    console.log("success",state);
    return {
      type: ActionTypes.REQUEST_RECIPE_LIST_SUCCESS,
      
    };
  }

  export function requestListFailed() {
    return {
      type: ActionTypes.REQUEST_RECIPE_LIST_FAILED
    };
  }
 
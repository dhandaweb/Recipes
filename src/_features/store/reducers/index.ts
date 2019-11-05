import * as handlers from './handlers';
import * as actions from './action';
import { actions as ActionTypes} from '../actions/constants';

import getMockRecipeListing from '../../mock/mockRecipeListing';
const initialState = {
    content: getMockRecipeListing()
  };
function reducer(state=initialState,action:any){
  console.log("reducer index call");
switch(action.type)
{
    case ActionTypes.REQUEST_RECIPE_LIST:
        return handlers.requestMockData(state);
        case ActionTypes.REQUEST_RECIPE_LIST_SUCCESS:
          return handlers.requestListSuccess(getMockRecipeListing());
          case ActionTypes.REQUEST_RECIPE_LIST_FAILED:
            return handlers.requestListFailed(state);
      
}
return state;
} 
export { actions, initialState };
export default reducer;
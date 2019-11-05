import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import getData from '../../api/getData';
import getMockRecipeListing from '../../mock/mockRecipeListing';
import { requestList, requestListSuccess } from '../reducers/action';
import fetchRecipeList from './fetchRecipeList';

describe('requestDssOutletAndActivities', () => {
  describe('Scenario 1: the api/getOutletActivities request success', () => {
    const it = sagaHelper(fetchRecipeList(getMockRecipeListing()));
    const response = getMockRecipeListing();

    it('should call the api and return a Outlet array', result => {
      expect(result).toEqual(call(getData));
      return response;
    });

    it('should dispatch a put successful request to the store', result => {
      expect(result).toEqual(put(requestListSuccess(response.contents)));
    });

    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });
});

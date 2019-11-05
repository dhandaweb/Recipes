import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import getMockRecipeListing from "../mock/mockRecipeListing";
import RecipeListingComp from './RecipeListingComp';
import RecipeListing from './RecipeListing';
describe('<Confirmed.TabContent />', () => {
  const { contents } = getMockRecipeListing();

  const defaultProps: any = {
    isLoading: false,
    };
  let wrapper;
  
  const setup = (props: any = defaultProps) => {
    return shallow(<RecipeListing {...props} />);
  };

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

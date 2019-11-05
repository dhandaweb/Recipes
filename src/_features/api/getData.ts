
import getMockRecipeListing from '../mock/mockRecipeListing';

 const getData: () => any = () => {
    return (getMockRecipeListing(), {
        method: 'get'
      });
};

export default getData;

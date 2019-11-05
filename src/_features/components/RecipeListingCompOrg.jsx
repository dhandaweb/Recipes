import getMockRecipeListing from "../mock/mockRecipeListing";
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Provider } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { requestMockData } from "../store/actions/creators";
import{actions} from '../store/reducers/index'


  class RecipeListingComp extends React.Component{
     
componentDidMount()
{
    this.props.requestMockData();
}
    render(){
                const mockRecipeListing = this.props.recipeListing;
               
    return(
    <div>
        <table>
        {mockRecipeListing.contents && mockRecipeListing.contents.map(element  =>
            <tr key={element.contentId} className="imageBorder">
               <td >
                   
                  <img src={element.imageList.landscape32medium1x.url} title={element.title}></img>
                  <div>{element.title}</div>
                  <div>{element.isFavourited?<img src={"/common/image/favorite.jpg"}/>:''}</div>
              </td>
              <td>
              <img src={element.imageList.landscape32medium1x.url} title={element.title}></img>
              <div>{element.title}</div>
              <div>{element.isFavourited?<img src={'../common/image/favorite'}/>:''}</div>
          </td>
           </tr>
        )}
        </table>
    </div>
)
    }
  }

const mapDispatchToProps = dispatch => ({
    requestMockData:()=>dispatch(actions.requestList())
  });
  const mapStateToProps = store => ({
    recipeListing:store
  });
  export default 
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(RecipeListingComp)
  ;

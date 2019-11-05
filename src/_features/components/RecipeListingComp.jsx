import React, {  } from 'react';
import { connect } from 'react-redux';
import{actions} from '../store/reducers/index'


  class RecipeListingComp extends React.Component{
     
componentDidMount()
{
    this.props.requestMockData();
}
    render(){
                const mockRecipeListing = this.props.recipeListing;
               
    return(
        <div className="wrapper-container">
    <div className="row">
        {mockRecipeListing.contents && mockRecipeListing.contents.map(element  =>
            <div key={element.contentId} className="col-sm-6 col-xs-12 col-sm-offset-1 ">
               
                <div className="p-1 imageBorder">
                  <img alt="" src={element.imageList.landscape32small1x.url} title={element.title}></img>
                  </div>
                  <div className="p-1">{element.title}</div>
                  
             
               </div>
        )}
    </div>
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

import React from 'react';
import {render} from 'react-dom';


class LeadBox extends React.Component {
  render () {
  	var imgStyle = {
  		// width: '100%',
  		// height: '80%'
  	}
  	var leadTileStyle = {
		height: '250px'
  	}


    return (
      <div className="leadBox row">
     	 <a href="#">
      		<p>{this.props.lead.user} | {this.props.lead.lead_contact}</p>
    	</a>
      </div>

    );
  }
}//        <span className="btn btn-default btn-block"> {this.props.activity.name}</span>

export default LeadBox
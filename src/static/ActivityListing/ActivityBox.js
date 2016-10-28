import React from 'react';
import {render} from 'react-dom';
import {LinkContainer} from 'react-router-bootstrap'


class ActivityBox extends React.Component {
  render () {
  	
  	var activityTileStyle = {
		height: '250px',
    backgroundImage: "url("+this.props.activity.image+")",
    backgroundPosition : "center",
    backgroundSize : "cover",
    textAlign : "center",
    verticalAlign : "middle",
    display: "table-cell"
  	}

    return (
      <div className="col-xs-12 col-sm-4" style={{display:"table"}}>
        <div style={activityTileStyle}>
          <LinkContainer to={`/leads/${this.props.activity.name}`}>
             <div style={{verticalAlign : "middle", background:"rgba(255,255,255,0.5)"}}>
            	{/*<img style={imgStyle} src={this.props.activity.image} alt="..."/>*/}  
            		<h2>{this.props.activity.name}</h2>
          	</div>
          </LinkContainer>
      	</div>
      </div>
    );
  }
}//        <span className="btn btn-default btn-block"> {this.props.activity.name}</span>

export default ActivityBox
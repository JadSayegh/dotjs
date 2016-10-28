import React from 'react';
import {render} from 'react-dom';
import ActivityBox from './ActivityBox';

class ActivityList extends React.Component {

componentDidMount (){
  this.props.fetchActivitiesRequest();

 $.ajax({
  dataType: "json",
  url: "/api/activity-list",
  data: "",
  success: (data) =>{
    this.props.fetchActivitiesSuccess(data);
  },
  error:(data)=>{
    console.log(data);
    this.props.fetchActivitiesFailure();
  }
});
}

  render () {
    var activityListEntries;
    if (!this.props.activities){
      activityListEntries = "There doesn't seem to be any activities listed right now..";
    }else{
    activityListEntries = this.props.activities.map(function(activity, i){
        return <ActivityBox key={i} activity={activity}/>
        // return <p>{activity.name}</p>
      });

    }


    return (
      <div className="container">
        <h2> Activity List </h2>
        <div className="row">
          
          {activityListEntries}
          
          </div>
        </div>
    );
  }
}//        <span className="btn btn-default btn-block"> {this.props.activity.name}</span>

export default ActivityList
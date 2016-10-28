import React from 'react';
import {render} from 'react-dom';
import LeadBox from './LeadBox';

class LeadList extends React.Component {
  fetchLeadList(activity){
    $.ajax({
      dataType: "json",
      url: "/api/lead-list/" + activity,
      data: "",
      success: (data) =>{
        this.props.fetchLeadsSuccess(data);
      },
      error:(xhr, status, error)=>{
        console.log(xhr);
        console.log(error);
        console.log(status);
        this.props.fetchLeadsFailure();
      }
      });
    }
  


  componentDidMount(){
    this.fetchLeadList(this.props.params.activity);
  }

  componentWillReceiveProps(nextProps) {
    var nextActivity = nextProps.params.activity;
    if (nextActivity !== this.props.params.activity) {
        this.fetchLeadList(nextActivity);
    }
}


  render () {
    var leadListEntries;
    if (!this.props.leads){
      leadListEntries = "There doesn't seem to be any Leads listed right now..";
    }else{
    leadListEntries = this.props.leads.map(function(lead, i){
        return <LeadBox key={i} lead={lead}/>
        // return <p>{Lead.name}</p>
      });

    }


    return (
      <div className="container">
        <h2> Lead List </h2>
        <div className='col-sm-5 col-offset-sm-5'>
          
          {leadListEntries}
          
          </div>
          </div>
    );
  }
}//        <span className="btn btn-default btn-block"> {this.props.Lead.name}</span>

export default LeadList
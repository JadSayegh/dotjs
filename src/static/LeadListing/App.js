import React, {Component} from 'react';
import LeadListContainer from "./LeadListContainer"

export default class LeadListingApp extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <LeadListContainer {...this.props}/>
    );
  }
}
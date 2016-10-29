import React, {Component} from 'react';
import ActivityListingApp from "./ActivityListing/App"
import LeadListingApp from "./LeadListing/App"
import Home from "./Index/Home"
import NavBar from "./NavBar/app"
import Blog from "./Blog/app"

import { Router, Route, browserHistory, Link , IndexRoute} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
    	<Router history={browserHistory} >
  			<Route path="/" component={Page} >
  			    <Route path="/activity" component={ActivityListingApp}/>
  			    <Route path="/leads/:activity" component={LeadListingApp}/>
            <Route path="/blog" component={Blog}/>
  			    <IndexRoute component={Home}/>
  			</Route>
  		</Router>
      </div>
    );
  }
}

class Page extends Component {
  render() {
    return (
    	  <div>
    	  <NavBar/>
        <div>
          			{this.props.children}
        </div>
    	  </div>
    );
  }
}
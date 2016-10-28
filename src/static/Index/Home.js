import React, {Component} from 'react';
import {MyCarousel, BSCarousel} from '../MyCarousel/app';

export default class Home extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div className="container">
      	<h1>Dot<span style={{color:"#00C78B"}}>JS</span></h1>
      	<p>  
        No text here until there's something to talk about.
        </p>
        <br/>
        <br/>

        <div>
          <MyCarousel />
        </div>
        
        <div>
            <BSCarousel />
        </div>

      </div>
    );
  }
}

//<h3>"<i>Just because you can, doesn't mean you should.</i>" - David Guetta</h3>

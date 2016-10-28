import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

// Personal try at creating a carousel
export class MyCarousel extends Component {
  render() {
    return (
        <div className="carousel">
          <ul className="panes">
            <li>
              <img src={"/media/profile/profile_pic.png"} />
              <h2>1 I'm Jad Sayegh. Here's a picture of me with my eyes closed.</h2>
            </li>
            <li>
              <img src={"/media/profile/profile_pic.png"} />
              <h2>2 I'm Jad Sayegh. Here's a picture of me with my eyes closed.</h2>
            </li>
            <li>
              <img src={"/media/profile/profile_pic.png"} />
              <h2>3 I'm Jad Sayegh. Here's a picture of me with my eyes closed.</h2>
            </li>
            <li>
              <img src={"/media/profile/profile_pic.png"} />
              <h2>3 I'm Jad Sayegh. Here's a picture of me with my eyes closed.</h2>
            </li>
            <li>
              <img src={"/media/profile/profile_pic.png"} />
              <h2>3 I'm Jad Sayegh. Here's a picture of me with my eyes closed.</h2>
            </li>
            <li style={{clear: "both"}}></li>
          </ul>
        </div>
      )
  }

}

export class BSCarousel extends Component {
constructor(props){
  super(props);
  this.state = {
      index: 0,
      direction: null
    };
}

handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

render(){
      let captionSyle={
        backgroundColor : "rgba(0, 0, 0, 0.5)",
        color: "white",
        right : 0,
        left : 0,
        paddingTop : 0,
      }

      return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/media/profile/profile_pic.png"/>
          <Carousel.Caption style={captionSyle}>
            <h3>Welcome to .JS</h3>
            <p>I'm Jad Sayegh. Here's a picture of me with my eyes closed.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/media/profile/profile_pic.png"/>
          <Carousel.Caption style={captionSyle}>
            <h3>--help</h3>
            <p>This is my personal experimentation webapp.<br />
            A sandbox in which I toy with JS(React)/HTML/CSS in the front end, 
            and Django Rest-Framework in the backend.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/media/profile/profile_pic.png"/>
          <Carousel.Caption style={captionSyle}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

        
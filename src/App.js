// DO NOT EDIT
import React from 'react';
import Particles from 'react-particles-js';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // SETTINGS FOR WEBSITE
    this.state = {
      // EDITABLE
      name: "NAME NAME",
      title: "TITLE",
      link: "https://example.com",
      linkName: "LINKNAME",
      // DO NOT EDIT
      width: 0,
    }
    // DO NOT EDIT
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // DO NOT EDIT
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  // DO NOT EDIT
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // DO NOT EDIT
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    // STYLING - YOU CAN EDIT THIS NOW
    // EXAMPLE: #121212
    const background = {
      background: "", // ADD COLOR HERE - DEFAULT: #222222
    }
    const color = ""; // ADD COLOR HERE - DEFAULT: #f5f5f5

    // DO NOT EDIT
    const text = {
      color: color,
    }
    const hr = {
      background: color,
      borderColor: color,
    }

    // DO NOT EDIT
    let numOfParticles = 50;

    if (this.state.width <= 384) {
      numOfParticles = 15
    } else if (this.state.width <= 768) {
      numOfParticles = 25
    } else if (this.state.width <= 1080) {
      numOfParticles = 50
    } else {
      numOfParticles = 75
    }

    // DO NOT EDIT
    // RETURNS HTML
    return (
      <div>
        <div className="background" style={background}>
          <Particles
            className="particles"
            params={{
              "particles": {
                "number": {
                  "value": numOfParticles
                },
                "size": {
                  "value": 1
                },
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  }
                },
                "color": {
                  "value": "#777777"
                },
              }
            }} />
          <div className="body">
            <div className="title">
              <p style={text}>{this.state.title}</p>
              <hr className="left" style={hr} />
              <h1 style={text}>{this.state.name}</h1>
              <hr className="right" style={hr} />
              <br /><br />
              <a className="right link" target="_blank" rel="noopener noreferrer" href={this.state.link} style={text}>{this.state.linkName}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
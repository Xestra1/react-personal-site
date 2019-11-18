import React from 'react';
import Particles from 'react-particles-js';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // SETTINGS FOR WEBSITE
    this.state = {
      name: "NAME NAME",
      title: "TITLE",
      link: "https://xestra.us",
      linkName: "Website",
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // DO NOT EDIT
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    // STYLING - BETA
    // DO NOT USE UNLESS YOU KNOW WHAT YOU ARE DOING
    const background = {
      background: "", // ADD URL HERE
    }
    const text = {
      color: "", // ADD COLOR HERE
    }
    const hr = {
      background: "", // ADD COLOR HERE
      borderColor: "", // ADD COLOR HERE
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
        <div className="body" style={background}>
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
    );
  }
}

export default App;
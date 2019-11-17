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
    }
  }

  render() {

    // STYLING
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

    // RETURNS HTML
    return (
      <div>
        <Particles
          className="particles"
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 1
              },
              "color": {
                "value": "#777777"
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
            <a className="right link" target="_blank" href={this.state.link} style={text}>{this.state.linkName}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
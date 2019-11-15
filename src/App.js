import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // SETTINGS FOR WEBSITE
    this.state = {
      name: "NAME NAME",
      title: "TITLE",
      link: "",
    }
  }

  render() {

    // STYLING
    const background = {
      background: "black", // ADD URL HERE
    }
    const text = {
      color: "white", // ADD COLOR HERE
    }
    const hr = {
      background: "white", // ADD COLOR HERE
      borderColor: "white", // ADD COLOR HERE
    }

    // RETURNS HTML
    return (
      <div className="body" style={background}>
        <div className="title">
          <p style={text}>{this.state.title}</p>
          <hr style={hr} />
          <h1 style={text}>{this.state.name}</h1>
          <hr style={hr} />
        </div>
      </div>
    );
  }
}

export default App;
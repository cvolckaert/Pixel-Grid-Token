import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;

const generateHex = () => {
  let length = 6;
  let chars = '0123456789ABCDEF';
  let hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

const generateGrid = (grid) => {
  return grid.map(row => {
    return row.map(pixel => {
      return generateHex()
    })
  })
  
}

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      grid: Array(16).fill(Array(16).fill(""))
    }
  };
  
  componentDidMount() {
    console.log(generateGrid(this.state.grid))
    this.setState({grid: generateGrid(this.state.grid)})
  }

  
  render() {
    return (
      this.state.grid.map((row, i) => (
        <div key={i}>
        {row.map((pixel, i) => (
          <div key={`${i}-pixel`} style={{display: 'inline-block', height: '20px', width: '20px', backgroundColor: pixel}}></div>
        ))}
        </div>
      ))
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

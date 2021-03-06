import React from 'react';
import ReactDOM from 'react-dom';
import { PixelGrid, Pixel, Heading, Row, AppWrapper } from './styles/App';
import Web3 from 'web3';

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
      grid: Array(16).fill(Array(16).fill("")),
      account: ''
    }
  };

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
  }
  

  componentWillMount() {
    this.loadBlockchainData()
  }

  componentDidMount() {
    console.log(generateGrid(this.state.grid))
    this.setState({grid: generateGrid(this.state.grid)})
  }


  render() {
    return (
      <div>
        <Heading>Pixel Token</Heading>
        <PixelGrid>
          {this.state.grid.map((row, i) => (
            <Row key={i}>
              {row.map((pixel, i) => (
                <Pixel key={`${i}-pixel`} backgroundColor={pixel}/>
              ))}
            </Row>
          ))}
        </PixelGrid>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
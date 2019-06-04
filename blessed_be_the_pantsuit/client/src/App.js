import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      politiciansData: null,
      politiciansDataLoaded: false,
    };
  }

  // componentDidMount = async () => {
  //   const politicians = await axios.get('http://localhost:4567/politicians');
  //   const politiciansData = politicians.data;
  // }

  componentDidMount = async () => {
    const politicians = await axios.get('http://localhost:4567/politicians');
    const politiciansData = politicians.data;
    await console.log("politicians loading");
    this.setState({politiciansData, politiciansDataLoaded: true}) 
  };
  
  

  showPoliticians() {
    return this.state.politiciansData.map((politicians) => {
      return (
        <div key={politicians.id}>
        <h3>{politicians.short_title} {politicians.first_name} {politicians.last_name}</h3>
          <h4>({politicians.party}) {politicians.state}</h4> 
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.politiciansDataLoaded) ? this.showPoliticians() : <p>Is this loading, though...</p>}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import axios from 'axios'
// import './App.css';
import MapBox from './components/MapBox/MapBox';
import PoliticiansList from './components/PoliticiansList/PoliticiansList'
import PoliticianForm from './components/PoliticianForm/PoliticianForm'
import Politician from './components/Politician/Politician';
import Details from './components/Politician/Details';

class App extends Component {
  constructor() {
    super();
    this.state = {
      politiciansData: null,
      politiciansDataLoaded: false,
    };
  }

  getPoliticiansData = async () => {
    const politicians = await axios.get('http://localhost:4567/politicians');
    const politiciansData = politicians.data;
    this.setState({
      data: politiciansData,
      politiciansDataLoaded: true
    })
  }

  componentDidMount = async () => {
    this.getPoliticiansData()
    // const politicians = await axios.get('http://localhost:4567/politicians');
    // const politiciansData = politicians.data;
    // // await console.log("politicians loading");
    // this.setState({politiciansData, politiciansDataLoaded: true}) 
  };

  // showPoliticians = async () => {
  //   return await this.state.politiciansData.map((politicians) => {
  //     return (
  //       <div key={politicians.id}>
  //       <h3>{politicians.short_title} {politicians.first_name} {politicians.last_name}</h3>
  //         <h4>({politicians.party}) {politicians.state}</h4> 
  //       </div>
  //     );
  //   });
  // }

  render() {

    return (
      <div className="columns">
        <div className="column">
        <PoliticiansList politicians={this.state.data}/>
      </div>
      <div className="column">
              <MapBox politicians={this.state.data} />
      </div>
      <div className="column">
        <PoliticianForm politicians={this.state.data}/>
      </div>
     
        <Switch>
          {/* there will only ever be one child here */}
           <Route/>
           {/* <Route exact path="/" component={App} /> */}
          <Route path="/politicians/:id" component={ Details }/>
          {/* example <Route path="/:id" component={Child}/> */}
        </Switch>

      </div>
      
    );
  }
}


export default App;

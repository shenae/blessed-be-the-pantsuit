import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'
// import './App.css';
import MapBox from './components/MapBox/MapBox';
import PoliticiansList from './components/PoliticiansList/PoliticiansList'
import PoliticianForm from './components/PoliticianForm/PoliticianForm'
import Politician from './components/Politician/Politician';
//import Details from './components/Politician/Details';
import SignIn from './components/SignIn/SignIn';
import Update from './components/Update/Update';

class App extends Component {
  constructor() {
    super();
    this.state = {
      politiciansData: null,
      politiciansDataLoaded: false,
      id: 0
    };
  }

  setUserId = async (id) => {
    await this.setState({
      id: id
    })
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
    
  };

  render() {
    return (
  <div>
  <section class="hero is-dark is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title" id="links">
      BLESSED BE THE PANTSUIT
      </h1>
    </div>
  </div>
<div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul align="left">
          <li class="is-active" id="links">
         <Link to="/mapbox">Home</Link></li>
         <li id="links"><Link to="/signup">Sign Up</Link></li>
          <li id="links"><Link to="/politicians">Politicians</Link></li>
          <li id="links"><Link to="/forms">Forms</Link></li>
          <li id="links"><Link to="/mapbox">Map</Link></li>
        </ul>
      </div>
    </nav>
  </div>
</section>

   <div>
      <div class="tile-is-ancestor">
        <div class="tile is-8">
        <div class="tile is-parent">
        <div class="tile is-child box">
        <Switch>
              {/* there will only ever be one child here */}
              <Route path="/mapbox" render={() => <MapBox/> }/>
              <Route path="/signup" render={() => <SignIn setUserId={this.setUserId}/>}/>
              <Route path="/politicians" render={() => <PoliticiansList politicians={this.state.data}/> }/>
              <Route path="/forms" render={() => <PoliticianForm/> }/>
              {/* <Route exact path="/" component={App} /> */}
              {/* <Route path="/politicians/:id" component={ Details }/> */}
              <Route path="/mapbox" component={ MapBox }/>
              <Route path="/" component={ MapBox }/>
              {/* <Route path="/update" render={() => <Update id={this.state.id}/> }/> */}
              {/* example <Route path="/:id" component={Child}/> */}
              </Switch>
        {/* <MapBox politicians={this.state.data} /> */}
        </div>
        </div>

      </div>
    </div>
    
    </div>
  
</div>

    );
  }
}


export default App;

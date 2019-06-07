import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'
// import './App.css';
import MapBox from './components/MapBox/MapBox';
import PoliticiansList from './components/PoliticiansList/PoliticiansList'
import PoliticianForm from './components/PoliticianForm/PoliticianForm'
import Politician from './components/Politician/Politician';
import Details from './components/Politician/Details';
import SignIn from './components/SignIn/SignIn';

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
    
  };


  render() {

    return (
      
      <div className="columns">
        <div className="column">
        <PoliticiansList politicians={this.state.data}/>
        <Link to="/signup">Sign Up</Link>
        <Switch>
          {/* there will only ever be one child here */}
           <Route path="/signup" render={() => <SignIn/> }/>
           {/* <Route exact path="/" component={App} /> */}
          <Route path="/politicians/:id" component={ Details }/>
          {/* example <Route path="/:id" component={Child}/> */}
        </Switch>
        </div>
        {/* <SignIn /> */}
      <div className="column">
            <MapBox politicians={this.state.data} />
      </div>
      <div className="column">
        <PoliticianForm politicians={this.state.data}/>
      </div>
     

</div>
    );
  }
}


export default App;

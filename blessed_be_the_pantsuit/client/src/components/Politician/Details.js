// import React from 'react';
import React, { Component } from 'react';
import { Router, Switch, Route, Link, withRouter } from 'react-router-dom';

// const Details = (props) => (
//     <div>
//       <h3>ID: {props.match.params.id}</h3>
//     </div>
//   );

//   export default function Details(props) {
//     return <h1>{props.match.params.id}</h1>
//   }


  class Details extends Component { 
    render() {
    return (<h1>{this.props.match.params.id}</h1>);
        }
    }
    export default withRouter(Details);

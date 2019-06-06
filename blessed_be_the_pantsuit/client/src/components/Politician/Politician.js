import React from 'react';
import { Router, Switch, Route, Link, withRouter } from 'react-router-dom';

const Politician = (props) => (
    <div className="details" key={props.data.id}>
      <h3>{props.data.short_title} {props.data.first_name} {props.data.last_name} of {props.data.state}</h3>
    </div>
  )

export default Politician;
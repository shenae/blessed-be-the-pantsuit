import React from 'react';
import { Router, Switch, Route, Link, withRouter } from 'react-router-dom';


const Politician = (props) => (
 
    <option className="details" key={props.data.id} value={props.data.url}>
      {props.data.short_title} {props.data.first_name} {props.data.last_name} of {props.data.state}
    </option>
  )


  

export default Politician;
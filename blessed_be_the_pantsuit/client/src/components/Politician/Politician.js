import React from 'react';
import { Router, Switch, Route, Link, withRouter } from 'react-router-dom';

// const openPopup = async () => {
//   let windowObjectReference = window.open("http://www.cnn.com", "website", "100px");
// }

// function openPopup () {
//   window.showModalDialog('{props.data.url}','test', '100px');
//   }

const Politician = (props) => (
 
    <option className="details" key={props.data.id} value={props.data.url}>
      {props.data.short_title} {props.data.first_name} {props.data.last_name} of {props.data.state}
    </option>
  )


  

export default Politician;
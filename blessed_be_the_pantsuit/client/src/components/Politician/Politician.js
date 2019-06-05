import React from 'react';

const Politician = (props) => (
    <div className="details">
      <p>{props.data.short_title} {props.data.first_name} {props.data.last_name}</p>
    </div>
  )

export default Politician;
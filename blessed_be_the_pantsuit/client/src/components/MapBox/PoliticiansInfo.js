import React, { Component } from 'react';

class PoliticiansInfo extends Component {
  render() {
    const { info } = this.props;
    // const city = `${info.location.city}`;
    const region = `${info.location.state}`;
    // const name = `${info.name}`;

    return (
        <div>
            {/* <div>Name: {name}</div> */}
            {/* <div>City: {city}</div> */}
            <div>State: {region}</div>
        </div>
    )
    }
}

export default PoliticiansInfo
import React from 'react';

import Politician from '../Politician/Politician'

const PoliticiansList = ({politicians}) => {

    const data = politicians && politicians.map(politician => {
        return <Politician key={politician.id} data={politician} />
    })

    return(
        <div className="politician-details">
        <h3>{data}</h3>
      </div>
    )

}

export default PoliticiansList;
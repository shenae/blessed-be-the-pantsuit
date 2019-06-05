import React from 'react';

import Politician from '../Politician/Politician'

const PoliticiansList = ({politicians}) => {

    console.log(politicians)

    const data = politicians && politicians.map(politician => {
        return <Politician key={politician.id} data={politician} />
    })

    return(
        <div className="politician-details">
        <p>{data}</p>
      </div>
    )

}

export default PoliticiansList;
import React from 'react';

import Politician from '../Politician/Politician'

const PoliticiansList = ({politicians}) => {

    const data = politicians && politicians.map(politician => {
        return <Politician key={politician.id} data={politician} />
    })

    const openPopup = async (evt) => {
        const { name, value } = evt.target;
        console.log('set', name, value)
        window.open(`${value}`, "website", "width=200,height=200");
    }

    return(
        <div className="politician-details">
        <p>Select a female politician from the dropdown list to access their contact page.</p>
        <select onChange={openPopup}>
            <option>Select Politician</option>
            {data}
        </select>
      </div>
    )

}

export default PoliticiansList;
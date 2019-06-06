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

    //window.alert("This should be a website");

    // const openPopup = async () => {
    //     window.showModalDialog('{props.data.url}','test', '100px');
    // }

    return(
        <div className="politician-details">
        <select onChange={openPopup}>
            <option>Select Politician</option>
            {data}
        </select>
      </div>
    )

}

export default PoliticiansList;
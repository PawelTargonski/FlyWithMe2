import React, { useState, useEffect } from 'react';
const types = [
    {
        manufacturer: 'BOENING',
        name: 'Boening'
    },
    {
        manufacturer: 'AIRBUS',
        name: 'Airbus'
    },
]


// const KEY = 'a6374efe61msh2417e680cf37ee9p15b970jsn6f8a80cf204d';

const Airplanes = () => {
    const [data, setData] = useState(null);
    const [type, setType] = useState(types[0].manufacturer)
    // useEffect(() => {
    //     getAirplanes ();
    // }, [])

    const getAirplanes = () => {
        fetch(`https://aviation-reference-data.p.rapidapi.com/icaoType/${type}`,
        {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a6374efe61msh2417e680cf37ee9p15b970jsn6f8a80cf204d",
		"x-rapidapi-host": "aviation-reference-data.p.rapidapi.com"
    
        .then(response => response.json())
        .then(data => setData(data.icaoType))
    }
    }) 
}

    useEffect(() => {
        getAirplanes()
    },  [type])

    const selectTypes = ({target: {value}}) => {
        setType(value)
    }

    return (
        <div>
            <div className="HeroContainer">
            <label>Choose your plane</label>
            <select value={types} onChange={selectTypes}>
                {types.map(el => (
                    <option key={el.manufacturer} value={el.manufacturer}>{el.name}</option>
                ))}
            </select>
            </div>
            <div className="ResultWindowContainer">
                {data?.map( type => (
                    <div key={type.name}>
                        {type.name} - {type.date}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Airplanes
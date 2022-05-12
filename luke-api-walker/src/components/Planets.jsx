import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from 'axios';

const Planets = ()=>{
    const {id} =useParams()
    const [data, setData] = useState({})//this is the default state
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data);
                setData(response.data);
            }) 
    }, [id]);
    return(
        <>
            <h1>Planets</h1>
            <div>
            <h2>{data.name}</h2>
            <ul className="list">
                <li><strong>Climate:</strong> {data.climate}</li>
                <li><strong>Terrain:</strong> {data.terrain}</li>
                <li><strong>Surface Water:</strong> {data.surface_water}</li>
                <li><strong>Population:</strong> {data.population}</li>
            </ul>
            </div>
        </>
    )
}

export default Planets;
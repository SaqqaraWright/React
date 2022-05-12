import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from 'axios';

const People = ()=>{
    const {id} =useParams()
    const [data, setData] = useState({})//this is the default state
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{
                console.log(response.data);
                setData(response.data);
            })  
    }, [id]); //if the id changes then the function will re-run and it will make another api call with the new id
    return(
        <>
            <div>
            <h2>{data.name}</h2>
            <ul className="list">
                <li><strong>Height:</strong>{data.height}</li>
                <li><strong>Mass:</strong> {data.mass}</li>
                <li><strong>Hair Color:</strong> {data.hair_color}</li>
                <li><strong>Skin Color:</strong> {data.skin_color}</li>
            </ul>
            </div>

            {/* {
                axios.get.response="ERR_BAD_REQUEST"
                    ? <img src="https://assets.cosplaycentral.com/obi-wan-kenobi-headline.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/obi-wan-kenobi-headline.jpg" width="300px" alt=""/>:
                    <h4>These aren't the droids you're looking for!</h4>
                    
            }; */}
        </>
    )
}

export default People;
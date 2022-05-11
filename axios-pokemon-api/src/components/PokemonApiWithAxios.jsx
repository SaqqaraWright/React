import React, { useState } from 'react';
import axios from 'axios';

const PokemonApiWithAxios = ()=>{
    
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{
        console.log("getting Pokemon now...")
        
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then( convertedResponse=>{
                console.log("got the response-->", convertedResponse)
                setPokemonList(convertedResponse.data.results)
            })              
            .catch(err=>{ 
                console.log("something went wrong", err)
            })
    }


    return(
        <>
        <div>
            <button className='btn btn-primary mb-2 mt-2' onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, idx)=>{
                    return(
                        <div key={idx}>
                            <ul className='list'>
                                <li>{pokemon.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
        
        </>
    )
}


export default PokemonApiWithAxios;
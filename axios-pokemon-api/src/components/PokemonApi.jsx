import React, { useState } from 'react';

const PokemonApi = ()=>{
    //create a variable to store all the Pokemon in that I get back
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{
        console.log("getting Pokemon now...")
        
        //fetch gives back a promise, a promise is a set of code that is asynchronous (it does not go from line to line) where the response time is not exact, so we can allow it to perform some task or run some code while it is waiting to get back the response. When it gets back the response, we can tell it what to do in the .then()...in other words, fetch is like a multitasker. 
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response =>{ //.then means whenever the api is done getting back the data
                return response.json() //convert the response to json that my app can read
            })
            .then( convertedResponse=>{
                console.log("got the response-->", convertedResponse)
                setPokemonList(convertedResponse.results)
            })              
            .catch(err=>{ //.catch is for if there is any issue in getting the data
                console.log(err)
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


export default PokemonApi;
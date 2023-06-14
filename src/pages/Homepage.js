import React,  { useState, useEffect} from 'react';
import axios from 'axios';
import {Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import Loader  from '../components/Loader';

const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

   


    const getPokemonData = async(id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        const getPokemonList = async () => {
            let pokemonArray = [];
            for(let i = 1; i <= 251; i++) {
                pokemonArray.push(await getPokemonData(i));
            }
            console.log(pokemonArray);
            setPokemon(pokemonArray);
            setLoading(false);
            
        };
        getPokemonList();
    }, [])

  return (
    <>
    {loading ? (
        <Loader />
    ) : (
        <Row className='justify-content-center'>
            {pokemon.map(p => (
                <Col key={p.data.name} xs={10} sm={6} md={4} lg={4} xl={2}>
                    <Pokemon pokemon={p.data}/>
                </Col>
            ))}
        </Row>
    )}
    </>
  )
}

export default Homepage;
import React, { useState, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';
import { Row, Col, Form } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';

const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');



    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        if (pokemon.length > 0) {
            console.log('First Pokémon structure:', pokemon[0]);
        }
    }, [pokemon]);

    const filteredPokemon = useMemo(() => {
        if (!searchTerm) return pokemon;

        console.log('Filtering with term:', searchTerm);

        const filtered = pokemon.filter(p => {
            const pokemonData = p.data || p;
            return (
                pokemonData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pokemonData.id.toString().includes(searchTerm)
            );
        });

        console.log('Filtered results:', filtered.length);
        return filtered;
    }, [pokemon, searchTerm]);

    let sessionCache = useRef(null);

    useEffect(() => {
        const loadInitialData = async () => {
            setLoading(true);

            if (sessionCache.current && Array.isArray(sessionCache.current)) {
                console.log('Using cached data:', sessionCache.current.length);
                setPokemon(sessionCache.current);
                setLoading(false);
                return;
            }

            const initialPromises = [];
            for (let i = 1; i <= 50; i++) {
                initialPromises.push(getPokemonData(i));
            }
            const initialData = await Promise.all(initialPromises);
            setPokemon(initialData);
            setLoading(false);

            loadRemainingPokemon(initialData);
        };

        const loadRemainingPokemon = async (existingData = []) => {
            let allData = [...existingData];
            const batchSize = 50;

            try {
                for (let i = existingData.length + 1; i <= 1025; i += batchSize) {
                    const batchPromises = [];
                    const end = Math.min(i + batchSize - 1, 1025);

                    for (let j = i; j <= end; j++) {
                        batchPromises.push(getPokemonData(j));
                    }

                    const batchResults = await Promise.all(batchPromises);
                    allData = [...allData, ...batchResults];

                    setPokemon([...allData]);
                }

                sessionCache.current = allData;
            } catch (error) {
                console.error('Error loading remaining Pokémon:', error);
            }
        };

        loadInitialData();
    }, []);

    return (
        <>
            {/* Search Bar */}
            <div className="search-container mb-4">
                <Form.Group controlId="searchPokemon">
                    <Form.Control
                        type="text"
                        placeholder="Search Pokémon by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </Form.Group>

                <div className="search-info mt-2">
                    {searchTerm ? (
                        <small className="text-muted">
                            Found {filteredPokemon.length} Pokémon matching "{searchTerm}"
                        </small>
                    ) : (
                        <small className="text-muted">
                            Total Pokémon: {pokemon.length}/1025
                        </small>
                    )}
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <Row className='justify-content-center'>
                    {filteredPokemon.map(p => {

                        const pokemonData = p.data || p;
                        return (
                            <Col key={pokemonData.name} xs={10} sm={6} md={4} lg={4} xl={2}>
                                <Pokemon pokemon={pokemonData} />
                            </Col>
                        );
                    })}

                    {searchTerm && filteredPokemon.length === 0 && (
                        <Col xs={12} className="text-center mt-5">
                            <div className="no-results">
                                <h5>No Pokémon found for "{searchTerm}"</h5>
                                <p className="text-muted">Try searching by name or ID</p>
                            </div>
                        </Col>
                    )}
                </Row>
            )}
        </>
    );
}

export default Homepage;
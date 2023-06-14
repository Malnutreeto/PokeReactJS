import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, CardImg } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const PokemonPage = () => {

    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemonData = async (id) => {
        const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }


    useEffect(() => {
        getPokemon(id);
    });

    return (
        <>
            {loading ? (
                <Loader />
            ) : (

                <>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card
                                className='my-3 p-3 rounded text-center p-3'
                                style={{ border: 'none', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
                            >
                                <NavLink to={`/pokemon/${pokemonDetails.id}`}>
                                    <CardImg
                                        style={{ width: '15rem' }}
                                        src={pokemonDetails.sprites.front_default}
                                        variant='top'
                                    />
                                </NavLink>
                                <Row className='my-1 justify-content-center'>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white}`}>
                                            <NavLink to={`/pokemon/${pokemonDetails.id}`} className='link-name'>
                                                <Card.Title as='div'>
                                                    <strong>
                                                        # {pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                                                    </strong>
                                                </Card.Title>
                                            </NavLink>
                                        </Card.Body>
                                    </Col>
                                </Row>
                                <Row className='my-3 justify-content-center'>
                                    {pokemonDetails.types.map(t => (
                                        <Col key={t.type.name} xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <div className={`${t.type.name} rounded mt-3 px-4 py-1 text-white`}>
                                                <strong>
                                                    {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                                                </strong>

                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    {/* SHINY */}

                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                            <Card className='p-3 rounded text-center p-3 mb-3'
                                style={{ border: 'none', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                                <Card.Body>

                                    <Row className='mb-5'>
                                        <Col
                                            className='d-flex flex-column align-items-center'
                                        >
                                            <CardImg
                                                style={{ width: ' 15rem' }}
                                                src={pokemonDetails.sprites.front_default}
                                            />
                                            <Card.Text className='text-white rounded col-sm-8'
                                                style={{ border: 'none', background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)' }}>
                                                <strong>
                                                    Normal
                                                </strong>
                                            </Card.Text>
                                        </Col>
                                        <Col
                                            className='d-flex flex-column align-items-center'
                                        >
                                            <CardImg
                                                style={{ width: ' 15rem' }}
                                                src={pokemonDetails.sprites.front_shiny}
                                            />
                                            <Card.Text className='text-white rounded col-sm-8'
                                                style={{ border: 'none', background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)' }}
                                            >
                                                <strong>
                                                    Shiny
                                                </strong>
                                            </Card.Text>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* ABILITIES */}

                        <Col xs={10} sm={6} md={5} lg={3} xl={3}>
                            <Card
                                className='p-3 rounded text-center p-3 mb-5 '
                                style={{ border: 'none', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
                            >
                                <Row className='justify-content-center'>
                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                        <div
                                            className={`${pokemonDetails.types[0].type.name} rounded text-white px-4 py-1}`}
                                            style={{ border: 'none' }}
                                        >
                                            <strong>
                                                Abilities
                                            </strong>
                                        </div>
                                    </Col>
                                    <Row className='text-center mt-3 flex-column align-items-center'>
                                        {pokemonDetails.abilities.map(a => (
                                            <Col key={a.ability.name}
                                                xs={8} sm={8} md={10} lg={12} xl={10}>
                                                <div className='rounded px-4 text-white my-1'
                                                    style={{ border: 'none', background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)' }}
                                                >
                                                    <strong>
                                                        {a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)}
                                                    </strong>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Row>
                            </Card>

          {/* READ MORE      */}
                            <Card
                                className='p-3 rounded text-center p-3 read-card'
                                style={{cursor: 'pointer', border: '1px solid white', background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 1.4%, rgb(63, 76, 119) 70.2%)' }}
                            >
                                <strong>
                            <a 
                            className='read-more'
                            href={`https://wiki.pokemoncentral.it//${pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}`}>
                                Read More...
                            </a>
                                </strong>   
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default PokemonPage;
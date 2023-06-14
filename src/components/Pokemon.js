import React from 'react'
import { Card, CardImg } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Pokemon({pokemon}) {
  return (
    <>
    <Card 
    className='my-3 p-3 rounded text-center shadow mb-5 pokemon-card'
    style={{ border: 'none', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', cursor: 'pointer'}}
    >
        <NavLink to={`/pokemon/${pokemon.id}`}>
            <CardImg style={{width: '8rem'}}
            src={pokemon.sprites.front_default} variant='top'
            />
        </NavLink>
        <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}
        >
            <NavLink to={`/pokemon/${pokemon.id}`} className='link-name'>
                <Card.Title as='div'>
                    <strong>
                        # {pokemon.id} {pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}
                    </strong>
                </Card.Title>
            </NavLink>
        </Card.Body>

    </Card>
    </>
  )
}

export default Pokemon;
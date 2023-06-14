import React from 'react'
import { Spinner, Row, Col } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className='d-flex justify-content-center mt-5'
        style={ {height: '100vh', } }> 

        <Row className='mt-5'>
            <Col>
                <Spinner className='spinner-border spinner-border-lg'
                role='status'
                style={{height: '5vh', width: '5vh', color: 'white'}}>

                </Spinner>
            </Col>
        </Row>

        <Row>
            <Col>
                <div className='mx-3 mt-5 text-white pt-2'>
                    Loading Pokemon...
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default Loader; 
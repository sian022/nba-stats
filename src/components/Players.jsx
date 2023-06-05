import React from 'react'
import { Card, Col, ListGroup, Row, Form, Button } from 'react-bootstrap'
import players from '../players'

function Players() {
  return (
    <div className='mt-4'>
      <Row>
        <Col md='4'>
          <Form className="d-flex m-3">
            <Form.Control type="search" placeholder='search' className='me-2' aria-label='Search'/>
            <Button className="rounded-pill" variant="outline-primary" bg="white">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
      {players.map((player) => {
        return(
          <Col md='4'>
            <Card className='m-3 p-3 rounded bg-white'>
              <Card.Body className='text-dark'>
                <Card.Title as="div" style={{ fontWeight: 'bold' }}>
                  {player.name}
                </Card.Title>
              </Card.Body>
              <Card.Text>
                <ListGroup variant='flush'>
                  <ListGroup.Item style={{backgroundColor: "#cd2540"}}>
                    PPG: {player.ppg}
                  </ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor: "#cd2540"}}> 
                    NBA Player
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

export default Players
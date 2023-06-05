import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row, Form, Button } from 'react-bootstrap'
import players from '../players'
import { getPlayerStatsByNameLatestSeason } from '../services/AxiosCalls'

function Players() {
  const [playerName, setPlayerName] = useState(null)
  const [playerStats, setPlayerStats] = useState(null)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    if(playerName){
      const data = await getPlayerStatsByNameLatestSeason(playerName)
      setPlayerStats(data)
      console.log(playerStats)
    }else{
      alert("No Player Found")
    }
  }

  useEffect(() => {
    
  },[playerName])

  return (
    <div className='mt-4'>
      <Row>
        <Col md='4'>
          <Form className="d-flex m-3" onSubmit={handleSearchSubmit}>
            <Form.Control type="search" placeholder='search' className='me-2' aria-label='Search' onChange={(e) => setPlayerName(e.target.value)}/>
            <Button type="submit" className="rounded-pill" variant="outline-primary" bg="white">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
      {players.map((player) => {
        return(
          <Col key={player.id} md='4'>
            <Card className='m-3 p-3 rounded bg-white'>
              <Card.Body className='text-dark'>
                <Card.Title as="div" style={{ fontWeight: 'bold' }}>
                  {player.name}
                </Card.Title>
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
              </Card.Body>
            </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

export default Players
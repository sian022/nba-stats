import React from 'react'
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap'

function HomeScreen() {
  return (
    <div>
      <Container>
        <Row>
          <Col md='3'>
            <div className='rounded vh-40 mt-5 bg-light-grey position-sticky'>
                <h2 className='m-4 pt-3 border-bottom-dg fs-4 fw-bold'>Filters</h2>
                <h3 className='ms-4 fs-5 fw-bold'>Position</h3>
                <div className='d-flex flex-wrap justify-content-between mx-4'>
                  <button className='circular-link'>PG</button>
                  <button className='circular-link'>SG</button>
                  <button className='circular-link'>SF</button>
                  <button className='circular-link'>PF</button>
                  <button className='circular-link'>C</button>
                </div>

                <h3 className='ms-4 mt-4 fs-5 fw-bold'>Season</h3>
                <div className='d-flex flex-wrap justify-content-between mx-4'>
                  <button>Career</button>
                  <button>Select season</button>
                </div>

                <h3 className='ms-4 mt-4 fs-5 fw-bold'>Activity</h3>
                <div className='d-flex flex-wrap justify-content-between mx-4'>
                  <button>All</button>
                  <button>Active Only</button>
                  <button>Inactive Only</button>
                </div>
            </div>
          </Col>
          <Col md='6' >
            <div className='mt-5'>
                <Form className="d-flex mb-4">
                  <Form.Control type="search" placeholder='search' className='me-2 w-100' aria-label='Search'/>
                  <Button type="submit" className="rounded-pill submit-button" variant="outline-light">
                    Search
                  </Button>
                </Form>
              <div className='player-cards'>
                <Card style={{backgroundColor:"#444444"}}>
                  <div className="d-flex justify-content-between align-items-center p-4">
                    <div className='d-flex flex-column justify-content-between p-3'>
                      <span className='fs-3 fw-bold'>Nikola Jokic<span>#16</span></span>
                      <span>Center</span>
                    </div>
                    <Image className='player-image' roundedCircle src='https://www.prydwen.gg/static/46b350599121f6a83272a0635061d071/e9a79/8_sm.png'></Image>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col md='3'>
            <div className='rounded vh-70 mt-5 bg-light-grey'>
              <div className='sort-by'>
                <h2 className='m-4 pt-3 border-bottom fs-5'>Sort by</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
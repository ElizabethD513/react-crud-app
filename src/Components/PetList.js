import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap'
import Pet from './Pet'

function PetList(props) {
  return (
    
      <Container className="mt-3">
        <Row>
          <Col>
            <Row>
              {props.animals.map((pet) => (
                <Col sm={4} key={pet.id}>
                  <Card className="mb-3">
                    <Card.Body> 
                      <Pet pet={pet} populatePetForm={props.populatePetForm} deletePet={props.deletePet}/>
                    </Card.Body> 
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      
  )
};

export default PetList;

import {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import Select from '../shared/Results';
import ListGroupBtstp from '../shared/components/ListGroupBtstp';
import IndexBiseccion from './IndexBiseccion';
import IndexNewtonRaphson from '../newton_raphson/IndexNewtonRaphson';


import Introduction from '../shared/Introduction';

const metodos = [
  {name: "Biseccion", link: "/biseccion"},
  // {name: "Punto Falso", link: "/punto_falso"},
  // {name: "Newton raphson", link: "/newton_raphson"},
];

const Index = () => {
  const [tab, setTab] = useState('');

  return(
    <Container className="mb-5">
       <Row className="justify-content-center">
          <Col lg={1}>

          </Col>
          <Col sm={8} className="mb-5">
            
                  <div
                    style={{
                      marginTop: "75px",
                      background: "white",
                      borderRadius: '5px',
                      border:"0px solid black",
                      borderColor:"black", 
                      boxShadow: "0px 0px 6px",
                      height: '550px',
                      padding: '25px',
                      overflowY: "scroll"
                    }}
                  >
                    <Col lg={12}  className='mt-3' >
                      <IndexBiseccion />
                      
                    </Col>
                  </div>
          </Col>
      </Row>
    </Container>
  );
}

export default Index;
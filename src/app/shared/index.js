import {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import Select from './Results';
import ListGroupBtstp from './components/ListGroupBtstp';
import IndexBiseccion from '../biseccion_&_puntoF/IndexBiseccion';
import IndexNewtonRaphson from '../newton_raphson/IndexNewtonRaphson';


import Introduction from './Introduction';

const metodos = [
  {name: "Biseccion", link: "/biseccion"},
  {name: "Punto Falso", link: "/punto_falso"},
  {name: "Newton raphson", link: "/newton_raphson"},
];

const Index = () => {
  const [tab, setTab] = useState('');

  return(
    <Container className="mt-3">
      <Row className="">
          <Col className="mb-3">
            <div
              style={{
                borderRadius: '5px',
                border:"0px solid black",
                borderColor:"black", 
                boxShadow: "0px 0px 2px"
              }}
            >
              <Row>
                <Col lg className="d-grid mt-3">
                  <Button className="" variant='success'>Comparar datos guardados</Button>
                </Col>
              </Row>
              <ListGroupBtstp onClick={(e)=>setTab(e)} metodos={metodos}/>
            </div>
          </Col>
          <Col sm={9}>
            <Row>
              
              <Col lg={12}>
                {/* <Row lg="auto" className='mb-3'>
                  <Col>
                    <Select/>
                  </Col>
                </Row> */}
                <Row>
                  <div
                    style={{
                      borderRadius: '5px',
                      border:"0px solid black",
                      borderColor:"black", 
                      boxShadow: "0px 0px 2px"
                    }}
                  >
                    <Col lg={12}  className='mt-3'>
                      {
                        tab === '/biseccion'?
                          <IndexBiseccion />
                        : tab === '/punto_falso'?
                          <IndexBiseccion/> 
                        : tab === '/newton_raphson'?
                          <IndexNewtonRaphson/>
                        : <Introduction/>
                      }
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
      </Row>
    </Container>
  );
}

export default Index;
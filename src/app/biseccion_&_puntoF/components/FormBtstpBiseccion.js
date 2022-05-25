import {useState} from 'react';
import {Row, Col, Form, FormGroup, FormLabel, Button} from 'react-bootstrap';

import ModalBtstp from '../../shared/components/ModalBtstp';


const FormBtstpBiseccion = (props) => {

  return(
    <Col className="mb-5">
      <Form onSubmit={props.onSubmit}>
        <Row className='mb-3'>
          <Col lg className="mb-3">
            <FormGroup>
            {/* <Form.Label>Porcentaje</Form.Label> */}
              <Form.Control type="number" placeholder="%" value={props.input} onChange={props.onChangeInput} min={0}/>
            </FormGroup>
          </Col>
          <Col lg={4} className="mb-3">
            <FormGroup>
            {/* <Form.Label>Funcion</Form.Label> */}
              <Form.Control type="text" placeholder="Funcion" value={props.fun} onChange={props.onChangeFun}/>
            </FormGroup>
          </Col>

          <Col lg className="mb-3">
            <FormGroup>
            {/* <Form.Label>Intervalo Superior</Form.Label> */}
              <Form.Control type="number" placeholder="Xu" value={props.iSuperior} onChange={props.onChangeISuperior}/>
            </FormGroup>
          </Col>
          <Col lg className="mb-3">
            <FormGroup>
              {/* <Form.Label>Intervalo Inferior</Form.Label> */}
              <Form.Control type="number" placeholder="Xi" value={props.iInferior} onChange={props.onChangeIInferior}/>
            </FormGroup>
          </Col>

          <Col lg='auto' className="">
            <Button variant='primary' type='submit'>Evaluar</Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default FormBtstpBiseccion;
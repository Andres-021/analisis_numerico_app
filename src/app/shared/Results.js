import {useState} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';

import ModalBtstp from './components/ModalBtstp';

const Items = [

]

const Select = () => {
  const [show, setShow] = useState(false);

  return(
    <>
      <Row className='mb-5'>
        <Col lg={2}>
          <Form.Select aria-label="Default select example">
            <option value='0'>Resultado por...</option>
            <option value="1">Porcentaje</option>
            <option value="2">Iteracion</option>
          </Form.Select>
        </Col>
        <Col lg={2} className="d-grid">
          <Button variant="secondary"
            onClick={() => setShow(true)}
          >Sugerencias</Button>
        </Col>
        <ModalBtstp 
          show={show}
          onHide={() => setShow(false)}
        />
      </Row>
    </>
  );
}

export default Select;
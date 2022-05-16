import { Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";

const FormBtstpNewtonRaphson = (props) => {
  return (
    <Col className="mb-5">
      <Form onSubmit={props.onSubmit}>
        <Row className="mb-3">
          <Col lg>
            <FloatingLabel controlId="floatingInputGrid" label="Desconocido">
              <Form.Control type="" placeholder="Desconocido" value={""} onChange={""}/>
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default FormBtstpNewtonRaphson;

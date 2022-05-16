import {useState} from 'react';
import { useParams } from "react-router-dom";
import {Row, Col, Table, Alert, Badge, Collapse, Button} from 'react-bootstrap';



const TableBtstp = (props) => {

  const [datos, setDatos] = useState();
  const params = useParams();

  // const submitData = () => {
  //   const {metodo} = params;

  //   if(localStorage.getItem(metodo) == null){
  //     const datos = JSON.stringify(props.solucion);
  //     localStorage.removeItem(metodo);
  //     localStorage.setItem(metodo, datos);
  //   }else{
  //     var resultado = window.confirm('Ya tiene un dato guardado, desea eliminarlo?');
  //     if(resultado === true) {
  //       localStorage.removeItem(metodo);
  //       window.alert('El dato guardado ha sido eliminado.');
  //     }
  //   }
  // }

  return(
    <Col lg={12} className='mt-3'>

      {/* <Row>
        <Col lg className="d-grid mb-3">
          <Collapse in={props.view}>
            <div id="example-collapse">
              <Alert variant="primary">
                <div style={{color: ''}}>
                  <strong><h5>Solucion final</h5></strong>
                  
                  <p>
                    Iteraciones totales: <Badge><strong>{props.solucion.i}</strong></Badge>&nbsp; 
                    La raiz es, xr: <Badge><strong>{props.solucion.xr_actual}</strong></Badge>&nbsp;
                    Error relativo: <Badge><strong>{props.solucion.EaS}</strong></Badge>
                  </p>
                  <p>
                    
                  </p>
                </div>
              </Alert>
              <Button variant="primary" onClick={submitData}>Guardar datos</Button>
            </div>
          </Collapse>
        </Col>
      </Row> */}
      
      <Row>
        <Col lg={12}>
          <Table bordered responsive="lg sm">
            <thead>
              <tr>
                {
                  props.headTable.map((el) => (
                    <th key={el}>{el}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              
              {
                props.bodyTable.length?
                  props.bodyTable.map((el, i) => (
                    <tr key={i}>
                      <td>{el.iteracion}</td>
                      <td>{el.fxr}</td>
                      <td>{el.fxl}</td>
                      <td>{el.fxr_fxl}</td>
                      <td>{el.xr}</td>
                      <td>{el.porcentaje}</td>
                    </tr>
                  ))
                
                : <tr>No se han calculado datos de entrada</tr>
              }

            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
}

export default TableBtstp;
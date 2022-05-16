import {useState} from 'react'
import {Modal, Badge} from 'react-bootstrap'

const ModalBtstp = (props) =>{
  return(
    <Modal
      {...props} // Entraria el show y el onHide
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="modal-title mb-3">Informacion que cura *.*</h4>
        <p>
          <Badge bg="info">
            <h6><strong>Resultado</strong></h6>
          </Badge><br/>
          Hay que tener en cuenta que el <strong>porcentaje</strong> o el <strong>numero de iteraciones</strong> es lo que va a definir el resultado, siempre y cuando&nbsp;
          el resultado que este buscando sea menor al <strong>porcentaje</strong> solicitado, de lo contrario intente con un&nbsp;
          <strong>porcentaje</strong> menor o con un numero de <strong>iteraciones</strong>.
        </p>
        <p>
          <Badge bg="info">
            <h6><strong>Funcion</strong></h6>
          </Badge><br/>
          Hay que tener en cuenta que el porcentaje es lo que va a definir el resultado, siempre y cuando&nbsp;
          el resultado que este buscando sea menor al porcentaje solicitado, de lo contrario intente con un&nbsp;
          porcentaje menor o con un numero de iteracion.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalBtstp;
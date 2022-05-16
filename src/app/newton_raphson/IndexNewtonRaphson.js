import {useState} from 'react';
import FormBtstpNewtonRaphson from './components/FormBtstpNewtonRaphson';
import TableBtstp from '../shared/components/TableBtstp';
import sol from '../../config/sol';

const headTable = ["Iteraciones","f(x)","f'(x)","xi","%"];

const IndexNewtonRaphson = () => {


  const [resultados, setResultados] = useState([]);
  const [solucion, setSolucion] = useState({});

  const [view, setView] = useState(false);

  const submitDatos = (e) => {
    e.preventDefault();

    //const res = sol
    setResultados();
    setSolucion();
    setView(true);

    // Luego limpiamos los inputs
  }

  return(
    <>
      <FormBtstpNewtonRaphson
        onSubmit={submitDatos}
      />
      <TableBtstp
        view={view}
        solucion={solucion}
        headTable={headTable}
        bodyTable={resultados}
      />
    </>
  );
}

export default IndexNewtonRaphson;
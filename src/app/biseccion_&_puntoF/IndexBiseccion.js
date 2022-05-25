import { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Badge, Collapse, Alert, Button } from "react-bootstrap";

import FormBtstpBiseccion from "./components/FormBtstpBiseccion";
import TableBtstp from "../shared/components/TableBtstp";
import sol from "../../config/sol";
import Select from "../shared/Results";

import imagen from "../../img/dfdf.png";
import imagenes from "../../img/fincion.png";
const headTable = ["Iteraciones", "f(xr)", "f(xl)", "f(xr)*f(xl)", "xr", "%"];

const IndexBiseccion = () => {
  const [input, setInput] = useState("");
  const [fun, setFun] = useState("");
  const [iSuperior, setISuperior] = useState("");
  const [iInferior, setIInferior] = useState("");
  const [resultados, setResultados] = useState([]);
  const [solucion, setSolucion] = useState({});
  const [entrada, setEntrada] = useState({});

  const [view, setView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [empty, setEmpty] = useState([]);

  //const [data, setData] = useState([]);

  const params = useParams();
  const data = [];

  const submitSaveData = () => {
    const { metodo } = params;

    // Convertimos los datos en un objeto json.
    const datos = JSON.stringify(data);
    datos.push(solucion);
    localStorage.setItem("metodos", datos);

    // var resultado = window.confirm('Ya tiene un dato guardado, desea eliminarlo?');
    // if(resultado === true) {
    //   localStorage.removeItem(metodo);
    //   window.alert('El dato guardado ha sido eliminado.');
    // }
  };

  const submitDatos = (e) => {
    e.preventDefault();

    if (input === "") {
      console.log("vacio");
      return 0;
    }

    setView(false);
    const res = sol.biseccion(input, fun, iSuperior, iInferior);
    setTimeout(() => setView(true), 200); // Esto para tener la animacion de ocultar y mostrar la solucion final
    setResultados(res.resultados);
    setSolucion(res.solucion);

    setEntrada({
      input: input,
      fun: fun,
      iSuperior: iSuperior,
      iInferior: iInferior,
    });

    setInput("");
    setFun("");
    setISuperior("");
    setIInferior("");
  };

  return (
    <>
      <Select />
      <FormBtstpBiseccion
        onSubmit={submitDatos}
        input={input}
        onChangeInput={(e) => setInput(e.target.value)}
        fun={fun}
        onChangeFun={(e) => setFun(e.target.value)}
        iSuperior={iSuperior}
        onChangeISuperior={(e) => setISuperior(e.target.value)}
        iInferior={iInferior}
        onChangeIInferior={(e) => setIInferior(e.target.value)}
      />
      <Row>
        <Col lg className="d-grid mb-3">
          <Collapse in={view}>
            <div id="example-collapse">
              <Alert variant="primary">
                <div style={{ color: "" }}>
                  <strong>
                    <h4>Datos usados</h4>
                  </strong>
                  <p>
                    %:{" "}
                    <Badge>
                      <strong>{entrada.input}</strong>
                    </Badge>
                    &nbsp; Funcion:{" "}
                    <Badge>
                      <strong>{entrada.fun}</strong>
                    </Badge>
                    &nbsp; x0:{" "}
                    <Badge>
                      <strong>{entrada.iSuperior}</strong>
                    </Badge>
                    &nbsp; xi:{" "}
                    <Badge>
                      <strong>{entrada.iInferior}</strong>
                    </Badge>
                  </p>
                </div>
              </Alert>
            </div>
          </Collapse>
          <Collapse in={view}>
            <div id="example-collapse">
              <Alert variant="primary">
                <div style={{ color: "" }}>
                  <strong>
                    <h4>Solucion final</h4>
                  </strong>

                  <p>
                    Iteraciones totales:{" "}
                    <Badge>
                      <strong>{solucion.i}</strong>
                    </Badge>
                    &nbsp; La raiz es, xr:{" "}
                    <Badge>
                      <strong>{solucion.xr_actual}</strong>
                    </Badge>
                    &nbsp; Error relativo:{" "}
                    <Badge>
                      <strong>{solucion.EaS}</strong>
                    </Badge>
                  </p>
                </div>
                {/* <Button variant="primary" onClick={submitSaveData}>Guardar</Button> */}
              </Alert>
            </div>
          </Collapse>
        </Col>
      </Row>
      <TableBtstp
        view={view}
        solucion={solucion}
        headTable={headTable}
        bodyTable={resultados}
        isLoading={isLoading}
      />
      <Row className="mx-0">
        <Col className="mt-5">
          {/* Aqui vas a poner la descripcion del metodo Biseccion*/}
          <h4>Biseccion</h4>
          <p>
          El método de bisección en matemáticas es un método de búsqueda de raíces que divide repetidamente un intervalo y luego selecciona un subintervalo en el que debe situarse una raíz para su posterior procesamiento.
           El método también se denomina método de división del intervalo en dos.
          </p>
          
          <h4>Funcion</h4>
          <p>
            El método de bisección se aplica a funciones algebraicas o
            trascendentes y proporciona únicamente raıces reales. Tiene su
            origen en un popular algoritmo de búsqueda de datos en arreglos
            vectoriales denominado búsqueda binaria. Es un método cerrado, es
            decir, requiere de un intervalo en el cual esté atrapada una raız
          </p>
          <p className="mb-4">
          <img src={imagenes} />
          </p>
          

          <h4>Ecuacion</h4>
          <p className="mb-4">
            Con esta ecuacion podemos calcular el valor de Xr.
          </p>
          <img src={imagen} />
        </Col>
      </Row>
    </>
  );
};

export default IndexBiseccion;

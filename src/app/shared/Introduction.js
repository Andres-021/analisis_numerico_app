import img1 from '../../img/27569-matematicas.jpg';
import img2 from '../../img/matematicas-tumblr-gif-10.gif';
import homer from '../../img/homer-matematico.jpg';

const Introduction = () => {
  //document.body.style.background = `url(${homer})`;
  document.body.style.background = "#6AD6FF";
  document.body.style.backgroundAttachment = "fixed";
  

  const principal = {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1000px",
    fontFamily: "Roboto",
    marginTop: "25%",
    marginBottom: "25%",
  }

  return (
    <>
      <div style={principal}>
        <h1>Analisis numerico</h1>
      </div>

      <div>
        <font color="" >
          <h4>PROYECTO FINAL ANALISIS NUMERICO</h4>
        </font>
      </div>

      <div>
        
        <div>
          <p>
            En este proyecto se intenta demostrar los conocimientos impartido por
            nuestro profesor de analisis numerico. Durante el desarrollo de esta
            asignatura, realizada en el transcurso de el 2022-1 (Segundo Semestre
            de dosmil veintidos).
          </p>
          <div>
            <font color="">
              {" "}
              <h4>OBJETIVOS DEL PROYECTO</h4>
            </font>
          </div>

          <p>
            El objetivo de este proyecto es proporcionar una herramienta fácil de
            usa e interactiva, que nos permita realizar cálculos referentes al
            Analisis Numericos, de manera automatizada y rapída.
          </p>

          <div>
            <font color="">
              {" "}
              <h4>ANALISIS NUMERICO</h4>
            </font>
          </div>
          <p>
            El Calculo Numerico, o como tambien se le denomina, el Analisis
            numerico, es la rama de las Matematicas que estudia los metodos
            numericos de resolucion de problemas, es decir, los metodos que
            permiten obtener una solucion aproximada (en ocasiones exacta) del
            problema considerado tras realizar un numero finito de operaciones
            logicas y algebraicas elementales.
          </p>
          <p>
            Los problemas que trata el Analisis numerico se pueden clasificar en
            dos grandes grupos, segun tengan naturaleza numerica (o finito
            dimensional) o naturaleza funcional (o infinito dimensional).
            Pertenecen al primer grupo los problemas relativos a la resolucion de
            sistemas de ecuaciones lineales, calculo de valores y vectores
            propios, y resolucion de ecuaciones y sistemas de ecuaciones no
            lineales. Son del segundo tipo, por el contrario, los problemas de
            interpolacion y aproximacion de funciones, la derivacion e integracion
            numericas, los problemas de valor inicial y de contorno para
            ecuaciones diferenciales ordinarias, y los problemas de contorno para
            ecuaciones en derivadas parciales.
          </p>

          <div>
            <img
              style={{
                marginTop: "50px",
                width: "100%",
                height: "600px",
              }}
              src=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
import {useEffect} from 'react';
import img1 from '../../img/27569-matematicas.jpg';
import img2 from '../../img/matematicas-tumblr-gif-10.gif';
import homer from '../../img/homer-matematico.jpg';

const Introduction = () => {
  
  useEffect(() => {
    document.body.style.background = `rgba(0, 0, 0, 0.7) url(${homer})`;
    //document.body.style.background = "#6AD6FF";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundBlendMode = "darken";
  }, [])

  const ajustar = {
    display: "grid",
    textAlign: "center",
    fontFamily: "roboto",
    fontSize: "20px"
  }

  const principal = {
    color: "white",
    marginTop: "15%",
    marginBottom: "20%",
    paddingTop: "65px"
  }

  const wrapper = {
    color: "black",
    background: "white",
    padding: "15%"
  }


  return (
    <div style={ajustar}>
      <div style={principal}>
        <h1 style={{
          fontSize: "125px",
          fontWeight: "bold"
        }}>Análisis numérico</h1>
      </div>

      <div style={wrapper}>
        <div>
          <h4>PROYECTO FINAL ANALISIS NUMERICO</h4>

          <p>
            En este proyecto se intenta demostrar los conocimientos impartido por
            nuestro profesor de analisis numerico. Durante el desarrollo de esta
            asignatura, realizada en el transcurso de el 2022-1 (Segundo Semestre
            de dosmil veintidos).
          </p>
        </div>
      </div>

      <div style={wrapper}>
        <div>
          <h1>
            <h4>OBJETIVOS DEL PROYECTO</h4>
          </h1>

          <p>
            El objetivo de este proyecto es proporcionar una herramienta fácil de
            usa e interactiva, que nos permita realizar cálculos referentes al
            Analisis Numericos, de manera automatizada y rapída.
          </p>
        </div>
      </div>

      <div style={wrapper}>
        <div>
          <h4>ANALISIS NUMERICO</h4>

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
        </div>
      </div>
    </div>
  );
}

export default Introduction;
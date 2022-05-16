import Funcion from './shared/funcion';


const Verificar_Ea = (resultados_xr) => {
  let EaS = 0;
  // Si resultados xr es mayor a uno, significa que tiene xrs anteriores
  if (resultados_xr.length > 1){
    // resultados_xr[-2] -> es el xr_anterior
    var xr_anterior = resultados_xr[resultados_xr.length -2];
    var xr_actual = resultados_xr[resultados_xr.length -1];
    // console.log('resultados xr',resultados_xr.toString())
    EaS = ((xr_actual - xr_anterior)/xr_actual)*100; // Error relativo //E_relativo(xr_actual, xr_anterior);

    if (EaS < 0){
      EaS = EaS * -1;
    }
  }

  return EaS;
}

const sol = {
  biseccion: (Ea, funcion, xuf, xlf) =>{
    let EaS = 0;

    // Intervalos
    let xu = xuf;
    let xl = xlf;

    // xr inicial
    let xr_actual = 0;
    let i = 0;

    // Guardamos  el xr en un array para llevar los xr anteriores
    const resultados_xr = [];
    const resultados = [];

    let solucion = {};

    while(true){
      // PRIMERA ITERACION
      i += 1

      // Recibe los intervalos para encontrar Xr
      xr_actual = (Number(xl) + Number(xu))/2; // Ecuacion
      resultados_xr.push(xr_actual);  // Asi puedo obtener los xr anteriores

      // Funcion para remplazar los valores y devuelve la solucion
      const {fxr, fxl, res_fxr_fxl} = Funcion(funcion, xr_actual, xl);
      

      if (i>1){
        EaS = Verificar_Ea(resultados_xr);
        
        if (EaS <= Ea){
          // Esto para poder imprimir la ultima iteracion
          resultados.push({iteracion: i, fxr: fxr.toFixed(2), fxl: fxl.toFixed(2), fxr_fxl: res_fxr_fxl.toFixed(2), xr: xr_actual.toFixed(2), porcentaje:EaS.toFixed(0)});
          solucion = {i, xr_actual: xr_actual.toFixed(2), EaS: EaS.toFixed(0)};
          break
        }
      }
      resultados.push({iteracion: i, fxr: fxr.toFixed(2), fxl: fxl.toFixed(2), fxr_fxl: res_fxr_fxl.toFixed(2), xr: xr_actual.toFixed(2), porcentaje:EaS.toFixed(0)});

      // Condicion 1 ------
      if( res_fxr_fxl < 0){
        // Cumplimos la condicion cuando res_f1S_f2S sea menor a cero
        xu = xr_actual
      }
      // Condicion 2 ------
      if (res_fxr_fxl > 0)
        // Cumplimos la condicion cuando res_f1S_f2S sea mayor a cero
        xl = xr_actual

      // Condicion 3 ------
      if (res_fxr_fxl === 0)
        // Cumplimos la condicion cuando res_f1S_f2S sea igual a cero
        xl = xr_actual
    }

    return {resultados, solucion};
  }
}

export default sol;
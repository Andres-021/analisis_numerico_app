const Funcion = (string, xr, xl) => {
  const fxrList = [];
  const fxlList = [];

  let fxr = 0;
  let fxl = 0;
  let res_fxr_fxl = 0;

  const fun = string.toLowerCase()
  
  for(var i = 0; i<fun.length; i++){
    fxrList.push(fun.charAt(i));
    fxlList.push(fun.charAt(i));
  }
  
  for(var i = 0; i<fun.length; i++){
    if (fun.charAt(i) === '^')
      fxrList[i] = '**';

    if (fun.charAt(i) === 'x')
      fxrList[i] = xr;
  }

  for(var i = 0; i<fun.length; i++){
    if (fun.charAt(i) === '^')
      fxlList[i] = '**';

    if (fun.charAt(i) === 'x')
      fxlList[i] = xl;
  }

  fxr = eval(String(fxrList).replace(/,/g,""));
  fxl = eval(String(fxlList).replace(/,/g,""));
  
  res_fxr_fxl = fxr*fxl;

  return{fxr, fxl, res_fxr_fxl};
}

export default Funcion;
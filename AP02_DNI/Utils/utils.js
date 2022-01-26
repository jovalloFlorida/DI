/*
* IMPORTANTE: Este fichero debe ir dentro de la carpeta "Utils"
*/

const letras = [
    'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      
export const calculaLetraNif = (unDni) => {
    let unDniEnter = parseInt(unDni);
    if (!isNaN(unDniEnter)) {
      //let posicion = unDniEnter % 23;
      return letras[unDniEnter % 23];
    } else {
      return NaN;
    }
  }
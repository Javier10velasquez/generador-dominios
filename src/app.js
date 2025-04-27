
function generadorDeDominios(pronombre, adjetivo, nombre) {
  let combinacionesDeDominios = [];

  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < nombre.length; k++) {
        combinacionesDeDominios.push(pronombre[i] + adjetivo[j] + nombre[k]);
      }
    }
  }

  return combinacionesDeDominios;
}

let pronombre = ['the', 'our'];
let adjetivo = ['great', 'big'];
let nombre = ['jogger', 'racoon'];

let resultados = generadorDeDominios(pronombre, adjetivo, nombre);

for (let dominio of resultados) {
  console.log(dominio + ".com");
}
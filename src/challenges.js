// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  // eslint-disable-next-line no-lone-blocks
  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(a) {
  let b = a.split(' ');
  return b;
}
/* npm test  */
// Desafio 4
function concatName(arr) {
  let ult = arr.length -1;
  let ultPri = arr[ult]+ ", " + arr[0];
  return ultPri;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arr) {
  let seRepete = 0;
  let maior = -30;
  for (let i = 0; i < arr.length; i += 1) {
    if (maior < arr[i]) {
      maior = arr[i];
    }
  }
  for (let i2 = 0; i2 < arr.length; i2 += 1) {
    if (maior === arr[i2]) {
      seRepete += 1;
    }
  }
  return seRepete;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

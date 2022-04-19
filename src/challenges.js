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
  let ult = arr.length - 1;
  let ultPri = `${arr[ult]}, ${arr[0]}`;
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
function catAndMouse(mouse, cat1, cat2) {
  let ca1 = Math.abs(cat1 - mouse);
  let ca2 = Math.abs(cat2 - mouse);
  if (ca1 > ca2) {
    return 'cat2';
  }
  if (ca2 > ca1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(nun) {
  let fizz = [];
  for (let i = 0; i < nun.length; i += 1) {
    if (nun[i] % 5 == 0 && nun[i] % 3 == 0) {
      fizz.push('fizzBuzz');
    } else if (nun[i] % 3 == 0) {
      fizz.push('fizz');
    } else if (nun[i] % 5 == 0) {
      fizz.push('buzz');
    } else {
      fizz.push('bug!');
    }
  } return fizz;
}
// Desafio 9
function encode(aa) {
  let fArr = aa.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let i in fArr) {
    for (let i2 = 0; i2 < vogais.length; i2 += 1) {
      if (fArr[i] === vogais[i2]) {
        fArr[i] = i2 + 1;
      }
    }
  }
  let aaa = fArr.join('');
  return aaa;
}
function decode(aa) {
  let fArr = aa.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let i in fArr) {
    for (let i2 = 0; i2 < vogais.length; i2 += 1) {
      if (fArr[i] == i2 + 1) {
        fArr[i] = vogais[i2];
      }
    }
  }
  let aaa = fArr.join('');
  return aaa;
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

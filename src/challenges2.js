/* eslint-disable semi */
// Desafio 11

// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(num) {
let resp = null;
if (num.length === 11) {
    if (valido(num) === true) {
        numString = num.join('');
        numeroT = "(" + numString.replace(/(\d{2})(\d{5})/, "$1) $2-");
        resp = numeroT
    } else {
        resp = "não é possível gerar um número de telefone com esses valores";
    }
} else {
  resp = "Array com tamanho incorreto.";
}
if (valido(num) == 1) {
  resp = "não é possível gerar um número de telefone com esses valores";
}
  function valido(aa) {
      let nu = aa;
      let resss = null;
      nu.sort((a, b) => a - b);
      let res = null;
      if (nu[0] >= 0 && nu[10] < 12) {
          for (let i of nu) {
              if (nu[i] == nu[i] && nu[i] == nu[i + 1] && nu[i] == nu[i + 2]) {
                  resss = 1;
              } else {
                  res = true
              }
          }
      } else {
          res = "não é possível gerar um número de telefone com esses valores";
      } if (resss === 1) {
        res = 1;
      }
      return res
  }
   return resp
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
 
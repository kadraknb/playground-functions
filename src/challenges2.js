// Desafio 11
function generatePhoneNumber(aa) {
  let nume = aa;
  let num = aa;
  if (num.length === 11) {
    if (valido(num) === true) {
      numString = nume.join('');
      return "(" + numString.replace(/(\d{2})(\d{5})/, "$1) $2-");
    } else {
      return "não é possível gerar um número de telefone com esses valores";
    }
  } else {
    return "Array com tamanho incorreto.";
  }
}
function valido(nu) {
  nu.sort((a, b) => a - b);
  let resss = null;
  let res = null;
  if (nu[0] >= 0 && nu[10] < 10) {
    for (let i = 0; i < nu.length; i += 1) {
      if (nu[i] == nu[i] && nu[i] == nu[i + 1] && nu[i] == nu[i + 2]) {
        resss = false;
      } else {
        res = true;
      }
    }
  } else {
    return false;
  } if (resss === false) {
    return false;
  }
  return res
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

let dobro = function(a) {
  return 2 * a;
};

// Funcao arrow é sempre uma funcao constante, se quiser chamar ela vc precisar armazenar ela em uma funcao
// Se voce colocar o bloco, obrigatoriamente vc precisa usar o return, se nao ira retornar undefined
dobro = a => {
  return 2 * a;
};

// Quando vc tira as chaves voce tem um return implicito. Para funcoes de uma linha
dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function() {
  return "Ola";
};

ola = () => "Ola";
ola = _ => "Olá"; // Essa tambem e uma forma de passar um parametro na funcao
console.log(ola());

function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

// Aqui ele retorna somente a area pois a area e menor do que a condicao informada
console.log(area(2, 2));

// Faltando um parametro ou nao passando parametro o resultado e Not a Number "NaN"
console.log(area(2));
console.log(area());

// Como a funcao tem so 2 parametros, ele pega os primeiros 2 parametros e ignora o resto.
console.log(area(2, 3, 4, 6));

// Caindo no ELSE
console.log(area(5, 5));

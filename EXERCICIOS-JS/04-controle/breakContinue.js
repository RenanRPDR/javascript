const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// "break" ele interrompe a execucao a partir do momento que der match
for (let x in num) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${num[x]}`);
}

// "continue" ele somente ignora a condicao que der match
for (let y in num) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${num[y]}`);
}

externo: for (let a in num) {
  for (let b in num) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}
console.log("Fim!");

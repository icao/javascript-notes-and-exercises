function getNumber() {
  let contador = 0; // estado interno
  return function () {
    console.log(contador);
    contador++;
  };
}

const foo = getNumber();
foo();
foo();
foo();

const fizz = getNumber();
fizz();
foo();
fizz();

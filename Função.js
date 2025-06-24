const soma = (a, b) => a + b;

const subtrai = (a, b) => a - b;

const multiplica = (a, b) => a * b;

const divide = (a, b) => a / b;

const mostraResultado = (num1, num2) => {
  console.log(`soma entre ${num1} e ${num2}:`, soma(num1, num2));
  console.log(`subtrai entre ${num1} e ${num2}:`, subtrai(num1, num2));
  console.log(`multiplica entre ${num1} e ${num2}:`, multiplica(num1, num2));
  console.log(`divide entre ${num1} e ${num2}:`, divide(num1, num2));
};

// Exemplo de uso:
mostraResultado(10, 5);

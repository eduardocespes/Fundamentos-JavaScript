/*function apresentar(nome) {
    return `meu nome é ${nome}`;
}
*/

// arrow Function
/*const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + nun2;
*/
//arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
} 
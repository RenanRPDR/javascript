var a = 3
// A declaração de variável com let não permite que você declare uma segunda variável com o mesmo nome.
let b = 4

var a = 30
b = 40
/*let b = 40
* Caso seja declarado uma segunda variável com o mesmo nome como let ele ira dar o seguinte erro:
*  SyntaxError: Identifier 'b' has already been declared
*/ 
console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
/* c = 50
*   Não é possível alterar o valor de uma constante
*/

console.log(c)
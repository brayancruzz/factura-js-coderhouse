let miNombre = prompt('Ingresa tu nombre');
let nombreProducto1 = prompt('Escribe el nombre del producto #1');
let nombreProducto2 = prompt('Escribe el nombre del producto #2');

/* SE DEFINE EL VALOR DEL PRODUCTO #1 */

let valorProducto1 = parseInt(prompt('Ingrese el valor del producto #1'));

while (isNaN(valorProducto1)){
    valorProducto1 = parseInt(prompt('Ingrese el valor del producto #1'))
}

/* SE DEFINE EL VALOR DEL PRODUCTO #2 */

let valorProducto2 = parseInt(prompt('Ingrese el valor del producto #2'));

while (isNaN(valorProducto2)){
    valorProducto2 = parseInt(prompt('Ingrese el valor del producto #2'))
}

/* DOCUMENT WRITE */

document.write('Hola ', miNombre, ' esta es tu factura <br>')
document.write(nombreProducto1, ' ----- $', valorProducto1, '<br>')
document.write(nombreProducto2, ' ----- $', valorProducto2, '<br>')
document.write('El valor total que debes pagar es $', valorProducto1 + valorProducto2, '<br>')
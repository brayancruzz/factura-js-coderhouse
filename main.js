var codigoDescuento = 'DESCUENTO';
var descuento = 30; 

function suma (a, b){
    return a + b
}

function calculo (a){
    return a ;
}

let miNombre = prompt('Ingresa tu nombre');
let nombreProducto1 = prompt('Escribe el nombre del producto #1');
let nombreProducto2 = prompt('Escribe el nombre del producto #2');
let totalDescuento = 0;

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

suma = valorProducto1 + valorProducto2;
calculo = formula = descuento * suma;
calculo = calculo / 100;
totalDescuento = suma - calculo;


/* SWITCH */

let aplicarDescuento = prompt('¿Quieres aplicar el descuento? Escribe en mayuscula (SI), si no quieres aplicarlo, escribe "NO"')

switch (aplicarDescuento){
    case 'SI':
        document.write('Hola ', miNombre, ' esta es tu factura <br>', nombreProducto1, ' ----- $', valorProducto1, '<br>', nombreProducto2, ' ----- $', valorProducto2, '<br>', 'Aplicaste descuento del ', descuento, '% <br>','El valor total que debes pagar es $', totalDescuento, '<br>')
    break;

    case 'NO':
        document.write('Hola ', miNombre, ' esta es tu factura <br>', nombreProducto1, ' ----- $', valorProducto1, '<br>', nombreProducto2, ' ----- $', valorProducto2, '<br>', 'NO APLICASTE EL DESCUENTO <br>', 'El valor total que debes pagar es $', suma, '<br>')    
    break;

    }
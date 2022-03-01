var codigoDescuento = 'DESCUENTO';
var descuento = 30; 
var botonCalcular = document.getElementById('boton-calcular');
var botonRefrescar = document.getElementById('reload');
var resultadoSaludo = document.getElementById('output-saludo');
var resultadoProducto1 = document.getElementById('output-producto-uno');
var resultadoProducto2 = document.getElementById('output-producto-dos');
var resultadoDescuento = document.getElementById('output-descuento');
var resultadoDescontado = document.getElementById('output-descontado');
var resultadoTotal = document.getElementById('output-total');

// OBJETOS

const producto1 = {
    nombre: 'null',
    precio: 0,
}

const producto2 = {
    nombre: 'null',
    precio: 0,
}

// FUNCIONES

function suma(a, b){
    return a + b
}

function multiplicar(a, b){
    return a * b;
}

function dividir(valor1, valor2){
    return valor1 / valor2;
}

function restar(valorDescuento, valorTotal){
    return valorDescuento - valorTotal;
}

// EVENTOS

botonRefrescar.addEventListener("click", ()=>{
    location.reload();
    return true;
})

botonCalcular.addEventListener("click", ()=>{
    producto1.nombre = document.getElementById('input-name-a').value ;
    producto1.precio = Number(document.getElementById('input-precio-a').value);
    producto2.nombre = document.getElementById('input-name-b').value;
    producto2.precio = Number(document.getElementById('input-precio-b').value);
             
    let preciosinDescuento = suma(producto1.precio, producto2.precio);
    let calculo = multiplicar(descuento, preciosinDescuento)
    let valorDescontado = dividir(calculo, 100);
    let precioconDescuento = restar(preciosinDescuento, valorDescontado)

    if (document.getElementById('aplicar').checked){

        resultadoSaludo.textContent = ('Hola, esta es tu factura');
        resultadoProducto1.textContent = (producto1.nombre + ' ----- $'+ producto1.precio)
        resultadoProducto2.textContent = (producto2.nombre + ' ----- $'+ producto2.precio)
        resultadoDescuento.textContent = ('Aplicaste descuento del: ' + descuento + '%')
        resultadoDescontado.textContent = ('Valor descontado: $' + valorDescontado)
        resultadoTotal.textContent = ('Total a pagar: $' + precioconDescuento)
        }

    if(document.getElementById('no-aplicar').checked){
        calculo = 0;
        valorDescontado = 0;
        precioconDescuento = 0;

        resultadoSaludo.textContent = ('Hola, esta es tu factura');
        resultadoProducto1.textContent = (producto1.nombre + ' ----- $'+ producto1.precio)
        resultadoProducto2.textContent = (producto2.nombre + ' ----- $'+ producto2.precio)
        resultadoDescuento.textContent = ('No aplicaste el descuento')
        resultadoDescontado.textContent = ('')
        resultadoTotal.textContent = ('Total a pagar: $' + preciosinDescuento)
}})
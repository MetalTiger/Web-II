function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Kevin"));
var entero = 3;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
var esVerdadero = true;
var nombre = "Kevin";
var apellido = 'Camacho';
var impresion = "\n*Variables num\u00E9ricas\n-Entero: " + (entero + 1) + "\n-Hexadecimal: " + hexadecimal + "\n-Binario: " + binario + "\n-Octal: " + octal + "\n\n*Strings\n-Nombre: " + nombre + "\n-Apellido: " + apellido + " \n";
console.log(impresion);
if (esVerdadero) {
    console.log("La variable es verdadera.");
}
var a = new Date();
console.log("La fecha es: " + a);
// Arreglos
var listaNums = [1, 2, 3];
listaNums.push(4);
for (var i = 0; i < listaNums.length; i++) {
    console.log("Arreglo en posición [" + i + "] = " + listaNums[i]);
}
var Numeros = [1, 2, 3];
// Tuplas
var futbolista;
// Acceder a los datos
futbolista = ["Timo", 26];
console.log("\nEl futbolista se llama: " + futbolista[0] + " y su edad es de " + futbolista[1] + " a\u00F1os.\n");
// Enumeraciones (Comienzan en 0 y se puede poner el valor)
var marcasAutos;
(function (marcasAutos) {
    marcasAutos[marcasAutos["Toyota"] = 0] = "Toyota";
    marcasAutos[marcasAutos["Chevrolet"] = 100] = "Chevrolet";
    marcasAutos[marcasAutos["Ford"] = 101] = "Ford";
})(marcasAutos || (marcasAutos = {}));
var Tacoma = marcasAutos.Toyota;
var Silverado = marcasAutos.Chevrolet;
var Escape = marcasAutos.Ford;
// Imprime 0
console.log(Tacoma);
// Imprime 100
console.log(Silverado);
// Imprime 101
console.log(Escape);
// Se puede obtener el valor de la enumeración mediante el índice
console.log(marcasAutos[0]);
// Variable sin tipo
// Puede tener cualquier tipo, se usa cuando no se sabe el valor a almacenar y de preferencia no se usa mucho
var sinTipo = "Hola marco";
console.log("sinTipo (String): " + sinTipo);
sinTipo = 100;
console.log("sinTipo (Int): " + sinTipo);
// Se recomienda usarlo cuando no se sabe la variable y para indicar que falta algo (un "por mientras")
var desconocido = 4;
desconocido = true;
// Void, no devuelven ningun valor
function saludar2() {
    console.log("Hola");
}
saludar2();
//El null se usa para limpiar variables
var sinDefinir = undefined;
var variableNull = null;
var numeroNull = 10;
console.log("(Antes de null) Numero = " + numeroNull);
numeroNull = variableNull;
console.log("(Despues de null) Numero = " + numeroNull);
// Las funciones never se usan para indicar que no se espere nada de regreso, además se usa para los logs
function error(mensaje) {
    throw new Error(mensaje);
}
// Union, indica que un valor puede ser de un tipo u otro
function imprimirId(id) {
    // Si se usa con typeof puedes hacer distintas operaciones dependiendo del tipo recibido
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId(92.8679);
imprimirId("trabajador");
// Assertion, le indicas al compilador que debe confiar en ti porque sabes lo que haces
// se usa as para usar estos tipos
var algunValor = "esto es un string";
var stringLength = algunValor.length;
// También se puede usar de esta forma
var algunValor2 = "este es otro string";
var stringLength2 = algunValor2.length;
console.log("Longitud del string = " + stringLength);
console.log("Longitud del string = " + stringLength2);
// Parametros de las funciones y tipos de valor de retorno
// Los parametros se ponene entre los parentesis de la función
// y el tipo de retorno despues de los parentesis
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 8;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroBase + " al cuadrado es igual a " + numeroAlCuadrado);
// Funciones anónimas
var nombres = ["Juan", "Pedro", "Luis"];
// Se pueden usar de la siguiente forma
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
// o mediante la flecha => tammbién llamado arrow function
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenadas(punto) {
    console.log("\n    La coordenada x es: " + punto.x + "\n    La coordenada y es: " + punto.y + "\n    ");
}
// Al mandar a llamar la función se deben llenar las variables de las cuales se compone el alias
imprimirCoordenadas({ x: 10, y: 25 });
/*
 Dentro de la función solo podemos elegir la propiedad label, pero no significa que
 el objeto haya pérdido la propiedad número, esto se da porque el parámetro debe cumplir
 con el contrato definido en la interface
*/
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
// De forma que al crear el objeto no tira error, aunque solo se defina la propiedad ancho
console.log(crearCuadrado({ ancho: 10 }));
var punto1 = { x: 10, y: 20 };
var auto2;
var cuadrado1;
// Literales
/*
 Estas pueden ser usadas junto con los unions para restringir una serie de valores
 posibles en una función
*/
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
// Al momento de escribir el código el mismo Typescript te sugiere las literales
imprimir('soltero');
// Funciones como expresiones
/*
    -La función saludar4 recibe como parametro otra función llamada fn
    -Esta función fn recibe un string (a:string) y retorna null (=> void)
*/
// Otro punto a resaltar es que la función saludar4 ejecuta imprimirEnConsola porque le manda el parámetro "Hola Mundo"
function saludar4(fn) {
    fn("Hola mundo");
}
// Esta función solo imprime en consola un parámetro
function imprimirEnConsola(s) {
    console.log(s);
}
// Se manda la función imprimirEnConsola a saludar4, esta define el parámetro y al hacer esto se ejecuta imprimirEnConsola
saludar4(imprimirEnConsola);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);
var impirmirTareas = function (v) {
    v.forEach(function (x) {
        console.log(x);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes"
];
impirmirTareas(misTareas);

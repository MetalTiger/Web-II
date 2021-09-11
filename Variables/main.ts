function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("Kevin"));

let entero:number = 3;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
let esVerdadero = true;
let nombre:string = "Kevin";
let apellido:string = 'Camacho';
let impresion:string = `
*Variables numéricas
-Entero: ${entero + 1}
-Hexadecimal: ${hexadecimal}
-Binario: ${binario}
-Octal: ${octal}

*Strings
-Nombre: ${nombre}
-Apellido: ${apellido} 
`;
console.log(impresion);

if (esVerdadero) {
    console.log("La variable es verdadera.");
}

let a:Date = new Date();
console.log("La fecha es: " + a);

// Arreglos
let listaNums: number[] = [1, 2, 3];
listaNums.push(4);

for (let i = 0; i < listaNums.length; i++) {
    console.log("Arreglo en posición [" + i + "] = " + listaNums[i]);
}

let Numeros: Array<Number> = [1, 2, 3];

// Tuplas
let futbolista: [string, number];
// Acceder a los datos
futbolista = ["Timo", 26];
console.log(`
El futbolista se llama: ${futbolista[0]} y su edad es de ${futbolista[1]} años.
`);
// Enumeraciones (Comienzan en 0 y se puede poner el valor)
enum marcasAutos{
    Toyota,
    Chevrolet = 100,
    Ford
}

let Tacoma: marcasAutos = marcasAutos.Toyota;
let Silverado: marcasAutos = marcasAutos.Chevrolet;
let Escape: marcasAutos = marcasAutos.Ford;
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
let sinTipo : any = "Hola marco";
console.log("sinTipo (String): " + sinTipo);
sinTipo = 100; 
console.log("sinTipo (Int): " + sinTipo);

// Se recomienda usarlo cuando no se sabe la variable y para indicar que falta algo (un "por mientras")
let desconocido : unknown = 4;
desconocido = true;

// Void, no devuelven ningun valor
function saludar2():void {
    console.log("Hola");
}
saludar2();

//El null se usa para limpiar variables
let sinDefinir:undefined = undefined;
let variableNull:null = null;
let numeroNull : number = 10;
console.log("(Antes de null) Numero = " + numeroNull);
numeroNull = variableNull;
console.log("(Despues de null) Numero = " + numeroNull);

// Las funciones never se usan para indicar que no se espere nada de regreso, además se usa para los logs
function error(mensaje:string): never {
    throw new Error(mensaje);
} 

// Objects,representa un tipo no primitivo. Usado en API's
declare function crear(o: object): void;

// Union, indica que un valor puede ser de un tipo u otro
function imprimirId(id: number | string) {

    // Si se usa con typeof puedes hacer distintas operaciones dependiendo del tipo recibido

    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
        
    }else{
        console.log(`El id es ${(id as number).toFixed(2)}`);

    }

}

imprimirId(92.8679);
imprimirId("trabajador");

// Assertion, le indicas al compilador que debe confiar en ti porque sabes lo que haces
// se usa as para usar estos tipos
let algunValor: unknown = "esto es un string";
let stringLength: number = (algunValor as string).length;
// También se puede usar de esta forma
let algunValor2: unknown = "este es otro string";
let stringLength2: number = (<string>algunValor2).length;
console.log("Longitud del string = " + stringLength);
console.log("Longitud del string = " + stringLength2);

// Parametros de las funciones y tipos de valor de retorno
// Los parametros se ponene entre los parentesis de la función
// y el tipo de retorno despues de los parentesis
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 8;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroBase + " al cuadrado es igual a " + numeroAlCuadrado);

// Funciones anónimas
const nombres = ["Juan", "Pedro", "Luis"];
// Se pueden usar de la siguiente forma
nombres.forEach(function (s) {
   console.log(s.toUpperCase()); 
});
// o mediante la flecha => tammbién llamado arrow function
nombres.forEach((s)=>{
    console.log(s.toUpperCase());

});
// En ambos casos Typescript puede determinar el tipo de los parametros, ya que el arreglo contiene Strings
// Se recomienda utilizar los tipos de parametros si usted considera que mejoran la legibilidad del codigo

// Aliases
// Son como las estructuras de datos de forma que una variable se puede componer de distintos tipos de variables
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenadas(punto: Punto) {
    console.log(`
    La coordenada x es: ${punto.x}
    La coordenada y es: ${punto.y}
    `)
}
// Al mandar a llamar la función se deben llenar las variables de las cuales se compone el alias
imprimirCoordenadas({x: 10, y: 25});

// Interfaces
// Usadas como en POO; definen un contrato dentro del código ya sea para propiedades o métodos
interface Etiqueta {
    label: string;
}

/* 
 Dentro de la función solo podemos elegir la propiedad label, pero no significa que 
 el objeto haya pérdido la propiedad número, esto se da porque el parámetro debe cumplir
 con el contrato definido en la interface
*/
function imprimirEtiqueta(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

let miEtiqueta = {numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

// Propiedades opcionales
// Estas se indican con el símbolo ?, como se puede ver color es opcional
interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): {area:number} {
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area: area};
}
// De forma que al crear el objeto no tira error, aunque solo se defina la propiedad ancho
console.log(crearCuadrado({ancho:10}));

// Propiedades de solo lectura en las interfaces
interface Punto2 {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto2 = {x: 10, y: 20};
/*
 Si se descomenta la siguiente línea tirará error, ya que la propiedad x es de solo 
 lectura de forma que no se puede modificar 
*/
//punto1.x = 20;
/* 
 Es importante mencionar que las variables usan const mientras que las propiedades usan readonly
*/

/*
    Interfaces vs Types
 Estas pueden ser usadas de la misma forma, la diferencia radica en que a un type
 no se le pueden agregar más propiedades, mientras que una interface es siempre
 extendible
*/

interface Transporte {
    nombre: string;
}

// Las interfaces se extienden con extends, que funciona como la herencia
interface Auto extends Transporte{
    ruedas: number;
} 
let auto2 : Auto;
/*
 De forma que los objetos Auto deben de cumplir con las propiedades definidas 
 en ambas interfaces
*/

// A pesar de que mencionamos que los types no son extendibles, existe una forma
type Figura = {
    nombre: string;
}
type Cuadrado2 = Figura & {
    lados: 4;
}
let cuadrado1: Cuadrado2;

// Literales
/* 
 Estas pueden ser usadas junto con los unions para restringir una serie de valores
 posibles en una función
*/
function imprimir(estadoCivil: 'soltero' | 'casado') {
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
function saludar4(fn: (a:string) => void) {
    fn("Hola mundo")
}

// Esta función solo imprime en consola un parámetro
function imprimirEnConsola(s: string) {
    console.log(s);
}

// Se manda la función imprimirEnConsola a saludar4, esta define el parámetro y al hacer esto se ejecuta imprimirEnConsola
saludar4(imprimirEnConsola);

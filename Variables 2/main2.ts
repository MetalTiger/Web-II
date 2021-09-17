// Constructor signature
/*
    Las funciones pueden ser invocadas con el operador new
    ya que crean un objeto.
*/
interface Transporte {
    nombre: string;
}

class Caballo implements Transporte{
    constructor(public nombre: string) {}
}

class Automovil implements Transporte {
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
    new (nombre: string): Transporte;

};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);    // En este punto se crea el objeto a partir de la funcion
}

const caballo1 = construirTransporte(Caballo, "Roach");
const auto1 = construirTransporte(Automovil, "Honda");

console.log("Mi caballo se llama " + caballo1.nombre);
console.log("Mi auto es un " + auto1.nombre);

// Parametros opcionales
// Si no se le envia un parametro a la funcion este tendra el tipo undefined
function f2(n?: number) {
    console.log("El parametro opcional n es " + n);
}

f2();
f2(4);
// Es importante no abusar de esta caracteristica, ya que se pueden cometer errores como hacer opcional algo que no debe serlo

// Sobrecarga
// Dependiendo de los parametros enviados a la funcion, esta los tomara de una u otr forma
function longitud(a: any[]): number;
function longitud (x: string): number;
function longitud (x: any): number {
    return x.length;
}
console.log("Sobrecarga");
console.log(longitud("Hola mundo")); // Imprime 10, ya que es la longitud de la cadena
console.log(longitud([1, 2, 3, 4])); // Imprime 4, ya que es la longitud del vector
// Este procedimiento se puede simplificar con unions
function calcularLongitud(x: any[] | string){
    return x.length;
}
console.log("Simplificacion de sobrecarga")
console.log(calcularLongitud("Hola mundo")); // Imprime 10, ya que es la longitud de la cadena
console.log(calcularLongitud([1, 2, 3, 4])); // Imprime 4, ya que es la longitud del vector

// this
// Usado para referirse a algun atributo/metodo dentro del objeto en el que se este
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function() {
        this.admin = true;  // Se accede al atributo admin mediante this, ya que se esta dentro del objeto usuario
    },
};

console.log("Usuario admin = " + usuario.admin);
usuario.volverseAdmin();
console.log("Usuario admin = " + usuario.admin);

// Parametros REST
/*
    Usados cuando necesitamos recibir n parámetros. Se le deben anteponer 3 puntos antes de 
    la variable que será del tipo rest, estos suelen ser arreglos (strings o numéricos) porque 
    serán varios datos.
*/
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
/* 
    En este caso la función multiplica todos los numeros dentro del arreglo,
    es importante destacar que los numeros despues del primer 2 son enviados al
    arreglo m de forma que son tratados como parametros REST
*/

// Parameter Destructuring
// Permite romper los atributos de objetos o asignar valores a parametros de funciones
function sumar1(num){
    return num.a + num.b + num.c;
}
const numeros = { a: 1, b:2, c:3 };
console.log("**Destructuracion en objetos**");
console.log(sumar1(numeros));

console.log("**Destructuracion en funciones**");
function sumar2({ a, b, c }: {a: number, b: number, c: number}): number {
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3}));
// Si esto se hace en una función, te permite cambiar el tipo de los parametros

// Tipos objeto
// Estos pueden ser anónimos cuando los definimos sin un identificador
function saludar(persona: { nombre: string; edad: number }) {
    return `
    **Objeto anónimo**
    Hola ${persona.nombre}`;
}
console.log(saludar({ nombre: "Luis", edad:22 }));

// Tambien pueden ser nombrados como una interface
interface Persona1 {
    nombre: string;
    edad: number;
}

function saludar2(persona: Persona1) {
    return `
    **Objeto nombrado como interface**
    Hola ${persona.nombre}`;
}

console.log(saludar2({ nombre: "Elena", edad: 25 }));

// O pueden ser nombradas como un alias (type)
type Persona2 = {
    nombre: string;
    edad: number;
}

function saludar3(persona: Persona2) {
    return `
    **Objeto nombrado como un alias**
    Hola ${persona.nombre}`;
}

console.log(saludar3({ nombre: "Kevin", edad: 21 }));

// Modificadores de Propiedad
// Propiedades opcionales
// Como se vio anteriormente estas pueden o no tener un valor
interface Computadora {
    os: "Windows" | "Linux" | "Mac";
    monitor?: "crt" | "led";
    memoria: number;
    procesador: "Intel" | "AMD"
}

function imprimir(computador: Computadora){
    console.log(`SO: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir({
    os: "Windows",
    memoria: 45,
    procesador: "AMD"
});
// En este caso el objeto creado no tendra monitor, pero eso no impide que la funcion sea ejecutada

// readonly
// Atributos de solo lectura, de forma que no se pueden modificar una vez definidos
interface Perro2 {
    readonly raza: string;
}

const miPerro: Perro2 = { raza: "Pug"}
console.log(`La raza de mi perro es ${miPerro.raza}`);

/* 
    Es importante resaltar que aunque las propiedades no se puedan modificar
    pueden ser alteradas mediante el uso de un alias. Como el siguiente ejemplo:
*/
interface Persona {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}

const Luis : Persona = {edad: 20};

const Pedro: EdadNoEscribible = Luis;

Luis.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);
/* 
    En este caso el atributo edad se modifica, ya que Pedro 
    esta haciendo referencia a Luis; el cual también tiene
    un atributo llamado edad.
*/

// Extender Tipos
// Se pueden agregar atributos a otras interfaces mediante el extends
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDepartamento extends Direccion {
    unidad: string;
}
// En este caso DireccionDepartamento tendrá todos los atributos de Direccion y el atributo propio unidad

// También se pueden extender multiples interfaces
interface Computadora2 {
    memoria: string;
    procesador: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadora2, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadora2, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria: "16 GB",  
    procesador: "Intel",
    hdd: "1 TB",
    so: "OSX",
    version: "catalina",
    bateria: "Litio",
    monitor: "17 pulgadas",
    teclado: "español"
};

const ubuntuServer: Servidor = {
    memoria: "64GB",
    procesador: "Intel",
    hdd: "4 TB",
    so: "Ubuntu",
    version: "20.04",
    conexion: "ethernet"
};

// Intersections
// Permiten combinar atributos a un alias, pero no se pueden agregar mas
type Portatil2 = Computadora2 & SistemaOperativo;
const macbookPro2: Portatil2 = {
    memoria: "16GB",
    procesador: "Intel",
    hdd: "500 GB",
    so: "OSX",
    version: "Catalina"
} 

/* 
Si se quiere hacer una intersection en dos interfaces que tienen la misma variable pero diferente tipo, entonces
la variable se vuelve del tipo never
interface Prueba {
    a: number;
}

interface Prueba2 {
    a: string;
}

type tipoP = Prueba & Prueba2;

const varP: tipoP = {
    a: 
}

Si se quiere hacer lo mismo pero con extends el compilador no te deja crear la nueva interface
interface interP extends Prueba, Prueba2 {
} 
*/

// Generics
/* 
    -Es una forma de trabajar con tipos dinámicos. 
    -Se usa con <>, lo que crea un tipo de dato del tipo que se le mande al momento de crear el objeto.
    -La ventaja de esto es que sabes de que tipo será el contenido, de forma que te ahorras estar haciendo 
    el typeof, además de que no hay necesidad de hacer conversión de tipos. 
    -Se pueden usar tanto con interfaces como con types
*/ 
interface Caja<T>{
    contenido: T;
}

let cajaString: Caja<string> = {contenido: "hola mundo"};
let cajaNumero: Caja<number> = {contenido: 100};
let cajaFecha: Caja<Date> = {contenido: new Date()};

type Cajita<T> = {
    contenido: T;
};

let cajitaString: Cajita<string> = {contenido: "hola mundo"};
let cajitaNumero: Cajita<number> = {contenido: 100};
let cajitaFecha: Cajita<Date> = {contenido: new Date()};
/* 
    Si hubieran más atributos del tipo T en la/el interface/type esos serían del mismo tipo que 
    fue especificado al momento de  crear el objeto
*/

// Array
const imprimirTareas = (v: Array<string>) =>{
    v.forEach((x)=>{
        console.log(x);
    });
}

const misTareas: string[] =[
    "levantarse",
    "lavarse los dientes"

]
    
imprimirTareas(misTareas);

// readonly array
// Funcionan igual que las variables readnly, pueden ser utiles cuando queremos tener una lista de algo
// Es posible asignar un arreglo normal a uno de solo lectura
const miLista: ReadonlyArray<string> = ["a", "b", "c"]

// Tuplas
// Es un tipo de array que conoce cuantos elementos, de que tipo y en que posicion estan
type Auto = [string, number];

const prius: Auto = ["Toyota", 2015];
const civic: Auto = ["Honda", 2016];

console.log("El Prius es marca: ", prius[0], " y modelo: ", prius[1]);
console.log(`El Civic es marca ${civic[0]} y modelo: ${civic[1]}`);

// Tambien es posible asignar valores de esta forma
const prius2: [string, number] = ["Toyota", 2015];
const [marca, modelo] = prius2; // Y se puede dar un nombre a cada valor de la tupla

console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: " + modelo);

// Tuplas REST
// El elemento RESt solo puede ser el último elemento de la tupla
type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, false];

// Tuplas Readonly
// Estas se pueden especificar de la siguiente manera
type Auto2 = readonly [string, number];
const prius3: Auto = ["Toyota", 2014];

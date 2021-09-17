var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre); // En este punto se crea el objeto a partir de la funcion
}
var caballo1 = construirTransporte(Caballo, "Roach");
var auto1 = construirTransporte(Automovil, "Honda");
console.log("Mi caballo se llama " + caballo1.nombre);
console.log("Mi auto es un " + auto1.nombre);
// Parametros opcionales
// Si no se le envia un parametro a la funcion este tendra el tipo undefined
function f2(n) {
    console.log("El parametro opcional n es " + n);
}
f2();
f2(4);
function longitud(x) {
    return x.length;
}
console.log("Sobrecarga");
console.log(longitud("Hola mundo")); // Imprime 10, ya que es la longitud de la cadena
console.log(longitud([1, 2, 3, 4])); // Imprime 4, ya que es la longitud del vector
// Este procedimiento se puede simplificar con unions
function calcularLongitud(x) {
    return x.length;
}
console.log("Simplificacion de sobrecarga");
console.log(calcularLongitud("Hola mundo")); // Imprime 10, ya que es la longitud de la cadena
console.log(calcularLongitud([1, 2, 3, 4])); // Imprime 4, ya que es la longitud del vector
// this
// Usado para referirse a algun atributo/metodo dentro del objeto en el que se este
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true; // Se accede al atributo admin mediante this, ya que se esta dentro del objeto usuario
    }
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
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
function sumar1(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log("**Destructuracion en objetos**");
console.log(sumar1(numeros));
console.log("**Destructuracion en funciones**");
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
// Si esto se hace en una función, te permite cambiar el tipo de los parametros
// Tipos objeto
// Estos pueden ser anónimos cuando los definimos sin un identificador
function saludar(persona) {
    return "\n    **Objeto an\u00F3nimo**\n    Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
    return "\n    **Objeto nombrado como interface**\n    Hola " + persona.nombre;
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
function saludar3(persona) {
    return "\n    **Objeto nombrado como un alias**\n    Hola " + persona.nombre;
}
console.log(saludar3({ nombre: "Kevin", edad: 21 }));
function imprimir(computador) {
    console.log("SO: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: "Windows",
    memoria: 45,
    procesador: "AMD"
});
var miPerro = { raza: "Pug" };
console.log("La raza de mi perro es " + miPerro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);
var macbookPro = {
    memoria: "16 GB",
    procesador: "Intel",
    hdd: "1 TB",
    so: "OSX",
    version: "catalina",
    bateria: "Litio",
    monitor: "17 pulgadas",
    teclado: "español"
};
var ubuntuServer = {
    memoria: "64GB",
    procesador: "Intel",
    hdd: "4 TB",
    so: "Ubuntu",
    version: "20.04",
    conexion: "ethernet"
};
var macbookPro2 = {
    memoria: "16GB",
    procesador: "Intel",
    hdd: "500 GB",
    so: "OSX",
    version: "Catalina"
};
var cajaString = { contenido: "hola mundo" };
var cajaNumero = { contenido: 100 };
var cajaFecha = { contenido: new Date() };
var cajitaString = { contenido: "hola mundo" };
var cajitaNumero = { contenido: 100 };
var cajitaFecha = { contenido: new Date() };
/*
    Si hubieran más atributos del tipo T en la/el interface/type esos serían del mismo tipo que
    fue especificado al momento de  crear el objeto
*/
// Array
var imprimirTareas = function (v) {
    v.forEach(function (x) {
        console.log(x);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes"
];
imprimirTareas(misTareas);
// readonly array
// Funcionan igual que las variables readnly, pueden ser utiles cuando queremos tener una lista de algo
// Es posible asignar un arreglo normal a uno de solo lectura
var miLista = ["a", "b", "c"];
var prius = ["Toyota", 2015];
var civic = ["Honda", 2016];
console.log("El Prius es marca: ", prius[0], " y modelo: ", prius[1]);
console.log("El Civic es marca " + civic[0] + " y modelo: " + civic[1]);
// Tambien es posible asignar valores de esta forma
var prius2 = ["Toyota", 2015];
var marca = prius2[0], modelo = prius2[1]; // Y se puede dar un nombre a cada valor de la tupla
console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: " + modelo);
var a = ["a", 1, true, false, false];
var prius3 = ["Toyota", 2014];

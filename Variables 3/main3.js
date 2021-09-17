var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clases
var Punto = /** @class */ (function () {
    // Se asignan los valores a las variables mediante el constructor
    function Punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.y = 2; // Si se le pone un valor al campo será del tipo del valor asignado
        this.x = x;
        this.y = y;
    }
    return Punto;
}());
var miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);
// Campos Readonly
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "mundo";
        if (!nuevoNombre) {
            this.nombre = nuevoNombre; //La variable se puede usar ya que es válido dentro del constructor
        }
    }
    Saludo.prototype.asignarNuevoNombre = function (nuevoNombre) {
        // this.nombre = nuevoNombre; Esta Línea marca error ya que no se puede asignar valor fuera del constructor
    };
    return Saludo;
}());
var miNombre = new Saludo("Kevin");
//miNombre.nombre = "Juan"; // Esto es un error ya que no se puede cambiar el valor
// Sobrecarga de constructores
var Punto2 = /** @class */ (function () {
    function Punto2(xs, y) {
    }
    return Punto2;
}());
// Super
/*
    -Se utiliza cuando estamos trabajando una clase hija, se usa para llamar el constructor de la clase padre.
    -Si hay sobrecarga de constructores en el padre se deben de mandar los parametros que ocupen.
    -No es lo mismo heredar que tener acceso.
    -Este se usa solo cuando entre las clases hay variables o métodos del mismo nombre, ya que asi
    se puede para diferenciar el llamado del método/variable del padre y del hijo
*/
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        var _this = _super.call(this) || this;
        _this.lados = 2; //El this solo se puede utilizar despues del super  
        return _this;
    }
    return Circulo;
}(Figura));
// Métodos
// Propiedades que actuan como funciones dentro de las clases.
// Se puede hacer referencia a variables de la clase dentro de los métodos mediante this
var titulo = "mi graduación";
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproduciendo.");
    };
    // El this ayuda a referenciar a una variable interna (de una clase) de una externa (fuera de la clase).
    Video.prototype.asignarTitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo; // Esto hace referencia a la variable fuera de la clase
        this.titulo = nuevoTitulo; // Esto hace referencia a la variable o campo dentro de la clase
    };
    return Video;
}());
var miVideo = new Video("Año Nuevo");
miVideo.reproducir();
// Setters y Getters
/*
    -Se debe de tener un get y un set con el nombre de la propiedad, de forma que
    el primero obtiene el valor mediante un return y el segundo le establece el valor a la variable.
    -Se usan las palabras claves get y set.
    -Las propiedades deben ser accedidas mediante sus correspondientes getters y setters. De forma que nignuna variable debería ser publica.
    -Es un get y set por variable.
*/
var Desfile = /** @class */ (function () {
    function Desfile() {
        this._participantes = 0;
        // Los setters y getters deben ser del mismo tipo
    }
    Object.defineProperty(Desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return Desfile;
}());
var desfileHoy = new Desfile();
desfileHoy.participantes = 100; //Se asigna mediante el set
console.log(desfileHoy.participantes); //Se obtiene mediante el get
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.encender = function () {
        console.log("El televisor se encendió.");
    };
    return Television;
}());
var NombreVerificable = /** @class */ (function () {
    function NombreVerificable() {
    }
    NombreVerificable.prototype.verificar = function (nombre) {
        return nombre.toLowerCase();
    };
    return NombreVerificable;
}());
// Extends 
/*
    Se usa para heredar entre clases, de forma que la clase hija tendrá todas las propiedades
    y métodos de la clase padre
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve.");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro2 = new Perro();
miPerro2.moverse(); // Método de la clase padre
miPerro2.ladrar(); // Método de la clase hija
// Sobrecarga
// Cuando se oculta un método o variable de la clase padre por la clase hija, para que este nuevo método sea usado.
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Se le hace una sobrecarga al método saludar
    Hijo.prototype.saludar = function (nombre) {
        if (nombre) { // Si se le manda un nombre entonces hará la acción redefinida
            console.log("Hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this); // Si no, entonces usará el método del padre
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
// Se puede hacer referencia a una clase hija desde una clase padre mediante un objeto.
var h = new Hijo();
// En pocas palabras, tratas a los hijos como el padre, de forma que puedes acceder a las variables de este.
// Orden de inicialización de las variables
/*
    1.-Los campos de la clase base son inicializados
    2.-El constructor de la clase base se ejecuta
    3.-Los campos de la clase derivada son inicializados
    4.-El constructor de la clase derivada se ejecuta
    5.-Se crea la instancia
*/
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definición"; // (1)
        console.log("Mi nombre es " + this.nombre); // (2)
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion)); // (3) y (4)
var d = new Implementacion(); // (5)
// Visibilidad
// Public.- Las propiedades y/o métodos pueden ser accedidos desde cualquier parte
var Saludo5 = /** @class */ (function () {
    function Saludo5() {
    }
    Saludo5.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo5;
}());
var inst = new Saludo5();
inst.saludar(); // Se puede acceder al método desde fuera de la clase
// Protected
/*
    Es accesible desde el cuerpo de la clase en la que esta definido/padre y
    desde el cuerpo de las clases hijas que tenga.
*/
var Saludo6 = /** @class */ (function () {
    function Saludo6() {
    }
    Saludo6.prototype.getDestinatario = function () {
        return "Amigos";
    };
    return Saludo6;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola " + this.getDestinatario()); // Se accede al método protected del padre desde la clase hija
    };
    return SaludoEspecial;
}(Saludo6));
var saludo = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario(); // No se puede acceder desde una instancia ya que el método no es público
/*
    Si en la clase derivada se tiene una variable del mismo nombre que en la base pero
    con visibilidad public se podrá hacer referencia a esta desde algún objeto,
    si se quiere hacer referencia a la variable de la clase Padre se usa el super.
*/
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10; // Esta variable es protected
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15; // Esta variables es public
        return _this;
    }
    return Derivada;
}(Base));
var z = new Derivada();
console.log(z.m);
/*
    -En este punto se accede a la variable m de derivada, es decir vale 15,
    esto porque no se usa super para referenciar la variable de la clase padre.
    -Además se puede acceder a la variable desde fuera porque la variable si cambia de visibilidad
    -En pocas palabras, la variable m pasa de estado protected a public y al ser llamada se toma el valor de Derivada ya que no se usa Super
*/
// Acceso a protected mediante herencia cruzada
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derivada1 = /** @class */ (function (_super) {
    __extends(Derivada1, _super);
    function Derivada1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada1;
}(Base2));
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada2.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return Derivada2;
}(Base2));
// Private
/*
    -Solo puede ser accedida desde el cuerpo de la clase en la cual fue definida.
    -Estas pueden ser mostradas, modificadas u obtenidos mediante otros mecanismo como los getters y setters.
    -Si una variable es private y se hace herencia esta va a seguir existiendo en la clase hija, pero no se podrá acceder a esta, si se quiere hacer esto, entonces se debe declarar sus respectivos setters y getters.
    -Las buenas prácticas sugieren  que todo sea private con sus respectivos getters y setters.
*/
var Base5 = /** @class */ (function () {
    function Base5() {
        this.x = 0;
    }
    return Base5;
}());
var Derivada5 = /** @class */ (function (_super) {
    __extends(Derivada5, _super);
    function Derivada5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada5.prototype.imprimirX = function () {
        //        console.log(this.x);    // Marca error porque la variable es private
    };
    return Derivada5;
}(Base));
var dd = new Base5();
//console.log(b.x);             // Tampoco se puede acceder desde fuera de la clase
/*
    Se puede acceder a una variable dentro de la misma clase, inclusive si es
    otra instancia mientras esta instancia este dentro del cuerpo de la clase base.
*/
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimirX = function (otra) {
        // Como se menciona arriba se puede acceder a la variable mediante una instancia mientras esta este dentro de la clase
        console.log(otra.x);
    };
    return A;
}());
var ejemplo = new A();
ejemplo.imprimirX(new A());
// Static
/*
    -Estos elementos no están asociados con una instancia particular de la clase. De forma que pueden ser accedido a través del constructor de la clase
    -En pocas palabras se puede acceder a estas propiedades sin necesidad de crear un objeto, solo mencionando la clase
    */
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        // Para acceder a una propiedad estática utilizamos this dentro de un método estático
        console.log("El valor de x es: " + this.x);
    };
    MiClase.prototype.imprimirX = function () {
        // Para acceder a una propiedad estática usamos el nombre de la clase dentro de un método de una instancia
        console.log("El valor de x en una instancia es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
// Para acceder a un método lo hacemos directamente desde la clase
MiClase.imprimirX();
// Para acceder a una propiedad estática lo hacemos directamente desde la clase
//console.log(`El valor obtenido de x es: ${MiClase.x}`);   Esta línea maraca error ya que x solo puede ser accedida dentro de la clase al ser private
var miClase = new MiClase();
miClase.imprimirX();
// Lo métodos estáticos tambén se heredan
var Base7 = /** @class */ (function () {
    function Base7() {
    }
    Base7.saludar = function () {
        console.log("Hola Mundo");
    };
    return Base7;
}());
var Derivada7 = /** @class */ (function (_super) {
    __extends(Derivada7, _super);
    function Derivada7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada7;
}(Base7));
Derivada7.saludar();
//Palabras reservadas en clases
/*
    No se pueden usar las siguientes palabras para nombrar campos estáticos:
    -name   -length     -call
*/
// Generics en clases
// Las clases y las interfaces pueden ser genéricas de forma que su tipo se infiere al momento de hacer la instancia
// Se tiene una clase que será del tipo T
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
// Se tiene un arreglo del tipo Juguete
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
// Se crea el objeto miCajaJuguetes a partir de la clase, de forma que contendra todos los juguetes insertados en el arreglo
var miCajaJuguetes = new Caja(misJuguetes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
var miCajaMaquillaje = new Caja(miMaquillaje);
// This
// Este tipo hace referencia de forma dinámica a la clase que lo utiliza. Solo se puede usar dentro de una clase
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var miCaja = new Caja2();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
// Esto puede ser útil para comparar los campos de múltiples instancias de la misma clase
var Caja3 = /** @class */ (function () {
    function Caja3(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Caja3.prototype.igualQue = function (otro) {
        return otro.contenido == this.contenido;
    };
    return Caja3;
}());
var caja1 = new Caja3("joyas");
var caja2 = new Caja3("joyas");
var caja3 = new Caja3("maquillaje");
console.log(caja1.igualQue(caja2)); // Esto devuelve true porque tienen el mismo contenido
console.log(caja1.igualQue(caja3)); // Esto devuelve false porque tienen contenido diferente
// Parametros como propiedades
/*
    Permiten convertir un parametro de un constructor en una propiedad de una clase con el mismo nombre y valor.
    Esto se hace colocando algún modificador de visibilidad como prefijo a los parametros del constructor
*/
var Video2 = /** @class */ (function () {
    function Video2(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video2;
}());
var miVideo2 = new Video2("Vacaciones", 60, "mp4");
console.log("Mi video de: " + miVideo2.nombre);
console.log("Tiene una duraci\u00F3n de: " + miVideo2.duracion + " segundos");
console.log("Y el formato es: " + miVideo2.formato);

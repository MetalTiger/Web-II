// Clases
class Punto {
    x: number;  // Si los campos no se inicializan su valor será any
    y = 2;     // Si se le pone un valor al campo será del tipo del valor asignado
    
    // Se asignan los valores a las variables mediante el constructor
    constructor (x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }

}

let miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);

// Campos Readonly
class Saludo {
    readonly nombre: string = "mundo";

    constructor (nuevoNombre: string) {
        if (!nuevoNombre) {
            this.nombre = nuevoNombre;      //La variable se puede usar ya que es válido dentro del constructor
        }
    }

    asignarNuevoNombre (nuevoNombre: string) {
        // this.nombre = nuevoNombre; Esta Línea marca error ya que no se puede asignar valor fuera del constructor

    }

}

const miNombre = new Saludo("Kevin");
//miNombre.nombre = "Juan"; // Esto es un error ya que no se puede cambiar el valor

// Sobrecarga de constructores
/* 
    Se puede simular la sobrecarga de constructores, nosotros definimoslas cabeceras de la sobrecarga
    y dentro del constructor que tiene cuerpo se hacen los cambios o implementaciones

*/
class Punto2 {
    constructor (x: number, y: number);
    constructor (s: string);
    constructor (xs: number | string, y?: number){


    }
    /*
        A un constructor no se le indica tipo de retorno, ya que
        retorna una instancia de la clase
    */

}

// Super
/*
    -Se utiliza cuando estamos trabajando una clase hija, se usa para llamar el constructor de la clase padre. 
    -Si hay sobrecarga de constructores en el padre se deben de mandar los parametros que ocupen. 
    -No es lo mismo heredar que tener acceso.    
    -Este se usa solo cuando entre las clases hay variables o métodos del mismo nombre, ya que asi
    se puede para diferenciar el llamado del método/variable del padre y del hijo
*/

class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor (){
        super();      
        this.lados = 2; //El this solo se puede utilizar despues del super  
    }
}

// Métodos
// Propiedades que actuan como funciones dentro de las clases.
// Se puede hacer referencia a variables de la clase dentro de los métodos mediante this

let titulo = "mi graduación";

class Video {
    titulo: string;

    constructor (titulo: string){
        this.titulo = titulo;
    }

    reproducir (): void {
        console.log(`${this.titulo} se esta reproduciendo.`);
    }

    // El this ayuda a referenciar a una variable interna (de una clase) de una externa (fuera de la clase).
    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo;           // Esto hace referencia a la variable fuera de la clase
        this.titulo = nuevoTitulo;      // Esto hace referencia a la variable o campo dentro de la clase

    }

}

const miVideo = new Video("Año Nuevo");
miVideo.reproducir();

// Setters y Getters
/* 
    -Se debe de tener un get y un set con el nombre de la propiedad, de forma que 
    el primero obtiene el valor mediante un return y el segundo le establece el valor a la variable. 
    -Se usan las palabras claves get y set.
    -Las propiedades deben ser accedidas mediante sus correspondientes getters y setters. De forma que nignuna variable debería ser publica. 
    -Es un get y set por variable.
*/

class Desfile {
    private _participantes = 0;

    public get participantes(): number {
        return this._participantes;
    }

    public set participantes(v: number){
        this._participantes = v;
    }
    // Los setters y getters deben ser del mismo tipo

}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;         //Se asigna mediante el set
console.log(desfileHoy.participantes);  //Se obtiene mediante el get

// Herencia con implements
/*
    -Se permite mediante el implements y solo se permite heredar de una clase o interfaz. 
    -Nos debemos asegurar que las firmas de los métodos sean iguales. 
    -Cuando digamos que un método no debería ir ahí entonces la herencia esta mal.
*/
// Como lo siguiente es una interfaz solo se permiten los nombres y tipos de variables y de métodos, no hay código. 
interface Encendible{
    encender(): void;
}

class Television implements Encendible {
    encender(): void{
        console.log("El televisor se encendió.");
    }
}

// Implements no cambia el tipo de la clase base ni sus métodos de ninguna forma
interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable{
    verificar(nombre): boolean{         // Al no definir el tipo en la función nombre se convierte en tipo any
        return nombre.toLowerCase();
    }

}

// Extends 
/* 
    Se usa para heredar entre clases, de forma que la clase hija tendrá todas las propiedades
    y métodos de la clase padre 
*/
class Animal {
    moverse() {
        console.log("El animal se mueve.");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

const miPerro2 = new Perro();
miPerro2.moverse();     // Método de la clase padre
miPerro2.ladrar();      // Método de la clase hija

// Sobrecarga
// Cuando se oculta un método o variable de la clase padre por la clase hija, para que este nuevo método sea usado.

class Padre {
    saludar() {
        console.log("Hola");
    }
}

class Hijo extends Padre {
    // Se le hace una sobrecarga al método saludar
    saludar(nombre?: string){       
        if (nombre) {          // Si se le manda un nombre entonces hará la acción redefinida
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();    // Si no, entonces usará el método del padre
        }
    }

}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");

// Se puede hacer referencia a una clase hija desde una clase padre mediante un objeto.
const h: Padre = new Hijo();
// En pocas palabras, tratas a los hijos como el padre, de forma que puedes acceder a las variables de este.

// Orden de inicialización de las variables
/* 
    1.-Los campos de la clase base son inicializados
    2.-El constructor de la clase base se ejecuta
    3.-Los campos de la clase derivada son inicializados
    4.-El constructor de la clase derivada se ejecuta
    5.-Se crea la instancia
*/
class Definicion {
    nombre = "definición";                              // (1)
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);     // (2)
    }
}

class Implementacion extends Definicion {}              // (3) y (4)

const d = new Implementacion();                         // (5)

// Visibilidad
// Public.- Las propiedades y/o métodos pueden ser accedidos desde cualquier parte
class Saludo5 {
    public saludar() {              
        console.log("Saludar!");
    }
    // Si no se pone visibilidad a métodos o campos se asume que es public

}
const inst = new Saludo5();
inst.saludar();                 // Se puede acceder al método desde fuera de la clase

// Protected
/*
    Es accesible desde el cuerpo de la clase en la que esta definido/padre y 
    desde el cuerpo de las clases hijas que tenga.
*/
class Saludo6 {
    protected getDestinatario() {
        return "Amigos";
    }
}

class SaludoEspecial extends Saludo6 {
    saludar () {
        console.log(`Hola ${this.getDestinatario()}`);  // Se accede al método protected del padre desde la clase hija
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario(); // No se puede acceder desde una instancia ya que el método no es público

/* 
    Si en la clase derivada se tiene una variable del mismo nombre que en la base pero 
    con visibilidad public se podrá hacer referencia a esta desde algún objeto, 
    si se quiere hacer referencia a la variable de la clase Padre se usa el super.
*/
class Base {
    protected m = 10;           // Esta variable es protected
}

class Derivada extends Base {
    m = 15;                     // Esta variables es public
}
const z = new Derivada();
console.log(z.m);               
/* 
    -En este punto se accede a la variable m de derivada, es decir vale 15, 
    esto porque no se usa super para referenciar la variable de la clase padre.
    -Además se puede acceder a la variable desde fuera porque la variable si cambia de visibilidad
    -En pocas palabras, la variable m pasa de estado protected a public y al ser llamada se toma el valor de Derivada ya que no se usa Super
*/

// Acceso a protected mediante herencia cruzada
class Base2 {
    protected x: number = 1;
} 

class Derivada1 extends Base2 {
    protected x: number = 5;
}

class Derivada2 extends Base2 {
    imprimirX(c1: Derivada2) {      // TS no permite que se puedan acceder elementos protected a través de diferentes clases que extienden la clase padre
        console.log(c1.x);
    }
}

// Private
/* 
    -Solo puede ser accedida desde el cuerpo de la clase en la cual fue definida. 
    -Estas pueden ser mostradas, modificadas u obtenidos mediante otros mecanismo como los getters y setters. 
    -Si una variable es private y se hace herencia esta va a seguir existiendo en la clase hija, pero no se podrá acceder a esta, si se quiere hacer esto, entonces se debe declarar sus respectivos setters y getters. 
    -Las buenas prácticas sugieren  que todo sea private con sus respectivos getters y setters.
*/

class Base5 {
    private x = 0;
}

class Derivada5 extends Base {    
    imprimirX(){
//        console.log(this.x);    // Marca error porque la variable es private
    }
}

const dd = new Base5();
//console.log(b.x);             // Tampoco se puede acceder desde fuera de la clase

/* 
    Se puede acceder a una variable dentro de la misma clase, inclusive si es 
    otra instancia mientras esta instancia este dentro del cuerpo de la clase base.
*/

class A {
    private x = 10;

    public imprimirX(otra: A) {
        // Como se menciona arriba se puede acceder a la variable mediante una instancia mientras esta este dentro de la clase
        console.log(otra.x);        
    }
}
const ejemplo = new A();

ejemplo.imprimirX(new A());

// Static
/* 
    -Estos elementos no están asociados con una instancia particular de la clase. De forma que pueden ser accedido a través del constructor de la clase
    -En pocas palabras se puede acceder a estas propiedades sin necesidad de crear un objeto, solo mencionando la clase
    */
class MiClase {
    private static x = 10;

    static imprimirX() {    // Este método puede ser usado desde la clase directamente
        // Para acceder a una propiedad estática utilizamos this dentro de un método estático
        console.log(`El valor de x es: ${this.x}`);
    }

    imprimirX(){            // Este método solo lo usan instancias
        // Para acceder a una propiedad estática usamos el nombre de la clase dentro de un método de una instancia
        console.log(`El valor de x en una instancia es: ${MiClase.x}`);
    }
}

// Para acceder a un método lo hacemos directamente desde la clase
MiClase.imprimirX();

// Para acceder a una propiedad estática lo hacemos directamente desde la clase
//console.log(`El valor obtenido de x es: ${MiClase.x}`);   Esta línea maraca error ya que x solo puede ser accedida dentro de la clase al ser private

const miClase = new MiClase();
miClase.imprimirX();

// Lo métodos estáticos tambén se heredan
class Base7 {
    static saludar() {
        console.log("Hola Mundo");
    }
}
class Derivada7 extends Base7{}

Derivada7.saludar();

//Palabras reservadas en clases
/* 
    No se pueden usar las siguientes palabras para nombrar campos estáticos:
    -name   -length     -call    
*/

// Generics en clases
// Las clases y las interfaces pueden ser genéricas de forma que su tipo se infiere al momento de hacer la instancia
// Se tiene una clase que será del tipo T
class Caja<T> {
    contenido: T;

    constructor(value: T){
        this.contenido = value;
        console.log(this.contenido);
    }
}
// Se tiene un Alias Juguete
type Juguete = {
    nombre: string;
};
// Se tiene un arreglo del tipo Juguete
const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
// Se crea el objeto miCajaJuguetes a partir de la clase, de forma que contendra todos los juguetes insertados en el arreglo
const miCajaJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });

const miCajaMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);

// This
// Este tipo hace referencia de forma dinámica a la clase que lo utiliza. Solo se puede usar dentro de una clase

class Caja2{
    contenido = "";
    
    set (valor: string) {
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja2 = new Caja2();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);

// Esto puede ser útil para comparar los campos de múltiples instancias de la misma clase
class Caja3 {
    contenido = "";

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    igualQue(otro: this) {
        return otro.contenido == this.contenido;
    }
}

const caja1 = new Caja3("joyas");
const caja2 = new Caja3("joyas");
const caja3 = new Caja3("maquillaje");

console.log(caja1.igualQue(caja2)); // Esto devuelve true porque tienen el mismo contenido
console.log(caja1.igualQue(caja3)); // Esto devuelve false porque tienen contenido diferente

// Parametros como propiedades
/*
    Permiten convertir un parametro de un constructor en una propiedad de una clase con el mismo nombre y valor.
    Esto se hace colocando algún modificador de visibilidad como prefijo a los parametros del constructor
*/
class Video2 {
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ){}
}

const miVideo2: Video2 = new Video2("Vacaciones", 60, "mp4");
console.log(`Mi video de: ${miVideo2.nombre}`);
console.log(`Tiene una duración de: ${miVideo2.duracion} segundos`);
console.log(`Y el formato es: ${miVideo2.formato}`);



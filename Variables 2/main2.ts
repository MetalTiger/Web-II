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
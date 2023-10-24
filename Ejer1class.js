class Empleado {
    constructor(nombre) {
        this.nombre = nombre || '';
        this.departamento = 'Informático';
    }
}

class Director extends Empleado {
    constructor(nombre) {
        super(nombre);
        this.informes = [];
    }
}

class Trabajador extends Empleado {
    constructor(nombre) {
        super(nombre);
        this.proyectos = [];
    }
}

class Ingeniero extends Trabajador {
    constructor(nombre, lenguajeDeProgramacion) {
        super(nombre);
        this.lenguajeDeProgramacion = lenguajeDeProgramacion || '';
        this.departamento = 'Ingenieria';
    }
}

const director1 = new Director("Pepito");
const director2 = new Director("Manolo");
const director3 = new Director("Hortencia");

director2.informes.push('Informe producción Enero', 'Informe producción Febrero', 'Informe producción Marzo');
director3.informes.push('Informe despido becario');

const ing1 = new Ingeniero("Juan", 'Java');
const ing2 = new Ingeniero("Carmen", 'C++');
const ing3 = new Ingeniero("Pablo", 'JS');
const ing4 = new Ingeniero("Emilio", 'HTML5');

const directores = [director1, director2, director3];
let a = "";
a += ('<br /><br />--------------********* NOMBRES DIRECTORES *********-------------');

for (const x of directores) {
    a += ('<br />Director → ' + x.nombre);
    if (x.informes.length > 0) {
        a += ('<br />--------------********* INFORMES de: ' + x.nombre + ' :');
        for (const y of x.informes) {
            a += ('<br />------------------------------********* ' + y);
        }
    }
}

const ingenieros = [ing1, ing2, ing3, ing4];
a += ('<br /><br />--------------********* INGENIEROS *********-------------');

for (const x of ingenieros) {
    a += ('<br />----------------------------********* El ingeniero ' + x.nombre + ' usa el lenguaje de programación ' + x.lenguajeDeProgramacion + ' en el departamento ' + x.departamento);
}

module.exports = {Empleado, Director, Trabajador, Ingeniero};
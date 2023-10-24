const chai = require('chai');
const expect = chai.expect;
const { Empleado, Director, Trabajador, Ingeniero } = require('../Ejer1class');

describe('Empleado', () => {
  it('debería crear una instancia de Empleado con nombre por defecto', () => {
    const empleado = new Empleado();
    expect(empleado).to.be.an.instanceOf(Empleado);
    expect(empleado.nombre).to.equal('');
    expect(empleado.departamento).to.equal('Informático');
  });

  it('debería crear una instancia de Empleado con nombre personalizado', () => {
    const empleado = new Empleado('Carlos');
    expect(empleado.nombre).to.equal('Carlos');
  });
});

describe('Director', () => {
  it('debería crear una instancia de Director', () => {
    const director = new Director('Pepito');
    expect(director).to.be.an.instanceOf(Director);
    expect(director.nombre).to.equal('Pepito');
    expect(director.departamento).to.equal('Informático');
  });

  it('debería agregar informes correctamente', () => {
    const director = new Director('Manolo');
    director.informes.push('Informe 1', 'Informe 2');
    expect(director.informes).to.have.lengthOf(2);
  });
});

describe('Trabajador', () => {
  it('debería crear una instancia de Trabajador', () => {
    const trabajador = new Trabajador('Laura');
    expect(trabajador).to.be.an.instanceOf(Trabajador);
    expect(trabajador.nombre).to.equal('Laura');
    expect(trabajador.departamento).to.equal('Informático');
  });

  it('debería agregar proyectos correctamente', () => {
    const trabajador = new Trabajador('Pedro');
    trabajador.proyectos.push('Proyecto A', 'Proyecto B');
    expect(trabajador.proyectos).to.have.lengthOf(2);
  });
});

describe('Ingeniero', () => {
  it('debería crear una instancia de Ingeniero', () => {
    const ingeniero = new Ingeniero('Juan', 'Java');
    expect(ingeniero).to.be.an.instanceOf(Ingeniero);
    expect(ingeniero.nombre).to.equal('Juan');
    expect(ingeniero.lenguajeDeProgramacion).to.equal('Java');
    expect(ingeniero.departamento).to.equal('Ingenieria');
  });

  it('debería usar un lenguaje de programación por defecto si no se proporciona', () => {
    const ingeniero = new Ingeniero('Carmen');
    expect(ingeniero.lenguajeDeProgramacion).to.equal('');
  });
});

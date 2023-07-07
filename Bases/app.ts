// Crear interfaces

interface Auto {
  encender: boolean
  velocidadMaxima: number
  acelerar(): void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villano {
    reir?: boolean
    comer?: boolean
    llorar?: boolean
}

const guason: Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Caracteres {
  (c:string[]):number
}

const ciudadGotica: Caracteres = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Caracteristicas {
  nombre: string
  edad: number
  sexo: string,
  estadoCivil: string
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Caracteristicas {
  public nombre: string
  public edad: number
  public sexo: string
  public estadoCivil: string
  public imprimirBio(): void {
      console.log("yei")
  }
}
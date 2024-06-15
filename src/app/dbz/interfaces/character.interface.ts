//No es necesario poner .interface en el nombre del archivo
//pero es una buena práctica para indicar que el archivo contiene una interface
// no se importan en los archivos module

export interface Character {
  id?: string;
  name: string;
  power: number;
}

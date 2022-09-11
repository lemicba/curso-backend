//Declaro clase Usuario

class Usuario {
  constructor (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = []
    this.mascotas = [];
  }
  
	getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  
	countMascotas() {
    return this.mascotas.length;
  }
  
  addBook(nombre, autor) {
    return this.libros.push({
      nombre: nombre,
      autor: autor,
    })
  }
  
  getBookNames() {
		return this.libros.map(libro => libro.nombre);
  }
}

//Creamos un usuario a partir de la clase Usuario
const primerUsuario = new Usuario('Emiliano', 'Ceballos');

//Llamar a getFullName
console.log(primerUsuario.getFullName())

//Agregar Mascotas
primerUsuario.addMascota('Pollo');
primerUsuario.addMascota('Perro');
primerUsuario.addMascota('Pony');
primerUsuario.addMascota('Dragon');

//Cantidad de mascotas
console.log("El total de mascotas es : " + primerUsuario.countMascotas());

//Agregamos libros
primerUsuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');
primerUsuario.addBook('Harry Potter', 'J.K. Rowling');
primerUsuario.addBook('El Psicoanalista', 'John Katzenbach');
primerUsuario.addBook('El Club de los Psicopatas', 'John Katzenbach');

//Llamamos a getBookNames
console.log(primerUsuario.getBookNames());
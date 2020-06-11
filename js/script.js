//Se utiliza let para crear elementos unicos
let nick = "Zitr0";
var nombreCompleto = "Camilo";

var x = 7;
var y = 5;
var suma = x + y;

// Con alt+96  se sacan las tildes invertidas, así se crea una plantilla
var info = `Mi nombre es ${nombreCompleto} y mi nickname es ${nick}`;

//Crear constantes
const PI = 3.14;

var revisaConsola = "Validar la consola";

document.getElementById("caja").innerHTML = revisaConsola;
console.log(nombreCompleto + " " + nick + " " + (suma + y));
console.log(info);
console.log(PI);

//Strings

let color = "rojo \nverde";
console.log(color);

let fruta = "manzana";

/* Para contar caracteres se utiliza la función length*/
console.log(fruta.length);

/* Para poner el string en mayuscula */
console.log(fruta.toUpperCase());

/* Para poner el string en minuscula */
console.log(fruta.toLowerCase());

let curso = "javascript";
/* Para verificar la posición de una letra dentro de un string */
console.log(curso.indexOf("5"));

/*Para extraer determinado string según posiciones*/
console.log(curso.slice(2, 5));

/*Reemplazar string con otro string*/
console.log(curso.replace("javascript", "php"));

/*Separar string*/
console.log(curso.split(""));

// convertir string a numerico

var numeroUno = "1";
var numeroDos = "2";

console.log(Number(numeroUno) + Number(numeroDos));

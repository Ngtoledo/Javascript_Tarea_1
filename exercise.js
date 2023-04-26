//Declaro la variable a utilizar.
//parseInt convierte una cadena de caracteres en un número entero.
//promtmostrará el mensaje 
let numero = parseInt(prompt("Ingrese un número: "));


function piramide(numero){ //funcion que toma de parameto el numero ingresado por el usuario
  for(let i=1;i<=numero;i++){
    let fila= ''; //inicializo la variable como cadena vacia 
    for(let j=1;j<=i;j++){
      fila += j + ' '; //agrego el número en el espacio en blanco
    }
    console.log(fila); //cadena dr caracteres que representa una fila de la pirámide
  }
}

piramide(numero); //llamo a la funcion

//crtl+shit+7
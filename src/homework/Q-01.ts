(() => {

  /* NOMBRE CORRECTAMENTE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  let emailList = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(emailList);

  //Lista de compras de un carrito
  const productos = [
    {product: 'switch'},
    {product: 'X-box Controller'},
    {product: 'steam-gift-card'},
  ];
  let carrito = [productos];
  console.log(carrito);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  function sumar(sum1: number){
    let resultado;
    resultado = sum1 + 3;
    return resultado;
  }

  console.log(sumar);
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizarPrimeraLetra(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(capitalizarPrimeraLetra("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let www: boolean = false;

  if(www) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;
  if(c)
    alert('welcome');
  else
    alert('¡error!');
  //variable que se encarga de verificar

  //variable para hallar el promedio de 3 numeros
  let nota1 = (1);
  let nota2 = (2);
  let nota3 = (3);
  let promedio = (nota1 + nota2 + nota3) / 3;
  console.log(promedio);
  
  //variable que almacena el valor de PI
  let pizza: number = (Math.PI);
  console.log(pizza);
  
  //variable que controla si un archivo es modificable 
  let Bv: boolean = false;

  if(Bv) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  let euler: number = (Math.E); 
  console.log(euler);

})();
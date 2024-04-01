(() => {

  /* Haz uso de nomenclaturas correctas en la variables
     mantener los nombres dados
  */
 

  //class word_to_word {}
  class word_to_word{
    word_to_word: any;
    constructor(word_to_word: any){
      this.word_to_word = word_to_word;
    }
  }
  console.log(word_to_word);

  //  interface props {}
  
  const Props = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 3,
  };
  console.log(Props.prop1);
  
  // type moves = {}
  const Moves = {
    "trackle": "Trackle",
    "kick": "Kick",
    "punch": "Punch",
  };
  console.log(Moves.trackle);

  //function GET_FOOD() {}
  function GET_FOOD(foodId: string | number){
    const foodData = {
      1: "pizza",
      2: "pasta",
      3: "burrito",
      4: "sandwich",
    };
    if(foodId in foodData){
      return foodData[foodId];
    } else{
      return "Alimento no existe";
    }
  }
  console.log(GET_FOOD(1));

  function SETPRODUCTNAME(product: any, newName: any) {
    if(product && newName){
      product.name = newName;
      console.log('Nombre del producto actualizado a: ${newName}');
    } else {
      console.error('Error: no se proporciono un producto o un nuevo nombre.');
    }
  }
  let myProduct = {
    id: 1,
    name: "camiseta",
    price: 20
  };
  SETPRODUCTNAME(myProduct, "pantalon");
  console.log(myProduct);

  //type directions = {}
  type Directions = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
  let direction: Directions;
  direction = 'NORTH';
  console.log(direction);

  //interface IDBPROPS {}
  const IDBPROPS = {
      dbName: 'myDataBase',
      dbversion: 1,
      objectStoreName: 'myObjectStore',
      keypath: 'id',
  };
  console.log(IDBPROPS.dbName);

  // class ATOBTOC {}
  class ATOBTOC {
    a: number;
    b: number;
    constructor(num1: number, num2: number) {
      this.a = num1;
      this.b = num2;
    }

    calculateC(){
      return this.a + this.b;
    }
  }
  const instance = new ATOBTOC(5, 3);
  console.log(instance.calculateC());

  // los 2 valores siguientes son constantes.

  const constant_one = 3;
  console.log(constant_one);

  let constant_two = 4;
  console.log(constant_two);

})();
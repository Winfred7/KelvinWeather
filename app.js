//variable declaration to hold temp. in kelvin
const kelvin=0;
//convert kelvin to celsius 
const celsius =kelvin - 273;
//convert celsius to fahrenheit
let fahrenheit=celsius*(9/5) + 32;
//floor rounds value to nearest whole integer
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`);
//convert to Newton
let newton=celsius*(33/100);
//round down
newton =Math.floor(newton);
console.log(`The temperature is ${newton} degree Newton Scale`);

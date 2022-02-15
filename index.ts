console.log("HEllo world");


//Implicit Types

let varString = "Hello world";

varString = "2"; // dili pwede mag integer if naa na data type

//Explicit Types:
let varName:string = "Joseph";
let varAge:number=21;

//tupple nag create ta'g new data type with define datatype
type strNNumberNObject = [string,number,object];

let nameNAge: strNNumberNObject = ["jOSEPH",21,{name:"joseph",age:21}];

//enums is helpful addition to the standard set of data type from javascript, thus allow the developer to define a set of named constant. This makes it easy to document intents, a set of distinct cases

enum Cedenos{
    Jushua,
    Joseph,
    Jacob,
    Joyce,
    Lala,
    Aj
}
let joseph = Cedenos.Joseph;
console.log(joseph);

// intrface
interface User {
    id:string;
    name:string;
    age:number;
    email:string;
    contact:number;
}

const user:User ={
    id:'xss323',
    name:'Joseph',
    age:21,
    email:'joseph@gmail.com',
    contact:0912345678
}

// Composing types -> Union 

type windowActions = 'open' | 'close';

const windowAct:windowActions = 'out' ; // mag error ni sya since wala sya sa gi set sa type


// sample union of data type to a function arguement, 2nd argueent array of string, 3rd arguement array of number, 4th any datatype of array
const getLength = (param: string | string[] | number[] | any[])=>{
  return  param.length;
}

getLength(21) // mag error ni sya kay wala sa data type nga gi set ang pure number lang
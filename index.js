/* 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
*/
let arrayVacio = [];
/*
 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
 */
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
 /*
 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
*/
let arrayNumerosPares = [0,2,4,6,8];
/*
 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
 */
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
 /*

Funciones
 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
 */
function suma (num1, num2){
    suma12=num1+num2;
    return suma12;
}
 /*

 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
*/
function potenciacion (num1,num2){
    eleva12=num1**num2;
    return eleva12
}
/*
 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
*/
function separarPalabras(frase){
    const arrayPalabras = frase.split(" ");
    return arrayPalabras;
}
/*
 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
*/
function repetirString(palabra, num){
    for(var i = 0; i < num; i ++){
		let frase = frase+palabra;
	  } 
	  return frase;
}

function repetirString(frase, num){
    for(var i = 0; i < num; i ++){
		console.log(frase);
	  } 
}

/*
 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
*/
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
}
/*
Mezclando arrays y funciones
 10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
*/
function ordenarArray(arr){
    return arr.sort((a,b) => a-b);
}
/*
 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
*/
function obtenerPares(arr){
    let newArr = [];
    for (let i=0; i < arr.length; i++){
        if (arr[i]%2===0){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
/*
 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
*/
function pintarArray(arr){
    let newString = arr.toString();
    return newString;
}
/*
 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
*/
function arrayMapi(arr,func){
    newArr = [];
    for(let i=0; i<arr.length; i++){
        let newVal = func(arr[i]);
        newArr.push(newVal);
    }
    return newArr;
}
/*
 14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
*/
function eliminarDuplicados(arr) {
    for (let i=0; i<arr.length; i++){
        if (arr.filter(arr[i]) == true){
            delete arr[i]
        }
    }
}


/*
Iteraciones 🏰 proyecto 🏰
Arrays
 15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
 */
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
 /*

 16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
 */
const holaMundo = ["Hola", "Mundo"];
 /*

 17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
*/
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
/*
 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
*/
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
/* 
Funciones
 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
*/
function multiplicacion(num1,num2){
let resultado = num1 * num2;
return resultado;
}
/*
 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
*/
function division(num1,num2){
let resultado = num1 / num2;
return resultado;
}
/*
 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
*/
function esPar(num){
if (num %2 == 0){
return true
} else {
return false
}
}
/*
 22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
*/
function resta(num1,num2){
    return num1-num2;
}
const arrayFunciones = [suma(), resta(), multiplicacion()];
/*
Mezclando arrays y funciones
 23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
*/
function ordenarArray2(arrNum){
    return arrNum.sort((a, b) => a - b);
}


/*
 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
*/
function obtenerImpares(arrNum){
    const impArr = [];
    for (let i=0; i<arrNum.length; i++){
        if(arrNum[i] %2 !== 0){
            impArr.push(arrNum[i]);
            }
    }
    return impArr;
} 

/*
 25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
*/
function sumarArray(arrNum){
    let suma= 0;
    for(let i=0; i<arrNum.length; i++){
        suma= suma + arrNum[i];
    }
    return suma;
}
/*
 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24 */
 function multiplicarArray(arrNum){
    let multi= 1;
    for(let i=0; i<arrNum.length; i++){
        multi= multi * arrNum[i];
    }
    return multi;
 }
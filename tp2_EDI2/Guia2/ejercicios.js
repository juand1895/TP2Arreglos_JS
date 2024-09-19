//Areglos con ipos de datos primitivos
//1)Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.
/*let numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Sumar cada elemento
}

console.log(suma); // Resultado: 15*/

//2)Promedio: Calcula el promedio de los números en un arreglo.
/*let numeros = [10, 20, 30, 40, 50];
let suma = 0;

// Sumar todos los elementos
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calcular el promedio
let promedio = suma / numeros.length;

console.log("El promedio es:", promedio);*/

//3) Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de
//números.
//FORMA CLASICA
/*let numeros = [10, 20, 5, 8, 30, 15];
let max = numeros[0]; // Inicializamos el máximo con el primer elemento
let min = numeros[0]; // Inicializamos el mínimo con el primer elemento

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i]; // Actualizamos el máximo
    }
    if (numeros[i] < min) {
        min = numeros[i]; // Actualizamos el mínimo
    }
}

console.log("El número máximo es:", max); // 30
console.log("El número mínimo es:", min); // 5

//UTILIZANDO  Usando los métodos Math.max() y Math.min()
// junto con el operador de propagación (...)
let numeros = [10, 20, 5, 8, 30, 15];

let max = Math.max(...numeros); // Encontrar el máximo
let min = Math.min(...numeros); // Encontrar el mínimo

console.log("El número máximo es:", max); // 30
console.log("El número mínimo es:", min); // 5*/

//4)Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
//índice, si existe.
/*function buscarValor(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; // Retorna el índice si encuentra el valor
        }
    }
    return -1; // Retorna -1 si no encuentra el valor
}

// Ejemplo de uso
let numeros = [10, 20, 5, 8, 30, 15];
let valorBuscado = 30;

let indice = buscarValor(numeros, valorBuscado);

if (indice !== -1) {
    console.log("El valor", valorBuscado, "se encuentra en el índice:", indice);
} else {
    console.log("El valor", valorBuscado, "no se encuentra en el arreglo.");
}*/

//5)Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
//números pares y otro con números impares.
/*let numeros = [10, 21, 4, 15, 8, 33, 20];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]); // Si el número es par, lo agregamos al arreglo 'pares'
    } else {
        impares.push(numeros[i]); // Si el número es impar, lo agregamos al arreglo 'impares'
    }
}

console.log("Números pares:", pares); // [10, 4, 8, 20]
console.log("Números impares:", impares); // [21, 15, 33]

//ALTERNATIVA USANDO METODO FILTER
let numeros = [10, 21, 4, 15, 8, 33, 20];

let pares = numeros.filter(num => num % 2 === 0);
let impares = numeros.filter(num => num % 2 !== 0);

console.log("Números pares:", pares); // [10, 4, 8, 20]
console.log("Números impares:", impares); // [21, 15, 33]*/

//6)Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
//OPCION USANDO UN CONJUNTO (SET)
/*function eliminarDuplicados(arr) {
    return [...new Set(arr)]; // Convierte el arreglo en un Set y luego lo convierte de nuevo en un array
}

// Ejemplo de uso
let numeros = [1, 2, 3, 1, 2, 4, 5];
let sinDuplicados = eliminarDuplicados(numeros);

console.log("Arreglo sin duplicados:", sinDuplicados); // [1, 2, 3, 4, 5]
//OPCION 2 Usando un bucle for y un objeto auxiliar
function eliminarDuplicados(arr) {
    let resultado = [];
    let seen = {}; // Un objeto para llevar un registro de los elementos que ya hemos visto

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) { // Si el valor no ha sido visto antes
            resultado.push(arr[i]);
            seen[arr[i]] = true; // Lo marcamos como visto
        }
    }

    return resultado;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 1, 2, 4, 5];
let sinDuplicados = eliminarDuplicados(numeros);

console.log("Arreglo sin duplicados:", sinDuplicados); // [1, 2, 3, 4, 5]*/

//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.
// usando el metodo sort 
/*let numeros = [5, 2, 9, 1, 7, 3];

numeros.sort((a, b) => a - b);

console.log("Arreglo ordenado de forma ascendente:", numeros); // [1, 2, 3, 5, 7, 9]
// ALTERNATIVA SIN USAR METODO DE COMPARACION
let numeros = [5, 2, 9, 1, 7, 3];

numeros.sort(); // Esto ordenará como si fueran strings

console.log("Orden incorrecto (como strings):", numeros); // [1, 2, 3, 5, 7, 9]*/


//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.
/*function eliminarValor(arr, valor) {
    return arr.filter(elemento => elemento !== valor); // Filtra los elementos que no son iguales al valor dado
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 2, 5, 2];
let resultado = eliminarValor(numeros, 2);

console.log("Arreglo sin el valor 2:", resultado); // [1, 3, 4, 5]

//Alternativa con for y splice() (modificando el arreglo original):

let numeros = [1, 2, 3, 4, 2, 5, 2];

for (let i = numeros.length - 1; i >= 0; i--) {
    if (numeros[i] === 2) {
        numeros.splice(i, 1); // Elimina el elemento en la posición 'i'
    }
}

console.log("Arreglo sin el valor 2:", numeros); // [1, 3, 4, 5]*/

//9)Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya
//duplicados.

/*function combinarArreglosSinDuplicados(arr1, arr2) {
    let combinado = arr1.concat(arr2); // Combina los dos arreglos
    return [...new Set(combinado)]; // Usa Set para eliminar duplicados
}

// Ejemplo de uso
let arreglo1 = [1, 2, 3, 4];
let arreglo2 = [3, 4, 5, 6];
let resultado = combinarArreglosSinDuplicados(arreglo1, arreglo2);

console.log("Arreglo combinado sin duplicados:", resultado); // [1, 2, 3, 4, 5, 6]

//Alternativa sin Set (con bucle for):
/*function combinarArreglosSinDuplicados(arr1, arr2) {
    let combinado = [...arr1]; // Copiamos el primer arreglo

    for (let i = 0; i < arr2.length; i++) {
        if (!combinado.includes(arr2[i])) { // Si el valor no está en el arreglo combinado
            combinado.push(arr2[i]); // Lo agregamos
        }
    }

    return combinado;
}

// Ejemplo de uso
let arreglo1 = [1, 2, 3, 4];
let arreglo2 = [3, 4, 5, 6];
let resultado = combinarArreglosSinDuplicados(arreglo1, arreglo2);

console.log("Arreglo combinado sin duplicados:", resultado); // [1, 2, 3, 4, 5, 6]*/









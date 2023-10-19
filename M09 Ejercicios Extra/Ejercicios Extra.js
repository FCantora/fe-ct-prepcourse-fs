/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arrayOfArrays = [];

   for(var prop in objeto) {
      var array = []
      array.push(prop);
      array.push(objeto[prop]);
      arrayOfArrays.push(array);      
   }
   return arrayOfArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objetoNuevo = {}
   let separado = string.split('')
   let ordenado = separado.sort()
   console.log(ordenado);

   for(let i = 0; i < ordenado.length; i++) {
      if(objetoNuevo.hasOwnProperty(ordenado[i])) {
         objetoNuevo[ordenado[i]]++;
      } else {
         objetoNuevo[ordenado[i]] = 1;
      }
   }
   return objetoNuevo;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let array = string.split('');
   let mayus = [];
   let minus = [];

   for(let i = 0; i < array.length; i++) {
      if(array[i] == array[i].toUpperCase()) {
         mayus.push(array[i]);
      } else {
         minus.push(array[i]);
      }
   }
   let sumado = [...mayus, ...minus];
   let todoJunto = sumado.join('')
   return todoJunto
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split(' ');
   let dadoVuelta = [];

   for(let i = 0; i < palabras.length; i++) {
      var reversa = palabras[i].split('').reverse().join('');
      dadoVuelta.push(reversa);
   }
   let newString = dadoVuelta.join(' ');
   return newString;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let string = numero.toString();
   let aArray = string.split('').reverse().join('');
   if(string == aArray) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   console.log(string);
   let array = string.split('');
   let arrayFinal = [];

   for(let i = 0; i < array.length; i++) {
      if(array[i] !== "a" && array[i] !== "b" && array[i] !== "c") {
         arrayFinal.push(array[i])
      }
   }
   let stringFinal = arrayFinal.join('');
   return stringFinal
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b) {
      return a.length - b.length
   })
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const commonArray = array1.filter(elemento=> array2.includes(elemento));

   return commonArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

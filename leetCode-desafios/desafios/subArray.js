/* Exercício: Substituir Elementos do Array
Descrição:
Crie uma função chamada substituirNumeros que recebe um array de números e dois valores: antigo e novo. A função deve substituir todas as ocorrências de antigo no array pelo valor novo.

Especificações:

O array original deve ser modificado (não crie um novo array).
Se o valor antigo não existir no array, o array deve permanecer inalterado.
A função deve funcionar com números repetidos no array.*/

function substituirNumero(array, ant, nov){
    for(let i = 0; i < array.length; i++){
        if(array[i] == ant){
            array[i] = nov;
        }
    }

    return array;
}

let arr = [0, 2, 4, 4, 6, 9, 2, 4]

let func = substituirNumero(arr, 4, 8);

console.log(func); /*[
    0, 2, 8, 8,
    6, 9, 2, 8 
  ]*/
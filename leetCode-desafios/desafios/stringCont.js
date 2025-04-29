/*
### Exercício: Frequência de Caracteres

**Descrição**:
Crie uma função chamada `contarCaracteres` que recebe uma string como entrada e retorna um objeto com a contagem de cada caractere presente na string.

**Especificações**:
- A função deve considerar maiúsculas e minúsculas como caracteres distintos (por exemplo, "A" e "a" são diferentes).
- O objeto de retorno deve ter como chave o caractere e como valor o número de vezes que ele aparece na string.

**Exemplo de Entrada e Saída**:

contarCaracteres("banana");
// Saída esperada: { b: 1, a: 3, n: 2 }

contarCaracteres("Hello, World!");
// Saída esperada: { H: 1, e: 1, l: 3, o: 2, ',': 1, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }



Esse exercício vai te ajudar a:
- Praticar a criação e manipulação de objetos em JavaScript.
- Desenvolver lógica para iterar e contar elementos.
- Aplicar conhecimentos em estrutura de controle de fluxo (loops e condicionais).
*/



function contarString(str){
    let matriz = {}

    for(let i = 0; i < str.length; i++){
       let aux = str[i];
       if(!matriz[aux]){
            matriz[aux] = 1;
       }
       else{
        matriz[aux] += 1;
       }
    }

    return matriz;
}

let str = contarString("jogos");

console.log(str);
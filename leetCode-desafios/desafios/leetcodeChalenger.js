/* Ao percorrer a string romana, você pode comparar o valor atual com o próximo valor. Se o valor atual for menor que o próximo, você deve subtrair esse valor do total (como em IV = 4), caso contrário, deve somar.*/

const romanToInt = function(s){
    let symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let aux = 0;
    for(let i = 0; i < s.length; i++){
        let str = s[i]
        let strY = s[i + 1]

        if (str in symbol && strY in symbol && symbol[str] < symbol[strY]) {
            aux -= symbol[str]; // Subtrai o valor se str < strY
        } else {
            aux += symbol[str]; // Adiciona o valor caso contrário
        }
    }

    return console.log(aux)
}

romanToInt('XX')


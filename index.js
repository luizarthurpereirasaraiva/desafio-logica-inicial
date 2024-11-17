// ## Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let heroiNome = "Balian"
let EXP = 1500
let ranking = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[0])
}
if (1001 < EXP < 2000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[1])
}
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[2])
}
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[3])
}
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[4])
}
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[5])
}
if (EXP < 1000){
    console.log("O herói de nome "+ heroiNome +" está no nível de "+ ranking[6])
}
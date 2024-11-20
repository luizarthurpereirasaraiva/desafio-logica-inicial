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

let classeRPG = ["escudeiro/a", "cavaleiro/amazona", "mago/a", "ladino/a", "arqueiro/a", "clérico/a", "necromante", "paladino/a"]
let EXP = [900, 1500, 2800, 5400, 7300, 8500, 9700, 11000]  
for (let i = 0; i < classeRPG.length; i++){
    let nome = classeRPG[i]
    let xp = EXP[i]
    let ranking;

if (xp < 1000){
    ranking = "Ferro";
} else if (xp >= 1001 && xp <= 2000){
    ranking = "Bronze";
} else if (xp >= 2001 && xp <= 5000){
    ranking = "Prata";
} else if (xp >= 5001 && xp <= 7000){
    ranking = "Ouro";
} else if (xp >= 7001 && xp <= 8000){
    ranking = "Platina";
} else if (xp >= 8001 && xp <= 9000){
    ranking = "Ascendente";
} else if (xp >= 9001 && xp <= 10000){
    ranking = "Imortal";
} else if (xp >= 10001){
    ranking = "Radiante";
}
console.log("O/A personagem da classe "+ nome +" tem "+ xp+" pontos de experiência e está no nível de "+ ranking+".")
}
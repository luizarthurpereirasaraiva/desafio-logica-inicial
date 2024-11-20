// A ideia foi criar um ranking a partir da classe de herói/heroína. Com a atribuição de experiência variando 
// entre as classes, ficou notória a preferência/predileção por algumas classes em detrimento de outras.

let classesRPG = ["escudeiro/a", "cavaleiro/amazona", "mago/a", "ladino/a", "arqueiro/a", "clérico/a", "necromante", "paladino/a"]
let experiencia = [900, 1500, 2800, 5400, 7300, 8500, 9700, 11000]  
for (let i = 0; i < classesRPG.length; i++){
    let nome = classesRPG[i]
    let xp = experiencia[i]
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
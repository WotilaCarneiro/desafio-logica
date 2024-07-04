let nomeHeroi = "Mitzvar";
let pontosXp = 8000;
let nivelXp = "";

if (pontosXp < 1000) {
    nivelXp = 'Ferro';
} else if (pontosXp >= 1000 && pontosXp <= 2000) {
    nivelXp = 'Bronze';
} else if (pontosXp >= 2001 && pontosXp <= 5000) {
    nivelXp = 'Prata';
} else if (pontosXp >= 5001 && pontosXp <= 6000) {
    nivelXp = 'Ouro';
} else if (pontosXp >= 6001 && pontosXp <= 7000) {
    nivelXp = 'Platina';
} else if (pontosXp >= 7001 && pontosXp <= 8000) {
    nivelXp = 'Diamante';
} else if (pontosXp >= 8001 && pontosXp <= 9000) {
    nivelXp = 'Ascendente';
} else if (pontosXp >= 9001 && pontosXp <= 10000) {
    nivelXp = 'Imortal';
} else if (pontosXp > 10000) {
    nivelXp = 'Radiante';
} else {
    nivelXp = 'Nível Desconhecido';
}

console.log(`O herói de nome ${nomeHeroi} está no nível ${nivelXp} com ${pontosXp} pontos`);


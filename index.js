
let continuar = true;

while (continuar) {
 
  let nome = prompt("Digite o nome do herói:");
  let xp = parseInt(prompt("Digite a quantidade de XP do herói:"));
  let nivel = "";


  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  } else {
    nivel = "Desconhecido";
  }

 
  alert(`O Herói de nome ${nome} está no nível de ${nivel}`);

  
  let resposta = prompt("Deseja inserir outro herói? (s/n)");
  if (resposta.toLowerCase() !== "s") {
    continuar = false;
  }
}

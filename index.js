const Ranks = {
  FERRO: "Ferro",
  BRONZE: "Bronze",
  PRATA: "Prata",
  OURO: "Ouro",
  PLATINA: "Platina",
  ASCENDENTE: "Ascendente",
  IMORTAL: "Imortal",
  RADIANTE: "Radiante",
};

class Hero {
  constructor(name, exp) {
    this.name = name;
    this.exp = exp;
    switch (true) {
      case this.exp <= 1000:
        this.rank = Ranks.FERRO;
        break;
      case this.exp <= 2000:
        this.rank = Ranks.BRONZE;
        break;
      case this.exp <= 5000:
        this.rank = Ranks.PRATA;
        break;
      case this.exp <= 7000:
        this.rank = Ranks.OURO;
        break;
      case this.exp <= 8000:
        this.rank = Ranks.PLATINA;
        break;
      case this.exp <= 9000:
        this.rank = Ranks.ASCENDENTE;
        break;
      case this.exp <= 10000:
        this.rank = Ranks.IMORTAL;
        break;
      case this.exp > 10000:
        this.rank = Ranks.RADIANTE;
        break;
    }
  }
}

const jonas = new Hero("Jonas", 9000);
const alfredo = new Hero("Alfredo", 500);
const kazuma = new Hero("Kazuma", 17500);

console.log("O herói", jonas.name, "está no nível", jonas.rank);
console.log("O herói", alfredo.name, "está no nível", alfredo.rank);
console.log("O herói", kazuma.name, "está no nível", kazuma.rank);

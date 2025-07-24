class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido"; 
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroiMago = new Heroi("Merlin", 1000, "mago");
const heroiGuerreiro = new Heroi("Arthur", 30, "guerreiro");
const heroiMonge = new Heroi("Liu Kang", 45, "monge");
const heroiNinja = new Heroi("Hanzo", 28, "ninja");
const heroiDesconhecido = new Heroi("Desconhecido", 50, "cavaleiro");

console.log("--- Testando os heróis ---");
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
heroiDesconhecido.atacar();
console.log("--- Fim dos testes ---");
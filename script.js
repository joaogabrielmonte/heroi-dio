class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}.`);
    }
    ataque() {
        return this.tipo === "mago" ? "magia" :
            this.tipo === "guerreiro" ? "espada" :
                this.tipo === "monge" ? "luta" :
                    this.tipo === "ninja" ? "shuriken" :
                        "ataque desconhecido";



    }

}

const heroi1 = new Heroi("jotinha", 15, "monge");

heroi1.atacar();

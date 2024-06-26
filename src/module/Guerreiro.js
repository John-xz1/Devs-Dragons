import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro';
    static descricao = 'Você será esmagado pela fúria do guerreiro!';
    forca;

    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }

    obterInsignia() {
        if(this.level >= 7 && this.forca >= 5) {
            return 'Guerreiro Furioso'
        }
        return super.obterInsignia();
    }
}
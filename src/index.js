import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-Mago.js";
import { Guerreiro } from "./modules/Guerreiro.js";

const magoDalto = new Mago('Daltao', 6, 'pinga', 7, 5);
const arqueiroVicente = new Arqueiro('Vicente', 9, 7);

const arqueiroMagoJonas = new ArqueiroMago('Jonas', 7, 6, 'dipirona', 5, 8);
const guerreiroLancaster = new Guerreiro('Lancaster', 8);


const personagens = [magoDalto, arqueiroVicente, arqueiroMagoJonas, guerreiroLancaster];

new PersonagemView(personagens).render();

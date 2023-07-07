import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander")

// Pokemon.prototype.customName = "Pikachu"

charmander.savePokemonToDB(2)

console.log(charmander)
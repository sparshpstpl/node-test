import { Fruitbasket } from "./Fruitbasket.js";
const fruitbasket = new Fruitbasket()
console.log(`How many fruits are there in the basket? Answer: ${fruitbasket.mixedFruits().length} [${fruitbasket.uniqueFruits().join()}]`)
console.log(`How many fruits of a specific type are in the basket? Answer: ${JSON.stringify(fruitbasket.uniqueFruitsWithCounts())}`)
console.log(`How heavy is the basket? Answer: ${JSON.stringify(fruitbasket.basketWeight())} Kg`)
console.log(`Output`, fruitbasket.output())
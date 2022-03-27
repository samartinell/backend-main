//import { ProductCategory } from "../models/product-categories.ts";

import { ProductCategory } from "../models/product-categories";
import { Unit } from "../models/unit";



export async function seedtest() {
//ProductCategory
console.log("test");
const gramm = {
    name: "Gramm",
    shortName:"g"
} as Unit;
const stueck = {
    name: "Stück",
    shortName:"st"
} as Unit;
await new ProductCategory( {
    name: "Cherry Tomaten",
    amount: 250,
    climateScore: 2,
    tags: ["Tomaten", "Cherry Tomaten", "Gemüse"],
    unit: gramm
}).save();

 await new ProductCategory( {
    name:  "Tomaten",
    amount: 250,
    climateScore: 2,
    tags: ["Tomaten", "Gemüse"],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Große Tomaten",
    amount: 250,
    climateScore: 2,
    tags: ["Tomaten", "Gemüse", "Große Tomaten"],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Tomaten stückig",
    amount: 400,
    climateScore: 1,
    tags: ["Tomaten", "Gemüse", "stückig"],
    unit: gramm
}).save();
 await new ProductCategory( {
    name:  "Tomaten passiert",
    amount: 400,
    climateScore: 1,
    tags: ["Tomaten", "Gemüse", "passiert"],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Tomatenketchup",
    amount: 500,
    climateScore: 0,
    tags: ["Tomaten", "Ketchup",],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Ketchup",
    amount: 500,
    climateScore: 0,
    tags: ["Tomaten", "Ketchup",],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Banane",
    amount: 3,
    climateScore: 1,
    tags: ["Banane", "Obst",],
    unit: stueck
}).save();

await new ProductCategory( {
    name:  "Trauben",
    amount: 500,
    climateScore: 1,
    tags: ["Trauben", "Obst",],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Nudeln",
    amount: 500,
    climateScore: 1,
    tags: ["Spagetti", "Nudel",],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Vollkornnudeln",
    amount: 500,
    climateScore: 1,
    tags: ["Spagetti", "Nudel","Vollornnudeln"],
    unit: gramm
}).save();

await new ProductCategory( {
    name:  "Vollkornnudeln",
    amount: 500,
    climateScore: 1,
    tags: ["Spagetti", "Nudel","Vollornnudeln"],
    unit: gramm
}).save();


}
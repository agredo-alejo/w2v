import { colores } from "./colors.json";
// import * as data from "./colors.json"
import {  add, create, range} from "@apjs/tensor";


// add
let a =range(0,6,1)
a.reshape([6,1])

let b =create([1,2,3,4], [2,2])
console.table(a.data);


colores[0].value
let azul = create(colores[0].value)
let rojo = create(colores[1].value)

let morado = add(azul, rojo)
console.table(morado.data)


// a = name()
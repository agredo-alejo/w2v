import { colores } from "./colors.json";
// import * as data from "./colors.json"
import {  add, create, range} from "@apjs/tensor";
import { background, rgbaColor } from "@apjs/dynamic";

const canvas = document.querySelector("canvas")!
const ctx = canvas.getContext("2d")!
// add

canvas.width = innerWidth
canvas.height = innerHeight
// let a =range(0,6,1)
// a.reshape([6,1])

// let b =create([1,2,3,4], [2,2])
// console.table(a.data);


colores[0].value
let a = create(colores[0].value)
let b = create(colores[1].value)
let c = create(colores[2].value)
Math.hypot(2,2)
let result = a.add(b).add(c).mult(0)
// console.table(morado.data)
let color = colores.findIndex(a=>a.color === "white")
console.log(colores[color]);


background(ctx, rgbaColor(result.data))
// a = name()
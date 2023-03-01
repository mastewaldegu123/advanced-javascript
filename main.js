let a = 10
function outer (){
let b =20
function inner(){
let c =15
console.log(a,c,b)
}
inner()
}
outer()
// Arrays

let numeros = [10, 20 ,30 ,40, 50]

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let frutas = ["Cajá", "Umbu", "Maça", "Tangerina", "Cajá"]
console.log(frutas)

frutas.push("Uva") // Adiciona ao final da lista ["Cajá", "Umbu", "Maça", "Tangerina" "Uva"]
console.log(frutas)


frutas.unshift("Banana") // Adiciona ao inicio da lista ["Banana", "Cajá", "Umbu", "Maça", "Tangerina" "Uva"]
console.log(frutas)

frutas.pop() // Remove o ultimo elemento da lista
console.log(frutas)

frutas.shift() // Remove o primeiro elemento da lista
console.log(frutas)

// Acessando elementos pelo indice
console.log(frutas[0])
console.log(frutas.length - 1) // Ultimo indice
console.log(frutas[frutas.length - 1]) // Ultimo elemento

for (let  i = 0;  i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`)
}

frutas.forEach((elemento, indice) => {
    console.log(`Indice ${indice}: ${elemento}`)
})


for (let fruta of frutas){
    console.log(fruta)
}


for (let i in frutas){
    console.log(`${i}:  ${frutas[i]}`)
}


console.log(frutas.indexOf("Caja"))

// MAP 

let mapa = new Map();

mapa.set("nome", "Danilo")
mapa.set(42, "Numero como chave")
mapa.set(true, "Chave booleana")

console.log(mapa.get("nome"))
console.log(mapa.get(42))

mapa.delete(42);
console.log(mapa.has(42))

mapa.clear()
console.log(mapa)
console.log(mapa.size)

mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})

// Set 

let setnumeros = new Set([1 , 2, 3 , 3 ,4, 4 , 5 , 6])
setnumeros.add(7)
setnumeros.add(2)
setnumeros.delete(3)

console.log(nusetnumerosmeros.has(3))

let pessoa = {
    nome: "Danilo",
    idade: 39,
    altura: 1.80,
    endereco:{
    rua: "Rua A",
    numero: 56
    }
}

console.log(pessoa)
console.log(pessoa.endereco.numero)

console.log(Object.entries(pessoa))
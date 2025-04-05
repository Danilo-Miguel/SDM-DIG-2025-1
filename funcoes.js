// Função Declarativa  

// Função com valor de parâmetro padrão
function bemVindo(usuario = "Visitante"){
    return `Bem vindo, ${usuario}`

}

console.log(bemVindo("Danilo"))

// Função Anônima

const soma  = function(a, b){
    return a + b
}

console.log(soma(4 , 7))

// Arrow Function =>

 const multiplicar  =  (y , x)  => y  * x 
 console.log(multiplicar(5 , 8))

//  Função Autoexecutável IIFE

function saudacao(nome){
    return `Ola, ${nome}`
}

console.log(saudacao("Danilo"))

(() => {
    console.log("Ok")
  
   })();
  
   function soma(a, b){
    return a  + b
}

console.log(soma(4 , 7))

 (function (){
    console.log("Eu executo  imediatamente")
 })();


// Funçoes de callback
 function processar(valor, callback){
    console.log("Processando...")
    callback(valor)

 }

 processar(10,(num) => console.log(`Resultado: ${num * 2}`))
 
 processar(10,function (num) { console.log(`Resultado: ${num * 2}`)})

function login(usuario, senha){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(usuario === "admin" && senha === "123"){
                resolve("Login realizado com sucesso")
            }else{
                reject("Usuario ou senha invalidos")
            }
        }, 5000);
    });
    
}

login("admin", "3") 
.then((mensagem) => {
    console.log("Sucesso", mensagem)
})
.catch((erro) => {
    console.log("Erro", erro)
})
.finally(() => {
    console.log("Finalizando...")
});


function tarefa1(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarefa 1 completa")
            resolve("Tarefa 1")
        }, 2000);
    });
}

function tarefa2(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarefa 2 completa")
            resolve("Tarefa 2")
        }, 2000);
    });
}

async function executarTarefas(){
    const resultado1 = await tarefa1()
    const resultado2 = await tarefa2()

    console.log('Resultados:', resultado1, resultado2)
}

executarTarefas();
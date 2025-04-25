const usuario = { nome :"João", idade: 30, cidade: "São Paulo" };
// Convertendo o objeto JavaScript para JSON
// O método JSON.stringify() converte um objeto JavaScript em uma string JSON
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); // {"nome":"João","idade":30,"cidade":"São Paulo"}

const usuarioJSON2 = '{"nome":"João","idade":30,"cidade":"São Paulo"}';
// Convertendo a string JSON de volta para um objeto JavaScript
// O método JSON.parse() converte uma string JSON em um objeto JavaScript
const usuario2 = JSON.parse(usuarioJSON2);
console.log(usuario2); // { nome: 'João', idade: 30, cidade: 'São Paulo' }


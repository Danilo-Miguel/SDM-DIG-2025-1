async function obterDados() {

    try{
        const response = await fetch("http://localhost:6000/estados-cidades");
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
        return data;
    }catch (error) {
        console.error("Erro ao obter dados:", error.message);
    }

}
obterDados();

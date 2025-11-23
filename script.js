let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    // Carrega os dados do JSON quando a página é iniciada
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);


    function iniciarBusca() {
        const termoBusca = searchInput.value.toLowerCase();
        const dadosFiltrados = dados.filter(dado => {
            return dado.nome.toLowerCase().includes(termoBusca) ||
                dado.descricao.toLowerCase().includes(termoBusca);
        });
        renderizarCards(dadosFiltrados);
    }

    function renderizarCards(dados) {
        cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
        for (let dado of dados) {
            let article = document.createElement("article");
            article.classList.add("card");
            article.innerHTML = `
                <h2>${dado.nome}</h2>
                <p>${dado.data_criacao}</p>
                <p>${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Saiba mais</a>
                `
            cardContainer.appendChild(article);
        }
    }
}
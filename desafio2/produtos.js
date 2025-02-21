const cards = document.querySelector('main');
fetch('./produtos.json')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(p => {
        const card = document.createElement('div');
        card.innerHTML = `
        <h3>${p.nome}</h3>
        <h3>${p.descricao}</h3>
        <h3>${p.preco}</h3>
        <img src="${p.imagem}" alt="imagem">
        `;
        cards.appendChild(card);
    });
})
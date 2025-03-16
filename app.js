let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (!nomeAmigo) {
        setTimeout(() => alert("Por favor, insira um nome."), 0);
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    document.getElementById("amigo").value = "";
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        setTimeout(() => alert("Por favor, adicione pelo menos um amigo para realizar o sorteio."), 0);
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

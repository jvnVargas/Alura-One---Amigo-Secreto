let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação para aceitar apenas letras
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (!regexNome.test(nome)) {
        alert("O nome deve conter apenas letras.");
        return;
    }

    if (amigos.length >= 50) {
        alert("O limite de 50 nomes foi atingido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoLista = document.getElementById("resultado");

    resultadoLista.innerHTML = ""; 
    const li = document.createElement("li");
    li.textContent = `O amigo secreto é: ${sorteado}!`;
    resultadoLista.appendChild(li);
}

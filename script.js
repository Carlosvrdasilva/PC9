document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação simples
    if (!nome || !email || !mensagem) {
        document.getElementById("msgErro").style.display = "block";
        document.getElementById("msgSucesso").style.display = "none";
        return;
    }

    // Validação de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("msgErro").style.display = "block";
        document.getElementById("msgSucesso").style.display = "none";
        return;
    }

    // Se tudo estiver certo
    document.getElementById("msgErro").style.display = "none";
    document.getElementById("msgSucesso").style.display = "block";

    // Limpar campos após o envio
    document.getElementById("formContato").reset();
});

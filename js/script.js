const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
const form = document.getElementById("form");

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (nome.value === ""){
        alert("Por favor, digite o seu nome.");
        return;     
    } else if (nome.value.length > 50) {
        alert("Por favor, digite o seu nome com no máximo 50 caracteres.");
        return;  
    }

    if (email.value === "" || !emailValidate(email.value)){
        alert("Digite o seu e-mail.");
        return;
    }

    if (assunto.value === ""){
        alert("Por favor, digite o assunto.");
        return;     
    } else if (assunto.value.length > 50) {
        alert("Por favor, digite o assunto com no máximo 50 caracteres.");
        return;  
    }

    if (mensagem.value === ""){
        alert("Por favor, digite o assunto.");
        return;     
    } else if (mensagem.value.length > 300) {
        alert("Por favor, digite sua mensagem com no máximo 300 caracteres.");
        return;  
    }

    form.submit();

});

function emailValidate(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}
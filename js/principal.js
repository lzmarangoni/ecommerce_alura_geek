const botaoEnviar = document.querySelector(".faleConosco__botao");

botaoEnviar.addEventListener("click", function(){
    event.preventDefault();
    const form = document.querySelector(".faleConosco");
    const nome = form.nome.value; 
    const email = form.email.value;
    const mensagem = form.mensagem.value;

console.log(nome);
console.log(email);
console.log(mensagem);

});



import { Pedido } from './order.js';

// Resetar o pedido
var bntR = document.getElementById('btn-r');
var notifyTimeout;
bntR.addEventListener('click', function() {

    pedido.reset();       // 🔥 reseta o estado
    renderResumo();       // 🔥 atualiza a tela

    var notify = document.getElementById('notfR');
    var parentNotify = document.getElementById('notf');

    if (notify && parentNotify) {
        notify.innerText = 'Pedido resetado com sucesso!';
        parentNotify.classList.add('show');

        clearTimeout(notifyTimeout);

        notifyTimeout = setTimeout(() => {
            parentNotify.classList.remove('show');
        }, 3000);
    }
});

// Finalizar pedido | Redirecionar para página de finalização
var ordN = document.getElementById('ord-n');
ordN.addEventListener('click', function() {
    window.location.href = 'finalizado.html';
});

// Redirecionar para página anterior
var arrow = document.querySelector('.fa-arrow-left');
arrow.addEventListener('click', function () {
    window.location.href = 'algo.html';
});



// Função para atualizar o pedido com o item selecionado
const pedido = new Pedido();
const sizeButtons = document.querySelectorAll('.btn-order');
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Verificar se o botão tem um tamanho associado
        if(button.dataset.size) {
            pedido.setSize(button.dataset.size);
            console.log("Tamanho selecionado:", pedido.getSize());
        }
        // Verificar se o botão tem um sabor ou bebida associado
        if(button.dataset.flavor) {
            pedido.setFlavor(button.dataset.flavor);
            console.log("Sabor selecionado:", pedido.getFlavor());
        }
        // Verificar se o botão tem um tipo de borda associado
        if(button.dataset.tborder) {
            pedido.setTypeBorder(button.dataset.tborder);
            console.log("Tipo de borda selecionado:", pedido.getTypeBorder());
        }
        // Verificar se o botão tem o tipo de borda associado
        if(button.dataset.border) {
            pedido.setBorder(button.dataset.border);
            console.log("Borda selecionada:", pedido.getBorder());
        }
        // Verificar se o botão tem uma bebida associada
        if(button.dataset.drink) {
            pedido.setDrink(button.dataset.drink);
            console.log("Bebida selecionada:", pedido.getDrink());
        }

        renderResume(); // Atualiza o resumo do pedido
    });
});

// Função para exibir o resumo do pedido
function renderResume() {

    // 🔥 AQUI você cria a variável
    const resume = pedido.getResumo();

    // 🔥 Depois você usa ela
    document.getElementById("resume-size").textContent =
        resume.size ? `Tamanho: ${resume.size}` : "";

    document.getElementById("resume-flavor").textContent =
        resume.flavor ? `Sabores: ${resume.flavor}` : "";

    document.getElementById("resume-tborder").textContent =
        resume.tborder ? `Tipo de borda: ${resume.tborder}` : "";

    document.getElementById("resume-border").textContent =
        resume.border ? `Borda: ${resume.border}` : "";

    document.getElementById("resume-drink").textContent =
        resume.drink ? `Bebida: ${resume.drink}` : "";
}
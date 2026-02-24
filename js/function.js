import { Pedido } from './order.js';

// Resetar o pedido
var bntR = document.getElementById('btn-r');
var notifyTimeout;
bntR.addEventListener('click', function() {

    pedido.reset(); // Reseta o pedido para os valores iniciais
    renderResume(); // Atualiza o resumo do pedido para refletir o reset

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
        // Verificar se o botão tem um sabor associado
        if(button.dataset.flavors) {
            pedido.setFlavors(button.dataset.flavors);
            console.log("Sabores selecionados:", pedido.getFlavors());
        }
        // Verificar se o botão tem um tipo de borda associado
        if(button.dataset.dough) {
            pedido.setDough(button.dataset.dough);
            console.log("Tipo de massa selecionada:", pedido.getDough());
        }
        // Verificar se o botão tem o tipo de borda associado
        if(button.dataset.border) {
            pedido.setBorder(button.dataset.border);
            console.log("Borda selecionada:", pedido.getBorder());
        }
        // Verificar se o botão tem uma bebida associada
        if(button.dataset.drinks) {
            pedido.setDrinks(button.dataset.drinks);
            console.log("Bebida selecionada:", pedido.getDrinks());
        }

        renderResume(); // Atualiza o resumo do pedido
    });
});

// Função para exibir o resumo do pedido
function renderResume() {
    const resume = pedido.getResumo();

    document.getElementById("resume-size").textContent =
        resume.size ? `Tamanho: ${resume.size}` 
            : "";

    document.getElementById("resume-flavor").innerHTML =
        Object.keys(resume.flavors).length > 0
            ? "Sabores: " + Object.entries(resume.flavors).map(([flavors, count]) => count > 1 ? `${flavors} (${count})` : flavors).join("<br>")
            : "";

    document.getElementById("resume-dough").textContent =
        resume.dough ? `Tipo de borda: ${resume.dough}` 
            : "";

    document.getElementById("resume-border").textContent =
        resume.border ? `Borda: ${resume.border}` 
            : "";

    document.getElementById("resume-drinks").innerHTML =
    Object.keys(resume.drinks).length > 0 
        ? "Bebidas:<br>" + Object.entries(resume.drinks)
            .map(([drink, count]) => {
                const price = pedido.getDrinksPrice()[drink];
                const subtotal = price * count;
                return `${drink} (${count}) - R$ ${subtotal}`;
            })
            .join("<br>")
        : "";

    console.log("Resumo atualizado:", resume);  
}
// Resetar o pedido
var bntR = document.getElementById('btn-r');
var notifyTimeout;
bntR.addEventListener('click', function() {
    var inputOrder = document.getElementById('input-order');
    inputOrder.value = '';

    var notify = document.getElementById('notfR');
    var parentNotify = document.getElementById('notf');

    if (notify && parentNotify) {
        notify.innerText = 'Pedido resetado com sucesso!';

        parentNotify.classList.add('show'); // Exibe a notificação

        clearTimeout(notifyTimeout); // Limpa o timeout anterior, se houver

        notifyTimeout = setTimeout(() => { // Esconde a notificação após 3 segundos
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
})
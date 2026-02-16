// Resetar o pedido
var bntR = document.getElementById('btn-r');
bntR.addEventListener('click', function() {
    var inputOrder = document.getElementById('input-order');
    inputOrder.value = '';

    // Exibir notificação de pedido resetado
    var notify = document.getElementById('notfR');
    var parentNotify = document.getElementById('notf'); // Seleciona a div branca (pai)

    
    if (notify && parentNotify) {
        notify.innerText = 'Pedido resetado com sucesso!';
        parentNotify.style.display = 'block'; // Mostra a caixa da notificação

        setTimeout(function() {
            parentNotify.style.display = 'none'; // Esconde a notificação após 3 segundos
        }, 3000);
    }
})

// Resetar pedido | Exibir notificação



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
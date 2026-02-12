
var bntR = document.getElementById('btn-r');

bntR.addEventListener('click', function() {
    var inputOrder = document.getElementById('input-order');
    inputOrder.value = '';
})

var arrow = document.querySelector('.fa-arrow-left');

arrow.addEventListener('click', function () {
    window.location.href = 'algo.html';
})

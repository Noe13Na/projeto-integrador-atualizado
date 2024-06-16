let cont = 1;

setInterval(proximaImg, 5000);

function proximaImg() {
    cont++;

    if (cont > 3) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;

    // Adicionando a lógica para atualizar a classe .primeiro para controlar a posição do slider
    if (cont === 1) {
        document.querySelector('.slider-content').classList.add('primeiro');
    } else {
        document.querySelector('.slider-content').classList.remove('primeiro');
    }
}

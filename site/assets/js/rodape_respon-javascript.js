document.addEventListener("DOMContentLoaded", function() {
    const titleElements = document.querySelectorAll('.title-atendimento, .title-categorias, .title-pagamento, .title-siga, .title-app');
    
    titleElements.forEach(title => {
        title.addEventListener('click', function() {
            // Seleciona os elementos a serem exibidos
            const elementsToShow = this.parentElement.querySelectorAll('.nav-atend, .nav-cate, .link-app, .icon-media, .bandeiras');
            
            // Alterna a visibilidade dos elementos
            elementsToShow.forEach(element => {
                element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
            });
        });
    });
});

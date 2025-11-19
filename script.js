// Selecionando o botão pelo ID
const changeColorButton = document.getElementById('changeColorButton');

// Função para alterar a cor de fundo da página
function changeBackgroundColor() {
    // Gera uma cor aleatória em formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Aplica a cor ao fundo da página
    document.body.style.backgroundColor = randomColor;
}

// Adiciona um evento de clique no botão
changeColorButton.addEventListener('click', changeBackgroundColor);

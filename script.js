// Função para gerar a escolha aleatória da máquina
function escolhaAleatoria() {
    // Array das opções possíveis
    const opcoes = ["rock", "paper", "scissors"];
    // Gera um índice aleatório dentro do tamanho do array
    const indice = Math.floor(Math.random() * 3);
    // Retorna a escolha aleatória da máquina
    return opcoes[indice];
}

// Função para verificar o resultado do jogo
function verificarResultado(escolhaUsuario, escolhaComputador) {
    // Captura elementos do HTML para exibir o resultado e as pontuações
    const resultado = document.querySelector(".result");
    const suaPontuacao = document.querySelector(".your-score span");
    const pontuacaoAlexa = document.querySelector(".machine-score span");

    // Verifica se houve empate
    if (escolhaUsuario === escolhaComputador) {
        resultado.textContent = "Empate!";
    }
    // Verifica se o jogador ganhou
    else if (
        (escolhaUsuario === "rock" && escolhaComputador === "scissors") ||
        (escolhaUsuario === "paper" && escolhaComputador === "rock") ||
        (escolhaUsuario === "scissors" && escolhaComputador === "paper")
    ) {
        resultado.textContent = "Você ganhou!";
        // Atualiza a pontuação do jogador
        suaPontuacao.textContent = parseInt(suaPontuacao.textContent) + 1;
    }
    // Se não foi empate nem vitória do jogador, a Alexa ganhou
    else {
        resultado.textContent = "A Alexa ganhou!";
        // Atualiza a pontuação da Alexa
        pontuacaoAlexa.textContent = parseInt(pontuacaoAlexa.textContent) + 1;
    }

    // Mapeamento de escolhas para emojis
    const emojis = {
        rock: "👊",
        paper: "🖐",
        scissors: "✌"
    };

    // Exibe as escolhas do jogador e da "Alexa" na tela usando emojis
    const escolhaUsuarioEmoji = emojis[escolhaUsuario];
    const escolhaComputadorEmoji = emojis[escolhaComputador];

    // Cria uma string com as escolhas usando emojis e exibe no elemento HTML
    const escolhaTexto = `Você escolheu ${escolhaUsuarioEmoji}, a Alexa escolheu ${escolhaComputadorEmoji}.`;
    const escolhaElemento = document.querySelector(".escolha");

    // Atualiza o elemento HTML com as escolhas
    escolhaElemento.textContent = escolhaTexto;
}

// Função principal para jogar JoKenPô
function jogarJokempo(escolhaUsuario) {
    // Gera a escolha aleatória da máquina
    const escolhaComputador = escolhaAleatoria();
    // Captura os elementos dos ícones de escolha do jogador e da máquina
    const iconeEscolhaUsuario = document.getElementById(escolhaUsuario);
    const iconeEscolhaComputador = document.getElementById(escolhaComputador);

    // Remove qualquer classe ativa nos botões de escolha
    document.querySelectorAll(".buttons button").forEach((button) => {
        button.classList.remove("active");
    });

    // Adiciona uma classe ativa para destacar a escolha do jogador e da máquina
    iconeEscolhaUsuario.classList.add("active");
    iconeEscolhaComputador.classList.add("active");

    // Verifica o resultado do jogo
    verificarResultado(escolhaUsuario, escolhaComputador);
}

// Adiciona evento de clique para os botões de escolha
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
    // Adiciona um evento de clique para chamar a função jogarJokempo com a escolha do jogador
    button.addEventListener("click", (event) => {
        jogarJokempo(event.target.id);
    });
});

const gerarConteudo = () => {
    const container = document.querySelector('#container-carta');
    if (!container) return;

    const nomeRepeticoes = 30;
    const totalDeBlocos = 4;

    for (let i = 1; i <= totalDeBlocos; i++) {
        const secao = document.createElement('section');
        secao.className = 'bloco-carta visible'; // Adicionei 'visible' direto para testar

        const nomesArray = Array(nomeRepeticoes).fill("Sophia");
        
        secao.innerHTML = `
            <div class="texto-principal">
                <p>${nomesArray.join(' ')}</p>
            </div>
            <div class="area-musica">
                <span class="label-musica">música</span>
                <audio controls>
                    <source src="musicas/musica${i}.mp3" type="audio/mpeg">
                </audio>
                <div class="traducao-container">
                    <div class="ingles">Lyrics in English...</div>
                    <div class="portugues">Tradução em Português...</div>
                </div>
            </div>
        `;
        container.appendChild(secao);
    }
};

// Executa assim que o script carregar
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    gerarConteudo();
} else {
    document.addEventListener('DOMContentLoaded', gerarConteudo);
}

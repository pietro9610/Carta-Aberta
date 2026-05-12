
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container-carta');
    
    // Configuração: 30 vezes o nome e 4 blocos no total
    const nomeRepeticoes = 30;
    const totalDeBlocos = 4; // A primeira vez + 3 repetições

    for (let i = 1; i <= totalDeBlocos; i++) {
        // Criamos uma seção para cada parte da carta
        const secao = document.createElement('section');
        secao.className = 'bloco-carta';

        // 1. Criar o texto (Sophia 30x)
        const textoDiv = document.createElement('div');
        textoDiv.className = 'texto-principal';
        
        // Cria um array com o nome, junta com espaços e adiciona ao HTML
        const nomesArray = Array(nomeRepeticoes).fill("Sophia");
        textoDiv.innerHTML = `<p>${nomesArray.join(' ')}</p>`;

        // 2. Criar a área da música
        const musicaDiv = document.createElement('div');
        musicaDiv.className = 'area-musica';
        musicaDiv.innerHTML = `
            <span class="label-musica">música</span>
            <audio controls class="player-custom">
                <source src="musicas/musica${i}.mp3" type="audio/mpeg">
                Seu navegador não suporta áudio.
            </audio>
            <div class="traducao-container">
                <div class="ingles">Lyrics in English...</div>
                <div class="portugues">Tradução em Português...</div>
            </div>
        `;

        // Montagem
        secao.appendChild(textoDiv);
        secao.appendChild(musicaDiv);
        container.appendChild(secao);
    }

    // Lógica para pausar uma música quando outra começar
    const todosAudios = document.querySelectorAll('audio');
    todosAudios.forEach(audio => {
        audio.addEventListener('play', () => {
            todosAudios.forEach(outro => {
                if (outro !== audio) outro.pause();
            });
        });
    });
});

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bloco-carta').forEach(secao => {
        observer.observe(secao);
    });

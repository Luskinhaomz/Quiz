document.getElementById('submit-btn').addEventListener('click', function () {
    const form = document.getElementById('quiz-form');
    const answers = new FormData(form);
    const scores = {
        a: 0, // Patrick
        b: 0, // Lula Molusco
        c: 0, // Sandy
        d: 0, // Sr. Siriguejo
        e: 0, // Plankton
        f: 0, // Gary
        g: 0, // Bob Esponja
    };

    // Soma os pontos
    for (const [key, value] of answers.entries()) {
        if (value) {
            scores[value]++;
        }
    }

    // Validação
    const totalAnswers = Object.values(scores).reduce((sum, score) => sum + score, 0);
    if (totalAnswers < 10) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    // Identifica os personagens com maior pontuação
    const maxScore = Math.max(...Object.values(scores));
    const topCharacters = Object.keys(scores).filter(key => scores[key] === maxScore);

    // Redireciona para a página de resultados com os dados
    const queryString = `results=${encodeURIComponent(JSON.stringify(topCharacters))}`;
    window.location.href = `result.html?${queryString}`;
});

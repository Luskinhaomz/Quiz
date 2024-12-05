document.getElementById('submit-btn').addEventListener('click', function () {
    const form = document.getElementById('quiz-form');
    const answers = new FormData(form);
    const scores = {
        a: 0, // Patrick
        b: 0, //  Lula Molusco
        c: 0, //  Sandy
        d: 0, //  Sr. Siriguejo
        e: 0, //  Plankton
        f: 0, //  Gary
        g: 0, //  Bob Esponja
    };

    //soma os pontos
    for (const [key, value] of answers.entries()) {
        if (value) {
            scores[value]++;
        }
    }

    //total de respostas dadas
    const totalAnswers = Object.values(scores).reduce((sum, score) => sum + score, 0);

    if (totalAnswers < 10) {
        displayResult("Por favor, responda todas as perguntas.");
        return;
    }

    //porcentagem de cada personagem
    const percentages = {};
    for (const [key, value] of Object.entries(scores)) {
        percentages[key] = ((value / totalAnswers) * 100).toFixed(2);
    }

    //mapeia os resultados para os personagens
    const characterMapping = {
        a: "Patrick",
        b: "Lula Molusco",
        c: "Sandy",
        d: "Sr. Siriguejo",
        e: "Plankton",
        f: "Gary",
        g: "Bob Esponja"
    };

    //prepara o resultado para exibição
    let resultHTML = "<h2>Resultado:</h2><ul>";
    for (const [key, percentage] of Object.entries(percentages)) {
        resultHTML += `<li>${characterMapping[key]}: ${percentage}%</li>`;
    }
    resultHTML += "</ul>";

    //exibe o resultado na tela
    displayResult(resultHTML);
});

//função para exibir o resultado na página
function displayResult(content) {
    let resultContainer = document.getElementById("result");
    if (!resultContainer) {
        resultContainer = document.createElement("div");
        resultContainer.id = "result";
        document.body.appendChild(resultContainer);
    }
    resultContainer.innerHTML = content;
}

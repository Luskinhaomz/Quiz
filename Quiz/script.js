document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault();
  
  const form = document.getElementById("quiz-form");

  
  const respostas = new FormData(form);
  const todasRespondidas = [...respostas].every(([key, value]) => value); // Verifica se todas as respostas foram preenchidas

  if (!todasRespondidas) {
      alert("Por favor, responda todas as perguntas antes de enviar!");
      return;
  }

 
  const pontuacao = {
      patrick: 0,   // Preguiça
      lulaMolusco: 0, // Ira
      sandy: 0,     // Soberba
      sirigueijo: 0, // Avareza
      plankton: 0,  // Inveja
      gary: 0,      // Gula
      bobEsponja: 0 // Amor
  };

  
  const respostasPersonagens = {
      a: "patrick",
      b: "lulaMolusco",
      c: "sandy",
      d: "sirigueijo",
      e: "plankton",
      f: "gary",
      g: "bobEsponja"
  };

  
  [...respostas].forEach(([key, value]) => {
      if (respostasPersonagens[value]) {
          pontuacao[respostasPersonagens[value]] += 1;
      }
  });

  
  const totalPerguntas = document.querySelectorAll(".question").length;

  
  const porcentagens = {};
  for (const personagem in pontuacao) {
      porcentagens[personagem] = (pontuacao[personagem] / totalPerguntas) * 100;
  }

  
  const resultadoHTML = `
      <h2>Resultados:</h2>
      <ul>
          <li>Patrick (Preguiça): ${porcentagens.patrick.toFixed(1)}%</li>
          <li>Lula Molusco (Ira): ${porcentagens.lulaMolusco.toFixed(1)}%</li>
          <li>Sandy (Soberba): ${porcentagens.sandy.toFixed(1)}%</li>
          <li>Seu Sirigueijo (Avareza): ${porcentagens.sirigueijo.toFixed(1)}%</li>
          <li>Plankton (Inveja): ${porcentagens.plankton.toFixed(1)}%</li>
          <li>Gary (Gula): ${porcentagens.gary.toFixed(1)}%</li>
          <li>Bob Esponja (Amor): ${porcentagens.bobEsponja.toFixed(1)}%</li>
      </ul>
  `;

 
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = resultadoHTML;
});
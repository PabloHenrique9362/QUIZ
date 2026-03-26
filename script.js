const $startGameButton = document.querySelector(".iniciar-quiz");
const $questaoQuiz = document.querySelector(".perguntas-container");
const $respostasContainer = document.querySelector(".respostas-button");
const $perguntasContainer = document.querySelector(".pergunta");

$startGameButton.addEventListener("click", startGame);

let qualPergunta = 0

function startGame() {
    $startGameButton.classList.add("hide");
    $questaoQuiz.classList.remove("hide");
    displayNextQuestao()
}

function displayNextQuestao() {
    while($respostasContainer.firstChild) {
        $respostasContainer.removeChild($respostasContainer.firstChild);
    }
    $perguntasContainer.textContent = perguntas[qualPergunta].pergunta;
    perguntas[qualPergunta].opcoes.forEach(resposta => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button", "resposta")
        novaResposta.textContent = resposta.text;
        if(resposta.correct) {
          novaResposta.dataset.correct = resposta.correct
        }
        $respostasContainer.appendChild(novaResposta)

        novaResposta.addEventListener("click", selectResposta)
    })
}

function selectResposta(event) {
  const   respostaClicada = event.target;

  if(respostaClicada.dataset.correct) {
    document.body.classList.add("correta")
  }
  else {
    document.body.classList.add("errada")
  }
}












const perguntas = [
  {
    pergunta: "Quanto é 5 + 3?",
    opcoes: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 12 - 4?",
    opcoes: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 6 x 7?",
    opcoes: [
      { text: "42", correct: true },
      { text: "36", correct: false },
      { text: "48", correct: false },
      { text: "40", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 81 ÷ 9?",
    opcoes: [
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "10", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 15 + 27?",
    opcoes: [
      { text: "40", correct: false },
      { text: "42", correct: true },
      { text: "43", correct: false },
      { text: "44", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 100 - 58?",
    opcoes: [
      { text: "42", correct: true },
      { text: "48", correct: false },
      { text: "52", correct: false },
      { text: "50", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 9 x 9?",
    opcoes: [
      { text: "72", correct: false },
      { text: "81", correct: true },
      { text: "90", correct: false },
      { text: "99", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 144 ÷ 12?",
    opcoes: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "13", correct: false }
    ]
  },
  {
    pergunta: "Quanto é 7²?",
    opcoes: [
      { text: "14", correct: false },
      { text: "21", correct: false },
      { text: "49", correct: true },
      { text: "42", correct: false }
    ]
  },
  {
    pergunta: "Quanto é √64?",
    opcoes: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false }
    ]
  }
];
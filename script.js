const $startGameButton = document.querySelector(".iniciar-quiz");
const $questaoQuiz = document.querySelector(".perguntas-container");
const $respostasContainer = document.querySelector(".respostas-button");
const $perguntasContainer = document.querySelector(".pergunta");
const $proximaPerguntaButton = document.querySelector(".proxima-pergunta")

$startGameButton.addEventListener("click", startGame);
$proximaPerguntaButton.addEventListener("click", displayNextQuestao)

let qualPergunta = 0
let totalCorreta = 0

function startGame() {
    $startGameButton.classList.add("hide");
    $questaoQuiz.classList.remove("hide");
    displayNextQuestao()
}

function displayNextQuestao() {
    resetState()

    if (perguntas.length === qualPergunta){
      return finishGame()
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
function resetState() {
  while($respostasContainer.firstChild) {
        $respostasContainer.removeChild($respostasContainer.firstChild);
    }

    document.body.removeAttribute("class")
    $proximaPerguntaButton.classList.add("hide")
}

function selectResposta(event) {
  const respostaClicada = event.target;

  if(respostaClicada.dataset.correct) {
    document.body.classList.add("correta")
    totalCorreta++
  } else {
    document.body.classList.add("errada")
  }

  document.querySelectorAll(".resposta").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correta")
    } else {
      button.classList.add("errada")
    }
    button.disabled = true
  })

  $proximaPerguntaButton.classList.remove("hide")
  qualPergunta++
}

function finishGame() {
  const totalquestao = perguntas.length
  const perfomance = Math.floor(totalCorreta *100 /totalquestao)

  let message = ""
  switch (true) {
    case (perfomance >= 90):
      message = "Excelente :)"
      break
    case (perfomance >= 70):
      message = "Muito Bom :)"
      break
    case (perfomance >= 50):
      message = "Bom :)"
      break
    case (perfomance >= 90):
      message = "Pode Melhorar :("
      break     
  }
  $perguntasContainer.innerHTML = 
  `<p class="menssagem"> 
    Você Acertou ${totalCorreta} de ${totalquestao} questões!
    <span>Resultado: ${message}</span>
  </p>
  <button onclick=window.location.reload() class="button">Refazer Teste</button>
  `

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
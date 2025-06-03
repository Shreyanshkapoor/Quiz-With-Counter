const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Lisbon",
    correct: "c"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which company developed the React library?",
    a: "Google",
    b: "Facebook",
    c: "Microsoft",
    d: "Apple",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyperlinking Text Mark Language",
    correct: "a"
  },
  {
    question: "Which one is a JavaScript framework?",
    a: "Laravel",
    b: "Django",
    c: "React",
    d: "Rails",
    correct: "c"
  },
  {
    question: "What is the symbol for an ID selector in CSS?",
    a: ".",
    b: "#",
    c: "*",
    d: "&",
    correct: "b"
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<code>",
    correct: "a"
  },
  {
    question: "Which operator is used for strict equality comparison in JavaScript?",
    a: "=",
    b: "==",
    c: "===",
    d: "!==",
    correct: "c"
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const progressBar = document.getElementById('progress');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  // Update progress bar
  let progressPercent = ((currentQuiz) / quizData.length) * 100;
  progressBar.style.width = progressPercent + '%';
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      progressBar.style.width = '100%'; // full bar at end
      quiz.innerHTML = `
        <h2 class="score">You answered correctly ${score} out of ${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  } else {
    alert('Please select an answer before proceeding!');
  }
});

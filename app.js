var questionArray = [
  {
    question: "Q1. Full Form of NAB is?",
    answer: "National Accountability bureau",
    options: [
      "National Accounts bureau",
      "National Accountability bureaucracy",
      "National Accountability bureau",
      "National App bureau"
    ]
  },
  {
    question: "Q2. NASA is an?",
    answer: "acronym",
    options: [
      "abbreviation",
      "acronym",
      "alphabet",
      "word"
    ]
  },
  {
    question: "Q3. Full form of RAM is?",
    answer: "Random access memory",
    options: [
      "Random access memory",
      "Read access memory",
      "run access memory",
      "real access memory"
    ]
  },
  {
    question: "Q4. Full form of ROM is?",
    answer: "Read only memory",
    options: [
      "Real only memory",
      "Read once memory",
      "Random only memory",
      "Read only memory"
    ]
  },
  {
    question: "Q5. 2 * 9 + 5 = ?",
    answer: "23",
    options: [
      "28",
      "23",
      "18",
      "16"
    ]
  }
]


function showQuestion(e) {
  //show question
  let questionElement = document.querySelector("#questionElement");
  questionElement.innerHTML = questionArray[e].question;


  //show option
  let optionElement = document.getElementsByClassName("optionElement");
  for (var i = 0; i < questionArray[e].options.length; i++) {
    optionElement[i].innerHTML = questionArray[e].options[i];
  }
}

let questionCount = 0;


function nextQuestion() {
  redirectLastPage()
  validate();
  questionCount++;
  showQuestion(questionCount);
  // removeActiveClass();
}


function putActiveClass(e) {
  removeActiveClass();
  e.classList.add("active");
}

function removeActiveClass() {
  let active = document.getElementsByClassName("active");
  for (var i = 0; i < active.length; i++) {
    active[i].classList.remove("active");
  }
}

let score = 0;

function validate() {
  let userAnswer = document.querySelector("p.optionElement.active").innerHTML;
  if (userAnswer === questionArray[questionCount].answer) {
    score += 10;
    sessionStorage.setItem("points" , score);
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
  }
}

function redirectLastPage(){
  if(questionCount == questionArray.length - 1){
    window.location.href = "last.html";
    return;
  }
}






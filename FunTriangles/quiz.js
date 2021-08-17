const formQuiz = document.querySelector("#quiz");
const button = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const answers = [
  "right",
  "equilateral",
  "180 degrees",
  "acute angled triangle",
  "equilateral triangle",
  "scalene triangle",
  "isosceles triangle",
  "pythagoras",
  "c^2",
  "trigonometry",
];

function quizHandler() {
  let score = 0;
  let index = 0;

  const formResult = new FormData(formQuiz).values();
  for (let values of formResult) {
    // console.log(values);
    if (values === answers[index]) {
      score++;
    }
    index++;
  }
  {
    output.innerHTML = `<p class="score"> Your final score is : " ${score}" </p>`;
  }
}
button.addEventListener("click", quizHandler);

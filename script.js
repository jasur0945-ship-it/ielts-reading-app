let timerInterval;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  timerInterval = setInterval(() => {
    minutes = parseInt(timer / 60,10);
    seconds = parseInt(timer % 60,10);
    display.textContent = minutes + ':' + (seconds<10?'0':'') + seconds;
    if (--timer < 0) clearInterval(timerInterval);
  }, 1000);
}

function renderPassage() {
  document.getElementById('passage-text').innerHTML = passageText;
}

function renderQuestions() {
  const form = document.getElementById('questions-form');
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question-block';
    div.innerHTML = `<p>${i+1}. ${q.stem}</p>`;
    if (q.type === 'tfng' || q.type === 'multiple') {
      q.options.forEach(opt => {
        const id = `q${i}_${opt}`;
        div.innerHTML += `
          <label><input type="radio" name="q${i}" value="${opt}" id="${id}"> ${opt}</label><br>`;
      });
    }
    div.innerHTML += `<div class="explanation" id="exp${i}">${q.explanation}</div>`;
    form.appendChild(div);
  });
}

function evaluate() {
  clearInterval(timerInterval);
  let score = 0;
  questions.forEach((q, i) => {
    const formVal = document.querySelector(`input[name="q${i}"]:checked`);
    const userAns = formVal ? formVal.value : '';
    const correct = userAns === q.answer;
    const expDiv = document.getElementById(`exp${i}`);
    expDiv.style.display = 'block';
    if (correct) { score++; expDiv.className = 'explanation correct'; }
    else expDiv.className = 'explanation incorrect';
  });
  document.getElementById('results').innerHTML = `<h3>Your score: ${score} / ${questions.length}</h3>`;
}

window.onload = () => {
  renderPassage();
  renderQuestions();
  const twentyMinutes = 60 * 20;
  startTimer(twentyMinutes, document.getElementById('time'));
  document.getElementById('submit-btn').onclick = e => {
    e.preventDefault();
    evaluate();
  };
};

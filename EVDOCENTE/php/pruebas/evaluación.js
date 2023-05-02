var questionCount = 0;

function addQuestion() {
    var questionsDiv = document.getElementById("questions");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    var questionLabel = document.createElement("label");
    questionLabel.setAttribute("for", "question" + questionCount);
    questionLabel.innerText = "Pregunta " + (questionCount + 1) + ": ";
    questionDiv.appendChild(questionLabel);

    var questionInput = document.createElement("input");
    questionInput.setAttribute("type", "text");
    questionInput.setAttribute("name", "question" + questionCount);
    questionInput.setAttribute("id", "question" + questionCount);
    questionInput.setAttribute("placeholder", "Ingrese su pregunta aquí");
    questionDiv.appendChild(questionInput);

    var answerLabel = document.createElement("label");
    answerLabel.setAttribute("for", "answer" + questionCount);
    answerLabel.innerText = "Respuestas:";
    questionDiv.appendChild(answerLabel);

    var answerDiv = document.createElement("div");
    answerDiv.classList.add("answers");

    var option1Input = createOptionInput("option1" + questionCount, "Opción 1");
    var option2Input = createOptionInput("option2" + questionCount, "Opción 2");
    var option3Input = createOptionInput("option3" + questionCount, "Opción 3");
    var option4Input = createOptionInput("option4" + questionCount, "Opción 4");

    answerDiv.appendChild(option1Input);
    answerDiv.appendChild(option2Input);
    answerDiv.appendChild(option3Input);
    answerDiv.appendChild(option4Input);

    questionDiv.appendChild(answerDiv);

    var editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.innerText = "Editar";
    editButton.addEventListener("click", function() {
        editQuestion(questionCount);
    });
    questionDiv.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerText = "Eliminar";
    deleteButton.addEventListener("click", function() {
        deleteQuestion(questionCount);
    });
    questionDiv.appendChild(deleteButton);

    questionsDiv.appendChild(questionDiv);

    questionCount++;
}

function createOptionInput(name, placeholder) {
    var optionInput = document.createElement("input");
    optionInput.setAttribute("type", "text");
    optionInput.setAttribute("name", name);
    optionInput.setAttribute("placeholder", placeholder);
    return optionInput;
}

function editQuestion(questionIndex) {
    var questionInput = document.getElementById("question" + questionIndex);
    var newQuestion = prompt("Editar pregunta", questionInput.value);
    if (newQuestion !== null) {
        questionInput.value = newQuestion;
    }

    var option1Input = document.getElementsByName("option1" + questionIndex)[0];
    
}

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const questions = document.querySelectorAll('.question');
  const comments = document.getElementById('comments').value;

  questions.forEach((question) => {
    const pregunta = question.querySelector('input[type="text"]').value;
    const opciones = question.querySelectorAll('.answers input[type="text"]');
    const opcion1 = opciones[0].value;
    const opcion2 = opciones[1].value;
    const opcion3 = opciones[2].value;
    const opcion4 = opciones[3].value;

    const data = {
      pregunta: pregunta,
      opcion1: opcion1,
      opcion2: opcion2,
      opcion3: opcion3,
      opcion4: opcion4,
      comentarios: comments
    };

    fetch('evaluacion.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  form.reset();
  alert('Evaluación enviada correctamente.');
});
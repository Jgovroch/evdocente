const evaluacionForm = document.getElementById('evaluacionForm');
const nombreInput = document.getElementById('nombre');
const materiaInput = document.getElementById('materia');
const evaluacionInput = document.getElementById('evaluacion');
const preguntas = [
  {
    pregunta: '¿El docente llega puntual a las clases?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿La explicación del docente es clara y comprensible?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente tiene un buen conocimiento del tema que enseña?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente fomenta la participación activa de los estudiantes?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente evalúa de manera justa y objetiva?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente refleja interes por sus alumnos y su aprendizaje?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente se dirije a los alumnos con respeto?',
    opciones: ['Si', 'No', 'A veces'],
  },
  {
    pregunta: '¿El docente corrige de manera adecuada los trabajos?',
    opciones: ['Si', 'No', 'A veces'],
  },
];

evaluacionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  
  if (nombreInput.value.trim() === '') {
    alert('Ingrese su nombre.');
    nombreInput.focus();
    return;
  }
  
  if (materiaInput.value.trim() === '') {
    alert('Ingrese la materia.');
    materiaInput.focus();
    return;
  }

  if (evaluacionInput.value < 1 || evaluacionInput.value > 10) {
    alert('La evaluación debe estar entre 1 y 10.');
    evaluacionInput.focus();
    return;
  }

  enviarEvaluacion();
});

function enviarEvaluacion() {
  const datos = {
    nombre: nombreInput.value,
    materia: materiaInput.value,
    evaluacion: evaluacionInput.value
  };

  alert(`Datos enviados: ${JSON.stringify(datos)}`);
  
}
function obtenerValores() {
  const valor1 = parseFloat(document.getElementById('num1').value);
  const valor2 = parseFloat(document.getElementById('num2').value);
  return [valor1, valor2];
}

function mostrarResultado(resultado) {
  const resultadoSpan = document.getElementById('resultado');
  resultadoSpan.textContent = isNaN(resultado) ? 'Valores inválidos' : resultado;
}

function sumar() {
  const [a, b] = obtenerValores();
  mostrarResultado(a + b);
}

function restar() {
  const [a, b] = obtenerValores();
  mostrarResultado(a - b);
}

function dividir() {
  const [a, b] = obtenerValores();
  if (b === 0) {
    mostrarResultado('No se puede dividir por cero');
  } else {
    mostrarResultado(a / b);
  }
}

function multiplicar() {
  const [a, b] = obtenerValores();
  mostrarResultado(a * b);
}

function calcularEdad() {
  const edad = parseFloat(document.getElementById('edad').value);
  const resultadoSpan = document.getElementById('resultadoEdad');

  if (edad < 0) {
    resultadoSpan.textContent = "Edad Incorrecta";
    resultadoSpan.style.color = "black"
    resultadoSpan.style.background = "red"; // opcional: color para éxito
  } else {
    let mensaje = `Edad ingresada: ${edad}, `;
  if (edad < 18) {
    mensaje += "Persona es menor de edad";
  } else if (edad < 65) {
    mensaje += "Persona es adulto";
  } else if (edad < 85) {
    mensaje += "Persona es adulto mayor";
  } else {
    mensaje += "Persona es de años dorados";
  }

    resultadoSpan.textContent = mensaje;
    resultadoSpan.style.color = "black";
    resultadoSpan.style.background = "lime";
  }
}
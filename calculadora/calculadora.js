const SIMBOLOS = { '+': '+', '-': '−', '*': '×', '/': '÷' };
const MAX_DIGITOS = 12;

const estado = {
  actual: '0',
  anterior: null,
  operador: null,
  reiniciar: false,
  error: false,
};

const elResultado = document.getElementById('resultado');
const elOperacion = document.getElementById('operacion');

function calcular(a, b, operador) {
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('No se puede dividir entre 0');
      }
      return a / b;
    default:
      return b;
  }
}

function formatear(valor) {
  if (!Number.isFinite(valor)) {
    throw new Error('Resultado no válido');
  }
  const redondeado = Number(valor.toFixed(10));
  const texto = Math.abs(redondeado) >= 1e12 || (redondeado !== 0 && Math.abs(redondeado) < 1e-9)
    ? redondeado.toExponential(6)
    : String(redondeado);
  return texto.replace('.', ',');
}

function aNumero(texto) {
  return Number(texto.replace(',', '.'));
}

function pintar() {
  elResultado.textContent = estado.actual;
  elResultado.classList.toggle('error', estado.error);
  elResultado.classList.toggle('largo', !estado.error && estado.actual.length > 9);
  elResultado.classList.toggle('muy-largo', !estado.error && estado.actual.length > 12);
  elOperacion.textContent = estado.operador
    ? `${estado.anterior} ${SIMBOLOS[estado.operador]}`
    : '';
}

function limpiar() {
  estado.actual = '0';
  estado.anterior = null;
  estado.operador = null;
  estado.reiniciar = false;
  estado.error = false;
}

function fallar(mensaje) {
  limpiar();
  estado.actual = mensaje;
  estado.error = true;
}

function escribirDigito(digito) {
  if (estado.error) {
    limpiar();
  }
  if (estado.reiniciar) {
    estado.actual = '0';
    estado.reiniciar = false;
  }
  if (estado.actual.replace(/[-,]/g, '').length >= MAX_DIGITOS) {
    return;
  }
  estado.actual = estado.actual === '0' ? digito : estado.actual + digito;
}

function escribirDecimal() {
  if (estado.error) {
    limpiar();
  }
  if (estado.reiniciar) {
    estado.actual = '0';
    estado.reiniciar = false;
  }
  if (!estado.actual.includes(',')) {
    estado.actual += ',';
  }
}

function cambiarSigno() {
  if (estado.error || estado.actual === '0') {
    return;
  }
  estado.actual = estado.actual.startsWith('-')
    ? estado.actual.slice(1)
    : `-${estado.actual}`;
}

function borrar() {
  if (estado.error) {
    limpiar();
    return;
  }
  if (estado.reiniciar) {
    estado.actual = '0';
    estado.reiniciar = false;
    return;
  }
  estado.actual = estado.actual.length > 1 ? estado.actual.slice(0, -1) : '0';
  if (estado.actual === '-') {
    estado.actual = '0';
  }
}

function resolver() {
  const resultado = calcular(
    aNumero(estado.anterior),
    aNumero(estado.actual),
    estado.operador,
  );
  return formatear(resultado);
}

function elegirOperador(operador) {
  if (estado.error) {
    limpiar();
  }
  if (estado.operador && !estado.reiniciar) {
    try {
      estado.actual = resolver();
    } catch (e) {
      fallar(e.message);
      return;
    }
  }
  estado.anterior = estado.actual;
  estado.operador = operador;
  estado.reiniciar = true;
}

function igualar() {
  if (estado.error || !estado.operador || estado.reiniciar) {
    return;
  }
  try {
    const resultado = resolver();
    estado.actual = resultado;
  } catch (e) {
    fallar(e.message);
    return;
  }
  estado.anterior = null;
  estado.operador = null;
  estado.reiniciar = true;
}

function ejecutarAccion(accion) {
  switch (accion) {
    case 'limpiar':
      limpiar();
      break;
    case 'borrar':
      borrar();
      break;
    case 'signo':
      cambiarSigno();
      break;
    case 'decimal':
      escribirDecimal();
      break;
    case 'igual':
      igualar();
      break;
    default:
      break;
  }
}

document.querySelector('.teclado').addEventListener('click', (evento) => {
  const tecla = evento.target.closest('.tecla');
  if (!tecla) {
    return;
  }
  if (tecla.dataset.digito) {
    escribirDigito(tecla.dataset.digito);
  } else if (tecla.dataset.operador) {
    elegirOperador(tecla.dataset.operador);
  } else if (tecla.dataset.accion) {
    ejecutarAccion(tecla.dataset.accion);
  }
  pintar();
});

document.addEventListener('keydown', (evento) => {
  const { key } = evento;
  if (/^[0-9]$/.test(key)) {
    escribirDigito(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    elegirOperador(key);
  } else if (key === 'Enter' || key === '=') {
    evento.preventDefault();
    igualar();
  } else if (key === 'Backspace') {
    borrar();
  } else if (key === 'Escape') {
    limpiar();
  } else if (key === ',' || key === '.') {
    escribirDecimal();
  } else {
    return;
  }
  pintar();
});

pintar();

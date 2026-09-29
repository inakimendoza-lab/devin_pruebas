# Calculadora

Interfaz web de una calculadora con las cuatro operaciones básicas: suma,
resta, multiplicación y división.

## Uso

Abre `index.html` en cualquier navegador. No requiere instalación, build ni
dependencias externas.

## Funcionalidad

- Suma (`+`), resta (`−`), multiplicación (`×`) y división (`÷`).
- Encadenado de operaciones: `2 + 3 × 4` resuelve el paso anterior al pulsar el
  siguiente operador.
- Decimales con coma, cambio de signo (`±`), borrado de un dígito (`⌫`) y
  reinicio (`C`).
- División entre cero controlada: muestra un mensaje de error en lugar de
  `Infinity`.
- Soporte de teclado: dígitos, `+ - * /`, `Enter` o `=` para calcular,
  `Backspace` para borrar, `Escape` para reiniciar, `,` o `.` para el decimal.

## Ficheros

| Fichero | Contenido |
|---|---|
| `index.html` | Estructura de la interfaz |
| `styles.css` | Estilos del panel y el teclado |
| `calculadora.js` | Estado, operaciones y gestión de eventos |

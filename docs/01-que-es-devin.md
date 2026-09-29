# 1. Qué es Devin

Devin es un agente de IA desarrollado por **Cognition AI** que trabaja como un
ingeniero de software más del equipo. La diferencia principal frente a un
asistente de código tipo autocompletado es el **entorno**: Devin no sugiere
texto dentro de tu editor, sino que dispone de una máquina propia donde puede
ejecutar comandos, editar ficheros, levantar servidores, navegar por internet y
abrir pull requests.

## Capacidades

| Capacidad | Qué implica |
|---|---|
| Shell | Ejecuta comandos, instala dependencias, corre tests y linters |
| Sistema de ficheros | Lee, crea y modifica ficheros del repositorio |
| Editor | Ediciones quirúrgicas sobre ficheros existentes |
| Navegador | Lee documentación, consulta APIs, prueba la app en una UI real |
| GUI / escritorio | Puede ver y usar la pantalla; graba vídeo de sus pruebas |
| Git | Clona, hace commits, crea y actualiza PRs, revisa CI |
| Planificación | Mantiene una lista de tareas visible durante la sesión |

## Qué NO es

- No es un chatbot de preguntas y respuestas sobre código, aunque también puede
  responder preguntas y explicar un repositorio sin tocar nada.
- No sustituye la revisión humana: su entregable es una PR que alguien debe
  revisar y aprobar.
- No tiene acceso mágico a sistemas privados: necesita credenciales
  (secrets) y accesos concedidos explícitamente.

## Modos de trabajo

Devin puede usarse en dos registros distintos:

- **Modo tarea (asíncrono)**: le das un objetivo y trabaja solo hasta abrir la
  PR. Es el uso que más rendimiento da.
- **Modo colaborativo (síncrono)**: le vas dando instrucciones mientras
  trabaja, revisando su pantalla o su plan en tiempo real. Útil para tareas
  exploratorias o cuando el criterio de éxito se va descubriendo.

En la aplicación web también existen agentes especializados, por ejemplo un
agente de análisis de datos orientado a consultas SQL y visualizaciones.

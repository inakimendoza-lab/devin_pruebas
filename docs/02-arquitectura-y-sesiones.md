# 2. Arquitectura y ciclo de vida de una sesión

## La sesión como unidad de trabajo

Todo en Devin gira alrededor de la **sesión**. Una sesión es:

- una conversación con el usuario,
- una máquina virtual dedicada,
- un historial de acciones (comandos, ediciones, navegación),
- y, normalmente, un entregable (una PR, un informe o una respuesta).

Cada sesión tiene una URL propia del tipo `https://app.devin.ai/sessions/<id>`
desde la que se puede seguir el trabajo en directo, ver la terminal, el
navegador y el escritorio del agente.

## Ciclo de vida

```
1. Creación         Se lanza la sesión desde web, Slack, Jira/Linear, CLI o API.
        │
2. Arranque         Se levanta la VM a partir del snapshot del repositorio:
        │           el repo ya viene clonado y las dependencias instaladas.
        │
3. Contexto         Se inyectan Knowledge del repo, playbooks, reglas y skills.
        │
4. Planificación    Devin explora el código y crea una lista de tareas.
        │
5. Ejecución        Edita, ejecuta, prueba y corrige iterativamente.
        │
6. Entrega          Commit + pull request + mensaje de resumen.
        │
7. Seguimiento      Vigila CI, corrige fallos y responde comentarios de review.
        │
8. Reposo           Sin actividad, la sesión se duerme; puede reanudarse
                    enviando un mensaje nuevo.
```

## Componentes internos relevantes

### Máquina virtual
Aislada por sesión. Lo que Devin instala o escribe ahí no afecta a otras
sesiones ni a tu equipo. Los repositorios suelen venir preclonados en el
directorio de repos de la máquina.

### Lista de tareas (todo list)
Devin descompone el trabajo en tareas y las va marcando como en curso o
completadas. Es la forma más rápida de saber por dónde va sin leer todo el log.

### Gestión de contexto a largo plazo
Las sesiones largas se resumen y se van guardando puntos de control, de modo
que el agente puede continuar una tarea larga sin perder el objetivo original.

### Sesiones hijas y workflows
Una sesión puede lanzar **sesiones hijas** para paralelizar trabajo
independiente (por ejemplo, la misma migración en diez repositorios). Cada hija
corre en su propia máquina: no comparten ficheros ni procesos con la madre.
Para fan-outs grandes o pipelines por etapas existen además los *dynamic
workflows*, scripts que orquestan varias sesiones de forma determinista.

### Devin Review
Además de escribir código, Devin puede revisar pull requests y dejar
comentarios automáticos. Consume del mismo pool de crédito que las sesiones.

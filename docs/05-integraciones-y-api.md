# 5. Integraciones y API

Devin se usa desde el sitio donde ya trabaja el equipo, no solo desde su web.

## Puntos de entrada

| Canal | Uso típico |
|---|---|
| **Aplicación web** (`app.devin.ai`) | Lanzar y supervisar sesiones, ver terminal, navegador y escritorio |
| **Slack / Teams** | Mencionar a Devin en un hilo para que recoja la tarea con su contexto |
| **Jira / Linear** | Asignarle un ticket; Devin lo recoge y abre la PR asociada |
| **GitHub / GitLab / Azure DevOps / Bitbucket** | Crear PRs, revisar CI, responder comentarios de review |
| **CLI** | Lanzar sesiones desde la terminal |
| **API** | Integrar Devin en pipelines de CI/CD y automatizaciones propias |

## Slack

En Slack el hilo es el contexto: Devin lee la conversación donde se le
menciona. También admite comandos rápidos al principio del mensaje para cambiar
de modo (`!ultra`, `!fast`, `!lite`, `!fusion`, `!normal`). No hace falta abrir
una sesión nueva para cambiar de modo.

## Git y pull requests

El entregable natural de Devin es una PR:

- crea una rama propia,
- hace commits con los cambios,
- abre la PR con una descripción del *qué* y el *porqué*,
- vigila CI y corrige los fallos,
- responde a los comentarios de revisión.

## MCP (Model Context Protocol)

Devin puede conectarse a servidores MCP para hablar con herramientas externas
(bases de datos, Sentry, Figma, sistemas internos…). Los servidores MCP se
instalan y aprueban a nivel de organización, y añaden herramientas nuevas al
repertorio del agente.

## API

La API permite crear sesiones de forma programática, pasarles un prompt y
recuperar resultados estructurados. Es la base para:

- lanzar una sesión automáticamente cuando falla un job de CI,
- procesar en lote un backlog de tickets,
- construir automatizaciones internas (bots, dashboards, scripts nocturnos).

Existen además **automatizaciones**: sesiones programadas (por cron) o
disparadas por eventos de las integraciones, con entrega de resultados en Slack.

Referencia completa: https://docs.devin.ai/api-reference/overview

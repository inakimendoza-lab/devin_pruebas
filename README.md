# Cómo funciona Devin AI

Documentación en español sobre qué es Devin AI, cómo funciona por dentro y cómo
sacarle partido en el día a día de un equipo de desarrollo.

## Índice

1. [Qué es Devin](docs/01-que-es-devin.md)
2. [Arquitectura y ciclo de vida de una sesión](docs/02-arquitectura-y-sesiones.md)
3. [El entorno de trabajo (máquina, blueprint, snapshot)](docs/03-entorno-y-blueprints.md)
4. [Contexto persistente: Knowledge, Playbooks y Skills](docs/04-knowledge-playbooks-skills.md)
5. [Integraciones y API](docs/05-integraciones-y-api.md)
6. [Buenas prácticas para instruir a Devin](docs/06-buenas-practicas.md)
7. [Costes: ACUs y modos de sesión](docs/07-costes-y-modos.md)
8. [Preguntas frecuentes](docs/08-faq.md)

## Resumen rápido

Devin es un ingeniero de software autónomo: recibe una tarea en lenguaje
natural y la ejecuta de principio a fin en su **propia máquina virtual**, con
shell, sistema de ficheros, editor y navegador. Su salida típica es una **pull
request** revisable, no un fragmento de código suelto en un chat.

El flujo habitual es:

```
Tarea (web, Slack, Jira/Linear, API)
        │
        ▼
  Sesión de Devin  ──►  VM aislada con el repo clonado
        │                 (shell · ficheros · navegador · GUI)
        ▼
  Plan → implementación → lint/tests → commit
        │
        ▼
  Pull request + mensaje de resumen
```

## Cuándo usarlo

Devin rinde mejor en tareas **bien acotadas y verificables**: bugs concretos,
migraciones repetitivas, cobertura de tests, refactors mecánicos, upgrades de
dependencias, limpieza de backlog. Rinde peor en diseño de arquitectura abierto
o en tareas cuyo criterio de éxito no se puede comprobar de forma automática.

Detalle en [docs/06-buenas-practicas.md](docs/06-buenas-practicas.md).

## Enlaces oficiales

- Documentación: https://docs.devin.ai
- Aplicación: https://app.devin.ai

> Nota: este repositorio es documentación de apoyo escrita por el equipo; la
> fuente de verdad sobre funcionalidades y precios siempre es docs.devin.ai.

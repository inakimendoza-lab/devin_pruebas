# 4. Contexto persistente: Knowledge, Playbooks y Skills

Devin arranca cada sesión sin memoria de las anteriores. Lo que sí persiste es
el contexto que el equipo decide guardar explícitamente. Hay tres mecanismos
complementarios y conviene no confundirlos.

## Knowledge — "cómo son las cosas aquí"

Notas cortas asociadas a un repositorio o a la organización que se inyectan
automáticamente cuando son relevantes.

Sirven para convenciones y hechos estables:

- "Los tests de integración se lanzan con `make test-int`, no con `pytest`."
- "Los componentes nuevos van en `src/ui/components` y usan Tailwind."
- "No tocar `legacy/billing`, está congelado."

Características:

- Se pueden crear a mano o proponer desde una sesión y aprobar después.
- Son **contexto**, no órdenes: las instrucciones del usuario tienen prioridad.
- Conviene mantenerlas cortas y revisarlas periódicamente; el knowledge obsoleto
  hace más daño que la ausencia de knowledge.

## Playbooks — "cómo se hace esta tarea repetida"

Un playbook es un prompt reutilizable y compartible para una tarea que se
repite: como un system prompt a medida.

Ejemplos: "migrar un módulo de JavaScript a TypeScript", "añadir un endpoint
siguiendo nuestra plantilla", "actualizar una dependencia y arreglar los tests".

Úsalos cuando:

- vas a repetir el mismo encargo muchas veces,
- te descubres repitiendo siempre los mismos recordatorios,
- quieres que otros compañeros reproduzcan un resultado que ya te funcionó.

Regla práctica: si es una **convención**, va en Knowledge; si es un
**procedimiento**, va en un Playbook.

## Skills — procedimientos ejecutables

Las skills son procedimientos estructurados (ficheros `SKILL.md`, típicamente en
`.agents/skills/`) que Devin activa cuando encajan con la tarea. A diferencia
del knowledge, describen pasos que debe seguir en orden: cómo hacer login en el
entorno de staging, cómo desplegar, cómo generar una migración.

Son especialmente útiles para automatizar cosas frágiles que ya se resolvieron
una vez (por ejemplo, un script de Playwright para un login SSO).

## Comparativa

| | Knowledge | Playbook | Skill |
|---|---|---|---|
| Contenido | Hechos y convenciones | Prompt de tarea | Procedimiento paso a paso |
| Se aplica | Automáticamente por relevancia | Al lanzar la sesión | Cuando la tarea encaja |
| Ámbito | Repo / organización | Compartido en el equipo | Repo / personal / cuenta |
| Ejemplo | "Usamos pnpm" | "Migrar módulo a TS" | "Desplegar a staging" |

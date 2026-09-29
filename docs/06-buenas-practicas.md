# 6. Buenas prácticas para instruir a Devin

La diferencia entre una sesión que acaba en una PR mergeable y una que se
pierde en círculos está casi siempre en el prompt y en el alcance de la tarea.

## Elegir bien la tarea

Devin funciona especialmente bien cuando:

- el alcance está acotado y el criterio de éxito es **verificable**
  (tests que pasan, endpoint que responde, build que compila),
- la tarea es repetitiva o mecánica (migraciones, upgrades, tests, refactors),
- existe un ejemplo previo en el propio repositorio que puede imitar.

Funciona peor cuando:

- hay que tomar decisiones de arquitectura abiertas,
- el resultado esperado es subjetivo ("mejorar el rendimiento"),
- la tarea depende de conocimiento tácito que nadie ha escrito en ningún sitio,
- requiere accesos o credenciales que no tiene.

## Escribir el prompt

**Sé concreto y opinativo.** Toma tú las decisiones de diseño importantes.

Mal:

> Mejora el rendimiento de la base de datos.

Bien:

> Optimiza la consulta `getOrderDetails` en `orderService.js`: añade un índice
> compuesto sobre `order_id` y `product_id` en `order_items` y sustituye la
> subconsulta correlacionada por un JOIN contra `products`.

**Incluye siempre que puedas:**

- Ficheros o módulos concretos donde mirar.
- Un ejemplo a imitar dentro del propio repo.
- Cómo verificar el resultado (comando de tests, URL que debe funcionar).
- Qué NO tocar y qué queda fuera de alcance.
- Enlaces a la documentación externa relevante.

## Durante la sesión

- Revisa el plan inicial: corregirlo pronto cuesta mucho menos que después.
- Responde rápido cuando pregunte; una sesión bloqueada acaba durmiéndose.
- Si ves que va en la dirección equivocada, redirígelo en vez de dejar que
  termine: los mensajes a mitad de sesión reconducen el trabajo.

## Después

- Revisa la PR como revisarías la de un compañero nuevo en el equipo.
- Si cometió un error por falta de contexto, conviértelo en **Knowledge** para
  que no se repita.
- Si la tarea se va a repetir, conviértela en un **Playbook**.
- Si el problema fue del entorno, arregla el **blueprint**.

## Antipatrones frecuentes

| Antipatrón | Consecuencia |
|---|---|
| Prompt de una línea sin contexto | Interpretaciones erróneas y trabajo desperdiciado |
| Tarea gigante sin descomponer | La sesión agota límites antes de terminar |
| Entorno sin configurar | Gasta la sesión peleándose con dependencias |
| No dar forma de verificar | Devin cree que ha terminado y no ha terminado |
| Dejarla sin supervisión inicial | Se descubre el rumbo equivocado demasiado tarde |

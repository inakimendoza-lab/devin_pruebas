# 7. Costes: ACUs y modos de sesión

## ACU (Agent Compute Unit)

El consumo de Devin se mide en **ACUs**, que reflejan el cómputo utilizado
durante una sesión. A igualdad de tarea, menos ACUs significa una sesión más
eficiente; un consumo alto suele indicar reintentos, callejones sin salida o un
entorno mal configurado.

Consideraciones:

- Todos los productos (sesiones, Devin Review, workflows) consumen del mismo
  pool de la organización.
- Cada agente de un *workflow* es una sesión: un fan-out amplio multiplica el
  coste. Conviene probar primero en una porción pequeña.
- Los administradores disponen de paneles de uso y de controles de coste.

## Modos de agente

| Modo | Descripción |
|---|---|
| `normal` | Modo por defecto. Buen equilibrio y sólido en planificación a largo plazo |
| `fast` | Aproximadamente el doble de rápido, unas 4 veces más caro, misma inteligencia |
| `lite` | Más ligero y barato, para tareas de alcance pequeño |
| `ultra` | El modo más capaz |
| `fusion` | Enrutado multi-modelo |

El modo **se puede cambiar a mitad de sesión**: en la web, con el selector de
agente junto al cuadro de mensaje (se aplica al mensaje siguiente); en Slack,
con `!ultra`, `!fast`, `!lite`, `!fusion` o `!normal` al principio del mensaje.

## Cómo reducir coste

1. **Invierte en el blueprint.** Cada minuto que Devin no pasa instalando
   dependencias es ACU que no se gasta.
2. **Acota la tarea.** Tres sesiones pequeñas y verificables suelen salir más
   baratas que una enorme que se atasca.
3. **Da contexto por adelantado** (Knowledge, playbooks, enlaces): evita ciclos
   de exploración innecesarios.
4. **Usa el modo adecuado**: `lite` para trabajo mecánico de alcance pequeño,
   `ultra` reservado a lo difícil.
5. **Revisa las sesiones caras** con las herramientas de análisis de sesión
   para entender dónde se fue el tiempo y corregirlo la próxima vez.

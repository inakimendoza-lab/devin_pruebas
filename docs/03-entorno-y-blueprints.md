# 3. El entorno de trabajo: máquina, blueprint y snapshot

La calidad de los resultados de Devin depende enormemente de lo bien
configurado que esté su entorno. Si Devin tiene que pelearse cada sesión con la
instalación de dependencias, gasta tiempo y crédito en algo que debería estar
resuelto de antemano.

## Conceptos

| Concepto | Definición |
|---|---|
| **Máquina (workspace)** | La VM donde Devin trabaja: shell, ficheros, navegador |
| **Blueprint** | Fichero YAML que describe cómo preparar esa máquina |
| **Snapshot** | Imagen ya construida a partir del blueprint, reutilizada en cada sesión |

El flujo es: se edita el **blueprint** → se aprueba → se construye un
**snapshot** → las sesiones nuevas arrancan de ese snapshot en segundos, con el
repositorio clonado y todo instalado.

## Qué debería cubrir un buen blueprint

- Versiones exactas de lenguajes y gestores de paquetes (Node, Python, Java…),
  usando las herramientas que indique el README del repositorio.
- Instalación de dependencias (`npm ci`, `poetry install`, `mvn -q install`…).
- Compilación del proyecto, para detectar antes los fallos de build.
- Variables de entorno y ficheros de configuración de desarrollo.
- Hooks de pre-commit (`pre-commit install`) si el repo los usa.
- Comandos de arranque de servicios (base de datos, backend, frontend).

## Niveles de blueprint

- **De repositorio**: se aplica a las sesiones de ese repo. Sus pasos corren
  *después* de clonar el código, así que pueden referenciar ficheros del repo.
- **De organización**: se aplica antes que cualquier blueprint de repositorio y
  es ideal para herramientas compartidas (CLIs, versiones de runtime comunes).
  Como corre antes del clonado, no puede depender de ficheros del repo.

## Secretos

Las credenciales se guardan como **secrets** y se inyectan en el entorno de la
sesión, nunca en el código ni en el repositorio. Pueden tener alcance de
usuario, de organización o de repositorio. Devin nunca debe imprimir su valor
ni commitearlos.

Buenas prácticas:

- Nombres descriptivos (`AWS_DEVIN_TESTING_ACCESS_KEY`, no `KEY`).
- Cuentas de servicio dedicadas y con el mínimo privilegio posible.
- Secretos temporales para pruebas puntuales, permanentes para accesos de uso
  recurrente.

## Señales de que el entorno está mal configurado

- Devin dedica los primeros minutos de cada sesión a instalar dependencias.
- Falla al ejecutar los tests o no encuentra el comando de lint.
- No consigue levantar la aplicación para probar sus cambios.
- Repite en cada sesión la misma pregunta sobre cómo arrancar el proyecto.

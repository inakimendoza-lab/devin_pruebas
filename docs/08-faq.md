# 8. Preguntas frecuentes

**¿Devin recuerda sesiones anteriores?**
No automáticamente. Cada sesión arranca limpia. Lo que persiste es el contexto
guardado explícitamente: Knowledge, Playbooks, Skills y el blueprint del
entorno.

**¿Trabaja sobre mi máquina o sobre mi repositorio local?**
Ni una cosa ni la otra: trabaja en su propia VM, con un clon del repositorio.
Tus cambios locales no le llegan salvo que estén subidos al remoto.

**¿Puede borrar o romper algo del repositorio?**
Sus cambios llegan como pull request, así que pasan por revisión. Evita
comandos destructivos de git y no hace push directo a `main` salvo que se le
pida explícitamente.

**¿Qué pasa si no tiene acceso a algo?**
Lo dice y pide la credencial correspondiente, ofreciendo alternativas: seguir
sin ese acceso, un secreto temporal solo para esa sesión, o un secreto
permanente para futuras sesiones.

**¿Puede probar la aplicación, no solo compilarla?**
Sí. Tiene navegador y escritorio, puede levantar la app, navegar por la UI,
hacer login y grabar en vídeo sus pruebas.

**¿Puedo cambiar de modo a mitad de sesión?**
Sí, tanto en la web (selector de agente) como en Slack (`!ultra`, `!fast`,
`!lite`, `!fusion`, `!normal`). No hace falta abrir una sesión nueva.

**¿Qué hago si la sesión se queda atascada?**
Mándale un mensaje redirigiéndola con más contexto. Si el problema se repite,
la tarea probablemente es demasiado grande: descomponla.

**¿Cuándo uso Knowledge y cuándo un Playbook?**
Knowledge para convenciones y hechos estables del repositorio; Playbook para
procedimientos que se repiten como encargo.

**¿Se puede integrar en CI/CD?**
Sí, a través de la API y de las automatizaciones (programadas o disparadas por
eventos de las integraciones).

**¿Dónde está la documentación oficial?**
https://docs.devin.ai

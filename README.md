# Examen Final DevOps
Funcionamiento de la app en local
<img width="1483" height="797" alt="image" src="https://github.com/user-attachments/assets/cae28b71-d24e-40fe-990c-9674096be0c7" />

Captura de logs con grafana de mi app: hola-mundo
<img width="1513" height="788" alt="image" src="https://github.com/user-attachments/assets/984fe9a6-13ec-4a68-8872-a60df35e15b7" />


Secrets configurados en el mismo cluster de kubernetes para que en el archivo .yml del workflow no se harcodee directamente.
<img width="1900" height="472" alt="image" src="https://github.com/user-attachments/assets/55de3ab2-6fe7-4f5b-8b4e-1d77c8290fcb" />

SEGURIDAD Y DEVSECOPS
Se implementó un enfoque de seguridad proactiva integrando controles automáticos en el pipeline de CI/CD y medidas de endurecimiento (hardening) en la infraestructura. La gestión de secretos se realiza mediante el uso de Kubernetes Secrets y referencias secretKeyRef en los manifiestos de despliegue, evitando la exposición de credenciales sensibles en el repositorio de código. El pipeline incluye un análisis de vulnerabilidades mediante Trivy, configurado para bloquear automáticamente cualquier despliegue que presente riesgos de severidad CRITICAL o HIGH. Adicionalmente, se aplicaron medidas de hardening que incluyen la ejecución de contenedores con usuarios no-privilegiados (non-root) y el aislamiento de recursos mediante LVM en el host, garantizando la estabilidad del cluster k3d y mitigando vectores de ataque por escalada de privilegios o denegación de servicio por agotamiento de almacenamiento. Se puede evidenciar que el último pipeline falló porque se configuró que al tener una vulnerabilidad tipo high encontrada, el mismo se bloquea y no se logra completar.

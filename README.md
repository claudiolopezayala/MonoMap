# MonoMap

## Descripción del Proyecto

Este proyecto consiste en la creación de una API REST escalable que permita registrar y gestionar los casos de la Viruela del Mono en México. La API debe estar diseñada de manera que pueda ser fácilmente mantenida y extendida, permitiendo añadir nuevas funcionalidades en el futuro sin necesidad de realizar cambios drásticos en la arquitectura del sistema. Los datos deben almacenarse en MongoDB, aprovechando su flexibilidad para manejar esquemas dinámicos y escalabilidad.

La solución debe implementarse utilizando Node.js con TypeScript, asegurando tipado fuerte y minimización de errores comunes. El proyecto deberá contener una implementación completa de CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar los casos de la Viruela del Mono, así como funcionalidades adicionales descritas a continuación.

## Requisitos del Proyecto

La API debe manejar los siguientes campos para cada caso de Viruela del Mono:

• lat: Coordenada de latitud donde se detectó el caso.

• lng: Coordenada de longitud donde se detectó el caso.

• isSent: Booleano que indica si se envió un correo electrónico.

• genre: Género de la persona contagiada.

• age: Edad de la persona contagiada.

• creationDate: Fecha y hora en que se registró el caso (se almacenará automáticamente en MongoDB al crear un nuevo caso).

## Funcionalidades Requeridas



CRUD Completo para la gestión de casos:

• Crear un nuevo caso: Endpoint para registrar un nuevo caso con la información mencionada.

• Obtener todos los casos registrados: Endpoint para recuperar todos los casos almacenados en la base de datos.

• Obtener los casos registrados en la última semana: Endpoint que filtre y devuelva los casos que se registraron durante los últimos 7 días, utilizando el campo creationDate.

• Actualizar un caso: Endpoint para actualizar los detalles de un caso existente.

• Eliminar un caso: Endpoint para eliminar un caso registrado.



Envío de correos electrónicos al registrar un nuevo caso:

• Utilizando Mapbox, la API debe enviar un correo electrónico que incluya una fotografía del mapa donde ocurrió el caso y la descripción de la persona enferma (género y edad) cuando se registre un nuevo caso



Cron Job para el envío de correos electrónicos:

• Implementa un cron job que verifique cada 10 s si hay casos nuevos registrados y, en caso afirmativo, envíe un correo electrónico con los detalles del caso.

Requisitos Técnicos

• Contenedor Docker: La aplicación debe estar contenida en un contenedor Docker. Proporciona un archivo docker-compose.yml que permita ejecutar la aplicación desde Docker.

• GitHub Actions: Configura un GitHub Action en el repositorio que construya la imagen Docker y la suba a Docker Hub automáticamente.

• Commits: Todos los commits en el repositorio deben ser legibles y tener una coherencia clara en su mensaje.

• Comparte el link del repositorio de GitHub al finalizar.

Evaluación



Funcionalidad de la API (50 puntos)

• Registro de casos (10 puntos)

• Recuperación de todos los casos (10 puntos)

• Recuperación de casos de la última semana (10 puntos)

• Actualización de casos (10 puntos)

• Eliminación de casos (10 puntos)



Configuración de Docker y Docker Compose (20 puntos)

• Dockerfile correctamente configurado (10 puntos)

• Archivo docker-compose.yml correctamente configurado (10 puntos)



GitHub Actions (20 puntos)

• Configuración adecuada del workflow para construir y subir la imagen a Docker Hub (20 puntos)



Cron Job y Envío de Correos Electrónicos (10 puntos)

• Implementación correcta del cron job y su integración con el envío de correos electrónicos (10 puntos)



Se tomara como entrega el ultimo commit registrado en el repositorio antes del vencimiento del examen.
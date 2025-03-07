Gestión de Eventos y Reservas - Microservicios
Este proyecto se basa en dos microservicios: uno destinado a la administración de eventos (/events) y otro para la gestión de reservas (/bookings). Ambos están desarrollados con Node.js, Express, Sequelize y Postgres.

Requisitos del Proyecto
Funcionalidades Esenciales
Microservicio de Eventos (/events)

Permite la creación de eventos.
Proporciona la lista de todos los eventos disponibles.
Recupera la información de un evento en específico mediante su ID.
Microservicio de Reservas (/bookings)

Permite registrar reservas asociadas a eventos.
Proporciona la lista de todas las reservas.
Muestra las reservas correspondientes a un evento determinado.
Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript.
Express: Framework para la creación de aplicaciones web y APIs.
Sequelize: ORM que facilita la interacción con la base de datos.
Postgres: Sistema de gestión de bases de datos relacional.
Joi: Librería para validación de datos.
Postman: Herramienta para probar endpoints de la API.
Instalación
Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instalar dependencias
bash
Copiar
Editar
npm install
Configurar la base de datos

Crear una base de datos en Postgres.
Definir las variables de entorno en un archivo .env:
env
Copiar
Editar
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_HOST=localhost
DB_NAME=tu-base-de-datos
DB_PORT=5432
Ejecutar migraciones para crear las tablas
bash
Copiar
Editar
npx sequelize-cli db:migrate
Iniciar el servidor
bash
Copiar
Editar
npm start
Endpoints
Eventos (/events)
Crear un evento

Método: POST

URL: /api/v1/events

Body (JSON):

json
Copiar
Editar
{
  "name": "Concierto de Rock",
  "description": "Un concierto increíble con las mejores bandas de rock.",
  "date": "2023-12-15T20:00:00Z",
  "capacity": 1000
}
Obtener la lista de eventos

Método: GET
URL: /api/v1/events
Obtener un evento por ID

Método: GET
URL: /api/v1/events/:id
Reservas (/bookings)
Crear una reserva

Método: POST

URL: /api/v1/bookings

Body (JSON):

json
Copiar
Editar
{
  "eventId": "1",
  "userEmail": "usuario@example.com",
  "numTickets": 2
}
Obtener la lista de reservas

Método: GET
URL: /api/v1/bookings
Obtener las reservas de un evento específico

Método: GET
URL: /api/v1/events/:id/bookings
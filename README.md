# CRUD JS + MongoDB

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Node.js, Express y MongoDB. Permite gestionar usuarios mediante una API RESTful y cuenta con una estructura backend y frontend.

## Estructura del proyecto

````crud-js-mongodb/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── index.js
│       ├── config/
│       │   └── bd.js
│       ├── controllers/
│       │   └── user.controller.js
│       ├── models/
│       │   └── user.model.js
│       └── routes/
│           └── user.routes.js
└── frontend/```

## Instalación y ejecución

1. Clona el repositorio:
   ```powershell
   git clone <URL-del-repositorio>
````

2.  Ingresa a la carpeta `backend` y ejecuta:
3.  ```powershell
    cd backend
    npm install
    npm run dev
    ```
4.  El servidor se iniciará en el puerto configurado (por defecto 3000).

## Endpoints principales

- `GET /api/users` - Listar usuarios
- `POST /api/users` - Crear usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

## Configuración de la base de datos

La configuración de la conexión a MongoDB se encuentra en `src/config/bd.js`. Asegúrate de tener una instancia de MongoDB corriendo y actualiza la URI si es necesario.

## Contribuciones

Las contribuciones son bienvenidas. Puedes abrir issues o pull requests para sugerencias y mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.

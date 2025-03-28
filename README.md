# NestJS Backend API

## Descripción
Este proyecto es una API RESTful desarrollada con **NestJS**, que utiliza **Prisma** como ORM para bases de datos SQL y **MongoDB** para almacenamiento NoSQL. Además, implementa **JWT** para autenticación y gestiona la carga de archivos en **AWS S3**.

## Características
- **Base de Datos SQL:** MySQL con Prisma.
- **Base de Datos NoSQL:** MongoDB para información adicional.
- **Autenticación y Seguridad:** Uso de **JWT** para proteger las rutas.
- **Carga de Archivos:** Subida de imágenes a **AWS S3**.
- **WebSockets:** Notificaciones en tiempo real para la creación de empresas.
- **Estructura Modular:** Arquitectura basada en módulos según las mejores prácticas de NestJS.

## Requisitos Previos

### Instalación de dependencias
Asegúrate de tener instalado:
- **Node.js** (v16+)
- **Docker** (opcional, para base de datos local)
- **PostgreSQL / MySQL / MongoDB**

Instala las dependencias del proyecto:
```sh
npm install
```

## Configuración
### Variables de Entorno
Crea un archivo **.env** en la raíz del proyecto con la siguiente configuración:
```env
# Configuración de la Base de Datos SQL
DATABASE_URL="mysql://user:password@localhost:3306/db_name"

# Configuración de MongoDB
MONGO_URI="mongodb://localhost:27017/nest"

# Configuración de JWT
JWT_SECRET="your_jwt_secret"

# Configuración de AWS S3
AWS_REGION="us-east-1"
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_S3_USERS_BUCKET="your-user-bucket"
AWS_S3_COMPANIES_BUCKET="your-company-bucket"
AWS_S3_PRODUCTS_BUCKET="your-product-bucket"
```

## Migraciones y Seeders
Ejecuta las migraciones para crear las tablas en la base de datos SQL:
```sh
npx prisma migrate dev --name init
```
Carga los datos iniciales (ciudades y departamentos desde Colombia-JSON):
```sh
npm run seed
```

## Ejecutar el Proyecto
Para iniciar el servidor NestJS en modo desarrollo:
```sh
npm run start:dev
```

## Endpoints Principales

### **Autenticación**
- **POST** `/auth/login` → Iniciar sesión y obtener un token JWT.

### **Usuarios**
- **GET** `/users` → Listar usuarios.
- **POST** `/users` → Crear usuario.

### **Compañías**
- **GET** `/companies` → Listar compañías.
- **POST** `/companies` → Crear compañía (incluyendo logo en AWS S3).

### **Productos**
- **GET** `/products` → Listar productos.
- **POST** `/products` → Crear producto (incluyendo imagen en AWS S3).

## Carga de Imágenes en S3
Para subir una imagen al crear una compañía, en **Postman**:
1. Seleccionar `form-data`.
2. Agregar clave `logoUrl` y seleccionar un archivo.
3. Enviar la solicitud `POST /companies` con los datos de la empresa.

## WebSockets
Para escuchar eventos en **Postman**:
1. Abrir una nueva pestaña `WebSocket`.
2. Conectar a `ws://localhost:3000`.
3. Escuchar el evento `company.created`.

## Despliegue
Puedes desplegar la API en plataformas como **Render**, **Vercel**, o **AWS**.

## Contacto
Para consultas, reportes de errores o mejoras, por favor abre un issue en el repositorio del proyecto.

🚀 **Happy Coding!**




# Proyecto de Prueba Técnica

Este es un proyecto de prueba técnica que utiliza Node.js con Sequelize para manejar una base de datos MySQL. El proyecto está configurado para ejecutarse con Docker y usa `nodemon` para la recarga automática durante el desarrollo.

## Requisitos

- Docker y Docker Compose
- Node.js (versión LTS recomendada)
- MySQL (si no se usa Docker)

## Instrucciones para correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/lukkaku12/prueba-tecnica.git
cd prueba-tecnica
```

### 2. Configurar variables de entorno

Copie el archivo `.env.example` y renómbrelo a `.env`:

```bash
cp .env.example .env
```

Configure las siguientes variables en `.env`:

```env
DB_HOST=localhost
DB_NAME=prueba-tecnica
DB_USER=root
DB_PASSWORD=rootpassword
DB_PORT=3306
```

### 3. Ejecutar con Docker (Recomendado)

```bash
docker-compose up -d
```

### 4. Iniciar servidor con nodemon:
```bash
npm start
```

La aplicación estará disponible en:  
http://localhost:3000

### 5. Ejecutar sin Docker

1. Instalar dependencias:
```bash
npm install
```


2. poner las siguientes variables en el .env del root del proyecto

```bash
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_PORT=
```

llenarlo con datos de su base de datos MySQL *existente* al arrancar el proyecto se le haran las migraciones automáticamente


3. Iniciar servidor con nodemon:
```bash
npm start
```


## Decisiones de Modelado

### Modelos Principales
| Modelo      | Campos                          |
|-------------|---------------------------------|
| Author      | id, author_name, last_name, birth_date |
| Book        | id, title, author_id, genre, publish_date |
| User        | id, user_name, email, password  |
| Borrowings  | id, user_id, book_copy_id, borrow_date, return_date |
| BookCopy    | id, book_id, status             |

### Relaciones
- **Author → Book** (1:N)  
  Un autor puede tener múltiples libros.

- **Book → BookCopy** (1:N)  
  Cada libro puede tener múltiples copias físicas.

- **User ↔ Borrowings ↔ BookCopy** (N:M)  
  Los préstamos se registran a través de la tabla Borrowings.

<img width="919" alt="image" src="https://github.com/user-attachments/assets/4d9ed6fb-57d5-430b-ac99-efb07daaaad6" />

## Configuración de la Base de Datos
La conexión se establece mediante Sequelize usando esta configuración:


```typescript
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    models: [__dirname + '/../models/*.ts'] // o se puede traer las entidades manualmente como en este caso particular
});
```

## Estructura de Docker
Archivo `docker-compose.yaml`:

```yaml
services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: prueba-tecnica
      # se pueden poner los otros datos si se desea
      # MYSQL_USER: user                           # Usuario no-root
      # MYSQL_PASSWORD: userpassword               # Contraseña para el usuario no-root
      # MYSQL_ROOT_HOST: '%'                       # Permite conexiones desde cualquier host (si es necesario)
      # MYSQL_CHARSET: utf8mb4                     # Configura el charset para la base de datos (opcional, por ejemplo, utf8mb4 para soportar emojis)
      # MYSQL_TIMEZONE: "UTC"                      # Establecer la zona horaria
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

## Notas Adicionales
- Para desarrollo local sin Docker, asegúrese de tener MySQL instalado y corriendo.
- Use `npm start` para recargar automáticamente con nodemon.
- Los modelos siguen convenciones de Sequelize para relaciones y migraciones.


## Documentación de los endpoints [aquí](./endpoints-documentacion.md)

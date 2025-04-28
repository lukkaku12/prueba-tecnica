Aquí tienes un ejemplo de documentación en formato Markdown (README.md) que describe los endpoints de tu aplicación:

# API Documentation

Esta documentación describe los endpoints disponibles en la API para gestionar usuarios, autores, libros y préstamos.

## Base URL
La URL base para acceder a los endpoints es:

http://localhost:3000/

## Tabla de contenido

- [Usuarios](#1-usuarios-user)
- [Autores](#2-autores-author)
- [Libros](#3-libros-book)
- [Préstamos](#4-préstamos-borrowings)

## Endpoints

### 1. **Usuarios (`/user`)**

#### Obtener todos los usuarios
**Método**: `GET`
- **Descripción**: Obtiene la lista de todos los usuarios registrados.
- **Respuesta**:
    - **Código de estado**: `200 OK`
    - **Cuerpo**:
      ```json
      [
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "createdAt": "2025-04-25T00:00:00Z",
          "updatedAt": "2025-04-25T00:00:00Z"
        }
      ]
      ```

#### Crear un nuevo usuario
**Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

- **Respuesta**:
    - **Código de estado**: `201 Created`
    - **Cuerpo**:
    ```json
    {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2025-04-25T00:00:00Z",
    "updatedAt": "2025-04-25T00:00:00Z"
    }
    ```


#### Editar un usuario

**Método**: `PUT`
- **Descripción**: Actualiza los datos de un usuario existente.
- **Cuerpo de la solicitud**:
```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

- **Respuesta**:
    - **Código de estado**: `200 OK`
    - **Cuerpo**:
    ```json
    {
    "id": 1,
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "createdAt": "2025-04-25T00:00:00Z",
    "updatedAt": "2025-04-25T00:00:00Z"
    }
    ```


#### Eliminar un usuario

**Método**: `DELETE`
- **Descripción**: Elimina un usuario por su ID.
- **Parámetros**: id (ID del usuario)
- **Respuesta**:
```json
{
    "status": 204,
    "response": "user eliminated successfully"
}
```
- **Código de estado**: 204 No Content

### 2. **Autores (/author)**

#### Crear un autor

**Método**: `POST`
- **Descripción**: Crea un nuevo autor.
- **Cuerpo de la solicitud**:
```json
{
  "author_name": "J.K.",
  "last_name": "Rowling",
  "birth_date": "1965-07-31"
}
```

- **Respuesta**:
    - **Código de estado**: `201 Created`
    - **Cuerpo**:
    ```json
    {
    "id": 1,
    "author_name": "J.K.",
    "last_name": "Rowling",
    "birth_date": "1965-07-31"
    }
    ```

#### Obtener todos los autores

- **Método**: `GET`
	- **Descripción**: Obtiene la lista de todos los autores.
	- **Respuesta**:
        - **Código de estado**: `200 OK`
        - **Cuerpo**:
        ```json
        {
        "status": 200,
        "authors": [
                {
                "id": 1,
                "author_name": "J.K.",
                "last_name": "Rowling",
                "birth_date": "1965-07-31"
                },
                {
                "id": 2,
                "author_name": "George",
                "last_name": "Orwell",
                "birth_date": "1903-06-25"
                },
                {
                "id": 3,
                "author_name": "Gabriel",
                "last_name": "García Márquez",
                "birth_date": "1927-03-06"
                }
            ]
        }
        ```



#### Obtener un autor por ID

- **Método**: `GET`
	- **Descripción**: Obtiene un autor específico por su ID.
	- **Parámetros**: id (ID del autor)
	- **Respuesta**:
        - **Código de estado**: `200 OK`
        - **Cuerpo**:
        ```json
        {
        "id": 1,
        "author_name": "J.K.",
        "last_name": "Rowling",
        "birth_date": "1965-07-31"
        }
        ```



#### Actualizar un autor

- **Método**: `PUT`
	- **Descripción**: Actualiza los datos de un autor existente.
	- **Parámetros**: id (ID del autor)
	- **Cuerpo de la solicitud**:
    ```json
    {
    "author_name": "J.K.",
    "last_name": "Rowling",
    "birth_date": "1965-07-31"
    }
    ```


- **Respuesta**:
	- **Código de estado**: `200 OK`
	- **Cuerpo**:
    ```json
    {
    "id": 1,
    "author_name": "J.K.",
    "last_name": "Rowling",
    "birth_date": "1965-07-31"
    }
    ```


#### Eliminar un autor

- **Método**: `DELETE`
	- **Descripción**: Elimina un autor por su ID.
	- **Parámetros**: id (ID del autor)
	- **Respuesta**:
    ```json
    {
        "status": 200,
        "message": "Author deleted successfully",
    }
    ```
	- **Código de estado**: `204 No Content`

### 3. **Libros (/book)**

#### Crear un nuevo libro

- **Método**: `POST`
	- **Descripción**: Crea un nuevo libro.
	- **Cuerpo de la solicitud**:
    ```json
    {
    "title": "Harry Potter and the Philosopher's Stone",
    "authorId": 1,
    "publication_date": "1997-06-26"
    }
    ```


- **Respuesta**:
	- **Código de estado**: `201 Created`
	- **Cuerpo**:
    ```json
    {
    "id": 1,
    "title": "Harry Potter and the Philosopher's Stone",
    "authorId": 1,
    "publication_date": "1997-06-26"
    }
    ```


#### Actualizar un libro

- **Método**: `PUT`
	- **Descripción**: Actualiza un libro existente.
	- **Parámetros**: id (ID del libro)
	- **Cuerpo de la solicitud**:
    ```json
    {
    "title": "Harry Potter and the Chamber of Secrets",
    "authorId": 1,
    "publication_date": "1998-07-02"
    }
    ```

- **Respuesta**:
	- **Código de estado**: `200 OK`
	- **Cuerpo**:
    ```json
    {
    "id": 1,
    "title": "Harry Potter and the Chamber of Secrets",
    "authorId": 1,
    "publication_date": "1998-07-02"
    }
    ```


#### Eliminar un libro

- **Método**: `DELETE`
	- **Descripción**: Elimina un libro por su ID.
	- **Parámetros**: `id (ID del libro)`
	- **Respuesta**:
    ```json
    {
        "status": 204,
        "response": "Book with ID id deleted successfully"
    }
    ```
	- **Código de estado**: `204 No Content`

### 4. **Préstamos (/borrowings)**

#### Solicitar un libro prestado

- **Método**: `POST`
	- **Descripción**: Realiza un préstamo de un libro.
	- **Cuerpo de la solicitud**:
    ```json
    {
    "userId": 1,
    "bookId": 1
    }
    ```

- **Respuesta**:
	- **Código de estado**: `201 Created`
	- **Cuerpo**:
    ```json
    {
    "borrowingId": 1,
    "userId": 1,
    "bookId": 1,
    "borrowedAt": "2025-04-25T00:00:00Z",
    "dueDate": "2025-05-25T00:00:00Z"
    }
    ```


#### Devolver un libro

- **Método**: `POST`
    - **Descripción**: Marca un libro como devuelto.
	- **Cuerpo de la solicitud**:
    ```json
    {
    "userId": 1,
    "copyId": 1
    }
    ```

- **Respuesta**:
	- **Código de estado**: `200 OK`
	- **Cuerpo**:
    ```json
    {
    "borrowingId": 1,
    "userId": 1,
    "bookId": 1,
    "returnedAt": "2025-04-30T00:00:00Z"
    }
    ```
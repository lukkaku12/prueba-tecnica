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
- [Copias de libros](#5-copias-de-libros-book-copy)

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
    "user_name": "John Doe",
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
    "status": 201,
    "message": "Author created successfully",
    "author": {
        "id": 1,
        "author_name": "J.K.",
        "last_name": "Rowling",
        "birth_date": "1965-07-31T00:00:00.000Z"
        }
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
    "name": "Harry Potter and the Philosopher's Stone",
    "author_id": 1,
    "date_created": "1997-06-26",
    "isAvailable":true
    }
    ```


- **Respuesta**:
	- **Código de estado**: `201 Created`
	- **Cuerpo**:
    ```json
    {
    "status": 201,
    "message": "Book created successfully",
    "result": {
        "id": 1,
        "name": "Harry Potter and the Philosopher's Stone",
        "author_id": 1,
        "date_created": "1997-06-26T00:00:00.000Z",
        "isAvailable": true
        }
    }
    ```


#### Actualizar un libro

- **Método**: `PUT`
	- **Descripción**: Actualiza un libro existente.
	- **Parámetros**: id (ID del libro)
	- **Cuerpo de la solicitud**:
    ```json
    {
    "name": "Harry Potter and the Chamber of Secrets",
    "author_id": 1,
    "date_created": "1997-06-25",
    "isAvailable":false
    }
    ```

- **Respuesta**:
	- **Código de estado**: `200 OK`
	- **Cuerpo**:
    ```json
    {
    "id": 1,
    "title": "Harry Potter and the Chamber of Secrets",
    "author_id": 1,
    "date_created": "1998-07-02"
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

- **Método**: `POST /borrow`
	- **Descripción**: Realiza un préstamo de un libro.
	- **Cuerpo de la solicitud**:
    ```json
    {
    "user_id": 1,
    "book_id": 1
    }
    ```

- **Respuesta**:
	- **Código de estado**: `201 Created`
	- **Cuerpo**:
    ```json
    {
    "status": 201,
    "message": "Book borrowed successfully",
    "borrowing": {
        "id": 2,
        "user_id": 1,
        "copy_id": 1,
        "borrowing_date": "2025-04-28T22:31:54.836Z",
        "borrowing_deadline": "2025-05-13T22:31:54.836Z"
        }
    }
    ```


#### Devolver un libro

- **Método**: `POST /return`
    - **Descripción**: Marca un libro como devuelto.
	- **Cuerpo de la solicitud**:
    ```json
    {
    "user_id": 1,
    "copy_id": 1
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

### 5. **Copias de libros (`/book-copy`)**

#### Crear una copia de un libro

**Método**: `POST`  
**Endpoint**: `/`

- **Descripción**: Crea una nueva copia para un libro existente.
- **Cuerpo de la solicitud**:
  ```json
  {
    "bookId": 1
  }
  ```
- **Respuesta**:
  - **Código de estado**: `201 Created`
  - **Cuerpo**:
    ```json
    {
      "id": 10,
      "bookId": 1,
      "status": "available",
      "createdAt": "2025-04-28T00:00:00Z",
      "updatedAt": "2025-04-28T00:00:00Z"
    }
    ```

---

#### Eliminar una copia de un libro

**Método**: `DELETE`  
**Endpoint**: `/:id`

- **Descripción**: Elimina una copia de un libro a partir de su ID.
- **Parámetros**: 
  - `id`: ID de la copia a eliminar (número entero).
- **Respuesta**:
  - **Código de estado**: `204 No Content`
  - **Cuerpo**: Sin contenido.

---

#### Obtener una copia de un libro por ID

**Método**: `GET`  
**Endpoint**: `/:id`

- **Descripción**: Obtiene los detalles de una copia específica de un libro.
- **Parámetros**:
  - `id`: ID de la copia (número entero).
- **Respuesta**:
  - **Código de estado**: `200 OK`
  - **Cuerpo**:
    ```json
    {
      "id": 10,
      "bookId": 1,
      "status": "available",
      "createdAt": "2025-04-28T00:00:00Z",
      "updatedAt": "2025-04-28T00:00:00Z"
    }
    ```

---

#### Marcar una copia como prestada

**Método**: `POST`  
**Endpoint**: `/:id/borrow`

- **Descripción**: Marca una copia de libro como prestada.
- **Parámetros**:
  - `id`: ID de la copia (número entero).
- **Respuesta**:
  - **Código de estado**: `200 OK`
  - **Cuerpo**:
    ```json
    {
      "id": 10,
      "bookId": 1,
      "status": "borrowed",
      "updatedAt": "2025-04-28T00:00:00Z"
    }
    ```

---

#### Marcar una copia como disponible

**Método**: `POST`  
**Endpoint**: `/:id/return`

- **Descripción**: Marca una copia de libro como disponible después de ser devuelta.
- **Parámetros**:
  - `id`: ID de la copia (número entero).
- **Respuesta**:
  - **Código de estado**: `200 OK`
  - **Cuerpo**:
    ```json
    {
      "id": 10,
      "bookId": 1,
      "status": "available",
      "updatedAt": "2025-04-28T00:00:00Z"
    }
    ```

---

#### Listar copias disponibles de un libro

**Método**: `GET`  
**Endpoint**: `/available/:bookId`

- **Descripción**: Obtiene todas las copias disponibles de un libro específico.
- **Parámetros**:
  - `bookId`: ID del libro (número entero).
- **Respuesta**:
  - **Código de estado**: `200 OK`
  - **Cuerpo**:
    ```json
    [
      {
        "id": 10,
        "bookId": 1,
        "status": "available",
        "createdAt": "2025-04-28T00:00:00Z",
        "updatedAt": "2025-04-28T00:00:00Z"
      },
      {
        "id": 11,
        "bookId": 1,
        "status": "available",
        "createdAt": "2025-04-28T00:00:00Z",
        "updatedAt": "2025-04-28T00:00:00Z"
      }
    ]
    ```

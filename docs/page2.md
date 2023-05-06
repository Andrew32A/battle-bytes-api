# Battle Bytes Api

## Root

Endpoint to test if the server is running.

| Method | Endpoint | Responses |
|--------|----------|-----------|
| GET | `/` | 200 OK: Returns a JSON message Welcome to Battle Bytes! Go to /help or docs for more information. |

## Users

Endpoint to retrieve all users.

| Method | Endpoint | Headers | Responses |
|--------|----------|---------|-----------|
| GET | `/users` | `Authorization`: The JWT token for the authenticated user. It is sent in the format Bearer <token>. | 200 OK: Returns a JSON object with all users' information. |

Endpoint to retrieve a specific user.

| Method | Endpoint | Parameters | Headers | Responses |
|--------|----------|------------|---------|-----------|
| GET | `/users/:id` | `id` (required): The ID of the user to retrieve. | `Authorization`: The JWT token for the authenticated user. It is sent in the format Bearer <token>. | 200 OK: Returns a JSON object with the requested user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the requested user.<br>404 Not Found: If the requested user is not found. |

Endpoint to create a new user.

| Method | Endpoint | Request Body | Responses |
|--------|----------|--------------|-----------|
| POST | `/users` | `username` (required): The username of the user to create.<br>`password` (required): The password of the user to create. | 200 OK: If the user is created successfully, it sets a JWT token as a cookie and redirects to the root endpoint.<br>409 Conflict: If the username is already taken.<br>500 Internal Server Error: If there is an internal server error. |

Endpoint to update a specific user.

| Method | Endpoint | Parameters | Request Body | Headers | Responses |
|--------|----------|------------|--------------|---------|-----------|
| PUT | `/users/:id` | `id` (required): The ID of the user to update. | `username` (optional): The new username of the user.<br>`password` (optional): The new password of the user. | `Authorization`: The JWT token for the authenticated user. It is sent in the format Bearer <token>. | 200 OK: If the user is updated successfully, it returns a JSON object with the updated user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the updated user.<br>404 Not Found: If the user to update is not found.<br>500 Internal Server Error: If there is an internal server error. |

Endpoint to delete a specific user.

| Method | Endpoint | Parameters | Headers | Responses |
|--------|----------|------------|---------|-----------|
| DELETE | `/users/:id` | `id` (required): The ID of the user to delete. | `Authorization`: The JWT token for the authenticated user. It is sent in the format Bearer <token>. | 204 No Content: If the user is deleted successfully.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the deleted user.<br>404 Not Found: If the user to delete is not found.<br>500 Internal Server Error: If there is an internal server error. |

## Authentication

Endpoints for user authentication.

| Method | Endpoint | Request Body | Responses |
|--------|----------|--------------|-----------|
| POST | `/login` | `username` (required): The username of the user to authenticate.<

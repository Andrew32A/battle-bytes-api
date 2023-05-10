# Battle Bytes Api

## Root

> Endpoint to test if the server is running.

| Method | Endpoint | Responses |
|--------|----------|-----------|
| GET | `/` | 200 OK: Returns a JSON message Welcome to Battle Bytes! Go to /help or docs for more information. |
---

## Authentication
> Endpoint to create a new user.

| Method | Endpoint | Request Body | Responses |
|--------|----------|--------------|-----------|
| POST | `/signup` | `username` (required): The username of the user to create.<br>`password` (required): The password of the user to create. <br>`defense` (required): The defense of the user to create.| 200 OK: If the user is created successfully, it sets a JWT token as a cookie and redirects to the root endpoint.<br>409 Conflict: If the username is already taken.<br>500 Internal Server Error: If there is an internal server error. |

---
> Endpoints for user authentication.

| Method | Endpoint | Request Body |
|--------|----------|--------------|
| POST | `/login` | `username` (required): The username of the user to authenticate.

---
> Endpoint to delete currently logged in user.

| Method | Endpoint | Parameters | Headers |
|--------|----------|------------|---------|
| DELETE | `/delete` | `Authorization`: The JWT token for the authenticated user. | 204 No Content: If the user is deleted successfully.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the deleted user.<br>404 Not Found: If the user to delete is not found.<br>500 Internal Server Error: If there is an internal server error. |
---

## Users

> Endpoint to retrieve all users.

| Method | Endpoint | Headers | Responses |
|--------|----------|---------|-----------|
| GET | `/users` | `Authorization`: The JWT token for the authenticated user. | 200 OK: Returns a JSON object with all users' information. |

---
> Endpoint to retrieve a specific user.

| Method | Endpoint | Parameters | Headers | Responses |
|--------|----------|------------|---------|-----------|
| GET | `/users/:id` | `id` (required): The ID of the user to retrieve. | `Authorization`: The JWT token for the authenticated user. | 200 OK: Returns a JSON object with the requested user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the requested user.<br>404 Not Found: If the requested user is not found. |

---
> Endpoint to update a specific user.

| Method | Endpoint | Parameters | Request Body | Headers | Responses |
|--------|----------|------------|--------------|---------|-----------|
| POST | `/defense` | `id` (required): The ID of the user to update. | `defense` (required): The new defense of the user. | `Authorization`: The JWT token for the authenticated user. | 200 OK: If the user is updated successfully, it returns a JSON object with the updated user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the updated user.<br>404 Not Found: If the user to update is not found.<br>500 Internal Server Error: If there is an internal server error. |

---



# GET /probe/:id

| Parameters |        |
| :--------- | :----- |
| id (required) | The ID of the opponent to probe. |

| Responses |                                   |
| :-------- | :-------------------------------- |
| 200 OK    | Returns the first half of the opponent's defense. |

# GET /help

| Responses |                         |
| :-------- | :---------------------- |
| 200 OK    | Returns a JSON message help. |

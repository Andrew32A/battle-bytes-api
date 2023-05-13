# Battle Bytes Api

Looking for a custom API that lets you build and defend your territory against other users? Look no further than Battle Bytes! Built using Express and MongoDB, this API hosts the main database on MongoDB Atlas and tests were conducted using Mocha and Chai to ensure smooth and seamless gameplay.

With Battle Bytes, you can create your own defenses and challenge other users to attack them. If your defense is strong enough to withstand the attack, you'll earn bragging rights and be recognized as a true champion. But be warned - if your defense is breached, you'll be immediately deleted from the database.

Join us now and test your skills in the ultimate battle for supremacy. Let's see if you have what it takes to reign supreme in Battle Bytes!

<h2 align="center"><a href="https://andrew32a.github.io/battle-bytes-api/#/">Click here to see the docs!</a></h3>

## Root/Help

> Endpoint to test if the server is running.

| Method | Endpoint | Responses |
|--------|----------|-----------|
| GET | `/` | 200 OK: Returns a JSON message Welcome to Battle Bytes! Go to /help or docs for more information. |

> Endpoint to show directions.

| Method | Endpoint | Responses |
|--------|----------|------------|
| GET | `/help` | 200 OK: Returns a JSON message help. |

## Authentication
> Endpoint to create a new user.

| Method | Endpoint | Request Body | Responses |
|--------|----------|--------------|-----------|
| POST | `/signup` | `username` (required): The username of the user to create.<br>`password` (required): The password of the user to create. <br>`defense` (required): The defense of the user to create.| 200 OK: If the user is created successfully, it sets a JWT token as a cookie and redirects to the root endpoint.<br>409 Conflict: If the username is already taken.<br>500 Internal Server Error: If there is an internal server error. |

> Endpoint for user authentication.

| Method | Endpoint | Request Body |
|--------|----------|--------------|
| POST | `/login` | `username` (required): The username of the user to authenticate.<br><br>`password` (required): The password of the user to authenticate.

> Endpoint to delete currently logged in user.

| Method | Endpoint | Parameters | Headers |
|--------|----------|------------|---------|
| DELETE | `/delete` | `Authorization`: The JWT token for the authenticated user. | 204 No Content: If the user is deleted successfully.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the deleted user.<br>404 Not Found: If the user to delete is not found.<br>500 Internal Server Error: If there is an internal server error. |

## Users

> Endpoint to retrieve all users.

| Method | Endpoint | Headers | Responses |
|--------|----------|---------|-----------|
| GET | `/users` | `Authorization`: The JWT token for the authenticated user. | 200 OK: Returns a JSON object with all users' information. |

> Endpoint to retrieve a specific user.

| Method | Endpoint | Parameters | Headers | Responses |
|--------|----------|------------|---------|-----------|
| GET | `/users/:id` | `id` (required): The ID of the user to retrieve. | `Authorization`: The JWT token for the authenticated user. | 200 OK: Returns a JSON object with the requested user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the requested user.<br>404 Not Found: If the requested user is not found. |

> Endpoint to update a specific user.

| Method | Endpoint | Parameters | Request Body | Headers | Responses |
|--------|----------|------------|--------------|---------|-----------|
| POST | `/defense` | `id` (required): The ID of the user to update. | `defense` (required): The new defense of the user. | `Authorization`: The JWT token for the authenticated user. | 200 OK: If the user is updated successfully, it returns a JSON object with the updated user's information.<br>401 Unauthorized: If the request is not authenticated or the authenticated user does not match the updated user.<br>404 Not Found: If the user to update is not found.<br>500 Internal Server Error: If there is an internal server error. |

> Endpoint to probe the defense of another user.

| Method | Endpoint | Parameters | Responses |
|--------|----------|------------|----------|
| GET | `/probe/:id` | The ID of the opponent to probe. | 200 OK: Returns hints for the target's defense - first and last letter of defense and number of characters in defense.<br>404 Not Found: If the requested user is not found.

# Blogging Platform Backend

This repository contains the backend infrastructure for a blogging platform. It is implemented using Node.js and PostgreSQL, with Swagger for API documentation.

## Tech Stack

- Node.js (22.11+): Backend runtime environment.

- PostgreSQL (17.2.x): Relational database management.

- Docker (27.x): For containerization and deployment.

- Swagger: API documentation.

## Setup
1. Clone the repository:
2. ```bash
   git clone https://github.com/AditaYadav/blog-api.git
   cd blog-api
   ```
3. Create a .env file in the root directory with the necessary configuration variables such as application port, database credentials, authentication keys, and timezone.
4. Start the application using Docker: ```bash
docker-compose up --build```
 ```docker-compose up```

6. Access the application:

- **API Base URL:**  
  ```plaintext
  http://localhost:8080
  ```

- **Swagger Docs:**  
  ```plaintext
  http://localhost:8080/api
  ```

  ## Task List and Implementation
1. Initialize Super Admin User
Objective: Seed a default super admin user with predefined credentials and a securely hashed password.
- Implementation: We use bcrypt to hash the password before saving it to the PostgreSQL database.
- User Registration and Login

2. Create endpoints for user registration and login.
- Validate input and generate tokens upon successful login.
- Acceptance Criteria : Users can register and log in successfully.
- Tokens are generated upon login.

3. Blog Post Management
- Develop endpoints for creating and reading blog posts.
- Handle essential data: title, content, and user.

4. Comment Management
- Create endpoints for adding and viewing comments on blog posts.

5. Image Upload
- Implement an endpoint for single image uploads associated with blog posts.
- Validate file types (JPEG/PNG).

6. Authentication Middleware
- Protect API routes using token-based authentication.

7. User Profile Management
- Allow users to view and update their profile information.

8. Error Handling
- Implement meaningful error messages and appropriate HTTP status codes for invalid requests.








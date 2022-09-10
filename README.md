# Personrise-test-api

This is an assessment test by Personarise for the role of Fullstack Engineer. The project contains few features such as getting or importing jobs from LinkedIn through a chrome extension built along with this project to users dashboard, filter, sort, categorize these jobs and other few operations.

## Usage
You can try to clone.
or test with endpoint url.

## Url
Base Url: `https://personarise-api.onrender.com/`

## Endpoints
The project contains api endpoints for the following operations:
1. Check if the server is running : `GET /api/healthcheck`
2. Add a new user : `POST /api/auth/signup` - `{username, email, password}` 
3. Login a user : `POST /api/auth/login` - `{username, password}`
4. Import jobs : `POST /api/jobs` - `{jobs: [{jobId, title, location, company}]}`
5. Get all posts : `GET /api/jobs`
6. Get single job : `GET /api/jobs/:id`
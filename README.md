# Insurance API Rest
## Info
Demo backend in NodeJS containing the following endpoints: 
* `GET /user/name/:userName` Retrieves user info by name
* `GET /user/id/:userId` Retrieves user info by id

* `GET /policy/policyId/:policyId`Retrieves policy info by id
* `GET /policy/name/:userName` Retrieves policy info by user name

* `GET /history` Retrieves request history

## Features
* Sentry: errors can be logged to Sentry.
* PostgreSQL: Request done by authorized users are stored in insurance_backend table and retrieved through `/history` endpoint
* Swagger: Endpoints can be tested through Swagger. Run localhost:port/api-docs to open Swagger. 
* Authorization: A Secret is required for every request. To be set in services.envar
* Authentication: Policy related and history endpoints are only available to users with admin role. 
* Unit tests: Run unit tests with command `npm run test`

## How to run
* Fill environment variables in services.envar.dist
* Run the following command: `cp services.envar.dist services.envar`
* Start the application with `bash run-docker.sh`

Three Docker containers will be created.
* insurance-backend: Demo API rest
* postres: PostgreSQL database used to store request history
* postgres-admin: PostgreSQL GUI, accessible in localhost:5050	

## How to make request

Use Swagger or Postman to make request. All requests must contain the following headers: 
* Secret
* Email

## Useful info
* Email with admin role: `manningblankenship@quotezart.com`
* Email with user role: `barnettblankenship@quotezart.com`
* Example working userId: `a0ece5db-cd14-4f21-812f-966633e7be86`
* Example working policyId: `64cceef9-3a01-49ae-a23b-3761b604800b`
* CLIENTS_API_URL: http://www.mocky.io/v2/5808862710000087232b75ac
* POLICIES_API_URL: http://www.mocky.io/v2/580891a4100000e8242b75c5

Made with NodeJS, Express, ES6

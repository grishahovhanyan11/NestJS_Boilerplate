# NestJS Boilerplate

## Description

Nest JS Boilerplate is a repository that encapsulates all the basic features required for building APIs using Nest.js. It includes modules, services, controllers, decorators, guards, validation with Joi, JWT-based authentication, MySQL database connection, migrations and seeders, Swagger integration, and other helpful features to expedite the development process.

## Tools you must have in your PC

Ensure you have the following installed:

- NodeJS (along with npm)
- NestJS
- MySQL

## How to run the project?

Clone the repository and navigate to the project directory. Run the following command:

```sh
npm install
```

### Set up Environment Variables

Before running the project in the development environment, create a .env file from the provided .env.example file.

```sh
cp .env.example .env
```

### Running Migrations

To run migrations, use the following command:

```sh
npm run typeorm:run-migrations
```

### Building the Project

To build the project, use the following command:

```sh
npm run build
```

### Running Development Environment

To run the development environment, use the following command:

```sh
npm run start:dev
```

After starting the server, you can access the application at: http://localhost:PORT/api/v1

### Running Production Environment

To run the production environment, use the following command:

```sh
npm run start:prod
```

### Global Prefix

To update the global prefix, modify the /src/main.ts file. Find the following line:

```sh
app.setGlobalPrefix('api/v1');
```

Change it according to your requirements.

### Adding New Nest.js Modules

Add all new Nest.js modules in the /src/modules folder.

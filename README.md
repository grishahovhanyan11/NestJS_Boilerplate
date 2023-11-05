# NestJS Boilerplate

## Tools you must have in your PC

Node, npm, mysql.

## Clone the repository

By following the below mentioned instructions you can clone the repository.

```sh
cd projects
git clone ssh
// OR     http
cd nestjs-boilerplate

npm install
```

## How to run the project?

You can run the project with npm and it will be available in localhost:4000.

```sh
npm run typeorm:run-migrations

npm run start:dev
```

## Additional tools

### Creating migrations

```sh
npx typeorm migration:create ./src/database/migrations/new_migration_name
```

### Running migrations

```sh
npx typeorm-ts-node-commonjs migration:run -d ./src/database/typeOrm.config.ts
```

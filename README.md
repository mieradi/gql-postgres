# gql-postgres

Example of a GraphQL Api using Postgres, with no ORM.

### Getting Started

Head to https://www.postgresql.org/download/ and follow the docs to get Postgres setup on your local machine.

In the root of the project, create an `.env` file and add the following variables:

```java
POSTGRES_USER='your PG user name'
POSTGRES_HOST='your host' // usually localhost
POSTGRES_DB='your DB name'
POSTGRES_PASSWORD='your PG password'
PORT=5432 // default PG port
DEV_URL='your GQL dev url' // usually http://localhost:4000
```

Head to the root of the project and run `npm i` to install.

Once installed, run `npm start` to fire up the server. You should see a message saying that your server is running at `http://localhost:4000/graphql`.

Head to `http://localhost:4000/graphql` and play around!

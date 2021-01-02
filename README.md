# gql-postgres

Example of a GraphQL Api using Postgres as a DB with no ORM

### Motivation

I have seen a number of people unhappy with ORM's for various reasons, so I wanted to create an example us just using `node-postgres` with GraphQL. ORM's are great, this is just another option :)

### Getting Started

Head to https://www.postgresql.org/download/ and follow the docs to get Postgres setup ono your local machine.

In the root of your project, create an `.env` file and add the following variables:

POSTGRES_USER="your PG user name"
POSTGRES_HOST="your host" // usually localhost
POSTGRES_DB="your DB name"
POSTGRES_PASSWORD="your PG password"
DEV_URL="your dev URL" // usually http://localhost:4000

`npm i` to install

Head to `http://localhost:4000/graphql` and run the following

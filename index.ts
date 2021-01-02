import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { Pool } from 'pg';
import { typeDefs } from './schema';
import { resolvers } from './resolvers/resolvers';

const port = parseInt(`${process.env.PORT}`)

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port
});

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true }
));

app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// init apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx:any) => ctx
});

// remove cors from Apollo in favour of using cors package
server.applyMiddleware({ app, cors: false});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at ${process.env.DEV_URL}${server.graphqlPath}`)
);

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {buildSchema} from 'graphql';
import fs from 'fs';
import {ApolloServer, gql} from 'apollo-server-express'

const app = express();

const GRAPHQL: string = process.env.GRAPHQL || '/graphql';
const PORT: number = 3000;


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String!
    todos: [Todo]!
  }
  type Todo {
    title: String,
    completed: Boolean,
    creationDate: String,
    category: String
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello world!';
  },
  todos: () => [{title: "ersin"}, {title: "esra"}]
};

//apollo
// const apolloServer = new ApolloServer({schema, rootValue})
// apolloServer.applyMiddleware({app});


//middlewares
app.use(express.json());
app.use(
    GRAPHQL,
    graphqlHTTP({schema, rootValue, graphiql: true})
)


app.get('/', (_req, res) => {
    console.log('reuqest')
    fs.readFile('./data/data.json', 'utf-8', (err, fileData) => {
        if(!err) {
            const {todos} = JSON.parse(fileData);
            res.set('Content-Type', 'application/json');
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200);
            res.send(todos);
        }
    })
});

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
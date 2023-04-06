import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {buildSchema} from 'graphql';
import fs from 'fs';


const app = express();

const GRAPHQL: string = process.env.GRAPHQL || '/graphql';
const PORT: number = 3000;


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String!
    user: User!
  }
  type User {
    name: String!
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello world!';
  },
  user: () => {
    return {
        name: 'ersin'
    }
  }
};

//middlewares
app.use(express.json());
app.use(
    GRAPHQL,
    graphqlHTTP({schema, rootValue, graphiql: true})
)


app.get('/', (_req, res) => {
    fs.readFile('./data/data.json', 'utf-8', (err, fileData) => {
        if(!err) {
            const {todos} = JSON.parse(fileData);
            res.send(todos);
        }
    })
});

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
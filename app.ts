import express from 'express';
import {buildSchema} from 'graphql';
import {promises as fsPromises} from 'fs';
import {ApolloServer, ExpressContext, gql} from 'apollo-server-express'
import { createServer, Server } from 'http';

const app = express();
app.use(express.json());

//-----NO NEED CUSTOM MIDDLEWARE-----
// app.use(headerMiddleware)

// function headerMiddleware(_req: express.Request, res: express.Response, next: express.NextFunction){
//   res.set('Access-Control-Allow-Origin', '*')
//   next();
// }

const GRAPHQL: string = process.env.GRAPHQL || '/graphql';
const PORT: number = 3000;


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String!
    todos: [Todo]
  }
  type Todo {
    title: String!,
    completed: Boolean!,
    creationDate: String!,
    category: String!
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello world!';
  },
  todos: async () => await readData()
};

async function readData() {
  const data = await fsPromises.readFile('./data/data.json', 'utf-8');
  const {todos} = JSON.parse(data);
  return todos;

}

async function runApp() {
    const server = createServer(app);
    const apolloServer = await createApolloServer(server, app);

    app.listen(PORT, () => {
      console.log(`app running on port: ${PORT}`)
      console.log(`Apollo server path: http://localhost:${PORT}${apolloServer.graphqlPath}`)
    });
}

//apollo
async function createApolloServer(httpServer: Server, app: express.Application): Promise<ApolloServer<ExpressContext>> {
  const apolloServer = new ApolloServer({schema, rootValue})
  await apolloServer.start();
  apolloServer.applyMiddleware({app});

  return apolloServer;
}

runApp();
//middlewares
// app.use(express.json());
// app.use(
//     GRAPHQL,
//     graphqlHTTP({schema, rootValue, graphiql: true})
// )


// app.get('/', (_req, res) => {
//     console.log('reuqest')
//     fs.readFile('./data/data.json', 'utf-8', (err, fileData) => {
//         if(!err) {
//             const {todos} = JSON.parse(fileData);
//             res.set('Content-Type', 'application/json');
//             res.set('Access-Control-Allow-Origin', '*');
//             res.status(200);
//             res.send(todos);
//         }
//     })
// });
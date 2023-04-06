import express from 'express';
import { graphqlHTTP } from 'express-graphql';


const app = express();

const GRAPHQL: string = process.env.GRAPHQL || '/graphql';
const PORT: number = 3000;

//middlewares
app.use(express.json());
app.use(
    GRAPHQL,
)

app.get('/', (_req, res) => res.send('app started'));

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
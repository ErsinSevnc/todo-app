import { useEffect, useState } from "react";
import { useQuery, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GET_ALL_TODOS from "./queries/todoQuery";

const App = () => {
    const [todos, setTodos] = useState([]);

    const client = new ApolloClient({
        uri: 'http://localhost:3000/gprahql',
        cache: new InMemoryCache()
    });

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        client.query({query: GET_ALL_TODOS}).then(res => console.log(res));

        // const data = await fetch('http://127.0.0.1:3000');
        // const jsonData = await data.json();
        // console.log(jsonData);
        // setTodos(jsonData);
    };


    return (
        <ApolloProvider client={client}>
            {
                todos.length && todos.map((todo, i) => {
                    return (
                        <div key={i} >
                            <h2>{todo.title}</h2>
                            <p>{todo.category}</p>
                            <p>{new Date(Number(todo.creationDate)).toLocaleDateString()}</p>
                        </div>
                    )
                })
            }
        </ApolloProvider>
    )
}

export default App;

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Root from "./src/pages/Root";

const App = () => {

    const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql',
        cache: new InMemoryCache()
    });


    return (
        <ApolloProvider client={client}>
            <Root/>
        </ApolloProvider>
    )
}

export default App;

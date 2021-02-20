import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_GITHUB_API_URL as string}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN as string}`,
        }
    }
}
);


export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});



import React from 'react';
import { ApolloProvider } from "@apollo/client"
import { client } from "./graphql"
import RepositoryList from "./repository-list"

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <RepositoryList />
      </div>
    </ApolloProvider>
  );
}

export default App;

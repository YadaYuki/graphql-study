import React from 'react';
import { ApolloProvider } from "@apollo/client"
import { client } from "./graphql"
import RepositoryList from "./repository-list"
// import CreateIssue from "./create-issue"

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <RepositoryList />
        {/* <CreateIssue /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;

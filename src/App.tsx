import React from 'react';
import { ApolloProvider } from "@apollo/client"
import { client } from "./graphql"
import ExchangeRate from "./exchange-rate"

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRate />
      </div>
    </ApolloProvider>
  );
}

export default App;

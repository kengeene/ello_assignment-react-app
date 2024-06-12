import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

console.log('backend env is', import.meta.env.VITE_BACKEND_URL)

const clientUrl = import.meta.env.VITE_BACKEND_URL;

const client = new ApolloClient({
  uri: clientUrl,
  cache: new InMemoryCache(),
});

const ApolloProviderComponent = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};


export default ApolloProviderComponent;
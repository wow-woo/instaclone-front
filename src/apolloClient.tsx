import { ApolloClient, HttpLink, InMemoryCache, makeVar } from "@apollo/client";

export const setLogin = makeVar(false);
export const setMode = makeVar(false);

export const Client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

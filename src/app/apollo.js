import { ApolloClient, InMemoryCache } from "@apollo/client";

export const vehicleClient = new ApolloClient({
  uri: `${process.env.REACT_APP_VEHICLE_DATA_URL}/graphql`, // httpLink,
  cache: new InMemoryCache(),
});

export const accountClient = new ApolloClient({
  uri: `${process.env.REACT_APP_ACCOUNTS_URL}/graphql`, // httpLink,
  cache: new InMemoryCache(),
  credentials: "include",
});

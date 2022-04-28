import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const HaruQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      // TODO : logService
      console.error(error);
    },
  }),
});

interface Props {
  children: React.ReactNode;
}

const HaruQueriesClientProvider: React.FC<Props> = ({ children }) => {
  return <QueryClientProvider client={HaruQueryClient}>{children}</QueryClientProvider>;
};

export default HaruQueriesClientProvider;

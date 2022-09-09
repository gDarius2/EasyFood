import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { AppRoutes } from "./AppRoutes/AppRoutes";

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <AppRoutes />
    </QueryClientProvider>
  );
};

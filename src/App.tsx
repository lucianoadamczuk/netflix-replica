import { ProviderMovies } from "./contexts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ProviderMovies>
      <AppRoutes />
    </ProviderMovies>
  );
}

export default App;

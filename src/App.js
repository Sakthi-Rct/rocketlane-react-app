import "./App.css";
import "./Normalize.css";
import Dashboard from "./pages/Dashboard";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container-wrap">
          <Dashboard />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

import { DataProvider } from "./DataContext/DataContext";
import Home from "./components/Home/Home";



function App() {
  return (
    <div>
      <DataProvider>
      <Home />
      </DataProvider>

    </div>
  );
}

export default App;

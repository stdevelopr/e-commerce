import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ShoppingList from "./components/ShoppingList/ShoppingList"

function App() {

  return (
    <div className="App">
      <ShoppingList/>
    </div>
  );
}

export default App;

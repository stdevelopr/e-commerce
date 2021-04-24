import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ShoppingList from "./components/ShoppingList/ShoppingList"
import Header from "./components/Header/Header"

function App() {

  return (
    <div className="App">
      <Header/>
      <ShoppingList/>
    </div>
  );
}

export default App;

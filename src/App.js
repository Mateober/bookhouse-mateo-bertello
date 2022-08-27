import "./App.scss";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";

function App() {
  return (
  <>    
    <NavBar/>
    <ItemListContainer greeting="Hola Mundo!!!"/>
  </>
  )
}

export default App;
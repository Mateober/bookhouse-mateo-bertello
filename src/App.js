import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";

function App() {
  return (
  <>    
    <NavBar/>
    <ItemDetailContainer/>
    {/* <ItemListContainer/> */}
  </>
  )
}

export default App;
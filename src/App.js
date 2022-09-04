import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";

function App() {
  return (
  <>    
    <NavBar/>
    <div className="productCatalog" id="productCatalog">
      <ItemListContainer/>
    </div>
  </>
  )
}

export default App;
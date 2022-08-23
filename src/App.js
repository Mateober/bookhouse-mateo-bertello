import "./App.css";
const App = () => {
  return (
  <header>
    <div className="nav container">
      <i className="bx bx-menu burger-btn" id="burger-icon"></i>
      <i className="bx bx-x cross-btn" id="cross-icon"></i>
      <h1><a href="#" className="logo">BOOKHOUSE</a></h1>
      <div className="headerSections">
        <a href="#">Inicio</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  </header>
  );
};
export default App;

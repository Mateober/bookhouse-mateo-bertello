import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../../assets/logo-iso.png';
import {Link} from "react-router-dom"
import scrollTopOnClick from '../../utils/scrollTopOnClick';
 
function NavBar() {
    return (
        <>        
        <header>
            <nav className="navbar">
                <div className="nav__1">
                    <Link onClick={scrollTopOnClick} to="/"><p className="logo"><img src={Logo} alt="Logo" /></p></Link>
                    <Link onClick={scrollTopOnClick} to="/"><p className="nombre">BOOKHOUSE</p></Link>
{/*                 <a className="logo" href="./index.html"><img src={Logo} alt="Logo" /></a>
                    <a className="nombre" href="./index.html">BOOKHOUSE</a> */}
                    <button className="btn-ingresar">INGRESAR</button>
                </div>
                <div className="nav__2">
                    <form action="">
                        <input type="text" placeholder="Hola. ¿Qué libro estás buscando hoy?" />
                    </form>
                    <button type="submit" className="btn-buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="nav__3">
                    <ul className="menu">
                        <li className="menu__item"><Link onClick={scrollTopOnClick} to="/">Inicio</Link></li>
                        <li className="menu__item dropdown">Generos
                            <div className="dropdown-content">
                                <Link onClick={scrollTopOnClick} to="/category/ciencia-ficcion">Ciencia Ficcion</Link>
                                <Link onClick={scrollTopOnClick} to="/category/novela">Novela</Link>
                                <Link onClick={scrollTopOnClick} to="/category/novela-romantica">Novela Romantica</Link>
                                <Link onClick={scrollTopOnClick} to="/category/novela-fantastica">Novela Fantastica</Link>
                                <Link onClick={scrollTopOnClick} to="/category/novela-de-terror">Novela De Terror</Link>
                            </div>
                        </li>

                        <li className="menu__item"><Link onClick={scrollTopOnClick} to="/">Sucursales</Link></li>
                        <li className="menu__item"><Link onClick={scrollTopOnClick} to="/">Nosotros</Link></li>
                        <li className="menu__item"><Link onClick={scrollTopOnClick} to="/">Contacto</Link></li>
                        <li className="menu__item"><CartWidget/></li>
                    </ul>
                </div>
            </nav>
            <div className="navbar-mobile">
                <i className="fa-solid fa-bars burger-icon" id="burger-icon"></i>
                <i className="fa-solid fa-xmark cross-icon" id="cross-icon"></i>
                <Link to="/"><p className="nombre">BOOKHOUSE</p></Link>
                {/* <a className="nombre" href="./index.html">BOOKHOUSE</a> */}
                <CartWidget/>
            </div>
        </header>
                       <div className="menu__mobile" id="burger-menu">
                       <ul>
                           <div className="search__mobile">
                               <form action="">
                                   <input type="text" placeholder="Hola. ¿Qué libro estás buscando hoy?" />
                               </form>
                               <button type="submit" className="btn-buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                           </div>
                           <li className="menu__item"><a href="#/">Inicio</a></li>
                           <li className="menu__item"><a href="#/">Tematica</a></li>
                           <li className="menu__item"><a href="#/">Sucursales</a></li>
                           <li className="menu__item"><a href="#/">Nosotros</a></li>
                           <li className="menu__item"><a href="#/">Contacto</a></li>
                           <button className="btn-ingresar">INGRESAR</button>
                       </ul>
                   </div>
        </>
    );
}

export default NavBar;

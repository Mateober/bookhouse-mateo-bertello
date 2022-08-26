import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../logo-iso.png';

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="nav__1">
                    <a className="logo" href="#"><img src={Logo} alt="Logo" /></a>
                    <a className="nombre" href="#">BOOKHOUSE</a>
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
                        <li className="menu__item"><a href="#">Inicio</a></li>
                        <li className="menu__item"><a href="#">Tematica</a></li>
                        <li className="menu__item"><a href="#">Sucursales</a></li>
                        <li className="menu__item"><a href="#">Nosotros</a></li>
                        <li className="menu__item"><a href="#">Contacto</a></li>
                        <li className="menu__item"><CartWidget /></li>
                    </ul>
                </div>
            </nav>
            <div className="navbar-mobile">
                <i className="fa-solid fa-bars burger-icon" id="burger-icon"></i>
                <i className="fa-solid fa-xmark cross-icon" id="cross-icon"></i>
                <a className="nombre" href="#">BOOKHOUSE</a>
                <CartWidget />
                <div className="menu__mobile" id="burger-menu">
                    <ul>
                        <div className="search__mobile">
                            <form action="">
                                <input type="text" placeholder="Hola. ¿Qué libro estás buscando hoy?" />
                            </form>
                            <button type="submit" className="btn-buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <li className="menu__item"><a href="#">Inicio</a></li>
                        <li className="menu__item"><a href="#">Tematica</a></li>
                        <li className="menu__item"><a href="#">Sucursales</a></li>
                        <li className="menu__item"><a href="#">Nosotros</a></li>
                        <li className="menu__item"><a href="#">Contacto</a></li>
                        <button className="btn-ingresar">INGRESAR</button>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;

import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer1">
                <div className="footer-col">
                    <h4>Bookhouse</h4>
                    <ul>
                        <li><a href="#/">Sobre Nosotros</a></li>
                        <li><a href="#/">Sucursales</a></li>
                        <li><a href="#/">Nuestros Servicios</a></li>
                        <li><a href="#/">Programa De Afiliacion</a></li>
                        <li><a href="#/">Trabaja Con Nosotros</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Consigue Ayuda</h4>
                    <ul>
                        <li><a href="#/">FAQ</a></li>
                        <li><a href="#/">Envíos</a></li>
                        <li><a href="#/">Devolucion</a></li>
                        <li><a href="#/">Estado Del Pedido</a></li>
                        <li><a href="#/">Opciones De Pago</a></li>
                    </ul>
                </div>
                <div className="footer-col footer-col2">
                    <h4>Clientes</h4>
                    <ul>
                        <li><a href="#/">Ingresa o Registrate</a></li>
                        <li><a href="#/">Mi Cuenta</a></li>
                    </ul>
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#/"><i className="fa-solid fa-phone i-1"></i>0800 298</a></li>
                        <li><a href="#/"><i className="fa-brands fa-whatsapp i-1"></i>341 334 2009</a></li>
                    </ul>
                </div>
                <div className="footer-col footer-col2">
                    <h4>Centro de atención telefonica</h4>
                    <ul>
                        <li>Lunes a viernes de 08:30 a 18:30hs</li>
                        <li>Sabados de 09 a 17:30hs</li>
                    </ul>
                    <h4>Seguinos</h4>
                    <div className="social-links">
                        <a href="#/"><i className="fab fa-facebook-f"></i></a>
                        <a href="#/"><i className="fab fa-twitter"></i></a>
                        <a href="#/"><i className="fab fa-instagram"></i></a>
                        <a href="#/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="footer2__1">
                    <a href="https://www.linkedin.com/in/mateo-bertello/">© 2022 Copyright | Proyecto creado por Mateo Bertello</a>
                </div>
                <div className="footer2__2">
                    <a className="politica__container" href="#/">Política de privacidad</a>
                    <a className="fotoafip__container" href="#/">
                        <img className="fotoafip" src="https://i.postimg.cc/bwfsjTYF/DATAWEB.jpg" alt="Codigo Afip" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

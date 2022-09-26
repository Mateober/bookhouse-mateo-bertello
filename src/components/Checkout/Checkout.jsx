import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCheckout from './ItemCheckout';

const Checkout = () => {
    const { cart, totalPrice } = useCartContext();
    return (
        <div className="checkout__page">
            <div className="checkout__title--container">
                <Link to="/cart">
                    <p className="checkout__volver">
                        <i className="fa-solid fa-arrow-left"></i>Volver al carrito
                    </p>
                </Link>
                <div className="checkout__title">
                    <h2>DATOS PERSONALES</h2>
                    <span>Todos los datos con * son obligatorios</span>
                </div>
            </div>
            {/* ----------------------FORM----------------------- */}
            <div className="checkout__container--general">
                <div className="contacto__container--form">
                    <form id="formulario">
                        <div className="user-details">
                            <div className="input-box">
                                <p>
                                    Nombre<span>*</span>
                                </p>
                                <input id="nombre" type="text" placeholder="Ingresé su nombre" required />
                            </div>
                            <div className="input-box">
                                <p>
                                    Apellido<span>*</span>
                                </p>
                                <input id="apellido" type="text" placeholder="Ingresé su apellido" required />
                            </div>
                            <div className="input-box">
                                <p>
                                    Correo electrónico<span>*</span>
                                </p>
                                <input id="correoElectronico" type="email" placeholder="Ingresé su correo electrónico" required />
                            </div>
                            <div className="input-box">
                                <p>
                                    Teléfono<span>*</span>
                                </p>
                                <input id="telefono" type="number" placeholder="Ingresé su teléfono" required />
                            </div>
                            <div className="input-box">
                                <p>
                                    DNI<span>*</span>
                                </p>
                                <input id="dni" type="number" placeholder="Ingresé su DNI" required />
                            </div>
                        </div>
                        <h2>DATOS PARA EL ENVIO</h2>
                        <div className="user-details">
                            <div className="input-box">
                                <p>
                                    Domicilio<span>*</span>
                                </p>
                                <input id="domicilio" type="text" placeholder="Ingresé su calle" required />
                            </div>
                            <div className="input-box input-box2 input-box3 ">
                                <p>
                                    Altura<span>*</span>
                                </p>
                                <input id="altura" type="text" required />
                            </div>
                            <div className="input-box input-box2">
                                <p>Piso</p>
                                <input id="piso" type="text" />
                            </div>
                            <div className="input-box input-box2">
                                <p>Departamento</p>
                                <input id="departamento" type="text" />
                            </div>
                            <div className="input-box">
                                <p>
                                    Provincia<span>*</span>
                                </p>
                                <select id="provincia" required>
                                    <option value="">Selecciona una provincia.</option>
                                    <option value="buenosAires">Buenos Aires</option>
                                    <option value="capitalFederal">Capital Federal</option>
                                    <option value="catamarca">Catamarca</option>
                                    <option value="chaco">Chaco</option>
                                    <option value="chubut">Chubut</option>
                                    <option value="cordoba">Córdoba</option>
                                    <option value="corrientes">Corrientes</option>
                                    <option value="entreRios">Entre Ríos</option>
                                    <option value="formosa">Formosa</option>
                                    <option value="jujuy">Jujuy</option>
                                    <option value="laPampa">La Pampa</option>
                                    <option value="laRioja">La Rioja</option>
                                    <option value="mendoza">Mendoza</option>
                                    <option value="misiones">Misiones</option>
                                    <option value="neuquen">Neuquén</option>
                                    <option value="riooNegro">Río Negro</option>
                                    <option value="salta">Salta</option>
                                    <option value="sanJuan">San Juan</option>
                                    <option value="sanLuis">San Luis</option>
                                    <option value="santaCruz">Santa Cruz</option>
                                    <option value="santaFe">Santa Fe</option>
                                    <option value="santiagoDelEstero">Santiago del Estero</option>
                                    <option value="tierraDelFuego">Tierra del Fuego</option>
                                    <option value="tucuman">Tucumán</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <p>
                                    Ciudad<span>*</span>
                                </p>
                                <input id="ciudad" type="text" placeholder="Ingresé su ciudad" required />
                            </div>
                            <div className="input-box">
                                <p>
                                    Codigo Postal<span>*</span>
                                </p>
                                <input id="codigoPostal" type="text" placeholder="Ingresé su codigo postal" required />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="boton__enviar">
                                FINALIZAR COMPRA
                            </button>
                        </div>
                    </form>
                </div>
                <div className="checkout__menu">
                    <div className="container__checkout--menu">
                        <div className="checkout__menu--1">
                            <h2>RESUMEN DE COMPRA</h2>
                        </div>
                        <div className="checkout__menu--2">
                            {cart.map((product) => (
                                <ItemCheckout key={product.id} product={product} />
                            ))}
                        </div>
                        <div className="checkout__menu--3">
                            <p>SUBTOTAL</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="checkout__menu--4">
                            <p>TOTAL</p>
                            <p>${totalPrice()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

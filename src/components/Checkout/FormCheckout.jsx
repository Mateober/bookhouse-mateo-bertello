import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

const FormCheckout = ({ setShowGracias, setOrderId }) => {
    // CONTEXT CARRO
    const { cart, totalPrice, clearCart } = useCartContext();

    // FORM INPUTS
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [dni, setDni] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [altura, setAltura] = useState('');
    const [piso, setPiso] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [provincia, setProvincia] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');

    // PRODUCTO PARA FIREBASE
    const order = {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            dni: dni,
            domicilio: domicilio,
            altura: altura,
            piso: piso,
            departamento: departamento,
            provincia: provincia,
            ciudad: ciudad,
            codigoPostal: codigoPostal,
        },
        products: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        })),
        total: totalPrice(),
        date: serverTimestamp(),
    };

    // ENVIANDO PRODUCTO A FIREBASE
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    // NOTIFICACION ERROR
    const [errorForm, setErrorForm] = useState(false);

    // BOTON FINALIZAR
    const clickBotonFinalizar = () => {
        if (nombre === '' || apellido === '' || email === '' || telefono === '' || dni === '' || domicilio === '' || altura === '' || provincia === '' || ciudad === '' || codigoPostal === '') {
            setErrorForm(true);
        } else {
            handleClick();
            setShowGracias(true);
            clearCart();
        }
    };

    return (
        <>
            <div className="contacto__container--form">
                <form id="formulario">
                    <div className="user-details">
                        <div className="input-box">
                            <p>
                                Nombre<span>*</span>
                            </p>
                            <input onChange={(e) => setNombre(e.target.value)} id="nombre" type="text" placeholder="Ingrese su nombre" required />
                        </div>
                        <div className="input-box">
                            <p>
                                Apellido<span>*</span>
                            </p>
                            <input onChange={(e) => setApellido(e.target.value)} id="apellido" type="text" placeholder="Ingrese su apellido" required />
                        </div>
                        <div className="input-box">
                            <p>
                                Correo electrónico<span>*</span>
                            </p>
                            <input onChange={(e) => setEmail(e.target.value)} id="correo" type="email" placeholder="Ingrese su correo electrónico" required />
                        </div>
                        <div className="input-box">
                            <p>
                                Teléfono<span>*</span>
                            </p>
                            <input onChange={(e) => setTelefono(e.target.value)} id="telefono" type="number" placeholder="Ingrese su teléfono" required />
                        </div>
                        <div className="input-box">
                            <p>
                                DNI<span>*</span>
                            </p>
                            <input onChange={(e) => setDni(e.target.value)} id="dni" type="number" placeholder="Ingrese su DNI" required />
                        </div>
                    </div>
                    <h2>DATOS PARA EL ENVIO</h2>
                    <div className="user-details">
                        <div className="input-box">
                            <p>
                                Domicilio<span>*</span>
                            </p>
                            <input onChange={(e) => setDomicilio(e.target.value)} id="domicilio" type="text" placeholder="Ingrese su calle" required />
                        </div>
                        <div className="input-box input-box2 input-box3 ">
                            <p>
                                Altura<span>*</span>
                            </p>
                            <input onChange={(e) => setAltura(e.target.value)} id="altura" type="text" required />
                        </div>
                        <div className="input-box input-box2">
                            <p>Piso</p>
                            <input onChange={(e) => setPiso(e.target.value)} id="piso" type="text" />
                        </div>
                        <div className="input-box input-box2">
                            <p>Departamento</p>
                            <input onChange={(e) => setDepartamento(e.target.value)} id="departamento" type="text" />
                        </div>
                        <div className="input-box">
                            <p>
                                Provincia<span>*</span>
                            </p>
                            <select onChange={(e) => setProvincia(e.target.value)} id="provincia" required>
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
                            <input onChange={(e) => setCiudad(e.target.value)} id="ciudad" type="text" placeholder="Ingrese su ciudad" required />
                        </div>
                        <div className="input-box">
                            <p>
                                Codigo Postal<span>*</span>
                            </p>
                            <input onChange={(e) => setCodigoPostal(e.target.value)} id="codigoPostal" type="text" placeholder="Ingrese su codigo postal" required />
                        </div>
                    </div>
                    {errorForm ? (
                        <div className="errorForm">
                            <p>FALTAN COMPLETAR DATOS</p>
                        </div>
                    ) : (
                        ''
                    )}
                    <div>
                        <button onClick={clickBotonFinalizar} type="button" className="boton__enviar">
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormCheckout;

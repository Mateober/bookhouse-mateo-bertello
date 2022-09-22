import NavBar from './../components/NavBar/NavBar';
import ItemListContainer from './../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './../components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import CartProvider from '../context/CartContext';

function Home() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route path="/category/:nameCategory" element={<ItemListContainer />} />
                        <Route path="/item/:nameCategory/:idItem" element={<ItemDetailContainer />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default Home;

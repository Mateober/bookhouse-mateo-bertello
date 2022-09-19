import NavBar from './../components/NavBar/NavBar';
import ItemListContainer from './../components/Products/ItemListContainer';
import ItemDetailContainer from './../components/Products/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import CartProvider from '../components/Cart/CartContext';

function Home() {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route path="/category/:nameCategory" element={<ItemListContainer />} />
                        <Route path="/item/:nameCategory/:idItem" element={<ItemDetailContainer />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
}

export default Home;

import NavBar from './../components/NavBar/NavBar';
import ItemListContainer from './../components/Products/ItemListContainer';
import ItemDetailContainer from './../components/Products/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/category/:nameCategory" element={<ItemListContainer />} />
                    <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Home;

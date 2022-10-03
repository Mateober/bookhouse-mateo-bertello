import React from 'react';

const Search = () => {

    return (
        <>
            <form action="">
                <input type="text" placeholder="Hola. ¿Qué libro estás buscando hoy?" />
            </form>
            <button type="submit" className="btn-buscar">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </>
    );
};

export default Search;

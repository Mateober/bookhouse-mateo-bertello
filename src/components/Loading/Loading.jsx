import React from 'react';

function Loading() {
    return (
        <div className="loader">
            <div className="loader__loader">
                <div className="rueda"></div>
            </div>
            <div className="loader__title">Cargando...</div>
        </div>
    );
}

export default Loading;

import React from 'react';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container p-5 mt-5 text-center text-danger">
                <h1>404 ERROR!</h1>
                <h4>PAGE NOT FOUND</h4>
            </div>
        </div>

    );
};

export default NotFound;
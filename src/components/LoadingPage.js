import React from 'react';
import smile from '../../public/images/loading.gif'


const LoadingPage = () => (
    <div className="loader">
        <img className="loader__image" src={smile} alt="Smiling Loader" />
    </div>
);

export default LoadingPage;
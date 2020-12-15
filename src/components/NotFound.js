import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (<div>
        <p>404! <Link to="/">Go Home</Link></p>
        <p>Page Not Found</p>
        <p>Please check your URL :)</p>
    </div>);
}

export default NotFound
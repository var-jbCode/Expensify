import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is {props.info}</p>
        </div>
    );
}

const WithAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAdmin && <p>this data is private, please dont share!</p>}
                <WrappedComponent {...props} />
            </div>
        );
    }
}

const RequireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {!props.isAuthenticated && <p>Please login to see more info!</p>}
                <WrappedComponent {...props} />
            </div>
        );
    }
}



// require Authentication

const AuthInfo = RequireAuthentication(Info)

const AdminInfo = WithAdminWarning(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="all your base are belong to us" />, document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={false} info="all your base are belong to us" />, document.getElementById('app'))

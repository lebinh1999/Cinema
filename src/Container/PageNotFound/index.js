import React from 'react';
import {Link} from "react-router-dom";
export default function PageNotFound() {
    return (
        <div>
            <h1 className="text-center">Page Not Found Please Redirect Back</h1>
            <div className="text-center">
                <Link to="/" className="text-monospace text-decoration-none">click here to return to Home Page</Link>
            </div>
        </div>
    )
}
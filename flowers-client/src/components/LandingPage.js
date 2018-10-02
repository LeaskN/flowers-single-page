import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => (
    <div className="jumbotron">
        <h1 className="display-3">Movie Characters Page</h1>
        <p className="lead">These are some pretty cool movie characters</p>
        <hr className="my-4"/>
        <p>Click on characters to have them appear at the bottom of the page</p>
        <p className="lead">
            <Link to="/people" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
        </p>
    </div>
);

export default LandingPage;
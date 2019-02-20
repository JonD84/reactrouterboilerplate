import React from "react";
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-item nav-link active">Home<span className="sr-only">(current)</span></Link>
                        <Link to={'/page2'} className="nav-item nav-link">Page 2</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
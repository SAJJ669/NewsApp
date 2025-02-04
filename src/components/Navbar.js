import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: "white" }} href="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link nav-font" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/business">business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-font" to="/technology">technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}

import React from "react";
import { Link } from "react-router-dom";

function Footer({loggedIn, setLoggedIn, logOut}) {
    return (
        <footer >

            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item">
                            <a class="nav-link" nav-link-color="primary" id="home-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item">
                            {!loggedIn? <Link to="/login" class="nav-link" aria-current="page">Login</Link> : null }
                        </li>
                        <li class="nav-item">
                            {!loggedIn? <a class="nav-link" id="registro-tab" data-toggle="tab" href="/registro" role="tab" aria-controls="registro" aria-selected="false">Registro</a> : null }
                        </li>
                        <li class="nav-item">
                            {loggedIn? <a class="nav-link" id="dashboard-tab" data-toggle="tab" href="/dashboard" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</a> : null }
                        </li>
                        <li class="nav-item">
                            {loggedIn? <a class="nav-item nav-link" onClick={() => logOut()} href="/"> Log Out</a> : null }
                        </li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2022 Eafy Solutions</p>
                </footer>
            </div>

        </footer>
    );
}

export default Footer;
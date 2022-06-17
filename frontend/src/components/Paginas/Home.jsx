import React from "react";

function Home(loggedIn){
    return(
        <div className="container micontenedor">
            <h1>Página Home</h1>
            <h2> Bienvenidos al sistema de generación de reportes de EafySolutions</h2>
            {!loggedIn? <h3> Inicie sesión para poder acceder a las funcionalidades</h3> : null }
        </div>
    );
}

export default Home;
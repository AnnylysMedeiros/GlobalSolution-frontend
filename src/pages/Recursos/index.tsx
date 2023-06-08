import React from "react";
import googleplay from '../../img/googleplay.png'
import appstore from '../../img/appstore.png'

const Home: React.FC = () => {
    return (
        <>
            <h3>App Jardim Inteligente</h3>
            <p>Baixe nosso app e utilize os recursos de IA através da câmera para saber se o seu cultivo está saudável </p>
            <a href="/">
                <img src={googleplay} alt="" className="ml-3 logo" />
            </a>
            <a href="/">
                <img src={appstore} alt="" className="ml-3 logo" />
            </a>
        </>
    )
};

export default Home;

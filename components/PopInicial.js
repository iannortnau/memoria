import Head from 'next/head'
import Image from 'next/image'
import {useContext, useState} from "react";
import {ContextoGlobal} from "../context/contexto";
import imgUser from "../public/images/icons8_male_user_100px.png"
import {signIn} from "next-auth/client";



export default function PopInicial(props) {
    const contexto = useContext(ContextoGlobal);
    const [estado,setEstado] = useState("block");
    const [user,setUser] = useState(null);
    const [messenge,setMessenge] = useState(null);

    return (
        <div className={"w3-modal"} style={{display: estado}}>
            <div className={"w3-modal-content w3-card-4 w3-animate-top w3-round-xxlarge"} style={{maxWidth: "600px"}}>
                <div className="w3-round-xxlarge w3-panel w3-deep-purple">
                    <h1 className="w3-opacity">
                        <b>Registre uma conta para poder jogar</b>
                    </h1>
                </div>

                <form className="w3-container">
                    <div className="w3-section w3-center w3-text-deep-purple">

                        <button className="w3-button w3-block w3-deep-purple w3-section w3-padding w3-round-xxlarge" type="submit" onClick={() => signIn()}>
                            Entrar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}






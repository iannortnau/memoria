import {useContext, useEffect, useState} from "react";
import {ContextoGlobal} from "../context/contexto";
import {signIn, useSession} from "next-auth/client";
import styles from "../styles/components/popUp.module.css"
import styleCard from "../styles/components/tabuleiro.module.css"
import icones from "../context/icons.json";
import Image from 'next/image'
import perfil from  "../public/images/icons8_male_user_100px.png"



export default function PopInicial(props) {
    const contexto = useContext(ContextoGlobal);
    const [ session, loading ] = useSession();
    const [estado,setEstado] = useState(false);
    const [numeroIcone,setNumeroIcone] = useState(1);
    const listaDeIcones = Object.keys(icones);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumeroIcone(Math.floor(Math.random() * 704));
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={"w3-modal"} style={{display: (estado === true)?"none":"block"}}>
            <div className={"w3-padding-large w3-modal-content w3-card-4 w3-animate-top w3-round-xxlarge w3-animate-opacity"} style={{width: "600px"}}>
                <div className={styleCard.item}>
                    <div className={"w3-card-4 w3-round-xxlarge animate__animated animate__flipInY "+styleCard.card}>
                        <span className={"w3-text-deep-purple gg-"+listaDeIcones[numeroIcone]}/>
                    </div>
                </div>
                <div className="w3-round-xxlarge w3-panel w3-center w3-text-deep-purple">
                    <h1>
                        <b>Memória Rank</b>
                    </h1>
                </div>
                <hr/>
                {!loading
                    ?
                    session
                        ?
                        <div className="w3-round-xxlarge w3-panel w3-center w3-text-deep-purple w3-padding">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className={styles.imagem} src={session.user.image} alt={"perfil"}/>
                            <h1>
                                <b>Bem vindo: {session.user.name}</b>
                            </h1>
                            <button className="w3-button w3-card-4 w3-light-purple w3-section w3-round-xxlarge w3-text-deep-purple" type="submit" onClick={function (event){event.preventDefault(); setEstado(!estado); contexto.setState({...contexto.state, estado:1})}}>
                                <h3>
                                    <b>Iniciar jogo</b>
                                </h3>
                            </button>
                        </div>
                        :
                        <div className="w3-section w3-center">
                            <button className="w3-button w3-card-4 w3-light-purple w3-section w3-round-xxlarge w3-text-deep-purple" type="submit" onClick={function (event){event.preventDefault(); signIn('auth0');}}>
                                <h3>
                                    <b>Logar e iniciar jogo</b>
                                </h3>
                            </button>
                        </div>
                    :
                    <div className={styleCard.display}>
                        <div className={"w3-card-4 w3-round-xxlarge w3-spin "+styleCard.card}>
                            <span className={"w3-text-deep-purple gg-spinner"}/>
                        </div>
                    </div>
                }


            </div>
        </div>
    );
}






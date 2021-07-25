import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import {useSession} from "next-auth/client";
import styles from "../styles/components/popUp.module.css";
import stylesNav from "../styles/components/navBar.module.css";
import QuebraDeLinha from "./QuebraDeLinha";

export default function NavBar(props) {
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);
    const [tempo,setTempo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (contexto.state.estado === 1) {
                let auxTempo = tempo;
                auxTempo++;
                setTempo(auxTempo);
            }
        }, 1000);
        if(props.pegaTempo === true){
            props.registraTempo(tempo);
            setTempo(0);
        }
        return () => clearInterval(interval);
    });

    if(session){
        return (
            <span className={"w3-padding w3-round-xlarge w3-light-purple w3-display-topleft w3-margin w3-card-4 w3-text-deep-purple "}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={"w3-left "+stylesNav.imagem} src={session.user.image} alt={"perfil"}/>
                <span className={"w3-large w3-margin-left w3-right"}><b>Jogador:{session.user.name}</b><br/><b>Tempo:{tempo} Nivel:{contexto.state.nivel} </b></span>
            </span>
        );
    }else{
        return (
            <></>
        );
    }
}

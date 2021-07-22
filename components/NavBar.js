import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext} from "react";

export default function NavBar(props) {
    const contexto = useContext(ContextoGlobal);

    return (
        <span className="w3-round-xlarge w3-deep-purple w3-container w3-display-topleft w3-margin w3-card-4">
            <span className="w3-large">Jogador:{contexto.state.name}<br/>Pontos:{contexto.state.points}<br/>Nivel:{contexto.state.nivel}</span>
        </span>
    );
}

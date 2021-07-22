import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card";
import Botao from "../components/Botao";
import PopInicial from "../components/PopInicial";
import NavBar from "../components/NavBar";
import {ContextoGlobal} from "../context/contexto";
import {useContext} from "react";
import Tabuleiro from "../components/Tabuleiro";



export default function Home() {
    const contexto = useContext(ContextoGlobal);

    return (
        <div>
            {(contexto.state.estado != 0)?<Tabuleiro/>:<></>}

        </div>
    )
}

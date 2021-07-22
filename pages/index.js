import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card";
import Botao from "../components/Botao";
import PopInicial from "../components/PopInicial";
import NavBar from "../components/NavBar";
import {ContextoGlobal} from "../context/contexto";
import {useContext} from "react";
import Tabuleiro from "../components/Tabuleiro";
import Carregando from "../components/Carregando";



export default function Home() {
    const contexto = useContext(ContextoGlobal);


    switch (contexto.state.estado) {
        case 0:
            return (<></>);
        case 1:
            return(<Tabuleiro/>);
        case 2:
            setTimeout(function (){contexto.setState({...contexto.state, nCartas: contexto.state.nCartas+2, estado: 1})},2000);
            return(<Carregando/>);

    }
}

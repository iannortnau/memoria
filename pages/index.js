import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card";
import Botao from "../components/Botao";
import PopInicial from "../components/PopInicial";
import NavBar from "../components/NavBar";
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect} from "react";
import Tabuleiro from "../components/Tabuleiro";
import Carregando from "../components/Carregando";
import { signIn, signOut, useSession } from 'next-auth/client';
import ControleLogin from "../components/ControleLogin";



export default function Home() {
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);
    //TODO: APRENDER A USAR O PRISMA https://www.prisma.io/nextjs

    useEffect(function (){
        if(contexto.state.estado !== 1){
            if (session == null) {
                if (contexto.state.estado !== 0) {
                    contexto.setState({...contexto.state, estado: 0});
                }
            } else if (contexto.state.carregado === 0) {
                if (contexto.state.estado !== 3) {
                    contexto.setState({...contexto.state, estado: 3});
                }
            } else {
                if (contexto.state.estado !== 2) {
                    contexto.setState({...contexto.state, estado: 2});
                }
            }
        }
    });


    switch (contexto.state.estado) {
        case 0:
            return (<PopInicial/>);
        case 1:
            return(
                <>
                    <NavBar/>
                    <Tabuleiro/>
                </>
            );
        case 2:
            setTimeout(function (){contexto.setState({...contexto.state, nCartas: contexto.state.nCartas+2, estado: 1})},2000);
            return(<Carregando/>);
        case 3:
            return(<ControleLogin/>);
        case 4:
            return (<Carregando/>);

    }
}

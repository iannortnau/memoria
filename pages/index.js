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
import { signIn, signOut, useSession } from 'next-auth/client';





export default function Home() {
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);
    //TODO: APRENDER A USAR O PRISMA https://www.prisma.io/nextjs


    switch (contexto.state.estado) {
        case 0:
            return (<PopInicial/>);
        case 1:
            return(
                <>
                    {!session && <>
                        Not signed in <br/>
                        <button onClick={() => signIn()}>Sign in</button>
                    </>}
                    {session && <>
                        Signed in as {session.user.email} <br/>
                        <button onClick={() => signOut()}>Sign out</button>
                    </>}
                    <Tabuleiro/>
                </>
            );
        case 2:
            setTimeout(function (){contexto.setState({...contexto.state, nCartas: contexto.state.nCartas+2, estado: 1})},2000);
            return(<Carregando/>);

    }
}

import PopInicial from "../components/PopInicial";
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import Tabuleiro from "../components/Tabuleiro";

import { signIn, signOut, useSession } from 'next-auth/client';
import Carregando from "../components/Carregando";
import axios from "axios";
import NavBar from "../components/NavBar";
import Rank from "../components/Rank";



export default function Home() {
    const [carregandoControle,setCarregandoControle] = useState(true);
    const [popUpControle,setPopUpControle] = useState(false);
    const [validaPerfil,setValidaPerfil] = useState(false);
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);
    const [nivelAterior,setNivelAterior] = useState(contexto.state.nivel);
    const [pegaTempo,setPegatempo] = useState(false);

    useEffect(function (){
        if(nivelAterior !== contexto.state.nivel){
            setPegatempo(true);
            setNivelAterior(contexto.state.nivel);
        }
    }, [contexto.state.nivel])
    useEffect(function (){
        getLogin();
    },[]);


    function registraTempo(tempo){
        setPegatempo(false);
        const nivel = nivelAterior-1;
        console.log(tempo+" "+nivel);
        axios.put(process.env.NEXT_PUBLIC_URL+"/api/user",
            {
                nivel:nivel,
                pontos:tempo
            }
        )
            .then(function (resp) {
                console.log(resp.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    function getLogin(){
        axios.get(process.env.NEXT_PUBLIC_URL+"/api/user")
            .then(function (resp) {
                if(resp.data === false) {
                    axios.post(process.env.NEXT_PUBLIC_URL + "/api/user")
                        .then(function (resp) {
                            console.log(resp);
                            setCarregandoControle(true);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    console.log("user criado");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <>
            <Carregando
                hide={carregandoControle}
            />
            <PopInicial
                hide={popUpControle}
            />
            <NavBar
                pegaTempo={pegaTempo}
                registraTempo={registraTempo}
            />
            <Rank/>
            <Tabuleiro key={"nivel"+contexto.state.nivel}/>
        </>
    );
}

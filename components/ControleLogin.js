import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import styles from '../styles/components/tabuleiro.module.css'
import QuebraDeLinha from "./QuebraDeLinha";
import Card from "./Card";
import axios from "axios";
import {useSession} from "next-auth/client";

export default function ControleLogin(props) {
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);

    if(session === null){
        contexto.setState({...contexto.state, estado:0});
    }

    useEffect(function (){
        getLogin();
    },[])

    async function getLogin(){
        axios.get(process.env.NEXT_PUBLIC_URL+"api/user/"+session.user.email)
            .then(function (resp) {
                console.log(resp);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className={styles.tabuleiro}>

            <div className={styles.display}>
                <div className={"w3-card-4 w3-round-xxlarge w3-spin "+styles.card}>
                    <span className={"w3-text-deep-purple gg-spinner"}/>
                </div>
            </div>

        </div>
    );
}

import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import styles from '../styles/components/tabuleiro.module.css'
import QuebraDeLinha from "./QuebraDeLinha";
import Card from "./Card";

export default function Carregando(props) {
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

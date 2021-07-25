import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext} from "react";
import styles from '../styles/components/tabuleiro.module.css'

export default function QuebraDeLinha(props) {

    return (
        <div className={styles.break}/>
    );
}

import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext} from "react";
import styles from '../styles/components/tabuleiro.module.css'

export default function Tabuleiro(props) {
    const contexto = useContext(ContextoGlobal);
    console.log(contexto.state);

    return (
        <div className={styles.tabuleiro}>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
            <button value={"test"}>test</button>
        </div>
    );
}

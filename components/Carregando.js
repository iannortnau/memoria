import {useContext, useEffect, useState} from "react";
import styles from '../styles/components/tabuleiro.module.css'

export default function Carregando(props) {

    return (
        <div className={"w3-modal "+styles.tabuleiro} style={{display: (props.hide === true)?"none":"flex"}}>

            <div className={styles.display}>
                <div className={"w3-card-4 w3-round-xxlarge w3-spin "+styles.card}>
                    <span className={"w3-text-deep-purple gg-spinner"}/>
                </div>
            </div>

        </div>
    );
}

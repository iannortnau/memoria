import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import styles from '../styles/components/tabuleiro.module.css'
import QuebraDeLinha from "./QuebraDeLinha";
import Card from "./Card";

export default function Tabuleiro(props) {
    const contexto = useContext(ContextoGlobal);
    const [controlador,setControlador] = useState({
            nCartas: 8,
            cont: 0,
            cartaAnterior: null,
            carta1: 0,
            cartaAtual: 0,
            acertos: 0,
            estado: 0,
            mudaCarta: null,
            cartas: []
    });
    console.log(controlador.acertos);

    if(controlador.acertos == 6){
        criaCartas();
        setControlador({...controlador,acertos:0});
    }

    useEffect(()=>{
        criaCartas();
    },[]);

    function criaCartas(){
            let auxId = 0;
            let auxCartas = [];
            for (let i = 0; i < controlador.nCartas; i++) {
                    for (let j = 0; j < 2; j++) {
                            auxCartas.push({
                                    id: auxId,
                                    valor: i,
                                    estado: 0,
                            });
                            auxId++;

                    }

            }
            shuffle(auxCartas);

            setControlador({...controlador, cartas:auxCartas});
    }


    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    function controladorJogo(cont, valor, mudaCarta, acerto){
        let auxCont = cont;
        let auxAcertos = controlador.acertos;
        if(acerto == true){
            auxAcertos++;
        }
        setControlador({...controlador,cont:auxCont,cartaAnterior: valor, mudaCarta: mudaCarta, acertos:auxAcertos});
    }

    return (
        <div className={styles.tabuleiro}>

            <div className={styles.display}>
                {controlador.cartas.map((value,index) =>{
                    if(index<(controlador.cartas.length/2)){
                        return(
                            <Card
                                key={index}
                                value={value}
                                mudaCarta={controlador.mudaCarta}
                                cartaAnterior={controlador.cartaAnterior}
                                controladorJogo={controladorJogo}
                                cont={controlador.cont}
                            />
                        );
                    }
                })}
                <QuebraDeLinha/>
                {controlador.cartas.map((value,index) =>{
                    if(index>=(controlador.cartas.length/2)){
                        return(
                            <Card
                                key={index}
                                value={value}
                                mudaCarta={controlador.mudaCarta}
                                cartaAnterior={controlador.cartaAnterior}
                                controladorJogo={controladorJogo}
                                cont={controlador.cont}
                            />
                        );
                    }
                })}
            </div>

        </div>
    );
}

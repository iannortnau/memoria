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
            cont: 0,
            cartaAnterior: null,
            acertos: 0,
            estado: 0,
            mudaCarta: null,
            cartas: []
    });
    let numeros = [];
    //console.log(controlador.acertos);


    function numeroAleatorio(){
        while (true){
            const numero = Math.floor(Math.random() * 704);
            let saida = 0;
            for (let i = 0; i < numeros.length; i++) {
                if(numero === numeros[i]){
                    saida = 1;
                    break;
                }
            }
            if(saida === 0){
                numeros.push(numero);
                //console.log("a"+numero);
                return(Number.parseInt(numero.toString()));
            }
        }
    }

    if(controlador.acertos === contexto.state.nCartas){
        setTimeout(function (){contexto.setState({...contexto.state, nivel: contexto.state.nivel+1, nCartas: contexto.state.nCartas+2})},1500);
    }

    useEffect(()=>{
        criaCartas();
    },[]);

    function criaCartas(){
            let auxId = 0;
            let auxCartas = [];
            for (let i = 0; i < contexto.state.nCartas; i++) {
                    const auxNumero = numeroAleatorio();
                    for (let j = 0; j < 2; j++) {
                            auxCartas.push({
                                    id: auxId,
                                    valor: auxNumero,
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
                })}
            </div>
        </div>
    );
}

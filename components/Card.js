import Head from 'next/head'
import Image from 'next/image'
import imgRact from "../public/images/icons8_react_native_64px.png"
import {useState} from "react";
import icones from "../context/icons.json";
import styles from "../styles/components/tabuleiro.module.css"


export default function Card(props) {
    const [estado,setEstado] = useState(0);
    const [efeito,setEfeito] = useState("");
    const listaDeIcones = Object.keys(icones);

    if(props.mudaCarta == "erro" && estado == 1){
        setEstado(0);
    }else if(props.mudaCarta == "acerto" && estado == 1){
        setEstado(2);
    }

    function jogada(){
        if(estado === 0){
            setEstado(1);
            if(props.cont === 0){
                props.controladorJogo(1, props.value.valor);
            }else if(props.cont === 1){
                if(props.value.valor == props.cartaAnterior){
                    setTimeout(function (){props.controladorJogo(0, null, "acerto", true);},1000);

                }else{
                    setTimeout(function (){props.controladorJogo(0, null, "erro", false);},1000);
                }
            }
        }

    }

    switch (estado) {
        case 0:
            return (
                    <div key={props.value.valor} className={"w3-card-4 w3-round-xxlarge w3-margin animate__animated animate__flipInY "+styles.card} onClick={jogada}/>
            );
        case 1:
            return (
                <div className={"w3-round-xxlarge w3-margin animate__animated animate__flipInY "+styles.card} onClick={jogada}>
                    <span className={"w3-text-deep-purple gg-"+listaDeIcones[props.value.valor]}/>
                </div>
            );
        case 2:
            return (
                <div className={"w3-round-xxlarge w3-margin animate__animated animate__bounce "+styles.card} onClick={jogada}>
                    <span className={"w3-text-deep-purple gg-"+listaDeIcones[props.value.valor]}/>
                </div>
            );

    }

}

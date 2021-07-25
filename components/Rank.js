import Head from 'next/head'
import Image from 'next/image'
import {ContextoGlobal} from "../context/contexto";
import {useContext, useEffect, useState} from "react";
import {useSession} from "next-auth/client";
import styles from "../styles/components/rank.module.css"
import QuebraDeLinha from "./QuebraDeLinha";
import axios from "axios";

export default function Rank(props) {
    const [ session, loading ] = useSession();
    const contexto = useContext(ContextoGlobal);
    const [estado,setEstado] = useState(false);
    const [rank,setRank] = useState([]);

    useEffect(function (){
        if(estado === true){
            getRank();
        }
    },[estado]);

    function getRank(){
        axios.get(process.env.NEXT_PUBLIC_URL+"/api/rank")
            .then(function (resp) {
                console.log(resp.data);
                setRank(resp.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    if(estado === false){
        return (
            <>
            <span className={"w3-display-topright w3-margin w3-card-4 w3-ripple "+styles.card} onClick={function (){setEstado(!estado);}}>
                <span className={"w3-text-deep-purple gg-crown"}/>
            </span>
        </>
        );
    }else{
        return (
            <div className="w3-sidebar w3-center w3-bar-block w3-collapse w3-card-4 w3-light-purple w3-text-deep-purple w3-round-xxlarge w3-large w3-animate-right" style={{width: "200px",right:0}} id="mySidebar">
                <span className={"w3-card w3-bar-item w3-ripple "+styles.botao} onClick={function (){setEstado(!estado);}}>Fechar <b>X</b></span>
                <span className={"w3-bar-item w3-ripple "+styles.botao} onClick={function (){setEstado(!estado);}}><b>Rank</b></span>
                <div style={{overflow: "auto"}}>
                    {(rank.length === 0)
                        ?
                        <div className={"w3-margin w3-round-xxlarge w3-padding "+styles.item} style={{backgroundColor: "#d7cbec"}}>
                            <span className={"w3-text-deep-purple gg-spinner"}/>
                        </div>
                        :
                        rank.map((value,index) =>{
                            return(
                                <div key={index} className={"w3-margin w3-round-xxlarge w3-padding"} style={{backgroundColor: "#d7cbec"}}>
                                    <span className={"bar-item w3-ripple "}><b>{index+1}:{value.nome}</b><br/>Nivel:{value.nivel} Tempo:{value.pontos}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }



}

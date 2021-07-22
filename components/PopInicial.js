import Head from 'next/head'
import Image from 'next/image'
import {useContext, useState} from "react";
import {ContextoGlobal} from "../context/contexto";
import imgUser from "../public/images/icons8_male_user_100px.png"



export default function PopInicial(props) {
    const contexto = useContext(ContextoGlobal);
    const [estado,setEstado] = useState("block");
    const [user,setUser] = useState(null);
    const [messenge,setMessenge] = useState(null);

    function registraNome(event){
        if(user != null){
            event.preventDefault();
            contexto.setState({...contexto.state, name:user, estado:1});
            //TODO: criar usuario no banco
            setEstado("none");
        }else{
            setMessenge("Erro preencha o campo jogador.");
        }
    }




    return (
        <div className={"w3-modal"} style={{display: estado}}>
            <div className={"w3-modal-content w3-card-4 w3-animate-zoom w3-round-large"} style={{maxWidth: "600px"}}>
                <div className="w3-center"><br/>
                    <Image
                        src={imgUser}
                        width="100%"
                        height="100%"

                    />
                </div>

                <form className="w3-container">
                    <div className="w3-section">
                        <label><b>Jogador</b></label>
                        <input className={"w3-input w3-border w3-margin-bottom"} type="text" placeholder="Ex: Iann" name="nome" required onChange={function (aux){setUser(aux.target.value);}}/>
                        {(messenge != null)
                            ?
                                <div className="w3-panel w3-pale-red">
                                    <p>{messenge}</p>
                                </div>
                            :
                                <></>
                        }
                        <button className="w3-button w3-block w3-deep-purple w3-section w3-padding" type="submit" onClick={registraNome}>
                            Jogar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

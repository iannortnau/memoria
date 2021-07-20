import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";

export default function PopInicial(props) {
    const [estado,setEstado] = useState("block");

    return (
        <div className={"w3-modal"} style={{display: estado}}>
            <div className={"w3-modal-content w3-card-4 w3-animate-zoom w3-round-large"} style={{maxWidth: "600px"}}>

                <div className="w3-center"><br/>
                    <span onClick={function (){setEstado("none")}}
                          className="w3-button w3-xlarge w3-transparent w3-display-topright"
                          title="Close Modal">×</span>
                </div>

                <form className="w3-container">
                    <div className="w3-section">
                        <label><b>Username</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required/>
                        <label><b>Password</b></label>
                        <input className="w3-input w3-border" type="text" placeholder="Enter Password" name="psw" required/>
                        <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">
                            Login
                        </button>
                        <input className="w3-check w3-margin-top" type="checkbox" checked="checked"/>Remember me

                    </div>
                </form>
            </div>
        </div>
    );
}

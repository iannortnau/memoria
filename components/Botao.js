import Head from 'next/head'
import Image from 'next/image'

export default function Botao(props) {

    return (
        <button className={"w3-button w3-"+props.color+" "+props.auxClass}>{props.children}</button>
    )
}

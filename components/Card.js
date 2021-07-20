import Head from 'next/head'
import Image from 'next/image'

export default function Card(props) {

    return (
        <div className={"w3-card w3-round-large"+" "+props.auxClass}>{props.children}</div>
    )
}

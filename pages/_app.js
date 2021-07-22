import '../styles/globals.css'
import '../styles/w3.css'
import '../styles/animate.css'
import '../styles/all.css'
import ContextoHome from "../context/contexto"
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ContextoHome>
                <Component {...pageProps} />
            </ContextoHome>
        </Provider>
    );
}

export default MyApp
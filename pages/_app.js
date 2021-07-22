import '../styles/globals.css'
import '../styles/w3.css'
import '../styles/animate.css'
import '../styles/all.css'
import ContextoHome from "../context/contexto"

function MyApp({ Component, pageProps }) {
  return (
      <ContextoHome>
        <Component {...pageProps} />
      </ContextoHome>
  );
}

export default MyApp
import '../styles/global.css'

import {ChgallengesProvider} from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return ( <ChgallengesProvider>  <Component {...pageProps } /> </ChgallengesProvider> )
}

export default MyApp
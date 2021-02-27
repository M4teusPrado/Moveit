import '../styles/global.css'

import {ChgallengesProvider} from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return ( 
            <ChgallengesProvider>
                <Component {...pageProps } />
            </ChgallengesProvider> )
}

export default MyApp
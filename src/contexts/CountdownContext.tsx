import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { challengesContext } from "./ChallengesContext";

interface CountdownContextData {

    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProvider {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData )

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider ({children}: CountdownProvider) {

    const {startNewChallenge } = useContext(challengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIstActive ] = useState(false)
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor( time / 60 );
    const seconds = time % 60;


    function startCountdown(){ setIstActive(true); }

    function resetCountdown() {
        clearTimeout(countdownTimeout); //Break
        sethasFinished(false);
        setIstActive(false);
        setTime(0.05 * 60);
    }

    useEffect( () =>  {
                if(isActive && time > 0)  {
                    countdownTimeout = setTimeout( () => { setTime(time - 1) }, 1000) 
                } else if ( isActive && time === 0 ) {
                    sethasFinished(true);
                    setIstActive(false);
                    startNewChallenge();
                }
            } , [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }} >
            {children}
        </CountdownContext.Provider>
    )
}
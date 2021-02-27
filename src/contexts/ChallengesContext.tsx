import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json'

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface challengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface challengesProviderProps {
    children: ReactNode;
}

export const challengesContext = createContext({} as challengesContextData );
export function ChgallengesProvider ({ children }: challengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    useEffect( () => {
        Notification.requestPermission();
    }, [])

    function levelUp() { setLevel(level + 1) }

    function startNewChallenge() { 
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)

        new Audio('./notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio',{
                body: `Valendo ${challenge.amount}xp!`
            })
        }

    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;   
        }

        const { amount } = activeChallenge;
        let finalExperencie = currentExperience + amount; 
        if(finalExperencie >= experienceToNextLevel ) {
            finalExperencie = finalExperencie - experienceToNextLevel;
            levelUp();

        }

        setCurrentExperience(finalExperencie);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1 );
    }

    return (
        <challengesContext.Provider 
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                levelUp, 
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge
            }}
        >
            {children}
        </challengesContext.Provider>
    );
}
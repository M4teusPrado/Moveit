import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json'

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface challengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    
}

interface challengesProviderProps {
    children: ReactNode;
}

export const challengesContext = createContext({} as challengesContextData );
export function ChgallengesProvider ({ children }: challengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    function levelUp() { setLevel(level + 1) }

    function startNewChallenge() { 
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <challengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp, 
                startNewChallenge,
                activeChallenge,
                resetChallenge
            }}
        >
            {children}
        </challengesContext.Provider>
    );
}
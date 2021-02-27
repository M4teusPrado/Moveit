import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/CompletedChallenges.module.css'




export function CompletedChallenges(){

    const { challengesCompleted } = useContext(challengesContext)

    return(
        <div className={style.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
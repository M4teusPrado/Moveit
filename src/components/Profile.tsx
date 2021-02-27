import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export function Profile ()  {

    const { level } =  useContext(challengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/M4teusPrado.png" alt="Mateus Prado" />
            <div>
                <strong>Mateus Prado</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
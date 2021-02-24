import styles from '../styles/components/Profile.module.css'


export function Profile ()  {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/M4teusPrado.png" alt="Mateus Prado" />
            <div>
                <strong>Mateus Prado</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 7
                </p>
            </div>
        </div>
    );
}
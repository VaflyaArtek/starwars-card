import styles from './Background.module.css'

function Background() {
    return (
        <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
        </div>
    );
}

export default Background
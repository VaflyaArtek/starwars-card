import styles from './styles/Card.module.css';
import Button from "./Button";
import CardImg from "./CardImg";
import {getData} from "../../services/swDataHandler.ts";

function Card() {
    const prev = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15">
            <path fill="#fff" d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/>
        </svg>
    );

    const next = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15">
            <path fill="#fff" d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/>
        </svg>
    );

    const handlePrevClick = () => {
        getData(10, 'people')
    };

    const handleNextClick = () => {

    };

    return (
        <section className={styles.Card}>
            <div className={styles.wrapper}>
                <CardImg/>
                <h3 className={styles.title}>Blah-Blah-Blah</h3>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur <span>adipisicing</span> elit Facere
                    laboriosam pariatur quis repellendus saepe sint ullam!
                </p>
                <hr />
                <div className={styles.btnWrapper}>
                    <Button onClick={handlePrevClick}>{prev}</Button>
                    <Button onClick={handleNextClick}>{next}</Button>
                </div>
            </div>
        </section>
    );
}

export default Card;

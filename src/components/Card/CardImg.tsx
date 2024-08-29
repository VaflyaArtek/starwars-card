import styles from './styles/Img.module.css';


function CardImg() {
    return (
        <div>
            <img className={styles.image} src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt=""/>
        </div>
    );
}

export default CardImg
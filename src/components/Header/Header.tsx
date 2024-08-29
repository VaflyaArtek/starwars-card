import {Link} from "react-router-dom";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <nav className={styles.headerNav}>
                <ul className={styles.headerList}>
                    <li className={styles.headerListItem}>
                        <Link className={styles.headerListLink} to="/">People</Link>
                    </li>
                    <li className={styles.headerListItem}>
                        <Link className={styles.headerListLink} to="/planets">Planets</Link>
                    </li>
                    <li className={styles.headerListItem}>
                        <Link className={styles.headerListLink} to="/starships">Starships</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

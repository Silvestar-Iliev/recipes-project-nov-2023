import styles from './Home.module.css';


export const Home = () => {
    return(
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <h1>Welcome to the recipe page</h1>
                <p>Discover new and delicious cooking ideas!</p>
            </div>
        </div>
    );
};
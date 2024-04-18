import Bookmark from 'src/assets/svg/Bookmark';
import Tick from 'src/assets/svg/Tick';
import styles from 'src/styles/Home.module.css';
import typography from 'src/styles/Typography.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1 className={typography.heading}>
                Welcome to{' '}
                <span className={typography.primary}>Watchlists</span>
            </h1>
            <div>
                <p className={typography.paragraph}>
                    Browse movies, add them to watchlists and share them with
                    friends.
                </p>
                <p className={typography.paragraph}>
                    Just click the <Bookmark /> to add a movie, the poster to
                    see more details or click the <Tick /> to mark the movie as
                    watched.
                </p>
            </div>
        </section>
    );
};

export default Banner;

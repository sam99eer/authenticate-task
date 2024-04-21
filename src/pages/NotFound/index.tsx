import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { ROUTES } from 'src/data/Routes';
import styles from 'src/styles/PageNotFound.module.css';
import typography from 'src/styles/Typography.module.css';

const NotFound = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(ROUTES.HOME);
    };

    return (
        <section className={styles.container}>
            <h1 className={typography.heading}>Oops! You're Lost</h1>
            <p className={typography.subheading}>
                Looks like you've come upon a place that doesn't exist.
            </p>
            <Button
                isSmall
                text='Take Me to Homepage'
                onClick={navigateHandler}
            />
        </section>
    );
};

export default NotFound;

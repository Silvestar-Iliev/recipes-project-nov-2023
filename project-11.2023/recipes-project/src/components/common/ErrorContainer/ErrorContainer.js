import styles from './ErrorContainer.module.css';

export const ErrorContainer = ({
    error,
}) => {
    return (
        <div className={styles['error-container']}>
            <p>{error}</p>
        </div>
    );
};
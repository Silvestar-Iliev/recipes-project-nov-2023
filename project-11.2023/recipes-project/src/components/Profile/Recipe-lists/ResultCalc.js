import styles from '../Profile.module.css';

export const ResultCalc = ({
    macros,
    isOpen,
    onClose,
}) => {
    if(!isOpen) {
        return null;
    }

    return (
        <div className={styles["result-modal"]}>
            <button onClick={onClose}>X</button>
            <div className={styles["result-calc"]} >
                <h3><span>x 100g:</span> {macros.title.map(x => x + '; ')}</h3>
                <span>Total:</span>
                <p>Calories: <span>{macros.calories}</span></p>
                <p>Protein: <span>{macros.protein}</span></p>
                <p>Carbohydrates: <span>{macros.carbs}</span></p>
                <p>Fat: <span>{macros.fat}</span></p>
            </div>            
        </div>
    );
};
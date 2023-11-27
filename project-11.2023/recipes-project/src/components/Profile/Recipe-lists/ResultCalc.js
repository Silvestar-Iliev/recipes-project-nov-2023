import styles from '../Profile.module.css';

export const ResultCalc = ({
    macros,
}) => {
    return (
        <div className={styles["result-calc"]} >
            <h3>x 100g: {macros.title.map(x => x + '; ')}</h3>
            <span>Total:</span>
            <p>Calories: {macros.calories}</p>
            <p>Protein: {macros.protein}</p>
            <p>Carbohydrates: {macros.carbs}</p>
            <p>Fat: {macros.fat}</p>
        </div>
    );
};
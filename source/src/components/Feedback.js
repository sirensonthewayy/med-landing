import React from "react"; 
import styles from "./Feedback.module.css" 

function Feedback(){
    return(
        <section>
            <div className={styles.feedback}>
                <div className={styles.title}>
                    <h1>ОТЗЫВЫ</h1>
                </div>
                <div className={styles.review}>
                    <h3>Была приятно удивлена качеством обслуживания. Врачи очень внимательные, всё подробно объясняют. Рекомендую клинику всем знакомым!</h3>
                    <p>Екатерина С.</p>
                </div>
                <div className={styles.review}>
                    <h3>Проходил обследование, всё прошло быстро и профессионально. Персонал доброжелательный, атмосфера комфортная. Спасибо!</h3>
                    <p>Игорь Л.</p>
                </div>
                <div className={styles.review}>
                    <h3>Замечательное место! Записали без проблем, приём прошёл вовремя. Отдельная благодарность врачу за индивидуальный подход.</h3>
                    <p>Марина К.</p>
                </div>    
            </div>
        </section>
    )
}

export default Feedback
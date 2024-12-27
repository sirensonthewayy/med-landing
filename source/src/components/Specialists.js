import React from "react"; 
import styles from "./Specialists.module.css" 

function Specialists(){
    return(
    <section>
        <div className={styles.advantages}>
            <div className={styles.title}>
                <h1>СПЕЦИАЛИСТЫ</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Стоматолог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Хирург</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Эндокринолог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Офтальмолог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Терапевт</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Дерматолог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Невролог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Гастроэнтеролог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
                <div className={styles.cell}>
                    <a href='/'>
                        <h3>Диетолог</h3>
                        <p>12 врачей</p>
                    </a>
                </div>
            </div>
        </div>
    </section>)
}

export default Specialists
import React from "react"; 
import styles from "./Advantages.module.css" 

function Advantages(){
    return(
        <section>
            <div className={styles.advantages}>
                <div className={styles.title}>
                    <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <div className={styles.img}>
                            <img src="images/image-3.jpg"></img>
                        </div>
                        <div className={styles.text}>
                            <h4>Квалифицированные специалисты с многолетним опытом</h4>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.img}>
                            <img src="images/image-4.jpg"></img>
                        </div>
                        <div className={styles.text}>
                            <h4>Современное медицинское оборудование</h4>
                        </div>
                    </div>
                    <div className={styles.block}>
                    <div className={styles.img}>
                            <img src="images/image-5.jpg"></img>
                        </div>
                        <div className={styles.text}>
                            <h4>Индивидуальный подход к каждому пациенту</h4>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Advantages
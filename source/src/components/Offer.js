import React from "react"; 
import styles from "./Offer.module.css" 

function Offer(){
    return(
        <section>
            <div className={styles.offer}>
                <div className={styles.left_block}>
                    <div className={styles.text}>
                        <h2 class="animate__animated animate__backInLeft">Мы работаем для того, чтобы вы могли чувствовать себя уверенно и спокойно, зная, что ваше здоровье находится в надежных руках. </h2>
                    </div>
                </div>
                <div className={styles.right_block}>
                    <div className={styles.img}>
                        <img src="images/image-1.avif"  class="animate__animated animate__backInRight"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
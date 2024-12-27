    import React from "react"; 
    import styles from "./AboutUs.module.css" 

    function AboutUs(){
        return(
            <section>
                <div className={styles.about_us}>
                    <div className={styles.title}>
                        <h1>О НАС</h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.left_block}>
                            <div className={styles.img}>
                                <img src="images/image-2.jpg"></img>
                            </div>
                        </div>
                        <div className={styles.right_block}>
                            <div className={styles.text}>
                                <h2>Добро пожаловать в нашу клинику – место, где забота о вашем здоровье является нашей главной целью. Мы гордимся тем, что предоставляем широкий спектр медицинских услуг высокого качества в комфортной и доброжелательной обстановке.</h2>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        )
    }

    export default AboutUs
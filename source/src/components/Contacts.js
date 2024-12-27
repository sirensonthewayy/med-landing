import React from "react"; 
import styles from "./Contacts.module.css" 

function Contacts(){
    return(
        <section>
            <div className={styles.contacts}>
                <div className={styles.title}>
                    <h1>КОНТАКТЫ</h1>
                </div>
                <div className={styles.content}>
                    <a>Наш адрес:  г. Екатеринбург, ул. им. Николы Теслы, д. 1856</a>
                    <br/>
                    <a>Режим работы: Пн-Пт: 08:00 - 20:00, Сб: 09:00 - 18:00, Вс: выходной</a>
                    <br/>
                    <a>Контактные телефоны: +7 (999) 999-99-99, +7 (999) 888-88-88</a>
                    <br/>
                    <a>Электронная почта: info@med.ru</a>
                    <br/>
                    <br/>
                    <a>Генеральный директор: Иванов А. А.</a>
                    <br/>
                    <a>Контактный телефон: +7 (999) 777-77-77, +7 (999) 666-66-66</a>
                    <br/>
                    <a>Электронная почта: ivanovaa@med.ru</a>
                    <br/>
                    <br/>
                    <a>Также подписывайтесь на наши ресурсы!</a>
                    <div className={styles.socials}>
                        <a href="/"><img src="images/vk.png"></img></a>
                        <a href="/"><img src="images/telegram.jpeg"></img></a>
                        <a href="/"><img src="images/2gis.jpeg"></img></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
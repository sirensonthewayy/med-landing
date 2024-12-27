import React from "react"; 

import styles from "./Nav.module.css" 
import { Link } from "react-scroll";

function Nav(){
    return(
        <header>
            <nav>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="images/logo-blue.png"></img>
                    </Link>
                </div>
                <div className={styles.links}>
                    <h4><Link to="about_us" smooth={true} duration={500}>О нас</Link></h4>
                    <h4><Link to="advantages" smooth={true} duration={500}>Преимущества</Link></h4>
                    <h4><Link to="specialists" smooth={true} duration={500}>Специалисты</Link></h4>
                    <h4><Link to="feedback" smooth={true} duration={500}>Отзывы</Link></h4>
                    <h4><Link to="appointment" smooth={true} duration={500}>Запись на прием</Link></h4>
                    <h4><Link to="contacts" smooth={true} duration={500}>Контакты</Link></h4>
                    <h4><Link to="question" smooth={true} duration={500}>Обратная связь</Link></h4>
                </div>
            </nav>
        </header>
    )
}

export default Nav
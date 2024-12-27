import React, { useState } from "react"; 
import styles from "./Question.module.css" 

function Question(){
        const [formData, setFormData] = useState({name: "", phone: "", email: "", question: ""});
        const [errors, setErrors] = useState({});
    
        const validate = () => {
          const newErrors = {};
          let message = ""
          if (!formData.name.trim()) {
            newErrors.name = "Введите имя" + "\n";
            message += newErrors.name + " "
          }
      
          const phoneRegex = /^\+7\d{10}$|^8\d{10}$/;
          if (!formData.phone) {
            newErrors.phone = "Введите номер телефона" + "\n";
            message += newErrors.phone + " "
          } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Введите корректный номер телефона (формат: +71234567890 или 81234567890)" + "\n";
            message += newErrors.phone + " "
          }
    
          const emailRegex = /^\S+@\S+\.\S+$/; 
          if(!emailRegex.test(formData.email) & formData.email != ""){
            newErrors.email = "Введите почту в формате email@mail.ru" + "\n"
            message += newErrors.email + " "
          }

          if(!formData.question){
            newErrors.question = "Оставьте сообщение" + "\n"
            message += newErrors.question + " "
          }
    
          setErrors(newErrors);
      
          return message;
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const result = validate()
          if (!result) {
            let email = ""
            if(!formData.email){
                email = "не указан"
            }else{
                email = formData.email
            }
            alert("Ваш вопрос отправлен! \nИмя: " + formData.name +
                "\nНомер телефона: " + formData.phone +
                "\nАдрес электронной почты: " + email +
                "\nВопрос: " + formData.question);
            console.log("Отправленные данные:", formData);
          } else{
            alert(result)
          }
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({ ...prevData, [name]: value}));
        };
    
    return(
        <section>
            <div className={styles.question}>
                <div className={styles.title}>
                    <h1>ОБРАТНАЯ СВЯЗЬ</h1>
                </div>
                <div className={styles.appeal}>
                    <h3>У вас остались вопросы? Мы всегда готовы помочь!</h3>
                    <h3>Заполните форму ниже, и наш администратор свяжется с вами в ближайшее время.</h3>
                </div>
                <div className={styles.reg_form}>
                    <form id="feedback" onSubmit={handleSubmit}>
                        <div><input name="name" id="name" type="text" placeholder="Введите ваше имя" value={formData.name} onChange={handleChange}></input></div>
                        <div><input name="phone" id="phone" type="text" placeholder="Введите ваш контактный телефон" value={formData.phone} onChange={handleChange}></input></div>
                        <div><input name="email" id="email" type="text" placeholder="Введите ваш e-mail (необязательно)" value={formData.email} onChange={handleChange}></input></div>
                        <div><textarea name="question" id="question" type="text" placeholder="Что вас интересует?" value={formData.question} onChange={handleChange}></textarea></div>
                        <div className={styles.submit}><button form="feedback" type="submit">Отправить</button></div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Question
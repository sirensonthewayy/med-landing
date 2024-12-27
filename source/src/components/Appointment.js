import React,  { useState } from "react"; 
import styles from "./Appointment.module.css" 

function Appointment(){
    const [formData, setFormData] = useState({name: "", phone: "", specialist: "0", doctor: "0", time: "", email: ""});
    const [errors, setErrors] = useState({});

    const validate = () => {
      const newErrors = {};
      let message = ""
      if (!formData.name.trim()) {
        newErrors.name = "Введите фамилию, имя и отчество";
      }
  
      const phoneRegex = /^\+7\d{10}$|^8\d{10}$/;
      if (!formData.phone) {
        newErrors.phone = "Номер телефона обязателен для заполнения.";
        message += newErrors.phone + "\n"
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Введите корректный номер телефона (формат: +71234567890 или 81234567890).";
        message += newErrors.phone + "\n"
      }
  
      if(formData.specialist == "0"){
        newErrors.specialist = "Выберите необходимого специалиста"
        message += newErrors.specialist + "\n"
      }

      if(formData.doctor == "0"){
        newErrors.doctor = "Выберите врача"
        message += newErrors.doctor + "\n"
      }

      if(!formData.time){
        newErrors.time = "Выберите день и время приема"
        message += newErrors.time + "\n"
      }

      const emailRegex = /^\S+@\S+\.\S+$/;
      if(!emailRegex.test(formData.email) & formData.email){
        newErrors.email = "Введите почту в формате email@mail.ru"
        message += newErrors.email + "\n"
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
        alert("Заявка на прием успешно отправлена! \nФИО: " + formData.name +
            "\nНомер телефона: " + formData.phone +
            "\nАдрес электронной почты: " + email +
            "\nВас примет " + formData.specialist + " " + formData.doctor + " в " + formData.time);
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
            <div className={styles.appointment}>
                <div className={styles.title}>
                    <h1>ЗАПИСЬ НА ПРИЕМ</h1>
                </div>
                <div className={styles.reg}>
                    <form id="makeapp" onSubmit={handleSubmit}>
                        <div><input name="name" id="name" type="text" placeholder="Введите ваше ФИО"
                        minlength="10" maxlength="60" value={formData.name}
                        onChange={handleChange} required></input></div>
                        <div><input name="phone" id="phone" type="text" placeholder="Введите ваш контактный телефон"
                        minlength="11" maxlength="12" pattern="^\+7\d{10}$|^8\d{10}$"
                        title="Введите номер телефона, начиная с +7 или 8, а затем введите 10 цифр без каких-либо других символов"
                        value={formData.phone} onChange={handleChange} required></input></div>
                        <div>
                            <select name="specialist" id="specialist" value={formData.specialist} onChange={handleChange}>
                                <option value="0">Выберите необходимого специалиста</option>
                                <option>Стоматолог</option>
                                <option>Хирург</option>
                                <option>Офтальмолог</option>
                            </select>
                        </div>
                        <div>
                            <select name="doctor" id="doctor" value={formData.doctor} onChange={handleChange}>
                                <option value="0">Выберите врача</option>
                                <option>Иванов И. И.</option>
                                <option>Александрова А. А.</option>
                                <option>Павлов П. П.</option>
                            </select>
                        </div>
                        <div><input name="time" id="time" type="datetime-local" placeholder="Выберите дату и время приема"
                        value={formData.time} onChange={handleChange} required></input></div>
                        <div><input name="email" id="email" type="text" placeholder="Введите ваш e-mail (необязательно)"
                        pattern="^\S+@\S+\.\S+$" title="email@mail.ru" value={formData.email} onChange={handleChange}></input></div>
                        <div className={styles.submit}><button form="makeapp" type="submit">Отправить</button></div>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default Appointment
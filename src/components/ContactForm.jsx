import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactFormCss.module.css'
import 'animate.css';
import keepInTouch from './images/gallery1/getInTouch.avif'
export const ContactForm = () => {
  const form = useRef();
  const [submitted,setSubmitted]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hbreajw', 'template_2zk3hle', form.current, 
      {
        publicKey: 'HU3nDP6KBYjTW8Mou',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div class="animate__animated animate__bounce">
    <div className={styles.main} >
        <div className={styles.one}>
        
        <img src={keepInTouch} width='90%' height='auto'/>
        </div>
        <div className={styles.two}>{submitted?<div class="animate__animated animate__bounce animate__infinite">
            <p className={styles.para}>Messsage Submitted SuccessFully...<br/>
            We Will get Back to You Soon....
            </p></div>
            :<form ref={form} onSubmit={sendEmail} className={styles.form}>
        <center><h3  style={{color: "red"}}>Get in Touch</h3></center>
     <table>
      <tr>
      <td><label>Name*</label></td>
      <td> <input type="text" name="from_name" required className={styles.inp}/></td>
      </tr>
      <tr>
      <td><label>Email*</label></td>
      <td><input type="email" name="from_email" required className={styles.inp}/></td>
      </tr>
      <tr>
      <td><label>Mobile No</label></td>
      <td> <input type="number" name="from_number" pattern='[0-9]{10}' className={styles.inp}/></td>
      </tr>
      <tr>
      <td><label>Message*</label></td>
      <td><textarea name="message" required className={styles.inp} placeholder='Enter Some Message Here'/></td>
      </tr>
      </table>
       
         <input type="submit" value="Send" className={styles.send}/>
        
      
      
    </form>}</div>
        
    
    </div>
    </div>
  );
};
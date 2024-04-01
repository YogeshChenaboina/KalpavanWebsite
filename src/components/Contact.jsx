import React from 'react'
import styles from './contactCss.module.css'
import { IoHomeOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";
import { CiInstagram } from "react-icons/ci"
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import {ContactForm} from './ContactForm'
const Contact = () => {
  return (
    <div>
    <div className={styles.center}>
        Contact Us
      </div>
    <div className={styles.main}>
          <div className={styles.sub1}>
          <IoHomeOutline className={styles.icon}/>
           <div className={styles.symbol}>
    <div className={styles.symb}>
    <BiMap />15-7-258, 3rd floor, Ojha nivas, Ayurvedic
hospital</div>
<div className={styles.symb}>
    <MdOutlineMyLocation/>Begum Bazar, Hyderabad,
    </div>  
    <div className={styles.symb}>
    <MdOutlineMyLocation/>Telangana, Pin: 500012.
    </div>
    </div> 
    </div>
    <div className={styles.sub2}>
         <div className={styles.social}>
               <h3>Media</h3>
               <div>
                <FaPhone/>&nbsp;&nbsp;630170634
               </div>
               <div>
               <a href="mailto:kalpavanacademy.com" target="_blank" ><FiMail className={styles.icons}/></a>&nbsp;&nbsp;kalpavanacademy@gmail.com
               </div>
               <div>
               <a href="https://www.instagram.com/kalpvan_academy/?igsh=NGVhN2U2NjQ0Yg%3D%3D" target='_blank' ><CiInstagram className={styles.icons}/></a>&nbsp;&nbsp;kalpvan_academy
               </div>
               <div>
    <a href="https://wa.me/91630170634" target="_blank" ><BsWhatsapp className={styles.icons}/></a>
    &nbsp;&nbsp; 630170634
    </div>
    <marquee>NOTE:Feel Free To Click On The Icon...</marquee>
         </div>
         
    </div>
    </div>
    <ContactForm/>
      <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.958063513442!2d78.46893736945964!3d17.371802978903514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c0c9bec143%3A0x2a982da0eae5e7cc!2sKalpavan%20Academy!5e0!3m2!1sen!2sin!4v1711552735498!5m2!1sen!2sin" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </div>
  )
}
    
export default Contact

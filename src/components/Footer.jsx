import React from 'react'
import styles from './footerCss.module.css'
import { CiInstagram } from "react-icons/ci"
import { LuFacebook } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";
const Footer = () => {
  return (
    <div className={styles.main}>
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
    <div className={styles.symb}>
<a href="mailto:kalpvanacademy.com" target="_blank"><FiMail className={styles.icon}/>kalpvanacademy@gmail.com</a>
</div>
    </div> 
    <div className={styles.div2}>
      <center>
        <h3>
      Keep In Touch
      </h3>
      </center>
    <div className={styles.social}>
<a href="https://www.instagram.com/kalpvan_academy/?igsh=NGVhN2U2NjQ0Yg%3D%3D" target='_blank'><CiInstagram className={styles.icon}/></a>
    <a href=''><LuFacebook className={styles.icon}/></a>
    <a href="https://wa.me/91630170634" target="_blank"><BsWhatsapp className={styles.icon}/></a>
    </div>
    </div>
    </div>
   
  )
}

export default Footer

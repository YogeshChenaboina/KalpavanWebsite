import React from 'react'
import styles from './ourCoursesCss.module.css'
import course1 from './images/gallery1/course1.jpg'
import course2 from './images/gallery1/course group.jpg'
import pdf from './images/gallery1/PDF_file_icon.svg.webp'
const OurCourses = () => {
  return (
    <div>
      <div className={styles.center}>
        Our Courses
      </div>
      <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.subF}>
          <h3>About CA </h3>
      CA is one of the toughest examinations conducted for students who want 
      to become Chartered Accountants. CA is the dream job of many students 
      and mostly commerce students take this examination after completing
       hard work.
      <br/>The CA examination is conducted in three parts and assesses the 
      eligibility of the students for their skills to become a CA.
      If you’re looking for institutes that provide the best coaching
       for the toughest exam of CA, then here you are at the right place. 
       for the first step of the CA i.e. CA Foundation
       </div>
       <div className={styles.subS}>
       <img src={course2} height='100%' width='100%'/>
       </div>
      </div>
      <div className={styles.second}>
        <div className={styles.subF}>
        <h3>CA Foundation in Kalpavan Academy</h3>
        At our institution, we take pride in providing top-notch CA 
        Foundation classes tailored to meet the highest standards. 
        With a team of dedicated instructors, we ensure unparalleled 
        teaching quality, covering all topics comprehensively according
         to the syllabus. Our scheduled classes are meticulously 
         planned, offering students structured learning experiences
          that align with their academic goals. Moreover, our interactive
           teaching approach encourages active student participation, 
           fostering a dynamic learning environment where students can 
           engage, ask questions, and clarify doubts. Through 
           personalized attention and regular student interactions, 
           we strive to empower our students with the knowledge and 
           skills needed to excel in their CA Foundation examinations.
        </div>
        <div className={styles.subS}>
          <img src={course1} height='100%' width='100%'/>
          </div>
      </div>
      <div className={styles.third}>
        <div className={styles.subF}>
        <h2>
      How To Enroll In CA Foundation Course
      </h2>
Through Foundation Course route:
(i) Enroll for the Foundation Course after passing Class 10th Examination 
conducted by an examining body constituted by law in India or an examination
 recognized by the Central Government as equivalent thereto.

(ii) Register for the Foundation Course on or before the 1st day of January
 or the 1st day of July for the examination to be held in the months of
  May/June or November/December respectively.

(ii) Appear in Foundation Examination after appearing in the Senior Secondary Examination (10+2 examination) conducted by an examining body constituted by law in India or an examination recognised by the Central Government as equivalent thereto and on complying with (ii) above.
<br /><br />
How To Register For CA Foundation
CA Foundation Registration process includes filling up basic details 
online at ICAI official website and obtaining a user id, registration number,
 and password. This user id and password will further be used to download the
  admit card for the examination.
  <br />
CA Foundation’s Paper Format (As Per New Scheme)
There are four subjects in CA Foundation and all are Objective.

</div>
<div className={styles.subS}>
     
The following are the CA foundation subjects:
<ul style={{listStyleType:'none'}}>
  <li>Paper 1 : Accounting (100 Marks)</li>
<li>Paper 2: Business Laws (100 Marks)</li>
<li>Paper 3: Quantitative Aptitude (100 Marks)</li>
<li>
  <ul  style={{listStyleType:'none'}}>
    <li>Business Mathematics (40 Marks)</li>
    <li>Logical Reasoning (20 Marks)</li>
    <li>Statistics (40 Marks)</li>
</ul>
</li>
Paper 4: Business Economics (100 Marks)
</ul>



<center>
<h5>CA-Foundation Full Syllabus as Per New Scheme
Click here to Download</h5>
       <a href="https://resource.cdn.icai.org/74845bos60515-foundation.pdf" target='_blank'>
        <img src={pdf} height='50px' width='50px'/>
        </a>
        </center>
      </div>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <div className={styles.fourth}>
      <div >
      Intermediate and Higher Classes:
   Our institution is committed to delivering exceptional education at the
   intermediate and higher levels. With a focus on ease and effectiveness,
   we adhere to solid principles that underpin our teaching methodology. 
   Our experienced faculty members employ innovative teaching techniques 
   and a student-centric approach to create an engaging learning 
   environment. Whether it's mastering complex concepts or honing practical
   skills, we ensure that students receive comprehensive instruction that 
   prepares them for academic success. Through our commitment to 
   excellence and dedication to student welfare, we aim to instill 
   confidence and inspire a lifelong love for learning in our students.
      </div>
      
      </div>
    </div>
    </div>
  )
}

export default OurCourses

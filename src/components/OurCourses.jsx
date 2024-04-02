import React from 'react'
import styles from './ourCoursesCss.module.css'
import course1 from './images/gallery1/course1.jpg'
const OurCourses = () => {
  return (
    <div>
      <div className={styles.center}>
        Our Courses
      </div>
      <div className={styles.first}>
        <div className={styles.subF}>
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

       </div>
      </div>
      <div className={styles.second}>
        <div className={styles.subF}>
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
      <div>
        <h1>
      How To Enrol In CA Foundation Course
      </h1>
Through Foundation Course route:
(i) Enrol for the Foundation Course after passing Class 10th Examination 
conducted by an examining body constituted by law in India or an examination
 recognized by the Central Government as equivalent thereto.

(ii) Register for the Foundation Course on or before the 1st day of January
 or the 1st day of July for the examination to be held in the months of
  May/June or November/December respectively.

(ii) Appear in Foundation Examination after appearing in the Senior Secondary Examination (10+2 examination) conducted by an examining body constituted by law in India or an examination recognised by the Central Government as equivalent thereto and on complying with (ii) above.
      </div>
      <div>
      How To Register For CA Foundation
CA Foundation Registration process includes filling up basic details 
online at ICAI official website and obtaining a user id, registration number,
 and password. This user id and password will further be used to download the
  admit card for the examination.
  <br />
CA Foundation’s Paper Format (As Per New Scheme)
There are four subjects in CA Foundation and all are Objective.

The following are the CA foundation subjects:

Paper 1 : Accounting (100 Marks)

Paper 2: Business Laws (100 Marks)

Paper 3: Quantitative Aptitude (100 Marks)

Business Mathematics (40 Marks)
Logical Reasoning (20 Marks)
Statistics (40 Marks)
Paper 4: Business Economics (100 Marks)


CA-Foundation Full Syllabus as Per New Scheme
Click here to Download

      </div>
    </div>
  )
}

export default OurCourses

import React from 'react'
import styles from './aboutCss.module.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import timemangement from './images/time_mangement.jpg'
import ca1 from './images/ca1.jpg'
import ca2 from './images/ca2.jpg'
import motivation from './images/motivation.jpg'
const About = () => {
  return (
    <div className={styles.main1}>
 <div className={styles.center}>
About Us
</div>
<div className={styles.image}>
<div className={styles.layer}>
  <p>Welcome to <span style={{color: "gold"}}>Kalpvan Academy Educational Institute</span>, where our mission revolves around the ethos of 
  <span style={{color: " #51e2f5"}}>"Achieving Excellence Together"</span>.Specializing in classes for Higher Classes, Intermediate,
   and CA Foundation, we are dedicated to providing tailored education that equips students with the skills and knowledge they need 
   to succeed We take immense pride in our rich academic heritage, distinguished by a reputation for unparalleled
   educational standards. At Kalpvan, we are committed to democratizing education, offering courses that are not only of the highest 
   quality but also financially accessible to all. Our faculty comprises seasoned educators, whose wealth of experience and passion for 
   teaching ensures a transformative learning experience for every student. With a curriculum meticulously crafted to cover all subjects
    comprehensively, supplemented by tailored test series, we pave the way for academic success. Moreover, our dedication extends beyond 
    mere academics; we provide holistic guidance on long-term career development, preparing students to excel in their chosen paths.
     Through regular orientation sessions, personalized support, and an extended network of assistance, we foster a culture of collaboration 
     and growth. At Kalpvan, we firmly believe that excellence is achieved through collective effort, and we invite you to embark on this
      journey with us towards a brighter future.</p>
    </div>
</div>   
<CardGroup>
      <Card>
        <Card.Img variant="top" src={timemangement} />
        <Card.Body>
          <Card.Title>Time Management Skills</Card.Title>
          <Card.Text>
          In today's fast-paced world, time management is a crucial skill for academic success. 
          At Kalpavan Institute, we instill effective time management habits in our students, 
          teaching them how to prioritize tasks, allocate study time efficiently, and meet deadlines
           without compromising on quality. By mastering these skills, students are better equipped to
            balance their academic responsibilities with other commitments.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={ca2} />
        <Card.Body>
          <Card.Title>Regular Assessments</Card.Title>
          <Card.Text>
          Assessment is an integral part of the learning process at Kalpavan Institute. We conduct
           regular assessments to gauge students' understanding of the material covered and track their
            progress over time. These assessments help us identify areas of improvement and provide
             targeted intervention to address any learning gaps promptly.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={motivation} />
        <Card.Body>
          <Card.Title>Motivational Support</Card.Title>
          <Card.Text>
          We understand that the journey to academic excellence can be challenging, which is why we
           offer unwavering motivational support to our students. Our faculty members serve as mentors,
            encouraging students to stay focused, persevere through obstacles, and maintain a positive 
            attitude towards learning. Through regular feedback and encouragement, we empower students
             to reach their full potential and achieve their academic goals.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={ca1} />
        <Card.Body>
          <Card.Title>Teaching Excellence</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default About

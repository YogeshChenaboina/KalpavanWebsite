import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ganesh1 from './images/ganesh1.jpeg'
import ram1 from './images/ram1.jpeg'
import kalpavan from './images/KALPAVAN (main img).jpg'
import video from './images/kalpavan_video.mp4'
import styles from './homeCss.module.css'
import book from './images/gallery1/book.avif'
import 'animate.css';
const Home = () => {
  console.log("Home");
  
  return (
    <div className={styles.main}>
       <Carousel data-bs-theme="success">
        <Carousel.Item>
          <center>
          <img
            className="d-block "
            src={kalpavan}
            alt="First slide"
            style={{ height: 'auto' , width:'60%' }}  
          />
          </center>
        </Carousel.Item>
        <Carousel.Item>
          <center>
          <img
            className="d-block "
            src={ganesh1}
            alt="Second slide"
            style={{ height: 'auto' , width:'50%' }} 
          />
          </center>
          <Carousel.Caption>
            <h5>Ganesh Maharaj</h5>
            <p>2023 Ganesh Maharaj of Kalpavan Academy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <center>
          <img
            className="d-block "
            src={ram1}
            alt="Third slide"
            style={{ height: 'auto' , width:'45%' }} 
          /></center>
          <Carousel.Caption>
            <h5>RamNavami</h5>
            <p>Sri Rama Abhishekam in Kalpavan Academy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <center>
       
      <div class="embed-responsive embed-responsive-16by9" className={styles.vid}>
      <h2  class="animate__animated animate__bounce animate__slow" className={styles.head}>Bring Your Carrier On The Right Track</h2>
  <video class="embed-responsive-item"  src={video} controls style={{ height: 'auto' , width:'80%' }} className={styles.mvidi}>

  </video>
  <p className={styles.para}>Being a student is one of the most exciting times of a young person’s life 
and so they must choose the right place and subject to study are important, as the choices you make now
 will influence your future on both a personal and a professional level.
     This prospectus will help you make those decisions by giving you the detailed information you need
      about Kalpavan's and our study programmes. Here is a great learning experience waiting.
  </p>
</div>

  </center>
  <div className={styles.about}>
   <center> <h1>About Us</h1></center>
    <div className={styles.div}>
    <div className={styles.div1}>
      <p>
      Since our Instituition was established, Every year the 
      student’s pass percentage is on an upward trend and 
      highlights meritorious marks and performance.

<h4>
Our Mission :
</h4>
To provide the best quality education to our students.
<h4>
Our Vision :
</h4>
To become the top educational institution in Hyderabad, India.
      </p>
    </div>
    <div className={styles.div1}></div>
    </div>
  </div>
  <div className={styles.ourCourses}>
  <center> <h1>Our Courses</h1></center>
  <div className={styles.cards}>
      <div className={styles.card}>
        <img src={book} className={styles.book}/>
        <h3>CA Foundation</h3>
        <p>Our CA Foundation classes are meticulously structured to 
          align with the syllabus requirements, with dedicated 
          instructors for each subject. Through this tailored approach, we aim to 
          equip students with the knowledge and skills necessary to 
          excel in their CA Foundation examinations.</p>
      </div>
      <div className={styles.card}>
      <img src={book} className={styles.book}/>
      <h3>Intermediate</h3>
        <p> We offer Intermediate Public Examinations (IPE) classes 
          tailored specifically for students pursuing the MEC 
          (Mathematics, Economics, Commerce) and CEC 
          (Civics, Economics, Commerce) streams.</p>
      </div>
      <div className={styles.card}>
      <img src={book} className={styles.book}/>
      <h3>Higher Classes (School)</h3>
        <p>Higher classes convene daily, following a meticulously scheduled
           timetable that aligns with the syllabus. Each session 
           is dedicated to covering specific topics outlined in 
           the curriculum, ensuring comprehensive understanding 
           and progress towards academic objectives.</p>
      </div>
  </div>
  </div>

  <div className={styles.testinomials}>
    <div>
      <center><h1>Testimonials</h1></center>
      <div className={styles.testi}>
      <Carousel>
      <Carousel.Item>
        <div className={styles.review}>
          <center>
        <h1>Prachi</h1>
        </center>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.review}>
          <center>
      <h1>Bhagii</h1>
      </center>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.review}>
          <center>
      <h1>Tanish</h1>
      </center>
      </div>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Home
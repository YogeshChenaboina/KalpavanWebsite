import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ganesh1 from './images/ganesh1.jpeg'
import ram1 from './images/ram1.jpeg'
import kalpavan from './images/KALPAVAN (main img).jpg'
import video from './images/kalpavan_video.mp4'
import styles from './homeCss.module.css'
const Home = () => {
  console.log("Home");
  
  return (
    <div>
       <Carousel data-bs-theme="success">
        <Carousel.Item>
          <center>
          <img
            className="d-block "
            src={kalpavan}
            alt="First slide"
            style={{ height: '70vh' , width:'60%' }}  
          />
          </center>
        </Carousel.Item>
        <Carousel.Item>
          <center>
          <img
            className="d-block "
            src={ganesh1}
            alt="Second slide"
            //  height="550"
            style={{ height: '70vh' , width:'50%' }} 
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
            style={{ height: '70vh' , width:'45%' }} 
          /></center>
          <Carousel.Caption>
            <h5>RamNavami</h5>
            <p>Sri Rama Abhishekam in Kalpavan Academy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <center>
        <h1 className={styles.head}>Bring Your Carrier On The Right Track</h1>
      <div class="embed-responsive embed-responsive-16by9">
  <video class="embed-responsive-item" src={video} controls style={{ height: '70vh' , width:'60%' }}>
  Being a student is one of the most exciting times of a young person’s life and so they must choose the right place and subject to study are important, as the choices you make now will influence your future on both a personal and a professional level.
This prospectus will help you make those decisions by giving you the detailed information you need about St. Joseph’s and our study programmes. Here is a great learning experience waiting.
  </video>
  
  
</div>

<p className={styles.para}>Being a student is one of the most exciting times of a young person’s life and so they must choose the right place and subject to study are important, as the choices you make now will influence your future on both a personal and a professional level.
     This prospectus will help you make those decisions by giving you the detailed information you need about Kalpavan's and our study programmes. Here is a great learning experience waiting.
  </p>
  </center>
    </div>
  )
}

export default Home
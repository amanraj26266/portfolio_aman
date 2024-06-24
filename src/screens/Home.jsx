import React, { useEffect, useState } from 'react'
import image from './amanpic.png'
import cv from './CV_UPDATED_AMAN.pdf'

const text = ['Programmer', 'Fullstack Developer', 'Tech Enthusiastic'];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % text.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='home'>
      <div className="img">
        <img src={image} alt=" here is a photoes of owner" />
      </div>
      <div className="txt">


        <h1>Hello, it's me <br />Aman Raj</h1><h2>And I'm a {/*<span className="trans">Fullstack Developer</span>*/}
          <section className="animated">
            {text.map((text, i) => (
              <span key={i} style={{ opacity: i === index ? 1 : 0 }}>
                {text}
              </span>
            ))}
          </section>
        </h2>
        <p>"Hello! I'm Aman Raj, a passionate and skilled full stack developer.I'm thriving on turning ideas into innovative and user friendly web application and mobile application</p>


        <div className="social">
          <a href="https://www.instagram.com/amanraj1748/"><img src="https://images.template.net/76885/free-new-instagram-logo-vector-edit-online.jpg" alt="" className="media" /></a>
          <a href="https://www.linkedin.com/in/aman-raj-903251220/"><img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="" className='media' /></a>
          <a href="https://x.com/ErAmanRaj4u">
            <img src="https://banner2.cleanpng.com/20240119/bkq/transparent-x-icon-black-and-white-x-in-the-1710889063979.webp" alt="" className="media" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100049088672762"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZVMWY4NGQ7O_aYRQGUnKKXZ5Q7JPrerBdA&s" alt="" className="media" /></a>
        </div>

        <div className="download" >
          <a href={cv} download><button className="btn">Download C.V</button></a>
          <a href="https://github.com/amanraj26266"><button className="btn">Visit Github</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home
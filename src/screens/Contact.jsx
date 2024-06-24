import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <h1>Contact Me</h1>
        <div className="div">
          <div className="div2">
            <h3>I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</h3>
            <br />
            <h2>
              Get In Touch
            </h2>
            <h3>Email: </h3><span>itsmeaman26266@gmail.com</span><br />
            <h3>Mobile number: </h3><span>6201235605</span><br />
            <h2>Visit Me</h2>
            <span>Pipra Chanki, Narkatiagnaj, West Chmaparan, Bihar</span>

          </div>
          <div className="div1">
            <h2>write me a message</h2>
            <div className="inp">
              <label htmlFor="">Your Name </label>
              <input type="text" />
              <label htmlFor="">Your Email</label>
              <input type="email" name="" id="" />
              <label htmlFor="">Your Message</label>
              <input type="text" id='message' />
              <button type="submit">Submit</button>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Contact
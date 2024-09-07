import React from 'react'
import './SecContactStyle.css'
import Swal from 'sweetalert2'

const SecContact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7398079f-d9e4-450c-ba0f-a831400b54a5");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };
  return (
    <div className='Contact' id='Contact'>
      <div className='Title'>
      <h1 >Contact Me</h1> </div>
      <div className="ContactMe">
        <div className='CardContactMe'>
          <form className="form" onSubmit={onSubmit } >
            <div className='input-group'>
              <div className="input-box">
                <label>Full Name </label>
                <input type='text' placeholder='Enter Your Name' className='field' name='name' required/>
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input type='Email' placeholder='Enter Your email' className='field' name='email' required/>
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea name='message' id='' className='field-mess' placeholder='Enter Your Message' required></textarea>
              </div>
            </div>
            <div className="input-group-2">
              <button type="submit" className='btn'>Send Message</button>
            </div>
          </form>
        </div>
        <div className='SocialMedia'>
          <div className='input-box'>
            <label>My Mail</label>
            <div className='IconsSocial'>
            <a href="mailto:raghad.abdnajjar2001@gmail.com"><i className="fas fa-envelope"></i></a>
            <p>raghad.abdnajjar2001@gmail.com</p></div>
          </div>
          <div className='input-box'>
            <label>My Whatsapp</label>
            <div className='IconsSocial'>
            <a href="https://wa.me/00963937396257"><i className="fab fa-whatsapp"></i></a>
            <p>0937396257</p>
            </div>
          </div>
          <div className='input-box'>
            <label>My Telegram</label>
            <div className='IconsSocial'>
            <a href="https://t.me/Raghad_Najjar" target="_blank"><i className="fab fa-telegram"></i></a>
              <p>@Raghad_Najjar</p>
            </div>
          </div>
          <div className='input-box'>
            <label>My Facebook</label>
            <div className='IconsSocial'>
            <a href='https://www.facebook.com/raghad.najjar.73?mibextid=ZbWKwL' target="_blank">
            <i className="fa-brands fa-facebook"></i></a>
              <p>Raghad Najjar</p>
            </div>
          </div>
          <div className='input-box'>
            <label>My Github</label>
            <div className='IconsSocial'>
              <a href="https://github.com/Ragahad-najjar" target="_blank"><i className="fab fa-github"></i></a> 
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecContact
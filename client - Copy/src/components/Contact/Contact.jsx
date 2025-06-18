import React from 'react'
import './contact.css' 
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01a54203-af7f-4dc2-964f-c8375f93bcac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon}alt=''/></h3>
          <p>
            If you have any questions or inquiries, feel free to reach out to us. We are here to assist you with any information you need.
          </p>
          <ul>
            <li><img src= {mail_icon} alt= ''/>Email:sales.hksinha@gmail.com</li>
            <li><img src= {phone_icon} alt= ''/>Mobile No:8517375375,9784623391</li>
            <li><img src= {location_icon} alt= ''/> plot No.07-08/G-1<br/>Nangal jaisa Bohra,jhotwara,Jaipur </li>
          </ul>
      </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Your phone number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='contact-btn'>Submit Now<img src={white_arrow} alt='' /></button>
          </form>
          <span>{result}</span>
          
        
      </div>
      
    </div>
  )
}

export default Contact

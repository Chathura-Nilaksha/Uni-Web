import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "86486beb-2d2e-420f-b638-37cc42b7cac5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Success", data);
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>

            {/* Im not inserting img for "send us a message" */}
            <p>Your feedback, questions and Suggestions 
                are important to us.</p>
            <ul>
                {/* Im not inserting imges for each list */}
                <li>contact@gmail.com</li>
                <li>O77-123456789</li>
                <li>No.20, Galle Road, Colombo 3.</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone number</label>
                <input type='tel' name='phone' placeholder='Enter Your Contact Number' required/>
                <label>Write Your Message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dard-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact

import { useRef } from 'react';
import '../styles/contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    let Contact=(e)=>{
e.preventDefault();
console.log(form.current);
emailjs.sendForm('service_cxo3d26', 'template_5toi7vl', form.current, 'ALVCfTDysEjc2VmKC')
.then((result) => {
    alert(result.text);
}, (error) => {
    alert(error.text);
});
    }

    return ( 
        <section className="contact">
<div className="contactb1">
<div className="contactb2">
<div className="form">
<form action="" ref={form} onSubmit={Contact}>
<div className="firstname">
<input type="text" placeholder='First name' name='first_name'/>
</div>    
<div className="lastname">
<input type="text" placeholder='Last name' name='last_name'/>

</div>
<div className="textarea">
<textarea type="text"col="40" row="20" placeholder='message' name='message'/>
</div>    
<div className="message">
<button type='submit'>Message</button>
</div>
</form>
</div>
<div className="contacttext">
    <div className="address">
<h1>Address</h1>
<p>KakaralaThota(POST) <br />
 Ballari</p>
    </div>
    <div className="email">
<h1>Email</h1>
<p><a href="http://">neelakantajohn@gmail.com</a></p>
    </div>
    <div className="phone">
<h1>Phone Number</h1>
<p>+91 7483455260</p>
    </div>
</div>

</div>
</div>    
</section>
     );
}
 
export default Contact;
import './footer.css'
import { Link } from 'react-router-dom';
import { BiMailSend, BiPhoneCall, BiLocationPlus } from "react-icons/bi";


function Footer() {
    return (
        <div className="box-container">
      <div className="box">
                <h3>Quick Links</h3>
                <Link class="links" to="/">Home</Link>
                <Link class="links" to="/about">About</Link>
                <Link class="links" to="/features">Features</Link>
                <Link class="links" to="/pricing">Pricing</Link>
                <Link class="links" to="/trainers">Trainers</Link>
                <Link class="links" to="/blogs">Blogs</Link>
            </div>



            <div className="box">
                <h3>Opening Hours</h3>
                <p> Mon : <i> 7:00am - 10:30pm </i> </p>
                <p> Tue : <i> 7:00am - 10:30pm </i> </p>
                <p> Wed : <i> 7:00am - 10:30pm </i> </p>
                <p> Fri : <i> 7:00am - 10:30pm </i> </p>
                <p> Sat : <i> 7:00am - 10:30pm </i> </p>
                <p> Sun : <i> closed </i> </p>
            </div>

            <div className="box">
                <h3>Contact Us</h3>
                <h6 className="contact"  style={{color:"white"}}><BiPhoneCall/>: 9454515319</h6>
                <h6 className="contact" style={{color:"white"}}> <BiMailSend/>: shaikhanas@gmail.com </h6>
                <h6 className="contact"style={{color:"white"}}> <BiLocationPlus/>: Lucknow, india</h6>
                {/* <p> <i className="contact" ></i><BiPhoneCall/>: 9454515319</p> */}
                {/* <p> <i className="contact"></i> <BiMailSend/>: shaikhanas@gmail.com </p> */}
                {/* <p> <i className="contact"></i><BiLocationPlus/>: Lucknow, india </p> */}
                <div className="share">
              
  <a href="https://instagram.com/nikhil_thakur19?igshid=YmMyMTA2M2Y=" target="_blank">
    <img classname="footer-icons" src="https://www.pngkey.com/png/full/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png" alt="Instagram" />
  </a>
  <a href="https://instagram.com/nikhil_thakur19?igshid=YmMyMTA2M2Y=" target="_blank">
    <img classname="footer-icons" src="https://www.citypng.com/public/uploads/preview/-41601136491ub3lnoo7cv.png" alt="Instagram" />
  </a>
  <a href="https://instagram.com/nikhil_thakur19?igshid=YmMyMTA2M2Y=" target="_blank">
    <img classname="footer-icons" src="https://img.favpng.com/15/6/4/facebook-logo-icon-png-favpng-NSdF9e3aktdSq4DCeYrXsd0sk.jpg" alt="Instagram" />
  </a>


                </div>
            </div>
            <h1 className="text-center">All Right Reserved &copy;Incubator</h1>
        </div>

        
    )
}

export default Footer;
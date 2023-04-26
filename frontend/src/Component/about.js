import './about.css'
import priceimg from './image/priceimg.jpg'
import youtubeimg from './image/youtube.jpg'
import Feed from './feedback';
import Navibar from './navbar';
import Footer from './footer';


function About() {
    return (
        <div className='full'>
            <div className='navibar'><Navibar/></div>
        <div className='allabout'>
            <u><h1>Why To Choose Us</h1></u>
            <div class="about">
                <div className="block">
                    <h2>Personal trainer support</h2>
                    <p>Experienced and extremely cordial Trainers to take care of your fitness regime personally and help you achieve your fitness goals and body .</p>
                </div>
                <div className="block">
                    <h2>Proper Diet Charts Plans</h2>
                    <p>Fitness goals can't be achieved without proper diet plans,So we are associated with Expert Nutritions who will help you with proper diet plans .</p>
                </div>
                <div className="block">
                    <h2>Very Affordable Packages</h2>
                    <p>It's first time that we are offering such world class facilities at very affordable prices. it will be cheaper than you snacks.so grap the offer</p>
                </div>
            </div><br />
            <div className='divider'>
                <img className='hono' src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" />
            </div><br />
            <u><h1>Services</h1></u>
            <div className='services'>
                <div className='srvc'>
                    <h2><b>Weight Loss</b></h2>
                    <img style={{ width: "100%" }} src='https://uploads-ssl.webflow.com/635a525d130ad943a800543b/6387621eff2304c32561a179_Fidelity%20Asset%20-%20Medical%20Weight%20Loss%20Promo.webp' />
                </div>
                <div className='srvc' >
                    <h2><b>Weight Gain</b></h2>
                    <img style={{ width: "100%", }} src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/09/20/11/image1.jpg?quality=75&width=640&auto=webp' />
                </div>
                <div className='srvc'>
                    <h2><b>Stay Fit</b></h2>
                    <img style={{ width: "100%" }} src='https://img.mensxp.com/media/content/2020/Sep/iStock-1193925611_5f548471dd353.jpeg' />
                </div>
            </div><br />
            <div className='divider'>
                <img className='hono' src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" />
            </div><br />
            <div className="social">
                <u><h1>Our Social Media Platforms</h1></u>
                <div className="aboutblog">
                    <div className="blog">
                        <h2>Visit Us at </h2>
                        <a href="https://www.instagram.com/_tripathi0shubham_/" target="_main">
                        <img style={{ width: "100%", height: "300px" }} src="https://navbharattimes.indiatimes.com/thumb/82819657/instagram-reels-82819657.jpg?imgsize=145238&width=540&height=405&resizemode=75" /></a>
                        <h2><u>Instagram</u></h2>
                    </div>
                    <div className="blog">
                        <h2>Visit Us at</h2>
                        <a href="https://www.youtube.com/@shubhamtripathifitness" target="_main">
                        <img style={{ width: "100%", height: "300px" }} src={youtubeimg} /></a>
                        <h2><u>Youtube</u></h2>
                    </div>
                    <div className="blog">
                        <h2>Visit Us at </h2>
                        <img style={{ width: "100%", height: "300px" }} src="https://cdn.pixabay.com/photo/2020/09/22/10/52/facebook-5592723_1280.png" />
                        <h2><u>Facebook</u></h2>
                    </div>
                </div>
            </div><br />
            <div className='divider'>
                <img className='hono' src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" />
            </div><br />
            <div className='pricing'>
                <img src={priceimg} height="900px" width="90%"></img>
            </div><br />
            <div className='divider'>
                <img className='hono' src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" />
            </div><br />
            <div className='socialvid'>
            <iframe width="720" height="315" controls="1"
src="https://youtu.be/bemYjCLUoZo">
</iframe>

            </div>
            <Feed /> <br/>
            <Footer />
        </div>
        </div>
    )
}

export default About;
import "./about.css";
import priceimg from "./image/priceimg.jpg";
import Feedb from "./feedback";
import Footer from "./footer";

function About() {
  return (
    <div className="full">
      <div className="navibar">
    
      </div>
      <div className="allabout">
        <u>
          <h1>Why To Choose Us</h1>
        </u>
        <div class="about">
          <div className="block">
            <h2>Personal trainer support</h2>
            <p>
              Experienced and extremely cordial Trainers to take care of your
              fitness regime personally and help you achieve your fitness goals
              and body .
            </p>
          </div>
          <div className="block">
            <h2>Proper Diet Charts Plans</h2>
            <p>
              Fitness goals can't be achieved without proper diet plans,So we
              are associated with Expert Nutritions who will help you with
              proper diet plans .
            </p>
          </div>
          <div className="block">
            <h2>Very Affordable Packages</h2>
            <p>
              It's first time that we are offering such world class facilities
              at very affordable prices. it will be cheaper than you snacks.so
              grap the offer :smile
            </p>
          </div>
        </div>
        <br />
        <hr style={{borderRedius:'5px'}}/>
        <u>
          <h1>Services</h1>
        </u>
        <div className="services">
          <div className="srvc">
            <h2>
              <a href="https://www.menwithkids.com/must-try-foods-for-weight-loss/?keyword=weight%20loss%20foods%20for%20women&utm_source=bing&utm_medium=cpc&utm_campaign=India%20Traffic&utm_term=weight%20loss%20foods%20for%20women&utm_content=Must-Try%20Foods%20for%20Weight%20Loss">
                Weight Loss
              </a>
            </h2>
            <img
              style={{ width: "100%", height: "85%" }}
              src="https://uploads-ssl.webflow.com/635a525d130ad943a800543b/6387621eff2304c32561a179_Fidelity%20Asset%20-%20Medical%20Weight%20Loss%20Promo.webp"
           alt="#" />
          </div>
          <div className="srvc">
            <h2>
              <a href="https://www.news24.com/life/archive/Weight-gain-eating-plan-20120721">
                Weight Gain
              </a>
            </h2>
            <img
              style={{ width: "100%", height: "85%" }}
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/09/20/11/image1.jpg?quality=75&width=640&auto=webp"
           alt="#" />
          </div>
          <div className="srvc">
            <h2>
              <a href="https://www.livestrong.com/article/97879-stay-fit-/">
                Stay Fit
              </a>
            </h2>
            <img
              style={{ width: "100%", height: "85%" }}
              src="https://img.mensxp.com/media/content/2020/Sep/iStock-1193925611_5f548471dd353.jpeg"
           alt="#" />
          </div>
        </div>
        <br />
        <hr/>
        {/* <div className="divider">
          <img
            className="hono"
            src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg"
         alt="#" />
        </div> */}
        <br />
        {/* <div className="social">
          <u>
            <h1>Our Social Media Platforms</h1>
          </u>
          <div className="aboutblog">
            <div className="blog">
              <h2>Visit Us at </h2>
              <a
                href="https://www.instagram.com/_tripathi0shubham_/"
                target="_main"
              >
                <img
                  style={{ width: "100%", height: "300px" }}
                  src="https://navbharattimes.indiatimes.com/thumb/82819657/instagram-reels-82819657.jpg?imgsize=145238&width=540&height=405&resizemode=75"
               alt="#" />
              </a>
              <h2>
                <u>Instagram</u>
              </h2>
            </div>
            <div className="blog">
              <h2>Visit Us at</h2>
              <a
                href="https://www.youtube.com/@shubhamtripathifitness"
                target="_main"
              >
                <img
                  style={{ width: "100%", height: "300px" }}
                  src={youtubeimg} alt="#"
                />
              </a>
              <h2>
                <u>Youtube</u>
              </h2>
            </div>
            <div className="blog">
              <h2>Visit Us at </h2>
              <img
                style={{ width: "100%", height: "300px" }}
                src="https://cdn.pixabay.com/photo/2020/09/22/10/52/facebook-5592723_1280.png" alt="#"
              />
              <h2>
                <u>Facebook</u>
              </h2>
            </div>
          </div>
        </div> */}
        <br />
        {/* <div className="divider">
          <img
            className="hono"
            src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" alt=""
          />
        </div> */}
        <div className="pricing">
          <img src={priceimg} height="900px" width="90%" alt=""></img>
        </div>
        <br />
        {/* <div className="divider">
          <img
            className="hono"
            src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" alt=""
          />
        </div> */}
        <br /><hr/>
        <div className="socialvid">
          <iframe
            src="https://www.youtube.com/embed/qpJ5NJpBVDg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/zx-kG93G1I4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          
        </div>
        <br/><hr/>
        <Feedb /> <br />
        <Footer />
      </div>
    </div>
  );
}

export default About;

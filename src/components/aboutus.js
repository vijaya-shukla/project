import React from "react"
import Image from "./images"
import { FaAngellist, FaWaze ,FaHeart,FaGrinSquint,FaGrinWink,FaGrin} from "react-icons/fa"

const AboutUs = () => (
  <div>
    <section className="aboutus-section">
      <div className="container py-5">
            <h2 className="heading text-center font-weight-bold mb-4">
                <span className="text-danger"> ABOUT WanderAround!</span>
             </h2>

            <div class="jumbotron">
          <h1 class="display-3">About us</h1>
          <p class="lead">
          WanderAround is the flagship leisure travel website in India.
           Known for its range of customized travel offerings, Travel Tours promises 'unbeatable' services both in
            pricing and quality.Currently, there are over 25 Travel Tours stores across all leading cities in India Delhi-NCR, Mumbai, Pune,
            Ahmedabad, Chandigarh, Bangalore, Hyderabad, Cochin, Chennai and Indore among other cities.Travel Tours has been formed by bringing together the erstwhile Travel Tours,
          </p>
        </div>

        <div className="container py-5">
      <h2 className="heading text-center font-weight-bold mb-4">
       <span className="text-primary"> WanderAround belives!</span>
       </h2>
       <div className="row justify-content-center">
       <div className="col-lg-4 mb-4">
       <div className="card shadow text-center">
            <div className="card-body">
              <FaAngellist
                className="text-warning m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Meet</h4>
              <div className="lead">
              WanderAround is about meeting others.
               You can get to know people online through the website or meet them in real life...
              </div>
            </div>
          </div>
       </div>
       <div className="col-lg-4 mb-4">
       <div className="card shadow text-center">
            <div className="card-body">
              <FaWaze
                className="text-success m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Travel</h4>
              <div className="lead">
              Travel You want to travel the world or just visit the city down the road?
               Organise your journey through BeWelcome and meet nice people on the way...
              </div>
            </div>
          </div>
         </div>
         
         <div className="col-lg-4 mb-4">
       <div className="card shadow text-center">
            <div className="card-body">
              <FaHeart
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Share</h4>
              <div className="lead">
At  WanderAround we believe sharing creates a better world.
 We share experiences, moments, knowledge and we welcome guests in our homes, if we can...
              </div>
            </div>
          </div>
         </div>
       </div>
      </div>
    </div>
  </section>

              <h2 className="heading text-center font-weight-bold mb-4">
                <span className="text-cyan"> why choose us!</span>
             </h2>
             <div className="row justify-content-center">

             <div className="col-lg-4 mb-4">
             <div className="card shadow text-center">
            <div className="card-body">
              <FaGrinWink
                className="text-warning m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Amazing Destinations</h4>
              
            </div>
          </div> 
          </div>

          <div className="col-lg-4 mb-4">
             <div className="card shadow text-center">

            <div className="card-body">
              <FaGrin
                className="text-warning m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Budget Friendly</h4>
              
            </div>
          </div> 
          </div>

          <div className="col-lg-4 mb-4">
             <div className="card shadow text-center"> 
            <div className="card-body">
              <FaGrinSquint
                className="text-warning m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Thriller experiences</h4>
              
            </div>
          </div> 
          </div>
          

          
          

          <h2 className="heading text-center font-weight-bold mb-4">
                <span className="text-cyan">our team!</span>
                <div className="row justify-content-center">
                <div className="col-lg-3 mb-3">

                <div className="card shadow text-center"  >
             <Image data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="1000"

            className="card shadow mx-auto"
            filename="vaishnavi.jpg"
            alt=""
          />
           </div>


          </div>
          <div className="col-lg-3 mb-3">
                <div className="card shadow text-center">
             <Image
            className="card shadow mx-auto"
            filename="vijaya.jpg"
            alt=""
          />
          </div>
          </div> 
          <div className="col-lg-3 mb-3">
                <div className="card shadow text-center">
             <Image
            className="card shadow mx-auto"
            filename="lakshita.jpg"
            alt=""
          />
          </div>
          </div>
          <div className="col-lg-3 mb-3">
                <div className="card shadow text-center">
          <Image
            className="card shadow mx-auto"
            filename="tulika.jpg"
            alt=""
          /> 
          </div>
          </div>
          <div className="col-lg-3 mb-3">
         <div className="card shadow text-center">
          <Image
            className="card shadow mx-auto"
            filename="tanu.jpg"
            alt=""
          />
          </div>
          </div>
                
                </div>
             </h2>
          </div>

{/* 
          <div className="col-lg-4 mb-4">
            <div className="card shadow text-center">
            <div className="card-body">
            <FaGrin
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Meet</h4>
              <div className="lead">
             kyuki hm aache hai
              </div>
            </div>
          </div>
             </div> */}
          
            </div>

             
     

    
)

export default AboutUs
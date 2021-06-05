import React from "react"
import Features from "../components/features"
import Image from "./images"
import { Link } from "gatsby"
import styled from 'styled-components'
import Video from '../any/videos/video.mp4'
const Body = () => {
  return (
<>
<HeroContainer>
<div class="jumbotron text-center  text-danger"> 
<h1>JOURNEY OF YOUR DREAMS</h1>
 <HeroBg>
          <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/ >
  </HeroBg>
  <HeroH1>Yeh Mera India!</HeroH1>
    </div>    
</HeroContainer>
     
     {/* <HeroBg>
          <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/ >
        </HeroBg>
    
     */}

        <div className="row">
            <div className="col-lg-4 col-md-6">
      
           <div class="card text-white bg-dark mb-3">
             <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="1000">
             <Image
            className="card shadow mx-auto"
            filename="kanyakumari1.jpg"
            alt=""
          /> 
          </div>
            <div class="card-body">
           <h4 class="card-title text-center">Kanyakumari</h4>
             <p class="card-text">
             Kanyakumari is one of the smallest, yet most beautiful coastal towns on......
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For more
            </Link>
              {/* <a class="btn btn-primary btn-sm" href="1" role="button">Read more</a> */}
              </p>
            </div>
             </div> 
          
            </div>

            <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-dark mb-3"> 
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="1000">
            <Image
            className="card shadow mx-auto"
            filename="kerela1.jpg"
            alt=""
          />
          </div> 
            <div class="card-body">
           <h4 class="card-title text-center">Munnar</h4>
             <p class="card-text">
             Overview Munnar is a quaint town and an idyllic hill stationt.....
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For  more
            </Link>
              </p>
            </div>
           </div>
            </div>
        
            <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-dark mb-3"> 
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="1000">
            <Image
            className="card shadow mx-auto"
            filename="rishikesh1.jpg"
            alt=""
          /> 
          </div>
            <div class="card-body">
           <h4 class="card-title text-center">Rishikesh</h4>
             <p class="card-text">
             Overview Rishikesh is also known as Hrishikesh. It is located in...
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For more
            </Link>
              </p>
           </div>
           </div> 
           </div>

            <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-dark mb-3"> 
            <Image
            className="card shadow mx-auto"
            filename="delhi1.jpg"
            alt=""
          /> 
            <div class="card-body">
           <h4 class="card-title text-center">Delhi</h4>
             <p class="card-text">
             Delhi, for all the right reasons, is the national capital of incredible India.....
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For more
            </Link>
              </p>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-dark mb-3"> 
            <Image
            className="card shadow mx-auto"
            filename="gujrat1.jpg"
            alt=""
          /> 
            <div class="card-body">
           <h4 class="card-title text-center">Somnath</h4>
             <p class="card-text">
             One of the 12 jyotirlinga shrines of Shiva, Somnath Temple......
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For more
            </Link>
              </p>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-dark mb-3"> 
            <Image
            className="card shadow mx-auto"
            filename="kolkata1.jpg"
            alt=""
          /> 
            <div class="card-body">
           <h4 class="card-title text-center">Kolakata</h4>
             <p class="card-text">
             Kolkata, The City of Joy, the cultural hub of India, this particular......
              <Link to="/blog" className="btn btn-primary btn-sm" >
              For more
            </Link>
              </p>
           </div>
           </div>
            </div>

        
            
    </div>
  
   </>
  )
}
export default Body 
const HeroBg=styled.div``

const HeroContainer=styled.div`

`

const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit: cover;
object-fit: cover;
`

const HeroContent=styled.div`
z-index:3;
height: calc(100vh -80px);
max-height:100%;
padding: 0 rem calc((100vw -1300px)/2);
`

const HeroItems=styled.div`
display:flex;
flex-direction:column;
justify-content:top;
align-items:center;
text-align:center;
height:100vh;
max-height:50%;
padding: 0;
color: #fff;
line-height:1.1;
font-weight:bold;
`

const HeroH1=styled.h1`
font-size: clamp(1.5rem,6w,4rem);
margin-bottom:1.5rem;
letter-spacing:3px;
padding:0
`


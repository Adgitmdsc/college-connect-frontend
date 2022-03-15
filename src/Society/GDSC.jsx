import React, { Component } from 'react'
import "./gdsc.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const responsive={
  0:{
items:2,
  },
  512:{
items:4,
  }
}

const items = [
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6gRP0G093wGGaPLWzu_dCTDrmhCsZ3y-ag&usqp=CAU" style={{width:"160px",height:"160px"}} /> 

 ,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfLo0pb7aTfAFoc9IGS_oefE5LhRSf6upvw&usqp=CAU" style={{width:"160px",height:"160px"}} />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAApi81URojkiIUB6pVWQTCtdS8N3wTOa0w&usqp=CAU" style={{width:"160px",height:"160px"}} />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k4Podafz5E_dSM0aTCcycThCPThWUmpxrQ&usqp=CAU" style={{width:"160px",height:"160px"}} />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl4bHxnZGPmBGRmhqSvR4nVIds0NdaCHnuA&usqp=CAU"  style={{width:"160px",height:"160px"}}/>,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsv1cC_cKyEdhj85nCnM-UEm5ZyijRwTafQ&usqp=CAU" style={{width:"160px",height:"160px"}} />,
];
export class GDSC extends Component {
  render() {
    return (
      <div>
          <div className="first">
              <div className='sign'>
                  <img src="https://www.dscsdmc.org/img/logo.png" alt="" style={{width:"400px",height:"200px"}}/>
             <h1>Google Developer Students Club</h1>
             <p>At Google Developer Student Club, ADGITM we believe imagination has no limits and we can make almost anything possible through technology. We want to create leaders by empowering them to think out of the box.</p>
             <button>Join Us</button>
              </div>
          </div>
          <div className="sec">
              <div className='about'>
                <h2>WHO WE ARE</h2>
                <h1>Students Leading Developer Society</h1>
                <p>The Google Developer student clubs ADGITM is a community creating a peer to peer environment by bringing developers under one roof so that we connect, learn and grow by implementing projects that solve real-world problems!</p>
              </div>
          </div>
          <div className="third">
              <div className='join'>
                <h2>WHY YOU SHOULD JOIN</h2>
                <h1>Get To Learn Tech & Non-Tech Skills</h1>
                <p>you’ll learn technical and professional skills—like public speaking, technical writing, community leadership, and software development</p>
              <div className="boxes">
                <div className='left'>
                  <img style={{width:"160px",height:"160px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZH0TwpFkrikVh10uLq8ir9SC4S788cptTFw&usqp=CAU" alt="" />
               <h2>Grow</h2>
                </div>
                <div className='right'>
                  <img style={{width:"160px",height:"160px",borderRadius:"50%"}}  src="data:image/jpeg;base64,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" alt="" />
               <h2>Connect</h2>
                </div>
              </div>
              </div>
          </div>
          <div className="five">
          <div className="c">
<h1>Departments</h1>
         
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={100}
            animationDuration={1000}
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
            disableButtonsControls
            
            />
             </div>
             </div>
          <div className="four">
         
            <div>
            <h1>
            
            Hear From Our Member
          </h1>
            <div className='speaker'>
              <div className='l'>
                <img style={{width:"160px",height:"160px",borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/78840243?v=4" alt="" />
              
              <p>It helped me grow my confidence in technical writing and guided me to organize inclusive events that benefit people from all backgrounds.</p>
              <br />
              <span>Devyank Nagpal , Core Team Member</span>           
              </div>
              <div className='m'>
                <img style={{width:"160px",height:"160px",borderRadius:"50%"}} src="https://uday-yadav.web.app/assets/me.5acddc11.jpg" alt="" />
                <p>The skills you learn and the connections that you make will stick with you for a lifetime.</p>
                <br />
                <span>Uday Yadav , Core Team Member</span>
              </div>
              <div className='r'>
                <img  style={{width:"160px",height:"160px",borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/43620425?v=4" alt="" />
             <p>Thanks to the program I was able to meet amazing people from all over the world and build my network</p>
             <br />
             <span>Praveen Choudary , Core Team Member</span>
              </div>
            </div>
            </div>
          </div>
      </div>
    )
  }
}

export default GDSC
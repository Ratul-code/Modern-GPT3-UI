import React from 'react'
import GPT3 from "../../assets/images/GPT-3.png";
import "./footer.css";
const Footer = () => {
  const FooterElement = ({heading,links})=>{
    // console.log()
    return(
       <div className='gpt3__footer-content__links-container'>
         <h1>
           {heading}
         </h1>
         {links.map(link=>(
           <p><a href="#">{link}</a></p>
         ))}

       </div>
    )
  }
  return (
    <footer className='gpt3__footer'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'>
        <div className="gpt3__footer-content__logo">
          <img src={GPT3} alt="Gpt3" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content__links">
          <FooterElement heading='Links' links={["Overons","Social Media","Counters","Contact"]}/>
          <FooterElement heading='Company' links={["Terms & Conditions","Privacy Policy","Contact"]}/>
          <FooterElement heading='Get in touch' links={["Crechterwoord K12 182 DK Alknjkcb","085-132567","info@payme.net"]}/>
        </div>
      </div>
      <div className="gpt3__footer-text">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
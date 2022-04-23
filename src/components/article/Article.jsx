import React from 'react'
import "./article.css";
const Article = ({img,time,heading,text}) => {
  return (
    <div className='gpt3__article'>
      <div className="gpt3__article-image">
        <img src={img} alt="" />
      </div>
      <div className="gpt3__article-content">
        <div className='gpt3__article-content__heading'>
          <p>{time}</p>
          <h3>{heading}</h3>
        </div>
        <div className='gpt3__article-content__text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Article
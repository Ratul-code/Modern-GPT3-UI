import React from "react";
import { Article } from "../../components";
import {
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
} from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,</h1>
        <h1 className="gradient__text">We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__group-A">
          <Article img={blogImage1} heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" time="Sep 26, 2021" text='Read Full Article' />
        </div>
        <div className="gpt3__blog-container__group-B">
          <Article img={blogImage2} heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" time="Sep 26, 2021" text='Read Full Article' />
          <Article img={blogImage3} heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" time="Sep 26, 2021" text='Read Full Article' />
          <Article img={blogImage4} heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" time="Sep 26, 2021" text='Read Full Article' />
          <Article img={blogImage5} heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" time="Sep 26, 2021" text='Read Full Article' />
        </div>
      </div>
    </div>
  );
};

export default Blog;

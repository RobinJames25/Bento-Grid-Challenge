import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import createPost from "./img/illustration-create-post.webp";
import content from "./img/illustration-ai-content.webp";
import stars from "./img/illustration-five-stars.webp";
import platforms from "./img/illustration-multiple-platforms.webp";
import growth from "./img/illustration-audience-growth.webp";
import schedule from "./img/illustration-consistent-schedule.webp";
import growfollowers from "./img/illustration-grow-followers.webp";
import posts from "./img/illustration-schedule-posts.webp";

function App() {
  useEffect(() => {
    
    AOS.init ({
      easing: "ease-in-out-sine",
      duration: 500,
      once: false,
      offset: 200,
    });

    window.addEventListener('load', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };

  }, []);
  
  return (
    <div className="container">
      <div className="grid">
        <div className="col-1" data-aos="fade-up"> 
          <div className="wrapper-1">Create and schedule content <span className="text-1">quicker.</span> 
            <img src={createPost} alt="Create Post" className="create-post"/>
          </div>
          <div className="wrapper-2">Writing your content <br/>using AI.
            <img src={content} alt="Ai Content" className="ai-content"/>
          </div>
        </div>
        <div className="col-2">
          <div className="row-1">
          <div className="row">
            <div className="wrapper-3" data-aos="fade-up">
              Social Media <span className="text-2">10x</span> <span className="text-3">Faster</span> with AI 
              <div className="star-wrapper">
                  <img src={stars} alt="stars" className="stars"/>
                  <span className="text-4">Over 4000 5-star reviews</span>
              </div>
            </div>
            <div className="row-1-2" data-aos="fade-up">
              <div className="wrapper-4">
                <img src={platforms} alt="social-media-platforms" className="platforms"/>
                Manage <br/>Multiple accounts and platforms.</div>
              <div className="wrapper-5">
                Maintain a consistent posting <br/>schedule.
                <img src={schedule} alt="posting-schedule" className="schedule"/>
                </div>
          </div>
          </div>
          <div className="wrapper-6" data-aos="fade-up">
            <span className="text-8">Schedule to social media.</span>
            <img src={posts} alt="scheduled-post" className="posts"/>
            <span className="text-9">
              Optimize post timings 
              to publish content at 
              the perfect time for 
              your audience
            </span>
          </div>
          </div>
          <div className="row-2" data-aos="fade-up">
          <div className="wrapper-7">
            <span className="text-5">&gt;56%</span> <br /> <span className="text-6">faster audience growth.</span>
            <img src={growth} alt="audience-growth" className="growth" />
          </div>
          <div className="wrapper-8">
            <img src={growfollowers} alt="growfollowers" className="grow-followers" />
            <p className="text-7">Grow followers with non-stop content.</p>
          </div>
          </div>
          </div>      
        </div>
      </div>
  )
}
export default App
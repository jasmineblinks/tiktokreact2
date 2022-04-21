import React, { useState, useRef } from "react";
import "./card.css";
import profile from "../../images/goddy.jpg";
import share from "../../images/share.svg";
import heart from "../../images/heart.svg";
import comment from "../../images/comment.svg";

function Card() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="card-container">
      <div className="break" />
      <div className="section">
        <div className="user-info">
          {/* <img className="user-profile" src={profile} alt="profile" />s */}
          <div>
            <div className="section-profile">
              <h3 className="bold">emmzy</h3>
              <p className="username">emma mbonu</p>
            </div>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.
            </h5>
          </div>
        </div>
      </div>
      <div className="video-socials">
        <video className="video" controls ref={videoRef} onClick={onVideoPress}>
          <source
            src="https://v16-webapp.tiktok.com/e4acd1d6617991162bdd67a44528d24d/62584776/video/tos/useast2a/tos-useast2a-ve-0068c001/9a3edbe7c4bb4b8081383916fb376214/?a=1988&br=612&bt=306&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HF2Myq8ZJf~hwe2N9twyl7Gb&l=2022041410084101019018602909029870&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anY6dzQ6ZmU4PDMzNzczM0ApOjk4N2U8ZWU0NzxnZWgzO2c1NDVscjQwZC1gLS1kMTZzczJiYV8xNTJeYDYuYzYwL146Yw%3D%3D&vl=&vr="
            type="video/mp4"
          />
        </video>
        <div className="section-content socials">
          <div className="icon">
            <img src={heart} width={"25px"} alt="heart" />
          </div>

          <div className="social-tag">5.1m</div>
          <div className="icon">
            <img src={comment} width={"25px"} alt="comment" />
          </div>

          <div className="social-tag">20.3k</div>
          <div className="icon">
            <img src={share} width={"25px"} alt="share" />
          </div>

          <div className="social-tag">4000</div>
        </div>
      </div>
    </div>
  );
}

export default Card;

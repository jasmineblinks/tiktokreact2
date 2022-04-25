import React, { useState } from "react";
import "./card.css";
import profile from "../../images/goddy.jpg";
import share from "../../images/share.svg";
import heart from "../../images/heart.svg";
import comment from "../../images/comment.svg";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import {
  reverse,
  blur,
  deshake,
  noise,
  loop,
  boomerang,
} from "@cloudinary/url-gen/actions/effect";
import { by3dLut } from "@cloudinary/url-gen/actions/adjust";
import { border } from "@cloudinary/url-gen/qualifiers/background";
import Minicard from "../minicard/Minicard";
function Card() {
  const [videoSrc, setVideoSrc] = useState("");
  const [transformState, setTransformState] = useState({
    blur: 500,
    deshake: 32,
    noise: 50,
    loop: "34",
    reverse: "backwards",
    boomerang: "5.0",
    borders: "solid 5 red",
    by3dLut: "iwltbap_aspen.3dl",
  });
  const cld = new Cloudinary({
    cloud: {
      cloudName: "pueneh",
    },
  });
  return (
    <div className="card-container">
      <div className="center-div">
        <div className="break" />
        <div className="card-section">
          <div className="user-info">
            <img className="user-profile" src={profile} alt="profile" />
            <div>
              <div className="section-profile">
                <h3 className="bold">emmzy</h3>
                <p className="username">emma mbonu</p>
              </div>
              <h5>Door number one or door number two</h5>
            </div>
          </div>
        </div>
        <div className="video-socials">
          <div className="video">
            {videoSrc ? (
              <AdvancedVideo
                cldVid={cld
                  .video(videoSrc)
                  .effect(blur(transformState.blur))
                  .effect(deshake(transformState.deshake))
                  .effect(boomerang(transformState.boomerang))
                  .effect(noise(transformState.noise))
                  .effect(loop(transformState.loop))
                  .effect(border(transformState.borders))
                  .effect(reverse(transformState.reverse))
                  .effect(by3dLut(transformState.by3dLut))}
                controls
              />
            ) : (
              <div></div>
            )}
          </div>

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
      <div className="suggested-box">
        <div className="section">
          <div className="suggested">
            <Minicard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

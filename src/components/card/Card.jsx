import React, { useState, useRef } from "react";
import "./card.css";
import profile from "../../images/goddy.jpg";
import share from "../../images/share.svg";
import heart from "../../images/heart.svg";
import comment from "../../images/comment.svg";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import {
  reverse,
  accelerate,
  blur,
  deshake,
  noise,
  loop,
  boomerang,
  borders,
} from "@cloudinary/url-gen/actions/effect";
import { by3dLut } from "@cloudinary/url-gen/actions/adjust";
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
                // src={}
                cldVid={cld.video(videoSrc).effect(
                  blur(transformState.blur).deshake(transformState.deshake)
                  // .resize(
                  // fill(transformState.fill)
                  //   .width(transformState.width)
                  //   .height(transformState.height)

                  // .gravity(
                  //   Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
                  // )
                )}
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
    </div>
  );
}

export default Card;

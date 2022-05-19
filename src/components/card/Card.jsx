import React, { useState } from "react";
import classes from "./card.module.css";
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
    <div className={classes.cardContainer}>
      <div className={classes.center_div}>
        <div className={classes.break} />
        <div className={classes.card_section}>
          <div className={classes.user_info}>
            <img className={classes.user_profile} src={profile} alt="profile" />
            <div>
              <div className={classes.section_profile}>
                <h3 className={classes.bold}>emmzy</h3>
                <p className={classes.username}>emma mbonu</p>
              </div>
              <h5>Door number one or door number two</h5>
            </div>
          </div>
        </div>
        <div className={classes.video_socials}>
          <div className={classes.video}>
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

          <div className={`${classes.section_content}${classes.socials}`}>
            <div className={classes.icon}>
              <img src={heart} width={"25px"} alt="heart" />
            </div>

            <div className={classes.social_tag}>5.1m</div>
            <div className={classes.icon}>
              <img src={comment} width={"25px"} alt="comment" />
            </div>

            <div className={classes.social_tag}>20.3k</div>
            <div className={classes.icon}>
              <img src={share} width={"25px"} alt="share" />
            </div>

            <div className={classes.social_tag}>4000</div>
          </div>
        </div>
      </div>

      <Minicard />
    </div>
  );
}

export default Card;

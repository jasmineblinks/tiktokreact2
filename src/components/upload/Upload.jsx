import React, { useState } from "react";
import "./upload.css";
import upload from "../../images/upload.svg";
import { AdvancedVideo } from "@cloudinary/react";

import { Cloudinary } from "@cloudinary/url-gen";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
function Upload() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
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

  const [cldCloudName, setCldCloudName] = useState("");

  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("");

  const handleCloudName = (e) => {
    setCldCloudName(e.target.value);
  };
  const handlePresetName = (e) => {
    setPreset(e.target.value);
  };

  const onChange = (e) => {
    setTransformState({
      ...transformState,
      [e.target.name]: e.target.value,
    });
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "pueneh",
    },
  });

  const handleEventChange = (e) => {
    const read = e.target.files[0];
    setFile(read);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);
    setLoading(true);
    fetch(`https://api.cloudinary.com/v1_1/${cldCloudName}/upload`, {
      method: "POST",
      // body: formData,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cldCloudName,
        preset,
        videoSrc,
        transformState,
      }),
    })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        setVideoSrc(res.public_id);
        setTransformState((prev) => ({
          ...prev,
          height: res.height,
          width: res.width,
          blur: res.blur,
          deshake: res.deshake,
        }));

        setLoading(false);
      })
      .then(handleErrors);
  };
  const data = {
    videoSrc: "",
    caption: "This is my upload ",
    transformState: {
      blur: 0,
      deshake: 0,
      noise: 0,
      loop: 0,
      reverse: "backwards",
      boomerang: "solid 3 green",
      by3dLut: "iwltbap_aspen.3dl",
    },
  };
  console.log(data);

  return (
    <div className="upload-banner">
      <div className="upload-content">
        <div className="first-wrapper">
          <div className="first-wrapper__content">
            <h3>Upload video</h3>
            <h4>Post a video to your account</h4>
          </div>

          <div className="zone">
            <div className="inner__content">
              <img src={upload} alt="logo" />
              <div>
                <h4>Select video to upload</h4>
              </div>
              <span>Or drag and drop a file</span>
              <p>MP4 or WebM</p>
              <span>
                720x1280 resolution or higher up to 180 seconds Less than 1GB
              </span>
              <div class="selectFile">
                <label for="file">Select file</label>
                <input
                  className="input-text"
                  type="file"
                  name="files[]"
                  id="file"
                  onChange={handleEventChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second-wrapper">
          <label htmlFor="">Caption</label>

          <input type="text" name="" id="caption" placeholder="@ #" />
          <div>
            <label htmlFor="">Cloud Name:</label>
            <input
              onChange={handleCloudName}
              type="text"
              value={cldCloudName}
              name="cloudname"
            />

            <label htmlFor="">Upload Preset:</label>
            <input
              onChange={handlePresetName}
              type="text"
              value={preset}
              name="preset"
            />
          </div>

          <div>
            <div className="first-effect">
              <div>
                <label htmlFor="">Blur</label>
                <input
                  type="range"
                  name="blur"
                  id="blur"
                  min="0"
                  max="2000"
                  onChange={onChange}
                  value={transformState.blur}
                />
              </div>
              <div>
                <label htmlFor="">Deshake</label>
                <input
                  type="range"
                  name="deshake"
                  id="deshake"
                  min="0"
                  max="64"
                  onChange={onChange}
                  value={transformState.deshake}
                />
              </div>
              <div>
                <label htmlFor="">Loop</label>
                <input
                  type="range"
                  name="loop"
                  id="loop"
                  min="1"
                  max="10"
                  onChange={onChange}
                  value={transformState.loop}
                />
              </div>
              <div>
                <label htmlFor="">Visual noise</label>
                <input
                  type="range"
                  name="visual-noise"
                  id="visual-noise"
                  min="1"
                  max="100"
                />
              </div>
            </div>
            <div second-effect>
              <div>
                <label htmlFor="">Boomerang</label>
                <select
                  name="startOffset"
                  id="startOffset"
                  className="select-effect">
                  <option value="">startOffset</option>
                  <option value="">1.0</option>
                  <option value="">2.o</option>
                  <option value="">3.0</option>
                  <option value="">4.0</option>
                  <option value="">5.0</option>
                </select>
                <select
                  name=" endOffSet"
                  id=" endOffSet"
                  className="select-effect">
                  <option value=" endOffSet"> endOffSet</option>
                  <option value="">1.0</option>
                  <option value="">2.o</option>
                  <option value="">3.0</option>
                  <option value="">4.0</option>
                  <option value="">5.0</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="">Borders</label>
                <select name="width" id="width" className="select-effect">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
                <select name="color" id="color" className="select-effect">
                  <option value="">red</option>
                  <option value="">green</option>
                  <option value="">blue</option>
                  <option value="">black</option>
                  <option value="">yellow</option>
                </select>
              </div>
              <button className="btn">Lut</button>
              <button
                onClick={handleSubmit}
                disabled={(!cldCloudName, !preset)}>
                Upload
              </button>
            </div>
          </div>
          {/* 
          <label htmlFor="">Cover</label>
          <textarea name="" id="cover" cols="30" rows="10"></textarea>
          <label for="country">Who can view this video</label>
          <select id="country" name="country" className="form-content">
            <option value="public">Public</option>
            <option value="friends">Friends</option>
            <option value="private">Private</option>
          </select>

          <label htmlFor="">Allow users to:</label>
          <div>
            <div className="checked-input">
              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Comment
              </label>

              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Duet
              </label>

              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Stitch
              </label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <label htmlFor="">Run a copy check</label>

            <label className="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <p style={{ color: "grey" }}>
            We'll check your video for potential copyright infringements on used
            sounds. If infringements are found, you can edit the video before
            posting.{" "}
            <a
              href="http://tracy.com"
              style={{ textDecoration: "none", color: "#000" }}>
              Learn more
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Upload;

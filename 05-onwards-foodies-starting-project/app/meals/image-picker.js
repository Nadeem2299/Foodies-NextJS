"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function handlePickImage() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
          {!pickedImage && <p>Please pick an image.</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}


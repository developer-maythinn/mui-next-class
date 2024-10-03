import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/28209792/pexels-photo-28209792/free-photo-of-aerial-view-of-people-at-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27779025/pexels-photo-27779025/free-photo-of-a-man-is-rowing-a-boat-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/28271326/pexels-photo-28271326/free-photo-of-an-empty-road-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];
function SelectedImage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImage = (image) => {
    console.log(image);
    setSelectedImage(image);
  };
  return (
    <>
      <h1>Images</h1>
      <div className="big-image">
        <img src={selectedImage} alt="" />
      </div>
      <div className="small-images-container">
        {images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <div className="small-images">
                <img src={image} alt="" onClick={() => handleImage(image)} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default SelectedImage;

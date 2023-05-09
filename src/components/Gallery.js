import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="pics, pics1">
        <img
          src={require("../assets/img/galerie1.png")}
          height="200px"
          alt="Poulet épicé"
        />
      </div>
      <div className="pics, pics2">
        <img
          src={require("../assets/img/galerie2.png")}
          height="200px"
          alt="Poulet au citron"
        />
      </div>
      <div className="pics, pics3">
        <img
          src={require("../assets/img/galerie3.png")}
          height="200px"
          alt="Blanc de poulet grillé"
        />
      </div>
      <div className="pics, pics4">
        <img
          src={require("../assets/img/galerie4.png")}
          height="200px"
          alt="Poulet rotis"
        />
      </div>
    </div>
  );
};

export default Gallery;

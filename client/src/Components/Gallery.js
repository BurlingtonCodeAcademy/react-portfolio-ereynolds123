import React from "react";

function Gallery(props) {
  return (
    <>
      <div class="responsive">
        <div class="leftHandGallery">
          <div class="gallery">
            <img
              src="/imgs/dadandson.jpg"
              alt="Newborn Baby with father"
              width="600"
              height="400"
            ></img>
            <div class="desc">Serene Father and Son</div>
            <div class="gallery">
              <img
                src="/imgs/sleepingbaby.jpg"
                alt="Yawning Baby"
                width="600"
                height="400"
              ></img>
              <div class="desc">All Tuckered Out</div>
            </div>
          </div>
        </div>
        <div class="leftHandGallery">
          <div class="gallery">
            <img
              src="/imgs/dadandson.jpg"
              alt="Newborn Baby with father"
              width="600"
              height="400"
            ></img>
            <div class="desc">Serene Father and Son</div>
            <div class="gallery">
              <img
                src="/imgs/sleepingbaby.jpg"
                alt="Yawning Baby"
                width="600"
                height="400"
              ></img>
              <div class="desc">All Tuckered Out</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

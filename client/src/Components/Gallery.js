import React from "react";

function Gallery(props) {
  return (
    <>
    <div id="responsiveWrapper">
      <div class="responsive">
        <div class="leftHandGallery">
          <div class="gallery">
            <img
              src="/imgs/dadandson.jpg"
              alt="Newborn Baby with father"
              
            ></img>
            <div class="desc">Serene Father and Son</div>
            <div class="gallery">
              <img
                src="/imgs/sleepingbaby.jpg"
                alt="Yawning Baby"
               
              ></img>
              <div class="desc">All Tuckered Out</div>
            </div>
          </div>
        </div>
        <div class="rightHandGallery">
          <div class="gallery">
            <img
              src="/imgs/babyinhands.jpg"
              alt="Newborn Baby in hands like a nest"
             
            ></img>
            <div class="desc">Baby in a nest</div>
            <div class="gallery">
              <img
                src="/imgs/sleepingbaby.jpg"
                alt="Yawning Baby"
                
              ></img>
              <div class="desc">All Tuckered Out</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Gallery;

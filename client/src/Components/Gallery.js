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
                <img src="/imgs/family.jpg" alt="Pregnant mom and spouse"></img>
                <div class="desc">A Growing Family</div>
              </div>
            </div>
            <div class="gallery">
              <img
                src="/imgs/steth.jpg"
                alt="Stethoscope Photo by Hush Naidoo"
              ></img>
              <div class="desc">Taking Care, Listening</div>
              <div class="gallery">
                <img src="/imgs/sleepingbaby.jpg" alt="Yawning Baby Photo by Kelly Sikkema"></img>
                <div class="desc">All Tuckered Out</div>
              </div>
            </div>
          </div>
          <div class="rightHandGallery">
            <div class="gallery">
              <img
                src="/imgs/babyinhands.jpg"
                alt="Newborn Baby in hands like a nest Photo by Isaac Quesada"
              ></img>
              <div class="desc">Baby in a nest</div>
              <div class="gallery">
                <img
                  src="/imgs/pregnantbelly.jpg"
                  alt="Pregnant woman showing off belly bump Photo by Freddy G"
                ></img>
                <div class="desc">Bumpin' Out</div>
                <div class="gallery">
              <img
                src="/imgs/baby.jpg"
                alt="Newborn Baby Photo by Ashwini Duce"
              ></img>
              <div class="desc">In Her Hands</div>
              <div class="gallery">
                <img src="/imgs/breastfeeding.jpg" alt="breastfeeding mother and baby Photo by Jordan Whitt"></img>
                <div class="desc">Lunch Time</div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

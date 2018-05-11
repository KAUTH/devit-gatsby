import React from 'react';

const PhotoAlbum = () => {
  return (
      <div class="album">
        <div class="block container text-center">
          <div class="block__heading--dark">
            The photo album
          </div>
          <p class="dark">
            We have released the photos of the last DEVit. We have released the photos of the last DEVit. We have released the photos of the last DEVit.
          </p>
        </div>
        <div class="album__row">
          <div class="album__one">
            <img class="album__img" src="/assets/images/new/ph-342x342-1.jpg" alt="" />
          </div>
          <div class="album__one">
            <img class="album__img" src="/assets/images/new/ph-342x342-4.jpg" alt="" />
          </div>
          <div class="album__two">
            <div class="album__cta">
              <div class="album__cta__heading">
                Tag you very much
              </div>
              <div class="album__cta__paragraph">
                Spot your face and tag your friends Spot your face and tag your friends Spot your.
              </div>
              <button class="album__cta__button">Go</button>
            </div>
            <img class="album__img" src="/assets/images/new/ph-683x342-1.jpg" alt="" />
          </div>
        </div>
        <div class="album__row">
          <div class="album__one">
            <img class="album__img" src="/assets/images/new/ph-342x342-3.jpg" alt="" />
          </div>
          <div class="album__two">
            <img class="album__img" src="/assets/images/new/melanie-683x342.jpg" alt="" />
          </div>
          <div class="album__one">
            <img class="album__img" src="/assets/images/new/ph-342x342-2.jpg" alt="" />
          </div>
        </div>
      </div>
  );
};

export default PhotoAlbum;

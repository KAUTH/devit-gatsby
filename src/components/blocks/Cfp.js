import React from 'react';

const CFP = () => {
  return (
    <div class="cfp">
      <div class="cfp__row">
        <div class="container">
          <div class="cfp__row--top-right">
            <div class="block__heading--dark">
              Our speakers
            </div>
            <p class="dark">
              Each year we meticulously vet and select remarkable speakers to deliver the best talks on web development. We are very proud of the quality of the content that we offered over the years and we are happy to share it with you.
            </p>
            <a href="#" class="block__cta">All past speakers</a>
          </div>
          <div class="cfp__row--top-left">
            <div class="cfp__speaker-top">
              <img class="speaker__avatar" src="/assets/images/speakers/2015/Christian_Heilmann.jpg" alt="Speaker one" />
              <div class="speaker__name">
                Christian Heilmann
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cfp__row cfp__row--orange">
        <div class="container">
          <div class="cfp__row--bottom-left">
            <div class="cfp__speaker-bottom">
              <div class="speaker__title">Founder and CEO</div>
              <div class="tags">
                <span class="tag">
                  Frontend
                </span>
                <span class="tag">
                  Backend
                </span>
                <span class="tag">
                  Mobile
                </span>
                <span class="tag">
                  Will work for bananas
                </span>
              </div>
              <div class="speaker__social">
                <a href="#" class="speaker__social__item fab fa-facebook-f"></a>
                <a href="#" class="speaker__social__item fab fa-twitter"></a>
                <a href="#" class="speaker__social__item fab fa-github"></a>
              </div>
            </div>
          </div>
          <div class="cfp__row--bottom-right">
            <div class="block__heading">
              Interested in speaking?
            </div>
            <p class="light">
              Even though we do not have an open call for papers, we are always looking to meet gifted speakers. If you are interested in speaking in the next edition of DEVit, feel free to fill our form
            </p>
            <a href="#" class="block__more-cta">
                Apply to talk
              <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFP;

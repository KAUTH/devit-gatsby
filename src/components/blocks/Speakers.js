import React from 'react';

const Speakers = () => {
  return (
    {% assign speakers = "" | split: "" %}
    {% assign years = include.years | split: ',' %}
    {% for year in years %}
      {% for speaker in site.data.speakers[year].speakers %}
        {% assign speakers = speakers | push: speaker %}
      {% endfor %}
    {% endfor %}

    <div id="speakers" class="speakers-container">
      <div class="container text-center">
        <div class="block__heading--dark">
          Meet our speakers
        </div>
        <p class="dark">
          Each year we meticulously vet and select remarkable speakers to deliver the best talks on web development.
        </p>
      </div>
      <div class="speakers-list">
        {% for speaker in speakers | sort: 'last_name' %}
        <div class="speakers-list__item">
          {% include components/speaker.html speaker=speaker speaker_page=false %}
        </div>
        {% endfor %}
        <div class="speakers-list__item">
          {% include components/speaker-tba.html %}
        </div>
      </div>
    </div>

    {% if site.data.config.isCFPOpen == true %}
    <div class="speakers__cfp">
      <div class="block__heading">
        Call for Papers
      </div>
      <p class="light">
        Be a DEVit speaker, share your experience with hundreds of peers!
      </p>
      <a href="#" class="block__more-cta">
        Apply now
        <i class="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
    {% endif %}
  );
};

export default Speakers;

import React from 'react';

const CFS = () => {
  return (
    <div class="cfs">
      <div class="cfs__container text-center">
        <div class="block__heading--dark">
          Sponsors through the years
        </div>
        <p class="dark">
          The popularity of breakfast foods is a good reason to keep dependable starters, such as eggs, bread and other staples, on hand.
        </p>
        {% include components/icons-stack.html items=site.data.homepage.sponsors %}
        <a href="#" class="block__cta">
          Apply to sponsor
        </a>
      </div>
    </div>
  );
};

export default CFS;

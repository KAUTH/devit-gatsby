import React from 'react';

const Menu = () => {
  return (
    <nav class="main-navbar sticky">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-brand {% if page.url == "/index.html" %}navbar-brand--hidden{% endif %}">
          <a href="/" class="navbar-logo"></a>
          <div class="navbar-date">
            <span class="navbar-date__date">{{site.data.config.date}}</span><br/>
            <span class="navbar-date__place">Thessaloniki, Greece</span>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="main-menu">
            <li>
              <a class="main-menu__link" href="/#about">About</a>
            </li>
            <li>
              <a class="main-menu__link" href="/#speakers">Speakers</a>
            </li>
            <li>
              <a class="main-menu__link" href="/#venue">Venue</a>
            </li>
             <li>
              <a class="main-menu__link" href="/#sponsors">Sponsors</a>
            </li>
            <li>
              <a class="main-menu__link" target="_blank" rel="noopener" href="https://medium.com/devitconf">Blog</a>
            </li>
            {% if site.data.config.tickets.enabled %}
              <li>
                <a target="_blank" rel="noopener" class="main-menu__link--cta cta" href="{{ site.data.config.tickets.url }}">Buy tickets</a>
              </li>
            {% endif %}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

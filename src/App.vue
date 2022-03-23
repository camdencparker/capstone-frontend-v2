<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
      flashMessage: null,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
      this.flashMessage = localStorage.flashMessage;
      localStorage.removeItem("flashMessage");
    },
  },
};
</script>
<template>
  <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-6 col-4"></div>
        <div class="col-xl-8 col-lg-8 d-none d-lg-block">
          <div class="main-menu">
            <nav>
              <ul>
                <li><router-link to="/listings">Listings</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/listings/new">Create Listing</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/conversations">Conversations</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Log In</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/signup">SignUp</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/logout">Log Out</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="mobile-menu-area">
        <div class="mobile-menu">
          <nav id="mobile-menu-active">
            <ul class="menu-overflow">
              <li><router-link to="/listings">Listings</router-link></li>
              <li v-if="isLoggedIn"><router-link to="/listings/new">Create Listing</router-link></li>
              <li v-if="isLoggedIn"><router-link to="/conversations">Conversations</router-link></li>
              <li v-if="!isLoggedIn"><router-link to="/login">Log In</router-link></li>
              <li v-if="!isLoggedIn"><router-link to="/signup">SignUp</router-link></li>
              <li v-if="isLoggedIn"><router-link to="/logout">Log Out</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <router-view />
  <footer class="footer-area bg-gray pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-4">
          <div class="copyright mb-30">
            <div class="footer-logo">
              <a href="index.html">
                <img alt="" src="/assets/img/logo/logo.png" />
              </a>
            </div>
            <p>
              © 2021
              <a href="#">Flone</a>
              .
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-4">
          <div class="footer-widget mb-30 ml-30">
            <div class="footer-title">
              <h3>ABOUT US</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li><a href="about.html">About us</a></li>
                <li><a href="#">Store location</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="#">Orders tracking</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-4">
          <div class="footer-widget mb-30 ml-50">
            <div class="footer-title">
              <h3>USEFUL LINKS</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Support Policy</a></li>
                <li><a href="#">Size guide</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="footer-widget mb-30 ml-75">
            <div class="footer-title">
              <h3>FOLLOW US</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="footer-widget mb-30 ml-70">
            <div class="footer-title">
              <h3>SUBSCRIBE</h3>
            </div>
            <div class="subscribe-style">
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <div id="mc_embed_signup" class="subscribe-form">
                <form
                  id="mc-embedded-subscribe-form"
                  class="validate"
                  novalidate=""
                  target="_blank"
                  name="mc-embedded-subscribe-form"
                  method="post"
                  action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                >
                  <div id="mc_embed_signup_scroll" class="mc-form">
                    <input
                      class="email"
                      type="email"
                      required=""
                      placeholder="Enter your email here.."
                      name="EMAIL"
                      value=""
                    />
                    <div class="mc-news" aria-hidden="true">
                      <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                    </div>
                    <div class="clear">
                      <input
                        id="mc-embedded-subscribe"
                        class="button"
                        type="submit"
                        name="subscribe"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

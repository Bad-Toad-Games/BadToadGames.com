<template>
  <nav class="desktop-view">
    <router-link to="/"> <fa class="home-button" icon="home" /> </router-link>
    <router-link to="/projects">PROJECTS</router-link>
    <router-link to="/contributors">CONTRIBUTORS</router-link>
    <router-link to="/tabletop">TABLETOP GAMES</router-link>
    <router-link to="/games">VIDEO GAMES</router-link>
    <a href="https://bad-toad-games-llc.myspreadshop.com/">MERCH</a>
  </nav>
  <nav class="mobile-view">
    <router-link to="/nav">
      <fa
        v-if="this.hideNavButton() === false"
        class="mobile-list"
        icon="list"
      />
    </router-link>
  </nav>
  <router-view />
  <nav class="footer">
    <div class="socials">
      <a href="https://www.youtube.com/channel/UC9vWLWdzsHvUDAR1EjziV4w">
        <fa :icon="['fab', 'youtube']" />
      </a>
      <a href="https://twitter.com/bad_toad_games">
        <fa :icon="['fab', 'twitter']" />
      </a>
      <a href="https://discord.com/invite/3SqXXEaSCn">
        <fa :icon="['fab', 'discord']" />
      </a>
      <a href="https://www.facebook.com/BadToadGames">
        <fa :icon="['fab', 'facebook']" />
      </a>
    </div>
    <div class="links">
      <router-link class="router-link" to="/join">Join the team</router-link>
      <span style="color: #a1af69">•</span>
      <router-link class="router-link" to="/support"
        >Support the Dream</router-link
      >
      <span style="color: #a1af69">•</span>
      <router-link class="router-link" to="/contact">Contact us</router-link>
      <br />
      <router-link class="router-link" to="/newsletter">Newsletter</router-link>
    </div>
    <br />
    © 2022 Bad Toad Games LLC, All Rights Reserved
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
    hideNavButton() {
      if (window.location.href.includes("/nav")) {
        if (document.getElementsByClassName("footer")[0]) {
          document.getElementsByClassName("footer")[0].style.display = "none";
        }
        return true;
      } else {
        if (document.getElementsByClassName("footer")[0]) {
          document.getElementsByClassName("footer")[0].style.display = "flex";
        }
        return false;
      }
    },
  },
};
</script>

<style>
/*  Apply font to all text */
* {
  font-family: "Source Code Pro", monospace;
}

.footer {
  color: white;
  background-color: #484e30;
  display: flex;
  flex-direction: column;
}

.socials {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.socials > a {
  color: #adb893;
  background-color: white;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.socials > a:hover {
  color: white;
  background-color: #adb893;
}

.links > .router-link:hover {
  color: #aab893;
}

.socials > a > svg {
  width: 100%;
  height: 100%;
}

body {
  text-align: center; /* Remove this later and replace with flexbox */
  /* Remove border around entire page */
  margin: 0;

  height: 100vh;
}

#app {
  height: 100vh;
}
/* Navbar */

nav {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
  background-color: #484e30;

  z-index: 1;
}

nav a {
  color: #e9e4d6;
  text-decoration: none;
  font-size: 15px;

  margin: 0 10px;
  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.2) translateY(-2px);
}

.home-button {
  margin-right: 10px;
  height: 25px;
}

.mobile-view {
  display: none;
}

.mobile-menu {
  display: flex;

  flex-direction: column;
}

.mobile-menu > a {
  color: #e9e4d6;
  text-decoration: none;
  font-size: 1.5em;

  margin: 10px 0;
  transition: 0.2s;
}

/* If screen is smaller than 670px in width change to mobile view */

@media screen and (max-width: 670px) {
  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: flex;
    justify-content: left;
  }

  .mobile-list {
    height: 30px;
    color: white;

    transition: 0.2s;
  }

  /* Remove background color from nav */

  nav {
    background-color: transparent;
  }
}

/* Change color of the button leading to the current active page*/
nav a.router-link-exact-active {
  color: #adb893;
}

/* Set background image */

body {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Import fonts */

/* Baseline */
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
/* 
    font-family: 'Source Code Pro', monospace; 
*/

/* Title */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
/* 
    font-family: 'Bebas Neue', cursive;
*/

/* Paragraph */
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap");
/* 
    font-family: 'Kanit', sans-serif;
*/

/* Signature */
@import url("https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap");
/* 
    font-family: 'Oooh Baby', cursive;
*/
</style>

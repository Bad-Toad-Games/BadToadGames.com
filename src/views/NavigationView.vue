<template>
  <div class="backDrop"></div>
  <div class="mobile-menu">
    <div @click="this.navigate('home')" class="buttons">
      <fa class="home-button" icon="home" />
    </div>
    <div @click="this.navigate('projects')" class="buttons">PROJECTS</div>
    <div @click="this.navigate('contributors')" class="buttons">
      CONTRIBUTORS
    </div>
    <div @click="this.navigate('tabletop')" class="buttons">TABLETOP GAMES</div>
    <div @click="this.navigate('games')" class="buttons">VIDEO GAMES</div>
    <div @click="this.navigate('merch')" class="buttons">MERCH</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navigate(page) {
      if (page === "home") {
        this.$router.push("/");
      } else if (page === "merch") {
        window.location.href = "https://bad-toad-games-llc.myspreadshop.com/";
      } else if (page === "tabletop") {
        this.$router.push("/tabletop");
      } else if (page === "games") {
        this.$router.push("/games");
      } else if (page === "projects") {
        this.$router.push("/projects");
      } else if (page === "contributors") {
        this.$router.push("/contributors");
      }
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  display: flex;

  flex-direction: column;
}

.mobile-menu > div {
  color: #e9e4d6;
  text-decoration: none;
  font-size: 1.5em;

  margin: 10px 0;
  transition: 0.2s;

  opacity: 0%;
  animation: text 1s ease-in-out 0s forwards;
}

.backDrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #484e30;
  z-index: -1;
  animation: backdrop 1s ease-in-out 0s forwards;
}

@keyframes backdrop {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}

@keyframes text {
  0% {
    opacity: 0%;
  }
  70% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>

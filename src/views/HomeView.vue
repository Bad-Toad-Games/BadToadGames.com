<template>
  <div class="page">
    <h2>WHO WE ARE</h2>
    <p>
      We are “The Brothers Toad”. Brothers, fathers, and gamers. After years of
      gaming in the tabletop and digital areas, we decided to throw our hat into
      the ring and bring our ideas to life.
    </p>
    <h2>OUR MISSION</h2>
    <p>
      We want to create both tabletop and digital games that bring a spark of
      something special to the lives of everyone that plays them, whether that’s
      a Game Master breaking down due to a Rogue’s actions, or simply escaping
      into a digital world of adventure. We want to help make memories.
    </p>
    <p>
      Please follow us on the sites below for updates. Thank you for the
      interest and support. The Brothers of Bad Toad
      <br />
      <span class="signature">J & C</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
  margin-bottom: 0;

  color: #8a965c;
  text-shadow: 0px -1px 0 #000000;
}

p {
  line-height: 26px;
  font-family: "Kanit", sans-serif;
  text-align: center;
  border-radius: 10px;

  background-color: #484e30;
  color: #e9e4d6;

  max-width: 300px;
  padding: 25px;
}

.signature {
  font-family: "Oooh Baby", cursive;
  font-size: 30px;
}

@media screen and (max-width: 670px) {
  p {
    max-width: 60%;
  }
}
</style>

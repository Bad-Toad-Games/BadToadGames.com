<template>
  <div class="page">
    <h2>ARTISTS</h2>
    <p>
      Logo made by
      <a
        style="color: #ac63ff"
        href="https://ntinaart8.wixsite.com/ntinaartportfolio"
        >Ntina_art</a
      >
      <br />
      Background made by
      <a style="color: #13aff0" href="https://leszekwo.artstation.com/"
        >Leszek Woźniak</a
      >
    </p>
    <h2>PROGRAMMERS</h2>
    <p>
      Website designed and coded by
      <a style="color: #ac63ff" href="https://stianwiu.me">Stian Wiu</a>
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

  margin-bottom: 15%;
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

  max-width: 400px;
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

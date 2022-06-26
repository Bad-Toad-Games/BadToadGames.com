<template>
  <div class="page">
    <h2>PAGE STILL UNDER CONSTRUCTION</h2>
    <p>
      While we here at Bad Toad Games, all two of us, appreciate your
      enthusiasm, this page isn’t quite up yet. Rest assured we are working on
      it just as fast as the Toads let us. To stay up to date with our progress
      and products please follow us at the links below.
    </p>
    <p>
      Thank you for the interest and support, you curious camper you. The
      Brothers of Bad Toad
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

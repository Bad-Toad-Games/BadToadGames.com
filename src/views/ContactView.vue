<template>
  <div class="page">
    <h2>QUESTIONS?</h2>
    <p>
      For general questions please email us at
      <a style="color: #9d8b34" href="mailto:General@BadToadGames.com"
        >General@BadToadGames.com</a
      >
      and we will get back to you as soon as we get away from the Toads.
    </p>
    <h2>PRODUCT ISSUES?</h2>
    <p>
      If you have issues with the quality of any of our products that you’ve
      purchased from us, please contact us at
      <a style="color: #9d8b34" href="mailto:Products@BadToadGames.com"
        >Products@BadToadGames.com</a
      >
      and we will get the Toads back in line and work to correct the issue.
      Please provide proof of purchase and pictures of the issue if possible.
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

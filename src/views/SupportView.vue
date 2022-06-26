<template>
  <div class="page">
    <h2>GENERAL DONATIONS</h2>
    <p>
      If you’ve been inspired by what you’ve seen so far, be it our dream of
      helping Gamers make memories, the products we’re working on, or just cause
      you want to feed the Toads so they don’t eat us, then this is for you. We
      accept donations through PayPal. Rest assured that any money you donate to
      us goes towards developing our products and improving our ability to work
      with you.
      <br />
      <br />
      <a style="color: #9d8b34" href="https://paypal.me/BadToadGamesLLC"
        >paypal.me/BadToadGamesLLC</a
      >
    </p>
    <h2>INVESTORS</h2>
    <p>
      If you’re a prospective investor and want to discuss possibilities with
      us, please email us at
      <a style="color: #9d8b34" href="mailto:Invest@BadToadGames.com"
        >Invest@BadToadGames.com</a
      >, we’ll consult the Toads and arrange a time to discuss any offers or
      answer questions.
    </p>
    <h2>STREAMERS</h2>
    <p>
      If you want to create a streaming partnership with us, please email
      <a style="color: #9d8b34" href="mailto:Streams@BadToadGames.com"
        >Streams@BadToadGames.com</a
      >, include your streaming sites/name so the Toads can review them.
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

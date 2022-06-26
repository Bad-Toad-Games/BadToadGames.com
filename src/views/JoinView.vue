<template>
  <div class="page">
    <h2>CURRENT OPENINGS</h2>
    <p>
      While your enthusiasm to join our small team is greatly appreciated, we
      are not currently hiring. If you’d like to be considered for a position
      later, please email
      <a style="color: #9d8b34" href="mailto:Employment@BadToadGames.com"
        >Employment@BadToadGames.com</a
      >
      and if the Toads pick you, we’ll contact you. Please include your resume
      and example work (if applicable)
    </p>
    <h2>COMMISSIONED WORK</h2>
    <p>
      If you’re an artist, model designer, or just looking for commissioned
      based work and think we’d be a good fit please email
      <a style="color: #9d8b34" href="mailto:Commissions@BadToadGames.com"
        >Commissions@BadToadGames.com</a
      >, include a sample of your work and if the Toads like what they see,
      we’ll contact you.
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

<template>
  <div class="page">
    <h2>PAGE STILL NOT FINISHED</h2>
    <div class="group">
      <h3 style="color: #adae69">Mercs, Mages and Monsters</h3>
      <div class="specifications">
        <div>
          <div style="color: #8a965c">CATEGORY</div>
          <div style="color: #adae69">Tabletop RPG</div>
        </div>
        <div>
          <div style="color: #8a965c">RELEASE DATE</div>
          <div style="color: #adae69">TBA</div>
        </div>
      </div>
      <br />
      <span>
        A Tabletop Role Playing Game (TTRPG) based in medieval fantasy. Your
        homeland is in shambles; the elite and their armies snarl over land and
        resources like dogs over scraps of meat. The influence of the Guilds
        grows ever stronger in a world where the only true king is coin. Not
        every threat is obvious, and what you don’t know could very well be what
        kills you. Join a guild, or create your own; help crown an Emperor, or
        remove them permanently. The choices, and consequences, are yours.
        <br />
        <br />
        3d8 system inspired by themes in Symbaroum/Dark Heresy and others
      </span>
    </div>
    <h2>PLANNED</h2>
    <div class="group">
      <h3 style="color: #adae69">Mercs, Mages, and Monsters – Guild Master</h3>
      <div class="specifications">
        <div>
          <div style="color: #8a965c">PLATFORM</div>
          <div style="color: #adae69">Mobile</div>
        </div>
        <div>
          <div style="color: #8a965c">RELEASE DATE</div>
          <div style="color: #adae69">TBA</div>
        </div>
      </div>
      <br />
      <span>
        Set in the same homeland as Mercs, Mages, and Monsters – Tabletop, this
        game puts control of your own Guild in your hands. Complete the
        contracts you choose to gain wealth, reputation, and steer the course of
        events. Decide to work for or against the Consortium and other Guilds.
        Build your Guild by recruiting new members with skills you need.
        Customize your own Guild name, coin, and colors. The fate of the land is
        up to you.
      </span>
    </div>
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

.specifications {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
}

.group {
  background-color: #484e30;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  color: #e9e4d6;
  padding: 20px;
  margin-top: 30px;

  border-radius: 10px;
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
  .group {
    max-width: 80%;
  }
}
</style>

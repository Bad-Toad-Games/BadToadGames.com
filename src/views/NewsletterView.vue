<template>
  <div class="page">
    <h2>NEWSLETTER</h2>
    <p>
      Want to receive news on our progress right in your inbox? Enter your email
      below and we’ll send you our newsletter… just as soon as we teach the
      Toads to use keyboards.
    </p>
    <input v-model="email" placeholder="your@email.com" />
    <button @click="this.subscribe()">Subscribe</button>
    <p>
      Rest assured that we hate junk email just as much as you, and the Toads
      hate having to sort it, so we will never give/sell your information to
      Third parties without your consent.
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
const axios = require("axios");
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      email: "",
      ip: "",
    };
  },
  async created() {
    const res = await axios.get("https://geolocation-db.com/json/");
    this.ip = res;
  },
  methods: {
    subscribe() {
      console.log("subscribing to newsletter using email: " + this.email);
      // Check if Email includes @
      if (this.email === "") {
        alert("Please enter an email address");
      } else if (this.email.indexOf("@") === -1) {
        alert("Please enter a valid email address");
      } else {
        axios({
          method: "post",
          url: "http://localhost:3001/api/newsletter/register",
          // url: "https://badtoadgames.com/api/newsletter/register",
          data: {
            ["email"]: this.email.toLocaleLowerCase(),
            ["ip"]: JSON.stringify(this.ip),
          },
        }).then((response) => {
          if (response.data === "Email already in database") {
            alert("Email already in database");
            window.location.replace("/");
          } else {
            alert("Thank you for subscribing to our newsletter!");
            window.location.replace("/");
          }
        });
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 200px;
  height: 30px;
  border: 1px solid #adb893;
  border-radius: 5px;
  text-align: center;
  pad: 5px;

  margin-bottom: 20px;
}

button {
  width: 200px;
  height: 30px;
  border: 1px solid #adb893;
  border-radius: 5px;
  text-align: center;
  pad: 5px;
}
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

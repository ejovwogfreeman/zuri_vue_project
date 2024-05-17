const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      gender: "male",
      dob: "Thu Aug 13 1970",
    };
  },
  methods: {
    async getRandomUser() {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      const result = data.results[0];
      console.log(result);

      this.firstName = result.name.first;
      this.lastName = result.name.last;
      this.email = result.email;
      this.picture = result.picture.large;
      this.gender = result.gender;
      this.dob = new Date(result.dob.date).toDateString();
    },
  },
});

app.mount("#app");

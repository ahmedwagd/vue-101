const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "the final Empire",
      author: "Ahmed Wagdy",
      age: 43,
      x: 0,
      y: 0,
    };
  },
  methods: {
    handelMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handelEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    changeTitle() {
      this.title = "Words of Re";
    },
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
      console.log(this.age);
    },
  },
});
app.mount("#app");

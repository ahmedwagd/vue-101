const app = Vue.createApp({
  data() {
    return {
      url: "http://www.google.com",
      showBooks: true,
      books: [
        {
          title: "the final Empire",
          author: "Ahmed Wagdy",
          age: 43,
          img: "./assets/1.jpg",
          isFav: false,
        },
        {
          title: "King of sadness",
          author: "Wagdy",
          age: 20,
          img: "./assets/2.jpg",
          isFav: false,
        },
        {
          title: "sadness",
          author: "Eyad",
          age: 20,
          img: "./assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    handelFav(e) {
      e.isFav = !e.isFav;
      // e.target.parentNode.parentNode.classList.toggle("fav");
    },
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
      console.log(this.age);
    },
  },
  computed: {
    filterBooks() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});
app.mount("#app");

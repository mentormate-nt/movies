<template>
  <div
    class="p-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12"
  >
    <div
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <card :movieData="movie" />
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      nextMovieIds: [],
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    onScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.nextMovieIds.forEach((movieId) => {
            axios
              .get("http://www.omdbapi.com/?i=" + movieId + "&apikey=2cbab1d9&")
              .then((response) => {
                this.$store.dispatch("addMovie", { movie: response.data });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
      };
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll(); // needed for initial loading on page
    });

    if (this.$store.state.movies.length < 7) {
      this.nextMovieIds = [
        "tt0317919",
        "tt0298203",
        "tt0410097",
        "tt1057500",
        "tt0120591",
        "tt1504320",
      ];
    } else {
      this.nextMovieIds = [];
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

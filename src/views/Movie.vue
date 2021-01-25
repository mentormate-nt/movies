<template>
  <div
    class="mx-auto p-10"
  >
    <movie-component :movie-data=movie></movie-component>
  </div>
</template>

<script>
import MovieComponent from "../components/Movie.vue";

export default {
  name: "Movie",
  components: { MovieComponent },
  methods: {
  },
  computed: {
    movie() {
      return this.$store.getters.getMovieById(this.$route.params.movieId);
    },
  },
  mounted() {
  },
};
</script>

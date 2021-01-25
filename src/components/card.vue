<template>
  <div class="rounded overflow-hidden shadow-lg">
    <router-link :to="{ name: 'Movie', params: { movieId: movie.imdbID } }">
      <img
        class="object-cover h-48 w-full"
        :src="movie.Poster"
        alt="Movie Cover"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Actors</div>
        <p class="text-gray-700 text-base line-clamp-2">
          {{ movie.Actors }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          v-for="(genre, index) in movieGenres"
          :key="`genre-${index}`"
        >
          {{ genre }}
        </span>
      </div>
    </router-link>
    <div class="text-right pr-10 pb-2" v-if="isUserLoggedIn">
      <button @click="toggleLike()" class="mr-2">
        <i class="fa-thumbs-up" :class="{ fas: isLiked, far: !isLiked }"></i>
      </button>
      <button v-on:click="toggleBookmark()">
        <i
          class="fa-bookmark"
          :class="{ fas: isBookMarked, far: !isBookMarked }"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["movieData"],
  computed: {
    isUserLoggedIn() {
      return this.$store.state.user.is_logged_in;
    },
    movie() {
      return this.movieData;
    },
    isLiked() {
      return this.movieData.likes > 0;
    },
    isBookMarked() {
      return this.movieData.bookmark;
    },
    movieGenres() {
      return this.movieData.Genre.split(",");
    },
  },
  methods: {
    toggleLike() {
      return this.$store.dispatch("updateMovieLikes", {
        imdbID: this.movie.imdbID,
      });
    },
    toggleBookmark() {
      return this.$store.dispatch("updateMovieBookmark", {
        imdbID: this.movie.imdbID,
      });
    },
  },
};
</script>

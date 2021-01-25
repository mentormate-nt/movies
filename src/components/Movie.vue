<template>
  <div
    class="max-w-md w-full lg:flex mx-auto"
    :key="movieData.likes + movieData.bookmark"
  >
    <div
      class="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      v-bind:style="{ 'background-image': 'url(' + movieData.Poster + ')' }"
      title="Woman holding a mug"
    ></div>
    <div
      class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-black font-bold text-xl mb-2">
          {{ movieData.Title }}
        </div>
        <p class="text-grey-darker text-base">
          {{ movieData.Plot }}
        </p>
      </div>
      <div class="flex items-center mx-auto">
        <div class="text-sm">
          <p class="text-black leading-none">Language: {{ movieData.Language }}</p>
          <p class="text-grey-dark">Release date: {{ movieData.Released }}</p>
        </div>
      </div>
      <div class="text-right pb-2" v-if="isUserLoggedIn">
        <div class="mt-4 text-center">
          <button v-on:click="toggleLike()" class="mr-2">
            <i id="isLiked"
              class="far fa-thumbs-up"
            ></i>
          </button>
          <button v-on:click="toggleBookmark()">
            <i
              id="isBookmarked"
              class="far fa-bookmark"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "Movie",
  props: ["movieData"],
  data() {
    return {
      isUserLoggedIn: this.$store.getters.getLoggedInUser,
    };
  },
  computed: {
    isLiked() {
      return this.movieData.likes > 0;
    },
    isBookMarked() {
      return this.movieData.bookmark;
    },
  },
  methods: {
    toggleLike() {

      if(this.movieData.likes == 0){
        $('#isLiked').removeClass('far');
        $('#isLiked').addClass('fas');

        this.movieData.likes+1;
      }else{
        $('#isLiked').removeClass('far');
        $('#isLiked').addClass('fas');
      }

    },
    toggleBookmark() {
      if(this.movieData.bookmark == 0){
        $('#isBookmarked').removeClass('far');
        $('#isBookmarked').addClass('fas');

        this.movieData.bookmark+1;
      }else{
        $('#isBookmarked').removeClass('far');
        $('#isBookmarked').addClass('fas');
      }
    },
  },
};
</script>

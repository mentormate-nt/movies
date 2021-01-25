import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    movies: [],
    user: {}
  },
  mutations: {
    setMovie(state, {movie}) {
      movie.likes = 0;
      movie.bookmark = 0;
      state.movies.push(movie);
    },
    toggleLike(state, {index}) {
      var cloning = {...state.movies[index]};

      cloning.likes == 0 ? cloning.likes = 1 : cloning.likes--;
      state.movies[index] = cloning;
    },
    toggleBookMark(state, {index}) {
      var cloning = {...state.movies[index]};

      cloning.bookmark == 1 ? cloning.bookmark = 0 : cloning.bookmark = 1;
      state.movies[index] = cloning;
    },
    setAuthenticatedUser(state) {
      state.user.is_logged_in = true;
    },
    logoutUser(state) {
      state.user.is_logged_in = false ;
      state.movies = [];
    },
    updateLoggedUserProfile(state, payload) {
      state.user.email = payload.email;
      state.user.name = payload.name;
    }
  },
  actions: {
    updateMovieLikes({state, commit}, payload) {
      state.movies.map(function(item, index) {
          if(item.imdbID === payload.imdbID) {
            commit('toggleLike', {index});
          }
      });
    },
    updateMovieBookmark({state, commit}, payload) {
      state.movies.map(function(item, index) {
          if(item.imdbID === payload.imdbID) {
            commit('toggleBookMark', {index});
          }
      });
    },
    addMovie({commit}, payload) {
      commit('setMovie', payload);
    },
    logUser({commit}) {
      commit('setAuthenticatedUser');
    },
    logoutUser({commit}) {
      commit('logoutUser');
    },
    updateUser({commit}, payload) {
      commit('updateLoggedUserProfile', payload);
    }
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.imdbID == id)
    },
    getLoggedInUser: (state) => {
      return state.user;
    },
  },
  modules: {

  }
})
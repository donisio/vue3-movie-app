<template>
  <div class="container">
    <div :class="{ 'no-result': !movies.length }" class="inner">
      <Loader v-if="loading" />
      <div class="message" v-if="message">
        {{ message }}
      </div>
      <div v-else="" class="movies">
        <Movieitem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Movieitem from '~/components/Movieitem';
import Loader from '~/components/Loader';
import { mapState } from 'vuex';

export default {
  components: {
    Movieitem,
    Loader,
  },
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    ...mapState('movie', [
            'movies',
            'message',
            'loading',
        ]),
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 24px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>

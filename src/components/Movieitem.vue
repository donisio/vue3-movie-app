<template>
  <div :style="{ background: `url(${movie.Poster})` }" class="movie">
    <Loader v-if="imageLoading" :size="1.5" absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
        <div class="title">
          {{ movie.Title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader';
export default {
  components:{
    Loader,
  },
  props: {
    movie: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data(){
    return {
      imageLoading: true
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    async init(){
      if(!this.movie.Poster || this.movie.Poster === 'N/A'){
        this.imageLoading = false;
      } else {
        await this.$loadImage(this.movie.Poster);
        this.imageLoading = false;
      }
   }
  }
};
</script>
<style lang="scss" scoped>
@import '~/scss/main';
.movie {
  $width: 168px;
  width: $width;
  height: calc($width * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .info {
    background-color: rgba($black, 0.3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }

  .year {
    color: $primary;
  }
  .title {
    color: $white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

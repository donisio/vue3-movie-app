<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" :class="{active: isMatch(nav.path)}" class="nav-link" active-class="active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div class="user" @click="toAbout">
      <img :src="image" :alt="name">
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import Logo from './Logo';
import { mapState } from 'vuex'
export default {
  components: {
    Logo,
    RouterLink
},
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988',
          path: /^\/movie\//
        },
        {
          name: 'About',
          href: '/about',
        },
      ],
    };
  },
  methods:{
    isMatch( patten ){
      if(!patten) return false;
      return patten.test( this.$router.fullPath)
    },
    toAbout(){
      console.log('CLICK');
      this.$router.push('/about')
    }
  },
  computed: {
    ...mapState('about', [
            'image',
            'name',
        ]),
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    margin: 0 40px;
  }
  .user{
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top:0;
    bottom: 0;
    right: 40px;
    margin: auto;
    &:hover{
      background-color: darken($gray-200,10%);
    }
    img {
      width: 100%;
    }
  }

  @include media-breakpoint-down(sm){
    .nav {
      display: none;
    }
  }
}
</style>

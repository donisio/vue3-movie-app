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
  </header>
</template>

<script>
import Logo from './Logo';
export default {
  components: {
    Logo,
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
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin: 0 40px;
  }
}
</style>

<template>
  <Header></Header>
  <RouterView> </RouterView>
  <Footer />
</template>

<script>
import Header from '~/components/Header';
import Footer from './components/Footer';
export default {
  data() {},
  components: {
    Header,
    Footer,
  },
};
</script>
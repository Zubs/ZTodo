<template>
  <v-app>
    <Nav></Nav>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Nav,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

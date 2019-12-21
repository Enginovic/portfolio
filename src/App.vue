<template>
  <v-app>
    <v-content>
      <hero></hero>
      <about></about>
    </v-content>
  </v-app>
</template>

<script>
import Hero from './components/Hero.vue';
import About from './components/About.vue';

export default {
  name: 'App',

  components: {
    'hero': Hero,
    'about': About
  }
};
</script>

<style lang="scss" src="./app.scss"></style>
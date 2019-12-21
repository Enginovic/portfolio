<template>
  <v-app>
    <v-content>
      <hero></hero>
      <about></about>
      <experience></experience>
    </v-content>
  </v-app>
</template>

<script>
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',

  components: {
    'hero': Hero,
    'about': About,
    'experience': Experience
  }
};
</script>

<style lang="scss" src="./app.scss"></style>
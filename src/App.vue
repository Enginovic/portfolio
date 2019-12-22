<template>
  <v-app>
    <v-content>
      <hero></hero>
      <about></about>
      <experience></experience>
      <education></education>
    </v-content>
  </v-app>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import About from '@/components/About/About.vue';
import Experience from '@/components/Experience/Experience.vue';
import Education from '@/components/Education/Education.vue';

export default {
  name: 'App',

  components: {
    'hero': Hero,
    'about': About,
    'experience': Experience,
    'education': Education
  }
};
</script>

<style lang="scss" src="@/app.scss"></style>
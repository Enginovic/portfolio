<template>
  <v-app>
    <v-content>
      <hero></hero>
      <about></about>
      <experience></experience>
      <education></education>
      <skills></skills>
    </v-content>
  </v-app>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import About from '@/components/About/About.vue';
import Experience from '@/components/Experience/Experience.vue';
import Education from '@/components/Education/Education.vue';
import Skills from '@/components/Skills/Skills.vue';

export default {
  name: 'App',

  components: {
    'hero': Hero,
    'about': About,
    'experience': Experience,
    'education': Education,
    'skills': Skills
  }
};
</script>

<style lang="scss" src="@/app.scss"></style>
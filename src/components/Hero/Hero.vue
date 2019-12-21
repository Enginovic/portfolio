<template>
  <v-parallax
    dark
    src="@/assets/material2.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center hero" cols="12">
        <img src="@/assets/engin.jpg" class="hero__image" />
        <h1 class="display-1 font-weight-thin mb-4">Engin Sasmaz</h1>
        <h4 class="subheading">Front End / Webdeveloper</h4>
        <div class="hero__subtitle-2">Freelancer</div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss" src="@/components/Hero/hero.scss"></style>

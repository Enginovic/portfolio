<template>
  <v-parallax
    dark
    src="../assets/material2.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center hero" cols="12">
        <img src="../assets/engin.jpg" class="hero__image" />
        <h1 class="display-1 font-weight-thin mb-4">Engin Sasmaz</h1>
        <h4 class="subheading">Front End / Webdeveloper</h4>
        <div class="hero__subtitle-2">Freelancer</div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'Hero',
  data: () => ({

  }),
  methods: {
    //
  }
}
</script>

<style scoped lang="scss">
.hero {
  z-index: 999;
}

.hero__image {
  height: 150px;
  width: 150px;
  border-radius: 150px;
  object-fit: cover;
  object-position: top;
}

.hero__subtitle-2 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.v-parallax__content {
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,.3);
  }
}
</style>

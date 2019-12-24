<template>
  <div>
    <v-container pt-8 pb-8>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Referentie</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <vueper-slides 
            class="no-shadow" 
            fixed-height="300px"
            :visible-slides="isMobile() ? 1 : 3" 
            :slide-ratio="1/4" 
            :dragging-distance="70" 
            :bullets="false"
            :autoplay="true"
            :arrows="false"
            :speed="7000"
          >
            <vueper-slide 
              v-for="(reference, index) in references" 
              :key="`reference-${index}`"
              :title="reference.name"
            >
            <template v-slot:content>
              <div class="vueperslide__content--wrapper">
                <v-row class="vueperslide__content" no-gutters>
                  <v-col>
                    <div class="vueperslide__name">{{ reference.name }}</div>
                    <div class="vueperslide__title">{{ reference.title }}</div>
                    <div class="vueperslide__text">{{ reference.text }}</div>
                  </v-col>
                </v-row>
              </div>
            </template>
            </vueper-slide>
          </vueper-slides>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/References/References.js"></script>
<style scoped lang="scss" src="@/components/References/references.scss"></style>
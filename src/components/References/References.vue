<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Referentie</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <carousel
            autoplay
            :perPage="1"
            :perPageCustom="[[768, 3]]"
            :autoplayTimeout="7000"
            :minSwipeDistance="100"
          >
            <slide
              v-for="(reference, index) in references" 
              :key="`reference-${index}`"
            >
              <div class="slide">
                <div class="slide__name">{{ reference.name }}</div>
                <div class="slide__title">{{ reference.title }}</div>
                <div class="slide__text">{{ reference.text }}</div>
              </div>
            </slide>
          </carousel>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/References/References.js"></script>
<style scoped lang="scss" src="@/components/References/references.scss"></style>
<template>
  <div>
    <v-container pt-8 pb-8>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Opleiding</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          cols="12" 
          sm="12" 
          md="4"
          v-for="(education, index) in educations" 
          :key="`education-${index}`"
          class="education text-center"
        >
          <h3 class="schoolName">{{ education.schoolName }}</h3>
          <div class="study">{{ education.study }}</div>
          <div class="period">{{ education.period }}</div>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/Education/Education.js"></script>
<style scoped lang="scss" src="@/components/Education/education.scss"></style>
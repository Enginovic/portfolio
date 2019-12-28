<template>
  <div class="gray-background">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Ervaring</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          cols="12" 
          sm="12" 
          v-for="(experience, index) in experiences" 
          :key="`experience-${index}`"
          class="experience"
        >
          <v-row>
            <v-col cols="12" sm="12" md="2">
              <h3 class="companyName">
                <a :href="experience.link" target="_blank">
                  {{ experience.companyName }}
                </a>
              </h3>
            </v-col>
            <v-col cols="12" sm="12" md="2">
              <div class="function">{{ experience.function }}</div>
              <div class="period">{{ experience.period }}</div>
            </v-col>
            <v-col cols="12" sm="12" md="8">
              <p>{{ experience.activity }}</p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/Experience/Experience.js"></script>
<style scoped lang="scss" src="@/components/Experience/experience.scss"></style>
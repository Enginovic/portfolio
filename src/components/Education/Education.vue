<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Opleiding</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row>
            <v-col 
              cols="12" 
              sm="12" 
              :md="education.md"
              v-for="(education, index) in educations" 
              :key="`education-${index}`"
              class="education"
            >
              <h3 class="schoolName">{{ education.schoolName }}</h3>
              <div class="study">{{ education.study }}</div>
              <div class="period">{{ education.period }}</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <v-row>
            <v-col cols="12">
              <h3 class="schoolName">Extra onderwijs</h3>
              <div class="extras">
                <ul v-for="(extra, index) in extras" :key="`extra-${index}`">
                  <li>{{ extra }}</li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/Education/Education.js"></script>
<style scoped lang="scss" src="@/components/Education/education.scss"></style>
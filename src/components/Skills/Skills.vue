<template>
  <div class="gray-background">
    <v-container pt-8 pb-8>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Skills</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <h2 class="elementSubTitle">Persoonlijke skills</h2>
          <v-row class="personalSkills">
            <v-col cols="12" sm="12" md="6" v-for="(personalSkill, index) in personalSkills" :key="`personalSkill-${index}`" class="personalSkill">
              {{ personalSkill }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <h2 class="elementSubTitle">Software kennis</h2>
          <v-row class="softwareSkills">
            <v-col cols="12" v-for="(softwareSkill, index) in softwareSkills" :key="`softwareSkill-${index}`" class="softwareSkill">
              <div class="softwareSkill__name">{{ softwareSkill.name }}</div>
              <div class="softwareSkill__bar">
                <span class="softwareSkill__percentage" :style="{width: softwareSkill.percentage}">
                  {{ softwareSkill.percentage }}
                </span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script src="@/components/Skills/Skills.js"></script>
<style scoped lang="scss" src="@/components/Skills/skills.scss"></style>
<template>
  <div class="gray-background">
    <v-container pt-8 pb-8>
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
        >
          <v-row>
            <v-col cols="12" sm="12" md="3">
              {{ experience.companyName }}
            </v-col>
            <v-col cols="12" sm="12" md="2">
              {{ experience.function }}
              {{ experience.period }}
            </v-col>
            <v-col cols="12" sm="12" md="7">
              {{ experience.activity }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      experiences: [
        {
          companyName: 'Test',
          function: 'Front End Dev.',
          period: '2013 - 2014',
          activity: 'Lorem ipsum'
        },
        {
          companyName: 'Test2',
          function: 'Front End Dev.',
          period: '2011 - 2012',
          activity: 'Lorem ipsum'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

.gray-background {
  background-color: $gray-light;
}
</style>
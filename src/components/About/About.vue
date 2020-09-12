<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="elementTitle">Over mij</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="2" lg="3" class="hide-on-mobile">
          <img src="@/assets/images/engin.jpg" />
        </v-col>
        <v-col sm="12" md="4" lg="3">
          <h2 class="elementSubTitle">Info</h2>
          <ul>
            <li><span class="listLabel">Naam:</span>Engin Sasmaz</li>
            <li><span class="listLabel">Geboortedatum:</span>06 juli 1993</li>
            <li><span class="listLabel">Nationaliteit:</span>Nederlands</li>
            <li><span class="listLabel">Woonplaatst:</span>Leidschendam</li>
          </ul>
        </v-col>
        <v-col sm="12" md="5" lg="6">
          <h2 class="elementSubTitle">Profiel</h2>
          <p>Leergierig, simplistisch en een doorzetter zijn de eigenschappen die mij een prettige collega maken.</p>
          <p>Ik maak mijn projecten met de nodige zorg en van optimale kwaliteit. Door het nakomen van afspraken houd ik mij altijd aan de gestelde budgetten. Wanneer ik niet de enige developer in de kamer ben stel ik mijzelf coachbaar op, maar deel ik ook nodige inhoudelijke kennis en ervaring.</p>
          <p>Tot slot stimuleer ik een positieve houding onder collega's.</p>
          <!-- <v-btn large class="button button--secondary"><a class="white--text" href="/CV_Engin_Sasmaz.jpg" target="_blank">Download CV</a></v-btn> -->
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<style scoped lang="scss" src="@/components/About/about.scss"></style>
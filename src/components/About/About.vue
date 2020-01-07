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
            <li><span class="listLabel">Nummer:</span>06 14 52 52 00</li>
            <li><span class="listLabel">E-mail:</span><a href="mailto:info@enginsasmaz.nl" target="_blank">info@enginsasmaz.nl</a></li>
          </ul>
        </v-col>
        <v-col sm="12" md="5" lg="6">
          <h2 class="elementSubTitle">Profiel</h2>
          <p>Leergierig, simplist, perfectionist, zelfstandig/teamspeler, op tijd en doorzetter.</p>
          <p>Ik maak mijn projecten met de nodige zorg van optimale kwaliteit. Door het nakomen van afspraken houd ik me altijd aan gestelde budgetten. Wanneer ik niet de enige developer in de kamer ben stel ik mijzelf coachbaar op, maar lever ik ook nodige inhoudelijke kennis en ervaring op.</p>
          <p>Tot slot stimuleer ik een positieve houding onder collega's.</p>
          <v-btn large class="mr-4 button button--primary"><a class="white--text" @click="$vuetify.goTo('#contact')">Contact</a></v-btn>
          <v-btn large class="button button--secondary"><a class="white--text" href="/CV_Engin_Sasmaz.jpg" target="_blank">Download CV</a></v-btn>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<style scoped lang="scss" src="@/components/About/about.scss"></style>
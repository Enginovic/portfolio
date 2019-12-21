<template>
  <v-container class="elementPanel">
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="elementTitle">Over mij</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <img src="../assets/engin.jpg" />
      </v-col>
      <v-col cols="3">
        <h2 class="elementSubTitle">Info</h2>
        <ul>
          <li><span class="listLabel">Naam:</span>Engin Sasmaz</li>
          <li><span class="listLabel">Geboortedatum:</span>06 juli 1993</li>
          <li><span class="listLabel">Nationaliteit:</span>Nederlands</li>
          <li><span class="listLabel">Stad:</span>Leidschendam</li>
          <li><span class="listLabel">Nummer:</span>06 14 52 52 00</li>
          <li><span class="listLabel">E-mail:</span>info@enginsasmaz.nl</li>
        </ul>
      </v-col>
      <v-col cols="6">
        <h2 class="elementSubTitle">Profiel</h2>
        <p>Leergierig, simpliciteit, perfectionist, zelfstandig/teamspeler, op tijd en doorzetter.</p>
        <p>In een paar woorden wie ik ben. Ik lever aan al mijn werk en projecten waar ik aan heb mogen werken kwaliteit. Door het nakomen van mijn afspraken houd ik me altijd aan gestelde budgetten. Wanneer ik niet de enige developer in de kamer ben stel ik mijzelf coachbaar op, maar lever ik ook nodige inhoudelijke kennis en ervaring op.</p>
        <p>Tot slot stimuleer ik een positieve houding onder collega's.</p>
        <v-btn large class="mr-4" color="primary">Contact</v-btn>
        <v-btn large color="secondary">Download CV</v-btn>
      </v-col>
    </v-row>
  </v-container>  
</template>

<style scoped lang="scss">
ul {
  font-size: 18px;
  margin: 0;
  padding-left: 0 !important;
  list-style-type: none;

  li {
    margin-bottom: 12px;
  }
}

img {
  width: 75%;
}

.listLabel {
  color: #b2b2b2;
  font-weight: 500;
  width: fit-content;
  margin-right: 6px;
}
</style>
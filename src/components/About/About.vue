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
            <li><span class="listLabel">Stad:</span>Leidschendam</li>
            <li><span class="listLabel">Nummer:</span>06 14 52 52 00</li>
            <li><span class="listLabel">E-mail:</span><a href="mailto:info@enginsasmaz.nl" target="_blank">info@enginsasmaz.nl</a></li>
          </ul>
        </v-col>
        <v-col sm="12" md="5" lg="6">
          <h2 class="elementSubTitle">Profiel</h2>
          <p>Leergierig, simpliciteit, perfectionist, zelfstandig/teamspeler, op tijd en doorzetter.</p>
          <p>In een paar woorden wie ik ben. Ik lever aan al mijn werk en projecten waar ik aan heb mogen werken kwaliteit. Door het nakomen van mijn afspraken houd ik me altijd aan gestelde budgetten. Wanneer ik niet de enige developer in de kamer ben stel ik mijzelf coachbaar op, maar lever ik ook nodige inhoudelijke kennis en ervaring op.</p>
          <p>Tot slot stimuleer ik een positieve houding onder collega's.</p>
          <v-btn large class="mr-4 button button--primary">Contact</v-btn>
          <v-btn large class="button button--secondary">Download CV</v-btn>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<style scoped lang="scss" src="@/components/About/about.scss"></style>
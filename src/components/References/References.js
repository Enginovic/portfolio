import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  data: () => {
    return {
      references: [
        {
          name: 'Peter Ariens',
          title: 'Oprichter Ozones',
          text: 'Engin heeft de website ontwikkeld naar grote tevredenheid. Door goed luisteren en te vragen resulteert dit in een juiste opzet, waarbij Engin snel schakelt en aanpassingen snel zijn verwerkt.'
        },
        {
          name: 'Fares Masharawi',
          title: 'Eigenaar Parra TV',
          text: 'Engin is veruit de beste developer waar ik ooit mee heb mogen werken. Als ik ergens een vraag over had, dan had ik over het algemeen binnen 5 á 10 minuten al een veelbelovende reactie van Engin.'
        },
        {
          name: 'Helin Hassan',
          title: 'Eigenaar, Advocaat bij Dem Advocatuur',
          text: 'Engin heeft voor mij mijn website gemaakt. Het eindresultaat is super. Engin gaat net zolang door totdat de klant tevreden is. Ik zou hem zeker aanraden!'
        }
      ]
    };
  },
};

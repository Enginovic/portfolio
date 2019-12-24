import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  components: { VueperSlides, VueperSlide },
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
  methods: {   
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    }
  },
};

<template>
<ion-page>
<ion-content id="container"> 
  <ion-header class="ion-no-border"> 
    <strong>Messe du {{selectDateFormat}}<br />
    {{selectFeast}} - Anno {{selectAnnoABC}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <template v-if="state.language == 'fr'">
     <ion-button @click="state.language='de'">Deutsh Ubersetzung</ion-button>
    </template> 
    <template  v-else>
      <ion-button @click="state.language='fr'">Traductions des textes latins en français</ion-button>
    </template> 
  </ion-header>
  <template v-if="state.language == 'fr'">
    <component :is = "selectFeastTextFR" :annoABC = "selectAnnoABC" />
  </template> 
  <template   v-else-if="state.language == 'de'">
    <component :is = "selectFeastTextDE" :annoABC = "selectAnnoABC" />
  </template>
  <br /><br /><br /><br /><br /><br />
</ion-content> 
</ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent , IonButton } from '@ionic/vue';
  import { defineComponent }      from 'vue';
  import useCalendarService       from "../components/ts/calendar-service";
  import { defineAsyncComponent } from 'vue';
  import { useState }             from '../store/store';

  export default defineComponent ( {
    name: 'Tab1',
    components: { IonPage , IonContent , IonButton } ,
    setup () {
      const today             = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const { calendarSelect , calendarFrom }   = useCalendarService ( today ) ;
      const selectFeast       = calendarSelect.thisFeast ;
      const selectDateFormat  = calendarSelect.thisDateFormat ;
      const selectAnnoABC     = calendarSelect.thisAnnoABC ;   
      const state             = useState ( ) ;
      const selectFeastTextFR   = defineAsyncComponent ( () =>                            
              import ( '@/components/g400AdMissam/fr/' + calendarSelect.thisFeastIndex + '.vue' ) ) ;           
      const selectFeastTextDE   = defineAsyncComponent ( () =>                            
              import ( '@/components/g400AdMissam/de/' + calendarSelect.thisFeastIndex + '.vue' ) ) ;  
      return { selectFeast , selectDateFormat , selectAnnoABC , selectFeastTextFR , selectFeastTextDE , calendarFrom , state }
    }
  } )
</script>
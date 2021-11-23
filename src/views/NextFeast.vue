<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small">
            <ion-back-button default-href="/home"></ion-back-button>
        </ion-button>
        <ion-title>Messe du {{selectDateFormat}}<br class="psalm" />
            {{selectFeast}} - Anno {{selectAnnoABC}}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <br />
        <!-- <template v-if="state.language == 'fr'"> -->
          <component :is = "selectFeastTextFR" :annoABC = "selectAnnoABC" />
<!--         </template> 
        <template   v-else-if="state.language == 'de'">
          <component :is = "selectFeastTextDE" :annoABC = "selectAnnoABC" />
        </template> -->
        <br /><br /><br /><br /><br /><br />
      </div>
    </ion-content> 
  </ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } from '@ionic/vue';
  import { defineComponent }      from 'vue';
  import { defineAsyncComponent } from 'vue';
  import useCalendarService       from "../components/ts/calendar-service";
  //import { useState }             from '../store/store';
  export default defineComponent ( {
    name: 'nextFeast',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } ,
    setup () {
      const today               = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const { calendarSelect }  = useCalendarService ( today ) ;
      const selectFeast         = calendarSelect.thisFeast ;
      const selectDateFormat    = calendarSelect.thisDateFormat ;
      const selectAnnoABC       = calendarSelect.thisAnnoABC ;    
     // const state               = useState ( ) ;
      const selectFeastTextFR   = defineAsyncComponent ( () =>                            
              import ( '../components/g400AdMissam/fr/' + calendarSelect.thisFeastIndex + '.vue' ) ) ;           
      const selectFeastTextDE   = defineAsyncComponent ( () =>                            
              import ( '../components/g400AdMissam/de/' + calendarSelect.thisFeastIndex + '.vue' ) ) ;  
      return { selectFeast , selectDateFormat , selectAnnoABC , selectFeastTextFR , selectFeastTextDE }
      // return { selectFeast , selectDateFormat , selectAnnoABC , selectFeastTextFR , selectFeastTextDE , state }
    }
  } )
</script>
<template>
<ion-page>
<ion-content id="container"> 
  <ion-header class="ion-no-border">
    <p><strong>Messe du {{selectDateFormat}}<br />
    {{selectFeast}} - Anno {{selectAnnoABC}}</strong></p>
  </ion-header>
  <component :is = "selectFeastText" :annoABC = "selectAnnoABC" />
  <br /><br /><br /><br /><br /><br />
</ion-content>
</ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent , IonGrid , IonRow , IonCol } from '@ionic/vue';
  import { defineComponent }  from 'vue';
  //import getYear              from 'date-fns/getYear' ;
  import useCalendarService   from "../components/ts/calendar-service";
  import { defineAsyncComponent } from 'vue';

  export default defineComponent ( {
    name: 'Tab1',
    components: { IonPage , IonContent , IonGrid , IonRow , IonCol } ,
    setup () {
      const today             = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const { calendarSelect , calendarFrom }   = useCalendarService ( today ) ;
      const selectFeast       = calendarSelect.thisFeast ;
      const selectDateFormat  = calendarSelect.thisDateFormat ;
      const selectAnnoABC     = calendarSelect.thisAnnoABC ;
      const selectFeastText   = defineAsyncComponent ( () =>                            
              import ( '@/components/g400AdMissam/fr/' + calendarSelect.thisFeastIndex + '.vue' ) ) ;  
      return { selectFeast , selectDateFormat , selectAnnoABC , selectFeastText , calendarFrom }
    }
  } )
</script>
   
<style>
@import '../components/css/officii.css';
</style>
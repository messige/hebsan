<template>
<ion-page>
<ion-content id="container"> 
  <ion-header class="ion-no-border">
    <p><strong>Messe du {{calendarFrom[0].thisDateFormat}}<br />
    {{calendarFrom[0].thisFeast}} - Anno {{calendarFrom[0].thisAnnoABC}}</strong></p>
  </ion-header>
  <component :is = "calendarFrom[0].thisFeastText" :annoABC = "calendarFrom[0].thisAnnoABC" />
  <br /><br /><br /><br /><br /><br />
</ion-content>
</ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent , IonGrid , IonRow , IonCol } from '@ionic/vue';
  import { defineComponent }  from 'vue';
  //import getYear              from 'date-fns/getYear' ;
  import useCalendarService   from "../components/ts/calendar-service";

  export default defineComponent ( {
    name: 'Tab1',
    components: { IonPage , IonContent , IonGrid , IonRow , IonCol } ,
    setup () {
      const today           = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const calendarFrom    = useCalendarService ( today ) ;
      return calendarFrom 
    }
  } )
</script>
   
<style>
@import '../components/css/officii.css';
</style>
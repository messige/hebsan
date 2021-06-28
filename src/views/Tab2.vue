<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <p><strong>Calendarium Romanum ex Decreto Sacrosancti Oecumenici Concilii Vaticani II instauratum</strong></p>
    </ion-header>
    <Calendarium />
    <Calendarium :startyear= "civilYearPlus1" :startmonth= "firstMonth" :startday= "firstDay" />
</ion-content>
</ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent } from '@ionic/vue';
  import { defineComponent }      from 'vue';
  import getYear                  from 'date-fns/getYear' ;
  import Calendarium              from '@/views/Calendarium.vue' ;

  export default defineComponent ( {
    name: 'Tab2',
    components: { IonPage , IonContent , Calendarium } ,
    setup () {
      let today           = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      let civilYearPlus1  = getYear ( today ) + 1 ;
      let firstMonth      = 0 ;
      let firstDay        = 2 ;
      return {  civilYearPlus1 , firstMonth , firstDay } ;
    } 
  } )
</script>
   
<style>
@import '../components/css/officii.css';
</style>
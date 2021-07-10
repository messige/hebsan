<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <p><strong>Calendarium Romanum ex Decreto Sacrosancti Oecumenici Concilii Vaticani II instauratum</strong></p>
    </ion-header>
    <Calendarium />
    <Calendarium :startyear= "civilYearPlus1" :startmonth= "firstMonth" :startday= "firstDay" />
    <Calendarium :startyear= "civilYearPlus2" :startmonth= "firstMonth" :startday= "firstDay" />
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
      const today           = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const civilYearPlus1  = getYear ( today ) + 1 ;
      const civilYearPlus2  = civilYearPlus1 + 1 ;
      const firstMonth      = 0 ;
      const firstDay        = 2 ;
      return {  civilYearPlus1 , civilYearPlus2 , firstMonth , firstDay } ;
    } 
  } )
</script>
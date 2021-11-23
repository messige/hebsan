<template>
  <ion-page>
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-button shape="round" size="small">
                <ion-back-button default-href="/home"></ion-back-button>
            </ion-button>
            <ion-title>Calendarium Romanum <br class="psalm" />
                ex Decreto Sacrosancti Oecumenici Concilii Vaticani II instauratum</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div id="container">
        <Calendarium />
        <Calendarium :startyear= "civilYearPlus1" :startmonth= "firstMonth" :startday= "firstDay" />
        <Calendarium :startyear= "civilYearPlus2" :startmonth= "firstMonth" :startday= "firstDay" />
        <Calendarium :startyear= "civilYearPlus3" :startmonth= "firstMonth" :startday= "firstDay" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } from '@ionic/vue';
  import { defineComponent }  from 'vue';
  import getYear              from 'date-fns/getYear' ;
  import Calendarium          from '@/components/Calendarium.vue' ;

  export default defineComponent ( {
    name: 'ABCFeasts',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton , Calendarium } ,
    setup () {
      const today           = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const civilYearPlus1  = getYear ( today ) + 1 ;
      const civilYearPlus2  = civilYearPlus1 + 1 ;
      const civilYearPlus3  = civilYearPlus2 + 1 ;
      const firstMonth      = 0 ;
      const firstDay        = 2 ;
      return {  civilYearPlus1 , civilYearPlus2 , civilYearPlus3 , firstMonth , firstDay } ;
    } 
  } )
</script>
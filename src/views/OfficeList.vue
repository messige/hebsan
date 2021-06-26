<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small"><ion-back-button default-href="/tabs/tab2"></ion-back-button></ion-button>
      </ion-toolbar>        
    <br />
    <p class="ion-padding-horizontal"><strong>{{feastCurrent?.title}} - {{feastCurrent?.titleFr}}</strong></p>
  </ion-header>
  <br />
    <template v-for="(thisOffice , index) in arrayFeastOfficesCurrent" :key="index">
      <template v-if="index < nbrOffice">
        <template v-if="thisOffice.link == 'HoraMajor'">
          <router-link :to="{ name: 'HoraMajor' , 
                        params: { office: thisOffice.office , feast: feast }}">
                        {{thisOffice.title}}
          </router-link>
        </template>
        <template v-else-if="thisOffice.link == 'HoraMinor'">
          <router-link :to="{ name: 'HoraMinor' , 
                        params: { office: thisOffice.office , feast: feast }}">
                        {{thisOffice.title}}
          </router-link>
        </template>
        <template v-else-if="thisOffice.link == 'Completorium'">
          <router-link :to="{ name: 'Completorium' , 
                        params: { feast: feast }}">
                        {{thisOffice.title}}
          </router-link>
        </template>                     
        <br /><br />
      </template>
    </template>  
    <p><ion-button fill="clear" strong router-link="/toni">Toni Communes - Tons communs</ion-button></p>
    <p>&nbsp;</p><p>&nbsp;</p>                
  </ion-content>
</ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonButton , IonBackButton } from '@ionic/vue';
    import { useRoute }         from 'vue-router';
    import { defineComponent }  from 'vue';
    import { ref }              from 'vue';
    import {arrowBackSharp }    from 'ionicons/icons';
    export default defineComponent ( {
      name: 'Tab3',
      components: { IonPage , IonContent , IonButton , IonBackButton } ,
      setup() {
        const route      = useRoute ( ) ;
        const feast      = route.params.feast ;
        let arrayFeasts = ref ( [
          {   title   : 'Domenica in Palmis', 
              titleFr : 'Dimanche des Rameaux' ,
              arrayFeastOffices: [1, 1, 1, 1, 1, 1] } ,  
          {   title   : 'Hebdomada Sancta Feria II' , 
              titleFr : 'Lundi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 1, 1] } , 
          {   title   : 'Hebdomada Sancta Feria III',
              titleFr : 'Mardi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 1, 1] } , 
          {   title   : 'Hebdomada Sancta Feria IV',
              titleFr : 'Mercredi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 1, 1] } , 
          {   title   : 'Hebdomada Sancta Feria V',
              titleFr : 'jeudi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 0, 1] } , 
          {   title   : 'Hebdomada Sancta Feria VI',
              titleFr : 'Vendredi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 0, 1] } ,             
          {   title   : 'Hebdomada Sancta Feria VII',
              titleFr : 'Samedi Saint' ,
              arrayFeastOffices: [1, 1, 1, 1, 0, 0] } , 
          {   title   : 'Resurrectio Domini',
              titleFr : 'Dimanche de Pâques' ,
              arrayFeastOffices: [1, 0, 0, 0, 1, 1] } , 
          {   title   : 'Domenica in Palmis',
              titleFr : 'Dimanche des Rameaux - la veille' ,
              arrayFeastOffices: [0, 0, 0, 0, 1, 1] } ] ) ; 
        let feastNum        = +feast ;
        let feastCurrent    = arrayFeasts.value [feastNum-1] ; // Feast is 1,2,... while index in table is 0,1,...
        let feastOffices    = feastCurrent?.arrayFeastOffices ;
        let arrayFeastOffices  = [
          { office:1 , title :'Ad laudes' ,    link: 'HoraMajor'} ,
          { office:3 , title :'Ad tertiam' ,   link: 'HoraMinor' } ,
          { office:6 , title :'Ad Sextam' ,    link: 'HoraMinor'} ,
          { office:9 , title :'Ad Nonam' ,     link: 'HoraMinor' } ,
          { office:2 , title :'Ad Vesperas' ,  link: 'HoraMajor' } ,
          { office:0 , title :'Ad Completorium',link: 'Completorium' } ] ;
        let arrayFeastOfficesCurrent  = [
          { office:0 , title :'' ,     link: '' } ,
          { office:0 , title :'' ,     link: '' } ,
          { office:0 , title :'' ,     link: '' } ,
          { office:0 , title :'' ,     link: '' } ,
          { office:0 , title :'' ,     link: '' } ,
          { office:0 , title :'',      link: '' } ] ;                           
        let nbrOffice   = 0 ; 
        var iOffice     = 0 ;
        for ( iOffice = 0 ; iOffice < 6 ; iOffice++ ) { 
          if ( feastOffices [iOffice] == 1 ) {
              arrayFeastOfficesCurrent [nbrOffice]  = arrayFeastOffices [iOffice] ;
              nbrOffice ++ ; }
        }
        return { feast , feastCurrent , nbrOffice , feastOffices , arrayFeastOfficesCurrent , arrowBackSharp } ;
      }
    })
</script>

<style>
@import '../components/css/officii.css';
</style>
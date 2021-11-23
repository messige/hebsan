<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <router-link :to=" { name: 'Sancta' } ">
          <ion-button shape="round" size="small"><ion-back-button /></ion-button>
        </router-link>
        <ion-title>{{title}} - {{titleFr}}</ion-title>  
      </ion-toolbar>
      <br />
    </ion-header> 
    <ion-content>
      <div id="container" class="OfficeList">
        <br /> 
        <ion-grid>
          <template v-if = " thisFeast != '9' ">
            <OfficeType feast:thisFeast :office  = "1" />
            <template v-if = "feast != '8'"> 
              <OfficeType feast:thisFeast :office  = "3" />
              <OfficeType feast:thisFeast :office  = "6" />
              <OfficeType feast:thisFeast :office  = "9" />
            </template>
          </template>
          <template v-if = " feast < '5'  || feast > '7' ">
            <OfficeType feast:thisFeast :office  = "2" />           
           </template>
          <template v-if = " feast != '7' ">
            <OfficeType feast:thisFeast :office  = "0" />     
          </template>                    
          <br /><br />

        </ion-grid>
        <p><ion-button fill="clear" strong href="/toni">Toni Communes - Tons communs</ion-button></p>
        <p>&nbsp;</p><p>&nbsp;</p>                
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } from '@ionic/vue' ;
  import {arrowBackSharp}         from 'ionicons/icons';
  import OfficeType               from '@/components/OfficeType.vue';
  //import { useRoute }             from 'vue-router';
  //import { ref }                from 'vue';
  import { defineComponent }      from 'vue';
  export default defineComponent ( {
    name: 'OfficeList',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton , OfficeType } ,
    props: {
      feast:    { type: String , required: true } ,
      title:    { type: String , required: true } ,
      titleFr:  { type: String , required: true } 
    } ,
    setup ( props ) {
      //useRoute.go ( ) ;
      let thisFeast     = '1' ;
      if ( props.feast == '2' ) {
        thisFeast = '2' }
      else if ( props.feast == '3' ) {
        thisFeast = '3' }
      else if ( props.feast == '4' ) {
        thisFeast = '4' }
      else if ( props.feast == '5' ) {
        thisFeast = '5' }                
      else if ( props.feast == '6' ) {
        thisFeast = '6' }
      else if ( props.feast == '7' ) {
        thisFeast = '7' } 
      else if ( props.feast == '8' ) {
        thisFeast = '8' }
      else if ( props.feast == '9' ) {
        thisFeast = '9' }               
/*       titleCurrent.value    = arrayFeasts [feastNum.value-1].title ;
      const feastCurrent    = arrayFeasts [feastNum.value-1] ; // Feast is 1,2,... while index in table is 0,1,... */
      // const feastOffices    = feastCurrent?.arrayFeastOffices ;
/*       const arrayOffices  = ref ([
        { office:1 , title :'Ad laudes' ,    link: 'HoraMajor'} ,
        { office:3 , title :'Ad tertiam' ,   link: 'HoraMinor' } ,
        { office:6 , title :'Ad Sextam' ,    link: 'HoraMinor'} ,
        { office:9 , title :'Ad Nonam' ,     link: 'HoraMinor' } ,
        { office:2 , title :'Ad Vesperas' ,  link: 'HoraMajor' } ,
        { office:0 , title :'Ad Completorium',link: 'Completorium' } ] ) ; */
      return { thisFeast , arrowBackSharp }
    }
  })
</script>

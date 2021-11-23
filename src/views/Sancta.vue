<template>
  <ion-page>
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <router-link :to=" { name: 'Home' } ">
                 <ion-button shape="round" size="small"><ion-back-button /></ion-button>
            </router-link>
            <ion-title>Hebdomada Sancta</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div id="container">
            <br /> 
            <template v-for = " (thisFeast , feastID ) in arrayFeasts" :key= "feastID">
                <router-link :to = " { name: 'OfficeList', 
                    params: { feast: thisFeast.feastID , title: thisFeast.title , titleFr: thisFeast.titleFr } } ">
                    {{thisFeast.title}} - {{thisFeast.titleFr}} - {{feastID}}
                </router-link> 
                <br /> <br /> 
            </template>
            <br />   
            <p><strong>
                <router-link to="/toni">Toni Communes - Tons communs</router-link>
            </strong></p>
        </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts"> 
  import { defineComponent }    from 'vue';
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } from '@ionic/vue';
  export default defineComponent ( {
    name: 'Sancta',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonBackButton } ,
    setup ( ) {
      const arrayFeasts =  [
        {   feastID : '9' ,
            title   : 'Domenica in Palmis',
            titleFr : 'Dimanche des Rameaux - la veille' } ,
        {   feastID : '1' ,
            title   : 'Domenica in Palmis', 
            titleFr : 'Dimanche des Rameaux' } ,
        {   feastID : '2' ,
            title   : 'Hebdomada Sancta Feria II' , 
            titleFr : 'Lundi Saint' } ,
        {   feastID : '3' ,
            title   : 'Hebdomada Sancta Feria III',
            titleFr : 'Mardi Saint' } ,
        {   feastID : '4' ,
            title   : 'Hebdomada Sancta Feria IV',
            titleFr : 'Mercredi Saint' } ,
        {   feastID : '5' ,
            title   : 'Hebdomada Sancta Feria V',
            titleFr : 'Jeudi Saint' } ,
        {   feastID : '6' ,
            title   : 'Hebdomada Sancta Feria VI',
            titleFr : 'Vendredi Saint' } ,           
        {   feastID : '7' ,
            title   : 'Hebdomada Sancta Feria VII',
            titleFr : 'Samedi Saint' } ,
        {   feastID : '8' ,
            title   : 'Resurrectio Domini',
            titleFr : 'Dimanche de Pâques' } ]
      return { arrayFeasts } ;
    }
  } )
</script>
<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong router-link="/"><ion-icon :icon="home"></ion-icon>
        </ion-button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ion-button shape="round" size="small">
            <ion-back-button text="Back" default-href="/home"></ion-back-button>
        </ion-button>
        <br /><br />
        <ion-title>{{feastCurrent.title}} - {{feastCurrent.titleFr}}</ion-title>
      </ion-toolbar>
      <br />
    </ion-header>         
    <p>
      <rubrique>Antiphonae</rubrique><br />
      <template v-for="( thisAnt, antID ) in feastOfficeCurrent.ants" :key="antID">
        <ImageDisplay :imgSource = "thisAnt.ant" />
        <ImageDisplay :imgSource = "thisAnt.ton" />
        <component    :is        = "thisAnt.psalm"/>
        <ImageDisplay :imgSource = "thisAnt.ant" /><br />
      </template>
    </p>  
    <br />        
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button
          @click="$router.push({ name: 'OfficeList', params: { feast: feast }})">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
      </ion-toolbar> 
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>      
  </ion-content>
</ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonIcon , IonBackButton } from '@ionic/vue';
  import { home , arrowBackSharp }  from 'ionicons/icons' ;
  import ImageDisplay               from '../components/ImageDisplay.vue' ;
  import { defineComponent }        from 'vue';
  import { getFeast }               from '../data/feasts'; 
  import { getAnts }                from '../data/antPs'; 
  export default defineComponent ( {
    name:      'HoraMajor',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , ImageDisplay , IonButton , IonIcon , IonBackButton } ,
    props: {
      feast: {  type: Number , required: true } ,
      office: { type: Number , required: true }
    } , 
    setup ( props ) {
      const feastCurrent          = getFeast ( props.feast ) ; 
      const feastOfficeNum        =  props.feast*10 + props.office ;
      const feastOfficeCurrent    = getAnts ( feastOfficeNum ) ;
  
      return  { feastCurrent , feastOfficeCurrent , arrowBackSharp , home } ;
    }
  } ) 
</script>
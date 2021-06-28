<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small">
          <ion-back-button default-href="/tabs/tab2"></ion-back-button>
        </ion-button>
      </ion-toolbar>
      <br />
      <p class="ion-padding-horizontal"><strong>Messe du {{ feastDate }}</strong>
      <br class="psalm" />&nbsp;-&nbsp;<strong>{{feast}} - Anno {{feastAnnoABC}}</strong></p>
      <br />
    </ion-header> 
     <component :is = "feastText" :annoABC = "feastAnnoABC" />
    <p>&nbsp;</p>
  <ion-footer class="ion-no-border">
      <ion-toolbar>
         <ion-button shape="round" size="small">
           <ion-back-button default-href="/tabs/tab2"></ion-back-button>
          </ion-button>
      </ion-toolbar>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>
  </ion-content>
</ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent , IonButton , IonIcon , IonBackButton } from '@ionic/vue';
  import { defineComponent }      from 'vue';
  import { defineAsyncComponent } from 'vue';  
  import { useRoute }             from 'vue-router';
  export default defineComponent ( {
    name: 'PiecesForAFeast',
    components: { IonPage , IonContent , IonButton , IonIcon , IonBackButton } ,
    setup ( ) {
    let route         = useRoute ( ) ;
    let feastIndex    = route.params.feastIndex ;
    let feast         = route.params.feast ;
    let feastDate     = route.params.feastDate ; 
    let feastAnnoABC  = route.params.feastAnnoABC ;  
    let feastText     = defineAsyncComponent ( () =>                            
                        import ( '@/components/g400AdMissam/' + feastIndex + '.vue' ) )  ;     
    return { feastText , feast , feastDate , feastAnnoABC } ;
        }
    } )
</script>
   
<style>
@import '../components/css/officii.css';
</style>
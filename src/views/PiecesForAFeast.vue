<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small">
          <ion-back-button default-href="/tabs/tab2"></ion-back-button>
        </ion-button>
      <ion-title>Messe du {{ feastDate }}
            <br class="psalm" />&nbsp;-&nbsp;{{feast}} - Anno {{feastAnnoABC}}</ion-title>        
      </ion-toolbar>
      <br />
    </ion-header> 
    <template v-if="state.language == 'fr'">
      <component :is = "feastTextFR" :annoABC = "feastAnnoABC" />
    </template> 
    <template   v-else-if="state.language == 'de'">
      <component :is = "feastTextDE" :annoABC = "feastAnnoABC" />
    </template>
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
  import { IonPage , IonContent  , IonHeader , IonFooter , IonButton , IonIcon , IonBackButton } from '@ionic/vue' ;
  import { defineComponent }      from 'vue' ;
  import { defineAsyncComponent } from 'vue' ;  
  import { useRoute }             from 'vue-router' ;
  import { useState }             from '../store/store';
  export default defineComponent ( {
    name: 'PiecesForAFeast',
    components: { IonPage , IonContent  , IonHeader , IonFooter , IonButton , IonIcon , IonBackButton } ,
    setup ( ) {
    const route         = useRoute ( ) ;
    const feastIndex    = route.params.feastIndex ;
    const feast         = route.params.feast ;
    const feastDate     = route.params.feastDate ; 
    const feastAnnoABC  = route.params.feastAnnoABC ; 
    const state         = useState() ;
    const feastTextFR   = defineAsyncComponent ( () =>                            
                        import ( '@/components/g400AdMissam/fr/' + feastIndex + '.vue' ) )  ;     
    const feastTextDE   = defineAsyncComponent ( () =>                            
                        import ( '@/components/g400AdMissam/de/' + feastIndex + '.vue' ) )  ; 
    return { feastTextFR , feastTextDE , feast , feastDate , feastAnnoABC , state } ;
        }
    } )
</script>
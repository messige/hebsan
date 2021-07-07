<template>
    <ion-page>
        <ion-content>
          <div id="container">
            <p><strong>Hebdomada Sancta </strong></p>         
            <HebdoSancta />
            <!-- - {{today}} -->
          </div>
      </ion-content>
  </ion-page>
</template>

<script lang="ts"> 
  import { IonPage , IonContent } from '@ionic/vue';
  import { defineComponent }      from 'vue';
  import HebdoSancta              from '@/views/HebdoSancta.vue' ;  

  export default defineComponent ( {
    name: 'Tab3',
    components: { IonPage , IonContent , HebdoSancta } ,
  } )
</script>

<style>
@import '../components/css/officii.css';
</style>
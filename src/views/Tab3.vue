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
    setup () {
      const today = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      return {  today } ;
    } 
  } )
</script>

<style>
@import '../components/css/officii.css';
</style>
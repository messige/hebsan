<template>
    <ion-page>
        <ion-content>
          <div id="container">
            <p><strong>Hebdomada Sancta </strong></p>
             <ion-list> 
              <ion-item><ion-router-link href="/officeList/9">Domenica in Palmis - La Veille   &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/1">Domenica in Palmis  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/2">Feria II - Lundi  Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/3">Feria III -Mardi Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/4">Feria IV - Mercredi Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/5">Feria V In Coena Domini - Jeudi Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/6">Feria VI In Parasceve - Vendredi Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/7">Sabbato Sancto - Samedi Saint  &nbsp; =></ion-router-link></ion-item> 
              <ion-item><ion-router-link href="/officeList/8">Resurrectio Domini - Dimanche de Pâques  &nbsp; =></ion-router-link></ion-item> 
            </ion-list>     
            <p><ion-button color="tertiary" router-link="/toni">Toni Communes - Tons communs</ion-button></p>
          </div>
      </ion-content>
  </ion-page>
</template>

<script lang="ts"> 
import { IonPage , IonContent , IonButton } from '@ionic/vue';


export default  {
  name: 'Tab1',
  components: { IonPage , IonContent , IonButton }
}

</script>
<style>
@import '../components/css/officii.css';
</style>
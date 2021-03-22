<template>
    <ion-page>
        <ion-content>
          <div id="container">
            <p><strong>Hebdomada Sancta </strong></p>
             <ion-list> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/9">Domenica in Palmis - La Veille   &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/1">Domenica in Palmis  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/2">Feria II - Lundi  Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/3">Feria III -Mardi Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/4">Feria IV - Mercredi Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/5">Feria V In Coena Domini - Jeudi Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/6">Feria VI In Parasceve - Vendredi Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/7">Sabbato Sancto - Samedi Saint  &nbsp; =></ion-button></ion-item> 
              <ion-item><ion-button fill="clear" strong router-link="/officeList/8">Resurrectio Domini - Dimanche de Pâques  &nbsp; =></ion-button></ion-item> 
            </ion-list>     
            <p><ion-button fill="clear" strong router-link="/toni">Toni Communes - Tons communs</ion-button></p>
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
<style scoped>
    @media (min-width: 1025px)  {         
        #container {
            position: absolute;
            left: 15%;
            right: 55%;
            top: 2%;
        }
    }
</style>
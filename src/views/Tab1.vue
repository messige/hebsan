<template>
    <ion-page>
        <ion-content>
          <div id="container">
              <p><strong>Hebdomada Sancta </strong></p>
            <p><ion-button color="medium" router-link="/officeList/9">Domenica in Palmis - La Veille</ion-button></p>
            <p><ion-button color="medium" router-link="/officeList/1">Domenica in Palmis</ion-button></p>
            <p><ion-button color="medium" router-link="/officeList/2">Feria II - Lundi  Saint</ion-button></p>
            <p><ion-button color="medium" router-link="/officeList/3">Feria III -Mardi Saint</ion-button></p>
            <p><ion-button color="medium" router-link="/officeList/4">Feria IV - Mercredi Saint</ion-button></p>
            <p><ion-button color="dark" router-link="/officeList/5">Feria V In Coena Domini - Jeudi Saint</ion-button></p>
            <p><ion-button color="dark" router-link="/officeList/6">Feria VI In Parasceve - Vendredi Saint</ion-button></p>
            <p><ion-button color="dark" router-link="/officeList/7">Sabbato Sancto - Samedi Saint</ion-button></p>
            <p><ion-button color="warning" router-link="/officeList/8">Resurrectio Domini - Dimanche de Pâques</ion-button></p>
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
<style scoped>
#container {
  position: absolute;
  left: 10%;
  right: 0;
  top: 2%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 20;
}

#container a {
  text-decoration: none;
}
</style>
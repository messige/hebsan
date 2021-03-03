<template>
  <ion-page>
      <ion-content :fullscreen="true">
          <ion-header collapse="condense">
              <ion-toolbar>
                  <ion-title size="large">Hebdomada Sancta</ion-title>
              </ion-toolbar>
          </ion-header>
          <div id="container">
              <strong>Hebdomada Sancta</strong><p>&nbsp;</p>
              <p><a href="OfficeList/0">Domenica in Palmis</a></p>
              <p><a href="OfficeList/1">Feria II - Lundi  Saint</a></p>
              <p><a href="OfficeList/2">Feria III -Mardi Saint</a></p>
              <p><a href="OfficeList/3">Feria IV - Mercredi Saint</a></p>
              <p><a href="OfficeList/4">Feria V In Coena Domini - Jeudi Saint</a></p>
              <p><a href="OfficeList/5">Feria VI In Parasceve - Vendredi Saint</a></p>
              <p><a href="OfficeList/6">Sabbato Sancto - Samedi Saint</a></p>
              <p><a href="OfficeList/7">Resurrectio Domini - Dimanche de Pâques</a></p>
          </div>
      </ion-content>
  </ion-page>
</template>

<style scoped>
#container {

  position: absolute;
  left: 10%;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
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

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}

</script>
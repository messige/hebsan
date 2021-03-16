<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Toni Communes</ion-title> 
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col>
              <strong>Toni Communes</strong>
            </ion-col>
            <ion-col>
              <ion-button color="tertiary" router-link="/" >Back to Home</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div class="content">
          <strong>I. In principio Horarum</strong><br /><br />
          <p><img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumQuad.jpg" /></p>
          <br />
         <strong>II. Tonus Capituli</strong><br />
          <p><img src="../../public/assets/images/g75Lectio/ToniCapituli.jpg" /></p>
          <br />
          <strong>II. Tonus Orationis Solemnis:<br />Ad Laudes et Vesperas</strong><br /><br />
          <p><img src="../../public/assets/images/g80Oratio/TonusOraSolemnis.jpg" /></p>
          <br />
          <strong>III. Tonus Orationis Simplex:<br />Ad Horas Minores et Completorium</strong><br /><br />
          <p><img src="../../public/assets/images/g80Oratio/TonusOraSimplex.jpg" /></p>          
            <p>&nbsp;</p><p>&nbsp;</p>                
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>

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

<script lang="ts">

    import { IonPage , IonContent , IonButton } from '@ionic/vue';
    export default {
      name: 'Toni',
      components: { IonPage , IonContent , IonButton },
    }
</script>
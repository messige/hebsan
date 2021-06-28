<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small">
          <ion-back-button default-href="/tabs/tab3"></ion-back-button>
        </ion-button>
      </ion-toolbar>
      <br />
      &nbsp;&nbsp;&nbsp;<strong>Toni Communes</strong>
    </ion-header>
    <div class="content">
      <br/><br/>
      <strong>I. In principio Horarum</strong><br /><br />
      <p><img src="@/assets/g95InOrdineOfficii/InAdiutoriumQuad.jpg" /></p>
      <br />
      <strong>II. Tonus Capituli</strong><br />
      <p><img src="@/assets/g75Lectio/ToniCapituli.jpg" /></p>
      <br />
      <strong>II. Tonus Orationis Solemnis:<br />Ad Laudes et Vesperas</strong><br /><br />
      <p><img src="@/assets/g80Oratio/TonusOraSolemnis.jpg" /></p>
      <br />
      <strong>III. Tonus Orationis Simplex:<br />Ad Horas Minores et Completorium</strong><br /><br />
      <p><img src="@/assets/g80Oratio/TonusOraSimplex.jpg" /></p>
      <p>&nbsp;</p>
        <ion-toolbar>
          <ion-button shape="round" size="small"><ion-back-button default-href="/tabs/tab3"></ion-back-button></ion-button>
        </ion-toolbar>
            <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>  
      </div>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">

  import { IonPage , IonContent , IonButton , IonBackButton } from '@ionic/vue';
    export default {
      name: 'Toni',
      components: { IonPage , IonContent , IonButton , IonBackButton } ,
    }
</script>

<style>
@import '../components/css/officii.css';
</style>
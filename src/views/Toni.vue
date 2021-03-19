<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-header no-border >
          <ion-toolbar>
            <ion-buttons>
              <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
            &nbsp;&nbsp;&nbsp;<strong>Toni Communes</strong>
          </ion-toolbar>
        </ion-header>
        <div class="content">
          <br/>
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
          <ion-toolbar>
            <ion-buttons>
              <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>                 
            <p>&nbsp;</p><p>&nbsp;</p>                
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">

    import { IonPage , IonContent , IonButtons , IonBackButton , IonToolbar } from '@ionic/vue';
    export default {
      name: 'Toni',
      components: { IonPage , IonContent , IonButtons , IonBackButton , IonToolbar },
    }
</script>

<style>
@import '../components/css/officii.css';
</style>
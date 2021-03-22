<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-header>
        <ion-tab-bar>
          <ion-tab-button><ion-back-button text="Back" default-href="/"></ion-back-button></ion-tab-button> 
                 
        </ion-tab-bar>
            &nbsp;&nbsp;&nbsp;<strong>Toni Communes</strong>
        </ion-header>
        <div class="content">
          <br/><br/>
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
          <p>&nbsp;</p>
          <ion-tab-bar>
            <ion-tab-button><ion-back-button text="Back" default-href="/"></ion-back-button></ion-tab-button> 
          </ion-tab-bar> 
          <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>  
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">

    import { IonPage , IonContent , IonBackButton } from '@ionic/vue';
    export default {
      name: 'Toni',
      components: { IonPage , IonContent , IonBackButton },
    }
</script>
<style scoped>
    @media (min-width: 1025px)  {         
        #container {
            position: absolute;
            left: 15%;
            right: 40%;
            top: 2%;
        }
    }
</style>
<style>
@import '../components/css/officii.css';
</style>
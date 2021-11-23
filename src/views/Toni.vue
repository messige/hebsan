<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small">
            <ion-back-button default-href="/home"></ion-back-button>
        </ion-button>
        <ion-title>Toni Communes</ion-title>  
      </ion-toolbar>
      <br />
    </ion-header>
    <br /><br/><br/>
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
      <br />
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-button shape="round" size="small">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-button>
        </ion-toolbar>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
      </ion-footer>        
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonFooter , IonButton , IonBackButton } from '@ionic/vue';
  import { arrowBackSharp }       from 'ionicons/icons';
  import { defineComponent }        from 'vue';
  
  export default defineComponent ( {
      name: 'Toni',
      components: { IonPage , IonContent , IonHeader , IonFooter , IonButton , IonBackButton } ,
      setup() {
        return  { arrowBackSharp }
    }
  })
</script>
<template>
  <ion-page>
<ion-router-outlet></ion-router-outlet>    
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/"
          ><ion-icon :icon="home"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <h2>Toni Communes</h2>  
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
      <br />
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-button shape="round" size="small">
              <ion-back-button text="Back" default-href="/HomePage"></ion-back-button>
          </ion-button>
        </ion-toolbar>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
      </ion-footer> 
      </div>       
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonFooter , IonButton , IonBackButton } from '@ionic/vue';
  import { arrowBackSharp, home }       from 'ionicons/icons';
  import { defineComponent }        from 'vue';
  
  export default defineComponent ( {
      name: 'ToniCommunes',
      components: { IonPage , IonContent , IonHeader , IonFooter , IonButton , IonBackButton } ,
      setup() {
        return  { arrowBackSharp, home }
    }
  })
</script>
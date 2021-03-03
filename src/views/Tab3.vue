<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>

          <div id="container">
            <p>Hebdomada Sancta - Ad horas Majores et Minores</p>
                  <p>
        Les Heures  de la Semaine Sainte<br />
        telles que chantées à l'abbaye de Fontfroide<br />par le Choeur grégorien de Paris.<br />
     </p>
       <p>  Neumes des antiennes des Petites heures : Giedrius Gapsys.<br />
        Autres neumes : Antiphonale Symopticum  http://gregorianik.uni-regensburg.de/an/<br />
        Application développées par Gerald Messiaen.<br />
        Merci d'adresser vos remarques à<br />
        gerald.messiaen@gregorien.be
      </p>
      </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

    export default {
        name: 'Tab2',
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
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
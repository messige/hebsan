<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <strong>Hebdomada Sancta Feria 2 - Lundi saint</strong><p>&nbsp;</p>
                <p><a href="Matitu/2">Ad Matutinem</a></p>
                <p><a href="HoraMajor/2/1">Ad Laudes</a></p>
                <p><a href="HoraMinor/2/3">Ad Tertiam</a></p>
                <p><a href="Missam/2">Ad Missam</a></p>
                <p><a href="HoraMinor/2/6">Ad Sextam</a></p>
                <p><a href="HoraMinor/2/9">Ad Nonam</a></p>
                <p><a href="HoraMajor/2/2/">Ad Vesperas</a></p>
                <p><a href="CompletorHebSan/2">Ad Completorium</a></p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonContent } from '@ionic/vue';
  export default ( {
    name: 'OfficeList2',
    components: { IonContent, IonPage } ,
   } ) ;
</script>

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
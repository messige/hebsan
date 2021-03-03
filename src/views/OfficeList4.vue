<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <strong>Hebdomada Sancta Feria 4 - Mercredi saint</strong><p>&nbsp;</p>
                <p><a href="Matitu/4">Ad Matutinem</a></p>
                <p><a href="HoraMajor/4/1">Ad Laudes</a></p>
                <p><a href="HoraMinor/4/3">Ad Tertiam</a></p>
                <p><a href="Missam/4">Ad Missam</a></p>
                <p><a href="HoraMinor/4/6">Ad Sextam</a></p>
                <p><a href="HoraMinor/4/9">Ad Nonam</a></p>
                <p><a href="HoraMajor/4/2">Ad Vesperas</a></p>
                <p><a href="CompletorHebSan/4">Ad Completorium</a></p>
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
    import { IonPage, IonContent } from '@ionic/vue';
    export default ( {
        name: 'officeList3',
        components: { IonContent, IonPage }
    } )
</script>
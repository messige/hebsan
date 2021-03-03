<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <strong>Feria Quinta in Coena Domini - Jeudi Saint</strong><p>&nbsp;</p>
                <p><a href="Completor/0">Ad Matutinem</a></p>
                <p><a href="HoraMajor/5/1">Ad Laudes</a></p>
                <p><a href="HoraMinorTriduum/1/3">Ad Tertiam</a></p>
                <p><a href="HoraMinorTriduum/1/6">Ad Sextam</a></p>
                <p><a href="HoraMinorTriduum/1/9">Ad Nonam</a></p>
                <p><a href="Completor/0">Ad Missam</a></p>
                <p><a href="CompletorTriduum/0">Ad Completorium</a></p>
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
        name: 'officeList5',
        components: { IonContent, IonPage }
    } )
</script>
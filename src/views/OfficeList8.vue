<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <strong>Resurrectio Domini - Dimanche de Pâques</strong><p>&nbsp;</p>
                <p><a href="HoraMajor/8/1">Ad Laudes</a></p>
                <p><a href="Completor/0">Ad Tertiam</a></p>
                <p><a href="Completor/0">Ad Missam</a></p>
                <p><a href="Completor/0">Ad Sextam</a></p>
                <p><a href="Completor/0">Ad Nonam</a></p>
                <p><a href="HoraMajor/8/2">Ad Vesperas</a></p>
                <p><a href="/tabs/tab1">Ad Completorium</a></p>
                <p></p>
                <p><a href="">Home page</a></p>
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
    import { useRoute } from 'vue-router';
    export default ( {
        name: 'CompletorPascha',
        components: { IonContent, IonPage },

        setup() {
          const route     = useRoute();
          const { feastId } = route.params;
          const arrayFeasts = [
            {
              index   : 'TempusPascalis11' ,
              title   : 'Resurrectio Domini',
              titleFr : 'Dimanche de Pâques'
            }
          ] ; 
          const feastCurrent = arrayFeasts [+feastId] ;
          const feastTitle = feastCurrent?.title + " - " + feastCurrent?.titleFr ;
          return  { feastId , feastTitle} ;
        }

    })

</script>
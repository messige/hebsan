<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <strong>{{ feastTitle }}</strong><p>&nbsp;</p>
                <p><a href="Completor/0">Ad Matutinem</a></p>
                <p><a href="Completor/0">Ad Laudes</a></p>
                <p><a href="Completor/0">Ad Tertiam</a></p>
                <p><a href="Completor/0">Ad Missam</a></p>
                <p><a href="Completor/0">Ad Sextam</a></p>
                <p><a href="Completor/0">Ad Nonam</a></p>
                <p><a href="Completor/0">Ad Vesperas</a></p>
                <p><a href="Completor/0">Ad Completorium</a></p>
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
        name: 'officeList',
        components: { IonContent, IonPage },

        setup() {
          const route     = useRoute();
          const { feastId } = route.params;
          const arrayFeasts = [
            {
              index   : 'HebSanFeria1',
              title   : 'Domenica in Palmis', 
              titleFr : 'Dimanche des Rameaux'
            } ,
            {
              index   : 'HebSanFeria2' ,
              title   : 'Hebdomada Sancta Feria 2' , 
              titleFr : 'Lundi saint'
            } ,
            {
              index   : 'HebSanFeria3' ,
              title   : 'Hebdomada Sancta Feria 3',
              titleFr : 'Mardi saint'
            } ,
            {
              index   : 'HebSanFeria4' ,
              title   : 'Hebdomada Sancta Feria 4',
              titleFr : 'Mercredi saint'
            } ,
            {
              index   : 'HebSanFeria5' ,
              title   : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr : 'Jundi saint'
            } ,
            {
              index   : 'HebSanFeria6' ,
              title   : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr : 'Vendredi saint'
            } ,
            {
              index   : 'HebSanFeria7' ,
              title   : 'Sabbato Sancto',
              titleFr : 'Samedi saint'
            } ,
            {
              index   : 'HebPaschaFeria1' ,
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
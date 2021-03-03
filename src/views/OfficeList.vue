<template>
    <ion-page>
        <ion-content>
          <div id="container">
              <strong>{{FeastCurrent.title}} - {{FeastCurrent.titleFr}}</strong>
                <template  v-if="!(feast == 9)">
                  <template  v-if="feast == 1">
                    <p><ion-button color="medium" router-link="/horaMajor/1/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 2">
                    <p><ion-button color="medium" router-link="/horaMajor/2/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 3">
                    <p><ion-button color="medium" router-link="/horaMajor/3/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 4">
                    <p><ion-button color="medium" router-link="/horaMajor/4/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 5">
                    <p><ion-button color="medium" router-link="/horaMajor/5/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 6">
                    <p><ion-button color="medium" router-link="/horaMajor/6/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 7">
                    <p><ion-button color="medium" router-link="/horaMajor/7/1">Ad Laudes</ion-button></p>
                  </template>
                  <template  v-if="feast == 8">
                    <p><ion-button color="warning" router-link="/horaMajor/8/1">Ad Laudes</ion-button></p>
                  </template>                                                                                                                              
                </template>
                <template  v-if="feast < 8">
                  <template  v-if="feast == 1">
                    <p><ion-button color="medium" router-link="/horaMinor/1/3"> Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/1/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/1/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 2">
                    <p><ion-button color="medium" router-link="/horaMinor/2/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/2/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/2/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 3">
                    <p><ion-button color="medium" router-link="/horaMinor/3/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/3/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/3/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 4">
                    <p><ion-button color="medium" router-link="/horaMinor/4/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/4/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/horaMinor/4/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 5">
                    <p><ion-button color="medium" router-link="/horaMinorTriduum/5/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/5/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/5/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 6">
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/6/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/6/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/6/9"> Ad Nonam</ion-button></p>
                  </template>
                  <template  v-if="feast == 7">
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/7/3">Ad Tertiam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/7/6"> Ad Sextam</ion-button></p>
                    <p><ion-button color="medium" router-link="/HoraMinorTriduum/7/9"> Ad Nonam</ion-button></p>
                  </template>
                </template>
                <template  v-if="feast == 9 || feast == 1 ||feast == 2 || feast == 3 || feast == 4 || feast == 8">
                  <template  v-if="feast == 1">
                    <p><ion-button color="medium" router-link="/horaMajor/1/2">Ad Vesperas</ion-button></p>
                  </template>                  
                 </template>
                  <template  v-if="feast == 2">
                    <p><ion-button color="medium" router-link="/horaMajor/2/2">Ad Vesperas</ion-button></p>
                  </template>  
                  <template  v-if="feast == 3">
                    <p><ion-button color="medium" router-link="/horaMajor/3/2">Ad Vesperas</ion-button></p>
                  </template>
                  <template  v-if="feast == 4">
                    <p><ion-button color="medium" router-link="/horaMajor/4/2">Ad Vesperas</ion-button></p>
                  </template> 
                  <template  v-if="feast == 8">
                    <p><ion-button color="warning" router-link="/horaMajor/8/2">Ad Vesperas</ion-button></p>
                  </template>  
                  <template  v-if="feast == 9">
                    <p><ion-button color="medium" router-link="/horaMajor/9/2">Ad Vesperas</ion-button></p>
                  </template>                                                                            
                <template  v-if="feast == 9 || feast == 1 ||feast == 2 || feast == 3 || feast == 4">
                  <template  v-if="feast == 9">
                    <p><ion-button color="medium" router-link="/completorHebSan/9">Ad Completorium</ion-button></p>
                  </template>
                  <template  v-if="feast == 1">
                    <p><ion-button color="medium" router-link="/completorHebSan/1">Ad Completorium</ion-button></p>
                  </template>
                  <template  v-if="feast == 2">
                    <p><ion-button color="medium" router-link="/completorHebSan/2">Ad Completorium</ion-button></p>
                  </template>
                  <template  v-if="feast == 3">
                    <p><ion-button color="medium" router-link="/completorHebSan/3">Ad Completorium</ion-button></p>
                  </template>
                  <template  v-if="feast == 4">
                    <p><ion-button color="medium" router-link="/completorHebSan/4">Ad Completorium</ion-button></p>
                  </template>                                                                                          
                </template>
                <template  v-else-if="feast == 5 || feast == 6"> 
                  <template  v-if="feast == 5">
                    <p><ion-button color="medium" router-link="/CompletorTriduum/0">Ad Completorium</ion-button></p>
                  </template>                  
                  <template  v-if="feast == 6">
                    <p><ion-button color="medium" router-link="/CompletorTriduum/1">Ad Completorium</ion-button></p>
                  </template>   
                </template>
                 <template  v-else-if="feast == 8">
                   <p><ion-button color="warning" router-link="/CompletorPascha/1">Ad Completorium</ion-button></p>
                </template>   
                <p><ion-button color="medium" router-link="/">Hebdomada Sancta - index</ion-button></p>
                <p>&nbsp;</p><p>&nbsp;</p>                
          </div>
        </ion-content>
    </ion-page>
</template>

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

<script lang="ts">

    import { IonPage , IonContent , IonButton } from '@ionic/vue';
    import { useRoute } from 'vue-router';
    export default ( {
        name: 'OfficeList',
        components: { IonPage , IonContent , IonButton },

        setup() {
          const route     = useRoute();
          const  feast   = route.params.feast;
          const arrayFeasts = [
            {
              title     : 'Domenica in Palmis', 
              titleFr   : 'Dimanche des Rameaux' ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 2' , 
              titleFr   : 'Lundi saint' ,       
            } ,
            {
              title     : 'Hebdomada Sancta Feria 3',
              titleFr   : 'Mardi saint' ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 4',
              titleFr   : 'Mercredi saint' ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr   : 'Jeudi saint' ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr   : 'Vendredi saint' ,
            } ,
            {
              title     : 'Sabbato Sancto',
              titleFr   : 'Samedi saint' ,
            } ,
            {
              title     : 'Resurrectio Domini',
              titleFr   : 'Dimanche de Pâques' ,
            } ,
            {
              title     : 'Domenica in Palmis', 
              titleFr   : 'Dimanche des Rameaux - la veille' ,
            } , 
          ] ;  
          const FeastCurrent    = arrayFeasts [+feast-1] ; // Feast is 1 OR 2 while index in table is 0 OR  1
          return  { feast, FeastCurrent } ;
        }

    })

</script>
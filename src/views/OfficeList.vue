<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-header no-border >
          <ion-toolbar>
            <ion-buttons>
              <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
            &nbsp;&nbsp;&nbsp;<strong>{{FeastCurrent.title}}<br />&nbsp;&nbsp;&nbsp;{{FeastCurrent.titleFr}}</strong>
          </ion-toolbar>
        </ion-header>
    
        <div class="content">
           <ion-list> 
            <template  v-if="!(feast == 9)">
              <template  v-if="feast == 1">
                <ion-item><ion-router-link href="/horaMajor/1/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>                   
              </template>
              <template  v-if="feast == 2">
                <ion-item><ion-router-link href="/horaMajor/2/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 3">
                <ion-item><ion-router-link href="/horaMajor/3/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 4">
                <ion-item><ion-router-link href="/horaMajor/4/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 5">
                <ion-item><ion-router-link href="/horaMajor/5/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 6">
                <ion-item><ion-router-link href="/horaMajor/6/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 7">
                <ion-item><ion-router-link href="/horaMajor/7/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 8">
                <ion-item><ion-router-link href="/horaMajor/8/1">Ad Laudes &nbsp; =></ion-router-link></ion-item>   
              </template>                                                                                                                              
            </template>
            <template  v-if="feast < 8">
              <template  v-if="feast == 1">
                <ion-item><ion-router-link href="/horaMinor/1/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/horaMinor/1/6">Ad Sextam &nbsp; =></ion-router-link></ion-item>      
                <ion-item><ion-router-link href="/horaMinor/1/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 2">
                <ion-item><ion-router-link href="/horaMinor/2/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/horaMinor/2/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>      
                <ion-item><ion-router-link href="/horaMinor/2/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 3">
                <ion-item><ion-router-link href="/horaMinor/3/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/horaMinor/3/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>      
                <ion-item><ion-router-link href="/horaMinor/3/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 4">
                <ion-item><ion-router-link href="/horaMinor/4/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/horaMinor/4/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>     
                <ion-item><ion-router-link href="/horaMinor/4/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 5">
                <ion-item><ion-router-link href="/horaMinorTriduum/5/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/HoraMinorTriduum/5/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>     
                <ion-item><ion-router-link href="/HoraMinorTriduum/5/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 6">
                <ion-item><ion-router-link href="/HoraMinorTriduum/6/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/HoraMinorTriduum/6/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>     
                <ion-item><ion-router-link href="/HoraMinorTriduum/6/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 7">
                <ion-item><ion-router-link href="/HoraMinorTriduum/7/3">Ad Tertiam &nbsp; =></ion-router-link></ion-item>   
                <ion-item><ion-router-link href="/HoraMinorTriduum/7/6"> Ad Sextam &nbsp; =></ion-router-link></ion-item>      
                <ion-item><ion-router-link href="/HoraMinorTriduum/7/9"> Ad Nonam &nbsp; =></ion-router-link></ion-item>   
              </template>
            </template>
            <template  v-if="feast == 9 || feast == 1 ||feast == 2 || feast == 3 || feast == 4 || feast == 8">
              <template  v-if="feast == 1">
                <ion-item><ion-router-link href="/horaMajor/1/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template>                  
              </template>
              <template  v-if="feast == 2">
                <ion-item><ion-router-link href="/horaMajor/2/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template>  
              <template  v-if="feast == 3">
                <ion-item><ion-router-link href="/horaMajor/3/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 4">
                <ion-item><ion-router-link href="/horaMajor/4/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template> 
              <template  v-if="feast == 8">
                <ion-item><ion-router-link href="/horaMajor/8/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template>  
              <template  v-if="feast == 9">
                <ion-item><ion-router-link href="/horaMajor/9/2">Ad Vesperas &nbsp; =></ion-router-link></ion-item>   
              </template>                                                                            
            <template  v-if="feast == 9 || feast == 1 || feast == 2 || feast == 3 || feast == 4">
              <template  v-if="feast == 9">
                <ion-item><ion-router-link href="/completorHebSan/9">Ad Completorium &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 1">
                <ion-item><ion-router-link href="/completorHebSan/1">Ad Completorium &nbsp; =></ion-router-link></ion-item>    
              </template>
              <template  v-if="feast == 2">
                <ion-item><ion-router-link href="/completorHebSan/2">Ad Completorium &nbsp; =></ion-router-link></ion-item>     
              </template>
              <template  v-if="feast == 3">
                <ion-item><ion-router-link href="/completorHebSan/3">Ad Completorium &nbsp; =></ion-router-link></ion-item>   
              </template>
              <template  v-if="feast == 4">
                <ion-item><ion-router-link href="/completorHebSan/4">Ad Completorium &nbsp; =></ion-router-link></ion-item>    
              </template>                                                                                          
            </template>
            <template  v-else-if="feast == 5 || feast == 6"> 
              <template  v-if="feast == 5">
                <ion-item><ion-router-link href="/CompletorTriduum/0">Ad Completorium &nbsp; =></ion-router-link></ion-item>   
              </template>                  
              <template  v-if="feast == 6">
                <ion-item><ion-router-link href="/CompletorTriduum/1">Ad Completorium &nbsp; =></ion-router-link></ion-item> 
              </template>   
            </template>
              <template  v-else-if="feast == 8">
                <ion-item><ion-router-link href="/CompletorPascha/1">Ad Completorium &nbsp; =></ion-router-link></ion-item> 
            </template>  
          </ion-list>     
           <p><ion-button color="tertiary" router-link="/toni">Toni Communes - Tons communs</ion-button></p> 
            <p>&nbsp;</p><p>&nbsp;</p>                
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>

<style>
@import '../components/css/officii.css';
</style>

<script lang="ts">

    import { IonPage , IonContent , IonButtons , IonButton , IonBackButton , IonToolbar } from '@ionic/vue';
    import { useRoute } from 'vue-router';
    export default ( {
        name: 'OfficeList',
        components: { IonPage , IonContent , IonButtons , IonButton , IonBackButton , IonToolbar },

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
<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="home" /></ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="arrowBackSharp" /></ion-button>
      </ion-toolbar>
      <br />
      <p class="ion-padding-horizontal"><strong>{{feastCurrent?.title}} - {{feastCurrent?.titleFr}}</strong>
      <br class="psalm" />&nbsp;-&nbsp;<strong>{{OfficeTitle}}</strong></p>
      <br />
    </ion-header> 
    <component :is="officeInAdiutorium"/>
    <p>
      <rubrique>Antiphonae</rubrique><br />
      <template v-for="(thisAnt, antID) in officeAnt" :key="antID">
        <ImageDisplay :imgSource = "thisAnt.ant" />
        <component    :is        = "thisAnt.psalm"/>
        <ImageDisplay :imgSource = "thisAnt.ant" /><br />
      </template>
    </p>  
    <p><component :is="officeCapitulum"/></p>  
    <template v-if="officeRespons != null">
      <p> <rubrique>Responsum</rubrique><br />
      <ImageDisplay :imgSource = "officeRespons" /></p>
    </template>
    <p><component :is="officeHymnus"/></p>
    <p>  
      <rubrique>Versus</rubrique><br />
      <ImageDisplay :imgSource = "officeVersus" />
    </p> 
    <p>
      <rubrique>{{officeCantRubr}}</rubrique><br />
      <ImageDisplay :imgSource = "officeCant.ant" /> <br />
      <component :is="officeCant.Cant"/>
      <ImageDisplay :imgSource = "officeCant.ant" /> <br />
    </p>
    <p><ImageDisplay :imgSource = "officeKyrie" /></p>
    <p><component :is="officeOraFinal.Pater"/></p>
    <p><component :is="officeOraFinal.DomVobis"/></p>
    <p><component :is="officeOratio"/></p>
    <p><component :is="officeOraFinal.DomVobis"/></p>
    <ImageDisplay :imgSource = "officeBenedicamusDom" />    
    <p>&nbsp;</p>
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="home" /></ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="arrowBackSharp" /></ion-button>
      </ion-toolbar>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>        
  </ion-content>
</ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonButton , IonIcon } from '@ionic/vue';
  import { useRoute }               from 'vue-router';
  import { defineAsyncComponent }   from 'vue';
  import { home , arrowBackSharp }  from 'ionicons/icons';
  import { ref }                    from 'vue';
  import ImageDisplay               from '@/components/ImageDisplay.vue';
  import { defineComponent }        from 'vue';
  
  export default defineComponent ( {
    name:      'HoraMajor',
    components: { ImageDisplay , IonPage , IonContent , IonButton , IonIcon } ,
    setup() {
      let route    = useRoute () ;
      let feast    = route.params.feast;
      let office   = route.params.office;
      const objLanguage = new String(route.params.language);
      const lowerLang   = objLanguage.toLowerCase( ) ;          
      let arrayFeasts = ref ( [
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux' ,
          arrayOfffice1 : [                                                                     // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntDomDeusAuxiliator.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntCircumdantesCircumdederunt.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps117.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntIudicaCausam.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps062.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntCumAngelisEtPueris.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantTriumPuerorum.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntConfundanturQuiMe.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue') ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntDixitDomDom.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps109.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntMagnaOperaDom.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps110.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntQuiTimetDom.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps111.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntSitNomenDom.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps112.vue') ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntTurbaMulta.jpg" ) ,        // ant. Ad Benedictus Ad Laudes
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntScriptumEstEnim.jpg" ) ,   // ant. Ad Magnificat Ad Vesperas
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },    
        { title     : 'Hebdomada Sancta Feria II' , 
          titleFr   : 'Lundi Saint' , 
          arrayOfffice1 : [                                                                       // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntFaciemMeam.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntFramea2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps005.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAppenderunt.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps035.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntInundaveruntAquae.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantIsaie12.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntLabiaInsurgentibus.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          arrayOfffice2 : [                                                                 // Ad Vesperas
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntNosQuiVivimus.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps113.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntInclinavitDom.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps114.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntCredidiPropter.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps115-116.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntSaepeExpungaverunt.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps128.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntClarificaMe.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntNonHaberes.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },            
        { title     : 'Hebdomada Sancta Feria III',
          titleFr   : 'Mardi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntVideDomEtConsidera.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntDiscerneCausam.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps042.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntDumTribularer.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps056.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntDomVim.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantTriumPuerorum.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntDixeruntImpii.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntDeProfundis.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps129.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntSperetIsrael.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps130.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEtOmnis.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps131.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntEcceQuam.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps132.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntAnteDiemPaschae.jpg" ) ,                   
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } ,      /* same as Feast 1 */
            { ant   : require ( "../assets/g50Antiphona/AntPotestatemHabeo2.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },  
        { title     : 'Hebdomada Sancta Feria IV',
          titleFr   : 'Mercredi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntLiberaMe.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntContumeliasEtTerrores.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps063.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntIpsiVero.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps064.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntOmnesInimici.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Cant1Sam02.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntAlligaDom.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntOmniaQuaecumque.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps134.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntQuoniamInAeternum.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps135.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntHymnumCantate.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps136.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntInConspectuAngelorum.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps137.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntSimonDormis.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntAncillaDixit.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },   
        { title     : 'Hebdomada Sancta Feria V - In Coena Domini',
          titleFr   : 'Jeudi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntIustificerisDom.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntDomTamquam.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps089.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntContritumEst.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps035.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntExhortatusEs.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantEx15.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntOblatusEst.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps146.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntTraditorAutem.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
            { ant : null , ton : null , Cant  : null } ] },
        { title     : 'Hebdomada Sancta Feria VI - In Parasceve',
          titleFr   : 'Vendredi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntProprioFilio.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntAnxiatusEst.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps142.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAitLatro.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps084.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntDumConturbata.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Cant1Hab03.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntMementoMei.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps147.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntPosueruntSuper.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } ,    // // Benedcitus same as Cant51 
            { ant : null , ton : null , Cant  : null } ] },
          
        { title     : 'Sabbato Sancto',
          titleFr   : 'Samedi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntOMors.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps050.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntPlangentEum.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps091.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAttenditeUniversi.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps063.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntAPortaInferi.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantIsaie38.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntOVosOmnes.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps150.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntMulieresSedentes.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } ,      // Benedictus same as 5th feast                                                                    // Benedictus same as 5th feast 
            { ant : null , ton : null , Cant  : null } ] },
        { title   : 'Resurrectio Domini',
          titleFr : 'Dimanche de Pâques' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps092.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps099.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps062.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntPraeTimore.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantTriumPuerorum.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps148149150.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps109.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps110.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps111.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps112.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntEtValdeMane.jpg" ) ,
              Cant  :   defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntEtRespicientes.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantMagnificat.vue' ) ) } ] },
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux - la veille' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , ant   : null , ton   : null , psalm : null } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntRegnumTuum.jpg" ) ,  
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps144.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntLaudaboDeumMeum.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps145.vue' ) ) , } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntDeoNostroIucunda.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps146.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntLaudaIerusalem.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/Ps147.vue' ) ) } ] ,
          arrayCant : [
            { ant   : null , ton : null , Cant : null } , 
            { ant   : require ( "../assets/g50Antiphona/AntPaterIusteMundus.jpg" ) ,
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/' + lowerLang    + '/CantMagnificat.vue' ) ) } ] } ] ) ;
      let feastNum        = +feast ;
      let officeNum       = +office ; 
      let feastCurrent    = arrayFeasts.value [feastNum-1] ; // Feast is 1,2,... while index in table is 0,1,...
      let officeAnt       = feastCurrent?.arrayOfffice1 ;
      if ( officeNum == 2 ) { officeAnt  = feastCurrent?.arrayOfffice2 }
      let officeCant      = feastCurrent?.arrayCant[0] ;
      if ( officeNum == 2 ) { officeCant      = feastCurrent?.arrayCant[1] ; }
      let arrayInAdiutorium  = [
        null ,
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/InAdiutoriumMinorQuad.vue' ) ) , // Feriale Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/InAdiutoriumSolemn.vue' ) ) , // Vesperae Festivo Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/InAdiutoriumMinorPascha.vue' ) ) , //Laudes Tempus paschali
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/InAdiutoriumSolemn.vue' ) )  // Vesperae Tempus paschali
      ] ; 
      let i = 0 ; 
      if ( ( feastNum == 1 && officeNum == 1 ) || feastNum == 2 || feastNum == 3 || feastNum == 4 ) { i = 1 ; }   /* Aux Laudes et aux Vêpres de la féérie  */
      if ( ( feastNum == 1 && officeNum == 2 ) || feastNum == 9 ) {  i = 2 ; }    /* Le Dimanche des Rameaux et la veille aux Vêpres  */
      else if ( feastNum == 8 && officeNum == 1 )  { i = 3 ; }                    /* Le Dimanche de Pâques aux Vêpres  */
      else if ( feastNum == 8 && officeNum == 2 )  { i = 4 ; }                    /* Le Dimanche de Pâques aux Vêpres  */
      let officeInAdiutorium  = arrayInAdiutorium [i] ; 
      let arrayOffices  = [
        { title   : 'Ad Laudes'} ,
        { title   : 'Ad Vesperas' } 
      ] ; 
      let OfficeCurrent       = arrayOffices [+office-1] ;   
      let OfficeTitle         = OfficeCurrent?.title ;
      let arrayCapitulum  = [
        null ,
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapPhilCh02V05.vue' ) ) ,     // Dom. in Palmis
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapIerCh11V19.vue' ) ) ,      // Ad Laudes Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapIerCh11V20.vue' ) ) ,      // Ad Vesperas Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapCor1Ch05V07.vue' ) ) ] ;   // Dom. Resurrectio 
      i = 0 ;  
      if ( feastNum ==  1 || feastNum == 9 ) { i = 1 ; }     
      else if ( feastNum > 1  && feastNum < 5 ) 
        if ( officeNum == 1 ) { i = 2 ; }
        else if ( officeNum == 2 ) { i = 3 ; }  
      else if ( feastNum == 8 ) { i = 4 ; }  
      let officeCapitulum      = arrayCapitulum [i] ;
      let arrayRespons  = [
        null,
        require ( "../assets/g55Responsum/RepErueAFramea2.jpg" ) ,            // Ad Laudes Domenicae in Palmis
        require ("../assets/g55Responsum/RepDeOreLeonis2.jpg" ) ,             // Ad Vesperas Domenicae in Palmis
        require ( "../assets/g55Responsum/RepErueAFramea3.jpg" ) ,            // Ad Laudes Hebdomada Sancta
        require ( "../assets/g55Responsum/RepDeOreLeonis3.jpg" ) ,            // Ad Vesperas Hebdomada Sancta
        require ( "../assets/g55Responsum/RepSurrexitDomDeSepulchro.jpg" ) ,  // Ad Laudes Dom. Resurrectio
        require ( "../assets/g55Responsum/RepSurrexitDomVereSolemn.jpg" )     // Ad Vesperase Dom. Resurrectio
      ] ;
      i = 0 ; 
      if ( feastNum == 1 || feastNum == 9 ) {
        if ( officeNum == 1 ) { i = 1 ; }
        else if ( officeNum == 2 ) { i = 2 ; }   }      
      else if ( feastNum == 2 || feastNum == 3 || feastNum == 4 ) {
        if ( officeNum == 1 )       { i = 3 ; } 
        else if ( officeNum == 2 )  { { i = 4 ; } } }
      else if ( feastNum == 8 ) {
        if ( officeNum == 1 )       { i = 5 ; } 
        else if ( officeNum == 2 )  { i = 6 ; } }
      let officeRespons      = arrayRespons [i] ;
      let arrayHymnus  = [
        null ,
        defineAsyncComponent(() => 
          import ( '@/components/g60Hymnus/HymCruxFidelis.vue' ) ) ,      // Ad Laudes Hebdomada Sancta                          
        defineAsyncComponent(() =>                            
          import ( '@/components/g60Hymnus/HymVexillaRegis.vue' ) ) ,     // Ad Vesperas Hebdomada Sancta
        defineAsyncComponent(() =>                            
          import ( '@/components/g60Hymnus/HymAuroraLucis.vue' ) ) ,      // Ad Laudes Dom. Resurrectio
        defineAsyncComponent(() =>                            
          import ( '@/components/g60Hymnus/HymAdCoenamAgni.vue' ) ) ] ;   // Ad Vesperase Dom. Resurrectio 
      i = 0 ;      
      if ( feastNum < 5 || feastNum == 9 ) {
        if ( officeNum == 1 ) { i = 1 ; }
        else if ( officeNum == 2 ) { i = 2 ; }   }    
      else if (feastNum == 8 ) {
        if ( officeNum == 1 ) { i = 3 ; }
        else if ( officeNum == 2 ) { i = 4 ; }  
      } 
      let officeHymnus  = arrayHymnus [i] ;
      let arrayVersus   = [
        require ( "../assets/g85Versus/VersEripeMeInimicis.jpg" ) ,       // Ad Laudes Hebdomada Sancta
        require ("../assets/g85Versus/VersEripeMeHomine.jpg" ) ,          // Ad Vesperas Hebdomada Sancta
        require ( "../assets/g85Versus/VerHomoPacis.jpg" ) ,              // Feria V
        require ( "../assets/g85Versus/VerCollocavitIn.jpg" ) ,           // Feria VI
        require ( "../assets/g85Versus/VerCaroMea.jpg" ) ,                // Feria VII
        require ( "../assets/g85Versus/VersHaecDies.jpg" )                //  Dom. Resurrectio
      ] ;
      i = 0 ; 
      if ( feastNum < 5 || feastNum == 9 ) {
        if ( officeNum == 2 )   { i = 1 ; } }
      else if ( feastNum > 4 ) { i = feastNum - 3  ; } 
      let officeVersus      = arrayVersus [i] ;
      let officeCantRubr    = null ;
      if ( officeNum == 1 ) {
        officeCantRubr      = "Antiphona ad Benedictus" ;
      } else if ( officeNum == 2 ) {
        officeCantRubr      = "Antiphona ad Magnificat" ;            
      }
      let arrayOratio  = [
        null ,
        defineAsyncComponent(() => 
          import ( '@/components/g80Oratio/OraQuiHumanoGeneri.vue' ) ) ,      // Dom. in Palmis                          
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraUtQuiInTot.vue' ) ) ,          // Feria II Ad Laudes  
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraDaNobisIta.vue' ) ) ,          // Feria III  Ad Laudes
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraQuiProNobisFilium.vue' ) ) ,         // Feria IV Ad Laudes
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraAdBeneficiaRecolenda.vue' ) ) , // Feria II Ad Vesperas
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraTuaNosMisericordia.vue' ) ) ,   // Feria III Ad Vesperas
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraSuperHancFamiliam.vue' ) ) ,    // Feria IV Ad Vesperas
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraSuperHancFamiliamTriduo.vue' ) ) , // Ad Laudes Feria V & Feria VI
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraQuiHodiernaDie.vue' ) )  ] ;       // Dom. Resurrectio   
      i = 0 ; 
      if ( feastNum == 1 || feastNum == 9 ) {  i = 1 ; }  
      else if ( feastNum  < 5 ) {
        if ( officeNum == 1 ) { i = feastNum ; }
        else if ( officeNum == 2 ) { i = feastNum + 3 ; } }    
      else if ( ( feastNum == 5 || feastNum == 6 ) && officeNum == 1 ) {  i = 8 ; }               
      else if (feastNum == 8 ) { i = 9 ; }
      let officeOratio      = arrayOratio [i] ;
      let arrayKyrie  = [ null ,
                          require ( "../assets/g95InOrdineOfficii/KyrieSimplex.jpg" ) ] ; 
      i = 0 ;
      if ( feastNum < 5  || feastNum > 7 )  { i = 1 ; }
      let officeKyrie  = arrayKyrie [i] ;
      let arrayOraFinal  = [
        { Pater     : defineAsyncComponent(() =>                            
                      import ( '@/components/g95InOrdineOfficii/PaterNosterHorMajor.vue' ) )  , // Pater de l'Office
          DomVobis  : defineAsyncComponent(() =>                            
                      import ( '@/components/g95InOrdineOfficii/DominusVobiscum.vue' ) )  } ,
        { Pater     : defineAsyncComponent ( () =>                            
                      import ( '@/components/g95InOrdineOfficii/PaterNosterSilentio.vue' ) )  ,
          DomVobis  : null  } ] ;
      i = 0 ; 
      if ( feastNum >  4 && officeNum < 8  ) { i = 1 ; }   /* Aux Laudes et aux Vêpres du Triduum  */
      let officeOraFinal  = arrayOraFinal[i] ;     
      let arrayBenedicamusDom  = [
        null ,
        require ( "../assets/g95InOrdineOfficii/BenedicamusDominoAdvQuadVigil.jpg" ) ,
        require ( "../assets/g95InOrdineOfficii/BenedicamusDominoPrimVesperis.jpg" ) ,
        require ( "../assets/g95InOrdineOfficii/BenedicamusDominoAdLaudes.jpg" ) ,
        require ( "../assets/g95InOrdineOfficii/BenedicamusDominoSecVesperis.jpg" ) ,        
        require ( "../assets/g95InOrdineOfficii/BenedicamusDominoPascha.jpg" ) ] ; 
      i = 0 ;
      if ( feastNum == 2 || feastNum == 3 || feastNum == 4 ) { i = 1 ; }    /* Aux Laudes et aux Vêpres de la féérie  */
      else if (feastNum == 9 ) { i = 2 ; }             /* La veille des Rameaux  aux Vêpres  */
      else if ( feastNum == 1 ) { 
        if (officeNum == 1 ) { i = 3 ; }          /* Le Dimanche des Rameaux aux Laudes  */
        else if (officeNum == 2 ) { i = 4 ; }     /* Le Dimanche des Rameaux aux Vêpres  */
      } else if (feastNum == 8 ) { i = 5 ; }      /* Le Dimanche de Pâques */
      let officeBenedicamusDom  = arrayBenedicamusDom [i] ; 
      return  { feastCurrent , officeAnt , feast, office , 
                OfficeTitle , officeInAdiutorium , officeCapitulum , officeRespons , 
                officeVersus , officeHymnus , officeCantRubr , officeCant , officeOratio , 
                officeKyrie , officeOraFinal , officeBenedicamusDom , home , arrowBackSharp } 
    }
  })
</script>

<style>
@import '../components/css/officii.css';
</style>
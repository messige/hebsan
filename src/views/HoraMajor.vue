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
        <ImageDisplay :imgSource = "thisAnt.ton" />
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
      <ImageDisplay :imgSource = "officeCant.ton" /> <br />
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
      let arrayFeasts = ref ( [
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux' ,
          arrayOfffice1 : [                                                                     // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntDomDeusAuxiliator.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R02.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntCircumdantesCircumdederunt.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Fa2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps117R18.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntIudicaCausam.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps062R03.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntCumAngelisEtPueris.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntConfundanturQuiMe.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps148149150R10.vue') ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntDixitDomDom.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps109R19.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntMagnaOperaDom.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus32Fb.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps110R20.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntQuiTimetDom.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus41Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps111R07.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntSitNomenDom.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps112R19.vue') ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntTurbaMulta.jpg" ) ,        // ant. Ad Benedictus Ad Laudes
              ton   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR08.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntScriptumEstEnim.jpg" ) ,   // ant. Ad Magnificat Ad Vesperas
              ton   : require ( "../assets/g70Tonus/Tonus08SFa.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR03.vue' ) ) } ] },    
        { title     : 'Hebdomada Sancta Feria II' , 
          titleFr   : 'Lundi Saint' , 
          arrayOfffice1 : [                                                                       // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntFaciemMeam.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R10.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntFramea2.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps005R02.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAppenderunt.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus42Fe.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps035R08.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntInundaveruntAquae.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantIsaie12R03.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntLabiaInsurgentibus.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps148149150R03.vue' ) ) } ] ,
          arrayOfffice2 : [                                                                 // Ad Vesperas
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntNosQuiVivimus.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus19.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps113R14.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntInclinavitDom.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps114R18.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntCredidiPropter.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps115-116R03.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntSaepeExpungaverunt.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps128R01.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntClarificaMe.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR18.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntNonHaberes.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus10Fb.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR07.vue' ) ) } ] },            
        { title     : 'Hebdomada Sancta Feria III',
          titleFr   : 'Mardi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntVideDomEtConsidera.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R19.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntDiscerneCausam.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps042R19.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntDumTribularer.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps056R19.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntDomVim.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus32Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntDixeruntImpii.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps148149150R10.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntDeProfundis.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps129R03.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntSperetIsrael.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps130R04.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEtOmnis.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps131R04.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntEcceQuam.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus01Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps132R18.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntAnteDiemPaschae.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,                            
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR08.vue' ) ) } ,      /* same as Feast 1 */
            { ant   : require ( "../assets/g50Antiphona/AntPotestatemHabeo2.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus10Fb.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR07.vue' ) ) } ] },  
        { title     : 'Hebdomada Sancta Feria IV',
          titleFr   : 'Mercredi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntLiberaMe.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R03.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntContumeliasEtTerrores.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps063R03.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntIpsiVero.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps064R01.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntOmnesInimici.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Cant1Sam02R19.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntAlligaDom.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps148149150R18.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntOmniaQuaecumque.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps134R18.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntQuoniamInAeternum.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps135R18.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntHymnumCantate.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps136R03.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntInConspectuAngelorum.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus05Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps137R04.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntSimonDormis.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR03.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntAncillaDixit.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Fg.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR18.vue' ) ) } ] },   
        { title     : 'Hebdomada Sancta Feria V - In Coena Domini',
          titleFr   : 'Jeudi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntIustificerisDom.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R03SineGloria.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntDomTamquam.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps089R01SineGloria.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntContritumEst.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps035R03SineGloria.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntExhortatusEs.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus10Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantEx15R10SineGloria.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntOblatusEst.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps146R01SineGloria.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntTraditorAutem.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR21SineGloria.vue' ) ) } , 
            { ant : null , ton : null , Cant  : null } ] },
        { title     : 'Hebdomada Sancta Feria VI - In Parasceve',
          titleFr   : 'Vendredi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntProprioFilio.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R19SineGloria.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntAnxiatusEst.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps142R08SineGloria.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAitLatro.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps084R18SineGloria.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntDumConturbata.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Cant1Hab03R18SineGloria.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntMementoMei.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps147R03SineGloria.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntPosueruntSuper.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR21SineGloria.vue' ) ) } ,    // // Benedcitus same as Cant51 
            { ant : null , ton : null , Cant  : null } ] },
          
        { title     : 'Sabbato Sancto',
          titleFr   : 'Samedi Saint' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntOMors.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus41Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps050R11SineGloria.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntPlangentEum.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps091R10SineGloria.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntAttenditeUniversi.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps063R19SineGloria.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntAPortaInferi.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantIsaie38R01SineGloria.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntOVosOmnes.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps150R03SineGloria.vue' ) ) } ] ,
          arrayOfffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntMulieresSedentes.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
              Cant : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR21SineGloria.vue' ) ) } ,      // Benedictus same as 5th feast                                                                    // Benedictus same as 5th feast 
            { ant : null , ton : null , Cant  : null } ] },
        { title   : 'Resurrectio Domini',
          titleFr : 'Dimanche de Pâques' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , 
              ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps092R03.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps099R19.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps062R03.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntPraeTimore.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
            { antID : 5 , 
              ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps148149150R03.vue' ) ) } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps109R03.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps110R19.vue' ) ) } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps111R07.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps112R19.vue' ) ) } ] ,
          arrayCant : [
            { ant   : require ( "../assets/g50Antiphona/AntEtValdeMane.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08SFg.jpg" ) , 
              Cant  :   defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantBenedictusR21.vue' ) ) } , 
            { ant   : require ( "../assets/g50Antiphona/AntEtRespicientes.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus31Fa.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR19.vue' ) ) } ] },
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux - la veille' ,
          arrayOfffice1 : [                                                             // Ad Laudes
            { antID : 1 , ant   : null , ton   : null , psalm : null } ] ,
          arrayOfffice2 : [ 
            { antID : 1 ,
              ant   : require ( "../assets/g50Antiphona/AntRegnumTuum.jpg" ) ,  
              ton   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps144R03.vue' ) ) } ,
            { antID : 2 , 
              ant   : require ( "../assets/g50Antiphona/AntLaudaboDeumMeum.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus12Fe2.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps145R09.vue' ) ) , } ,
            { antID : 3 , 
              ant   : require ( "../assets/g50Antiphona/AntDeoNostroIucunda.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps146R03.vue' ) ) } ,
            { antID : 4 , 
              ant   : require ( "../assets/g50Antiphona/AntLaudaIerusalem.jpg" )  ,
              ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
              psalm : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/Ps147R04.vue' ) ) } ] ,
          arrayCant : [
            { ant   : null , ton : null , Cant : null } , 
            { ant   : require ( "../assets/g50Antiphona/AntPaterIusteMundus.jpg" ) ,
              ton   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) , 
              Cant  : defineAsyncComponent ( () =>                            
                      import ( '@/components/g65Psalmodia/CantMagnificatR23.vue' ) ) } ] } ] ) ;
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
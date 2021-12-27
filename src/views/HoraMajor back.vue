<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong router-link="/"><ion-icon :icon="home"></ion-icon>
        </ion-button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ion-button shape="round" size="small">
            <ion-back-button text="Back" default-href="/home"></ion-back-button>
        </ion-button>
        <br /><br />         
        <ion-title>{{feastCurrent.title}} - {{feastCurrent.titleFr}}
            <br class="smallScreen" />&nbsp;-&nbsp;{{OfficeTitle}}</ion-title>  
      </ion-toolbar> 
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
      <p><rubrique>Responsum</rubrique><br />
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
    <p><component :is="officeOratio"/>
       <component :is="officeOratioConclusio"/></p>
    <p><component :is="officeOraFinal.DomVobis"/></p>
    <ImageDisplay :imgSource = "officeBenedicamusDom" />    
    <br />        
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button
          @click="$router.push({ name: 'OfficeList', params: { feast: feast }})">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
      </ion-toolbar> 
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>      
  </ion-content>
</ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , IonButton , IonIcon , IonBackButton } from '@ionic/vue';
  // import { useRoute }               from 'vue-router';
  import { defineAsyncComponent }   from 'vue';
  // import { reactive  }              from 'vue';
  import { home , arrowBackSharp }         from 'ionicons/icons' ;
  import ImageDisplay               from '../components/ImageDisplay.vue' ;
 // import { ref }                  from 'vue';
  import { useState }               from '../store/store';
  import { defineComponent }        from 'vue';
  import { getHoraMajorAnts }       from '../data/horaMajores'; 
  export default defineComponent ( {
    name:      'HoraMajor',
    components: { IonPage , IonContent , IonHeader , IonToolbar , IonTitle , ImageDisplay , IonButton , IonIcon , IonBackButton } ,
    props: {
      feast: { type: Number , required: true } ,
      office: { type: Number , required: true }
    } , 
    setup ( props ) {
/*       const route    = useRoute () ;
      const myParams = reactive ( route.params ) ;
      const feast    = myParams.feast;
      const office   = myParams.office; 
      const feast      = route.params.feast ;
      const office      = route.params.office ;*/
      //const currentFeast    = '1' ;
      //const feastNum        = +currentFeast ;
      const state         = useState ( ) ;
      let feastNum     = 0 ;
      if ( props.feast == 1 ) {
          feastNum = 1 }
      if ( props.feast == 2 ) {
          feastNum = 2 }
      else if ( props.feast == 3 ) {
          feastNum = 3 }
      else if ( props.feast == 4 ) {
          feastNum = 4 }
      else if ( props.feast == 5 ) {
          feastNum = 5 }                
      else if ( props.feast == 6 ) {
          feastNum = 6 }
      else if ( props.feast == 7 ) {
          feastNum = 7 } 
      else if ( props.feast == 8 ) {
          feastNum = 8 }             
      let officeNum        = 1 ;
      let officeName       = "" ;
      if (  props.office == 1 ) {
          officeNum        = 1 ,
          officeName        = "Ad Laudes" }
      else if ( props.office == 2 ) { 
          officeNum        = 2 ,
          officeName = "Ad Vesperas" }  
      else if ( props.office == 3 ) { 
          officeNum        = 3 ,
          officeName = "Ad Tertiam" }
      else if ( props.office == 6 ) { 
          officeNum        = 6 ,
          officeName = "Ad Sextam" }   
      else if ( props.office == 9 ) { 
          officeNum        = 9 ,
          officeName = "Ad Nonam" } 
      else if ( props.office == 0 ) {
          officeNum        = 9 ,
          officeName = "Ad Completorium" } 

      const feastCurrent  = getHoraMajorAnts ( feastNum ) ; 
      let officeAnt       = feastCurrent.arrayOffice1 ;
      if ( officeNum == 2 ) { officeAnt  = feastCurrent.arrayOffice2 }
      let officeCant      = feastCurrent.arrayCant[0] ;
      if ( officeNum == 2 ) { officeCant      = feastCurrent.arrayCant[1] ; }
      const arrayInAdiutorium  = [
        null ,
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/img/InAdiutoriumMinorQuad.vue' ) ) , // Feriale Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/img/InAdiutoriumSolemn.vue' ) ) , // Vesperae Festivo Quadragesimae
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/img/InAdiutoriumMinorPascha.vue' ) ) , //Laudes Tempus paschali
        defineAsyncComponent(() =>                            
          import ( '@/components/g95InOrdineOfficii/img/InAdiutoriumSolemn.vue' ) )  // Vesperae Tempus paschali
      ] ; 
      let i = 0 ; 
      if ( ( feastNum == 1 && officeNum == 1 ) || feastNum == 2 || feastNum == 3 || feastNum == 4 ) { i = 1 ; }   /* Aux Laudes et aux Vêpres de la féérie  */
      if ( ( feastNum == 1 && officeNum == 2 ) || feastNum == 9 ) {  i = 2 ; }    /* Le Dimanche des Rameaux et la veille aux Vêpres  */
      else if ( feastNum == 8 && officeNum == 1 )  { i = 3 ; }                    /* Le Dimanche de Pâques aux Vêpres  */
      else if ( feastNum == 8 && officeNum == 2 )  { i = 4 ; }                    /* Le Dimanche de Pâques aux Vêpres  */
      const officeInAdiutorium  = arrayInAdiutorium [i] ; 
      const arrayOffices  = [
        { title   : 'Ad Laudes'} ,
        { title   : 'Ad Vesperas' } 
      ] ; 
      const officeCurrent       = arrayOffices [officeNum-1] ;   
      const OfficeTitle         =officeCurrent.title ;
      const arrayCapitulum  = [
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
      const officeCapitulum      = arrayCapitulum [i] ;
      const arrayRespons  = [
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
      const officeRespons      = arrayRespons [i] ;
      const arrayHymnus  = [
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
      const officeHymnus  = arrayHymnus [i] ;
      const arrayVersus   = [
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
      const officeVersus      = arrayVersus [i] ;
      let officeCantRubr    = null ;
      if ( officeNum == 1 ) {
        officeCantRubr      = "Antiphona ad Benedictus" ;
      } else if ( officeNum == 2 ) {
        officeCantRubr      = "Antiphona ad Magnificat" ;            
      }
      const arrayOratioConclusio  = [
        null ,
        defineAsyncComponent(() => 
          import ( '@/components/g80Oratio/PerEundemDominum.vue' ) ) ,       
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/PerDominum.vue' ) ) , 
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/QuiTecum.vue' ) ) ] ; 
      const arrayOratio  = [
        { corpus   : null, 
          conclusio : 0 } ,
         { corpus   : defineAsyncComponent(() => 
          import ( '@/components/g80Oratio/OraQuiHumanoGeneri.vue' ) ) ,      // Dom. in Palmis  
          conclusio : 1 } ,                        
         { corpus   :defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraUtQuiInTot.vue' ) ) ,          // Feria II Ad Laudes
          conclusio : 3 } ,  
         { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraDaNobisIta.vue' ) ) ,          // Feria III  Ad Laudes
           conclusio : 1 } ,
        { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraQuiProNobisFilium.vue' ) ) ,         // Feria IV Ad Laudes
            conclusio : 1 } ,
        { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraAdBeneficiaRecolenda.vue' ) ) , // Feria II Ad Vesperas
          conclusio : 2 } ,
        { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraTuaNosMisericordia.vue' ) ) ,   // Feria III Ad Vesperas
          conclusio :2 } ,
        { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraSuperHancFamiliam.vue' ) ) ,    // Feria IV Ad Vesperas
          conclusio : 3 } ,
        { corpus   : defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraSuperHancFamiliamTriduo.vue' ) ) , // Ad Laudes Feria V & Feria VI
          conclusio : 3 } ,
        { corpus   : defineAsyncComponent(() =>                                    // Dom. Resurrectio               
            import ( '@/components/g80Oratio/OraQuiHodiernaDie.vue' ) ) ,
          conclusio : 1 } ] ;      
      i = 0 ; 
      if ( feastNum == 1 || feastNum == 9 ) {  i = 1 ; }  
      else if ( feastNum  < 5 ) {
        if ( officeNum == 1 ) { i = feastNum ; }
        else if ( officeNum == 2 ) { i = feastNum + 3 ; } }    
      else if ( ( feastNum == 5 || feastNum == 6 ) && officeNum == 1 ) {  i = 8 ; }               
      else if (feastNum == 8 ) { i = 9 ; }
      const officeOratio          = arrayOratio [i].corpus ;
      const officeOratioConclusio = arrayOratioConclusio [ arrayOratio [i].conclusio ] ;
      const arrayKyrieAnt  = [ null ,
        require ( "../assets/g95InOrdineOfficii/KyrieSimplex.jpg" ) ,
        require ( '../assets/g50Antiphona/AntChristusFactusEst5.jpg' ) ,
        require ( '../assets/g50Antiphona/AntChristusFactusEst6.jpg' ) ,
        require ( '../assets/g50Antiphona/AntChristusFactusEst7.jpg' ) ] ; 
      i = 0 ;
      if ( feastNum < 5  || feastNum > 7 )  { i = 1 }
      else if ( feastNum > 4 && feastNum < 8 ) { i = feastNum - 3 } /* Aux Laudes du Triduum  */
      const officeKyrie  = arrayKyrieAnt [i] ;
      const arrayOraFinal  = [
        { Pater     : null  , 
          DomVobis  : null  } ,
        { Pater     : defineAsyncComponent(() =>                            
                      import ( '@/components/g95InOrdineOfficii/img/PaterNosterHoraMajor.vue' ) )  , // Pater de l'Office
          DomVobis  : defineAsyncComponent(() =>                            
                      import ( '@/components/g95InOrdineOfficii/DominusVobiscum.vue' ) )  } ,
        { Pater     : defineAsyncComponent ( () =>                            
                      import ( '@/components/g95InOrdineOfficii/PaterNosterTriduum.vue' ) )  ,
          DomVobis  : null  } ] ;
      i = 0 ; 
      if ( feastNum < 5  || feastNum > 7 ) { i = 1 ; } 
      if ( feastNum ==  5 || feastNum == 6 ) { i = 2 ; }   /* Aux Laudes du jeudi et du vendredi  */
      const officeOraFinal  = arrayOraFinal [i] ;     
      const arrayBenedicamusDom  = [
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
      const officeBenedicamusDom  = arrayBenedicamusDom [i] ;  
      return  { officeNum , officeName , feastCurrent , officeCurrent , officeAnt ,  
                OfficeTitle , officeInAdiutorium , officeCapitulum , officeRespons , 
                officeVersus , officeHymnus , officeCantRubr , officeCant , officeOratio , officeOratioConclusio ,
                officeKyrie , officeOraFinal , officeBenedicamusDom , arrowBackSharp , home , state } 
    }
  } )
</script>
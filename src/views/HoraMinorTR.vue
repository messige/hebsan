<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="home" /></ion-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="arrowBackSharp" /></ion-button>
      </ion-toolbar>
      <br />
      <p class="ion-padding-horizontal"><strong>{{feastCurrent?.title}} - {{feastCurrent?.titleFr}}</strong>
      <br class="psalm" />&nbsp;-&nbsp;<strong>{{OfficeTitle}}</strong></p>
      <br />
    </ion-header>
    <template v-if="feast < 5"> 
      <component :is="officeTemporumLiturgicorum.inAdiutorium"/>
      <ImageDisplay :imgSource = "officeHymnus" />
      <ImageDisplay :imgSource = "officeCurrent.antiphona" />
    </template> 
    <p>
      <component :is="officeCurrent.psalm1"/>
      <component :is="officeCurrent.psalm2"/>              <!-- for the Triduum  -->
    </p>
    <template v-if="feast < 5">
      <ImageDisplay :imgSource = "officeCurrent.antiphona" /> 
    </template>     
      <p><component :is="officeCapitulum"/></p>
    <template v-if="feast < 5">      
      <template v-if="officeRespons != null">
        <p><rubrique>Responsum</rubrique><br />
        <ImageDisplay :imgSource = "officeRespons" /></p>
        <p><rubrique>Versus</rubrique><br />
        <ImageDisplay :imgSource = "officeVersus" /></p>  
      </template>    
      <p><ImageDisplay :imgSource = "officeFinalHora.kyrie" /><br /></p>
    </template>
      <p><component :is="officeFinalHora.pater"/></p>
      <p><component :is="officeFinalHora.vobiscum"/></p>
      <p><component :is="officeOratio"/></p>
      <p><component :is="officeFinalHora.vobiscum"/></p>
      <p> <ImageDisplay :imgSource = "officeTemporumLiturgicorum.benedicamus" /></p>
    <p>&nbsp;</p> 
    <p>&nbsp;</p>
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="home" /></ion-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="arrowBackSharp" /></ion-button>
      </ion-toolbar>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>        
  </ion-content>
</ion-page>
</template>

<script lang="ts">
  import { IonPage , IonContent , IonButton , IonIcon , IonBackButton } from '@ionic/vue';
  import { useRoute }             from 'vue-router';
  import { defineAsyncComponent } from 'vue';
  import { home , arrowBackSharp }  from 'ionicons/icons';
  import ImageDisplay             from '@/components/ImageDisplay.vue';
  import { defineComponent }      from 'vue';
  
  export default defineComponent ( {
    name:      'HoraMinor',
    components: { ImageDisplay , IonPage , IonContent , IonButton , IonIcon , IonBackButton } ,
    setup () {
      const route    = useRoute () ;
      const feast    = route.params.feast ;
      const office   = route.params.office ;
      const objLanguage = new String(route.params.language);
      const lowerLang   = objLanguage.toLowerCase( ) ;       
      let arrayFeasts = [
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : require ( "../assets/g50Antiphona/AntPueriVestimenta2.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : require ( "../assets/g50Antiphona/AntTibiRevelavi.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue'  ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad nonam', 
              antiphona   : require ( "../assets/g50Antiphona/AntInvocabo2.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue' ) ) ,
              psalm2       :null } ] } ,
        { title   : 'Hebdomada Sancta Feria II' , 
          titleFr : 'Lundi Saint' , 
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : require ( "../assets/g50Antiphona/AntFramea2.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : require ( "../assets/g50Antiphona/AntAppenderunt.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue'  ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad nonam', 
              antiphona   : require ( "../assets/g50Antiphona/AntLabiaInsurgentibus.jpg" ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue'  ) ) ,
              psalm2       :null } ] } ,
        { title   : 'Hebdomada Sancta Feria III',
          titleFr : 'Mardi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : require ( "../assets/g50Antiphona/AntAnteDiemPaschae.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : require ( "../assets/g50Antiphona/AntPotestatemHabeo2.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue'  ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad nonam', 
              antiphona   : require ( "../assets/g50Antiphona/AntPotestatemHabeo2.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue'  ) ) ,
              psalm2       :null } ] } ,
        { title     : 'Hebdomada Sancta Feria IV',
          titleFr   : 'Mercredi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : require ( "../assets/g50Antiphona/AntIpsiVeroInVanum2.jpg" ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : require ( "../assets/g50Antiphona/AntAppenderunt.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2       :null } ,
            { titleOffice : 'Ad nonam', 
              antiphona   : require ( "../assets/g50Antiphona/AntLiberaMe.jpg" ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) ,
              psalm2       :null } ] } ,
        { title     : 'Hebdomada Sancta Feria V',
          titleFr   : 'Jeudi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                            
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue') ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } , 
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) } ] } ,
        { title     : 'Hebdomada Sancta Feria VI',
          titleFr   : 'Vendredi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                            
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue') ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } , 
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) } ] } ,
        { title     : 'Hebdomada Sancta Feria VII',
          titleFr   : 'Samedi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                            
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue') ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } , 
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              psalm1       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2       : defineAsyncComponent ( () =>                            
                            import ( '@/components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) }  ] } ] ;
      const feastNum        = +feast ;
      const officeNum       = +office / 3 ; 
      const feastCurrent    = arrayFeasts [feastNum-1] ; // Feast is 1,2,... while index in table is 0,1,...
      let feastOffice     = feastCurrent?.arrayFeastOffices ;
      let officeCurrent   = feastOffice [officeNum-1] ;
      const arrayTemporumLiturgicorum  = [
        { inAdiutorium: null ,
          benedicamus:  null } ,
        { inAdiutorium: defineAsyncComponent(() =>                            
                        import ( '@/components/g95InOrdineOfficii/InAdiutoriumMinorQuad.vue' ) ) ,
          benedicamus:  require ( "../assets/g95InOrdineOfficii/BenedicamusDomSimplex.jpg" ) } ,                                            // Quadragesimae
        { inAdiutorium: defineAsyncComponent(() =>                            
                        import ( '@/components/g95InOrdineOfficii/InAdiutoriumMinorPascha.vue' ) ) , 
          benedicamus:  require ( "../assets/g95InOrdineOfficii/BenedicamusDominoPascha.jpg" ) } ] ;                                             //Tempus paschali 
      let i = 0 ; 
      if ( feastNum < 5 ) { i = 1 ; }   /* Quadragesimae not in Triduum */
      else if  ( feastNum == 8 ) {  i = 2 ; }    /* No hores minores for Dom. Resurectionis but just in case ...  */
      let officeTemporumLiturgicorum  = arrayTemporumLiturgicorum [i] ; 
      const arrayOffices  = [
        { title   : 'Ad tertiam', 
          hymnus  : require ( "../assets/g60Hymnus/HymDeiFide.jpg" ) ,
          respons : require ( "../assets/g55Responsum/RepErueAFramea.jpg" ) ,
          versus  : require ( "../assets/g85Versus/VerDeOreLeonisSimplex.jpg" ) } ,
        { title   : 'Ad Sextam',
          hymnus  : require ( "../assets/g60Hymnus/HymQuaChristusOra.jpg" ) ,
          respons : require ( "../assets/g55Responsum/RepDeOreLeonis.jpg" ),
          versus  : require ( "../assets/g85Versus/VerNePerdasSimplex.jpg" ) } ,
        { title   : 'Ad Nonam',
          hymnus  : require ( "../assets/g60Hymnus/HymTernisTerHoris.jpg" ) ,
          respons : require ( "../assets/g55Responsum/RepNePerdas.jpg" ),
          versus  : require ( "../assets/g85Versus/VersEripeMeSimplex.jpg" ) } ] ; 
      const OfficeCurrent   = arrayOffices [ officeNum - 1 ] ;   // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
      const OfficeTitle     = OfficeCurrent?.title ;
      let officeHymnus    = OfficeCurrent?.hymnus ;
      let officeRespons   = OfficeCurrent?.respons ;
      let officeVersus    = OfficeCurrent?.versus ;
      if ( feastNum >  4 && officeNum < 8  ) { 
          officeHymnus    = null ; 
          officeRespons   = null ;
          officeVersus    = null }  
      const arrayCapitulum  = [
        null ,
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapPhilCh02V05.vue' ) ) ,      // Dom. in Palmis Ad Tertiam
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapPhilCh02V08.vue' ) ) ,      // Dom. in Palmis Ad Sextam
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapPhilCh02V10.vue' ) ) ,      // Dom. in Palmis Ad Nonam
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapIerCh17V13.vue' ) )  ,      // Hebdomada Sancta Ad Tertiam
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapIerCh17V18.vue' ) )  ,      // Hebdomada Sancta Ad Sextam
        defineAsyncComponent(() =>                            
          import ( '@/components/g75Lectio/CapIerCh18V20.vue' ) ) ,
        defineAsyncComponent(() =>                            
            import ( '@/components/g75Lectio/XFactusEstFeria5.vue' ) ) ,        // Feria V 
        defineAsyncComponent(() =>                            
            import ( '@/components/g75Lectio/XFactusEstFeria6.vue' ) ) ,        // Feria VI               
        defineAsyncComponent(() =>                            
            import ( '@/components/g75Lectio/XFactusEstFeria7.vue' ) ) ]        // Feria VII      // Dom. in Palmis Ad Nonam
      i = 0 ;  
      if ( feastNum ==  1 ) { i = officeNum ; }
      else if ( feastNum > 1  && feastNum < 5 ) { i =  officeNum + 3 } 
      else  if ( feastNum > 4  && feastNum < 8 )  { i =  feastNum + 2 }       
      let officeCapitulum      = arrayCapitulum [i] ;
      const arrayOratio  = [
        null ,
        defineAsyncComponent(() => 
          import ( '@/components/g80Oratio/OraQuiHumanoGeneri.vue' ) ) ,      // Dom. in Palmis                          
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraUtQuiInTot.vue' ) ) ,          // Feria II  
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraDaNobisIta.vue' ) ) ,          // Feria III
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraUtQuiNostri.vue' ) ) ,        // Feria IV 
        defineAsyncComponent(() =>                            
            import ( '@/components/g80Oratio/OraSuperHancFamiliamTriduo.vue' ) ) ]   // Feria V, VI, VII       
      i = 0 ; 
      if ( feastNum  < 5 ) { i = feastNum ; }
      else if (  feastNum > 4  && feastNum < 8 ) {  i = 5 ; }      
      let officeOratio      = arrayOratio [i] ;
      const arrayFinalHora  = [
        { kyrie:    require ( "../assets/g95InOrdineOfficii/KyrieSimplex.jpg" )  , 
          pater:    defineAsyncComponent ( () => 
                      import ( '@/components/g95InOrdineOfficii/PaterNosterSilentio.vue' ) ) ,
          vobiscum: defineAsyncComponent ( () => 
                      import ( '@/components/g95InOrdineOfficii/DominusVobiscum.vue' ) ) } ,
        { kyrie:    null ,
          pater:    defineAsyncComponent ( () =>                            
                      import ( '@/components/g95InOrdineOfficii/PaterNosterTriduum.vue' ) )  ,
          vobiscum: null  } ] ;
      i = 0 ; 
      if ( feastNum >  4 && officeNum < 8  ) { i = 1 ; }   /* Triduum  */
      let officeFinalHora  = arrayFinalHora[i] ; 
      return  { feastNum , feastCurrent , feast, office , 
                OfficeTitle , officeTemporumLiturgicorum , officeCurrent ,  
                officeCapitulum , officeRespons , officeVersus , officeHymnus , officeOratio , 
                officeFinalHora , home , arrowBackSharp } 
    }
  })
</script>
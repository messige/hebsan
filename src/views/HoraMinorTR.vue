<template>
<ion-page>
  <ion-content id="container">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button
          @click="$router.push({ name: 'OfficeList', params: { feast: feast }})">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
        <ion-title>{{feastCurrent.title}} - {{feastCurrent.titleFr}}
            <br class="psalm" />&nbsp;-&nbsp;{{typeOffice.title}}</ion-title>  
      </ion-toolbar> 
      <br />
    </ion-header>

    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
      <component    :is="officeTempusLiturgicus1.inAdiutorium"/>
        <ion-grid><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"><ion-text color="tertiary">
                <component   :is = "officeTempusLiturgicus1.inAdiutoriumTR"/>
            </ion-text></ion-col>
        </ion-row></ion-grid> 
      <component    :is="officeTempusLiturgicus2.inAdiutoriumFin"/>
        <ion-grid><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"><ion-text color="tertiary">
                <component   :is = "officeTempusLiturgicus2.inAdiutoriumFinTR"/>
            </ion-text></ion-col>
        </ion-row></ion-grid> 
      <br />  

      <component :is="typeOffice.hymnus"/>
      <component :is="DoxChristumRogamus"/>
      <br />
      <component :is="officeCurrent.antiphona"/>
        <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="officeCurrent.antiphonaTR"/>
        </ion-text></ion-col></ion-row></ion-grid> 
    </template> 
    <p>
      <component :is="officeCurrent.psalm1"/>
      <component :is="officeCurrent.psalm2"/>              <!-- for the Triduum  -->
    </p>
    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
      <component :is="officeCurrent.antiphona"/>
        <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="officeCurrent.antiphonaTR"/>
        </ion-text></ion-col></ion-row></ion-grid> 
    </template> 
    <p> <component :is="officeCapitulum.capitulum"/>
        <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="officeCapitulum.capitulumTR"/>
        </ion-text></ion-col></ion-row></ion-grid>  
    </p>
  <template v-if="feast < 5">      
      <template v-if="typeOffice.respons != null">
        <p><rubrique>Responsum</rubrique><br />
            <component :is="typeOffice.respons"/></p>
        <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="typeOffice.responsTR"/>
        </ion-text></ion-col></ion-row></ion-grid>              
        <p><rubrique>Versus</rubrique><br />
          <component :is="typeOffice.versus"/></p>
          <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="typeOffice.versusTR"/>
        </ion-text></ion-col></ion-row></ion-grid>  
      </template>    
      <p><component :is="officeFinalHora.kyrie"/></p>
    </template>
      <p><component :is="officeFinalHora.pater"/></p>
      <p><component :is="officeFinalHora.vobiscum"/></p>
      <component :is="officeOratio.oratio"/>
        <ion-grid><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"><ion-text color="tertiary">
            <component :is="officeOratio.oratioTR"/>
        </ion-text></ion-col></ion-row></ion-grid>  
      
      <p><component :is="officeFinalHora.vobiscum"/></p>
      <component :is="officeTempusLiturgicus1.benedicamus"/>
      <ion-grid><ion-row>
        <ion-col>&nbsp;</ion-col>
        <ion-col size="11"><ion-text color="tertiary">
          <component :is="officeTempusLiturgicus1.benedicamusTR"/>
      </ion-text></ion-col></ion-row></ion-grid>
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
  import { IonPage , IonContent , IonHeader , IonFooter , IonToolbar , IonTitle , IonButton , IonIcon } from '@ionic/vue';
  import { useRoute }             from 'vue-router';
  import { defineAsyncComponent } from 'vue';
  import { home , arrowBackSharp }  from 'ionicons/icons';
  import { defineComponent }      from 'vue';
  
  export default defineComponent ( {
    name:      'HoraMinor',
    components: { IonPage , IonContent , IonHeader , IonFooter , IonToolbar , IonTitle , IonButton , IonIcon } ,
    setup () {
      const route    = useRoute () ;
      const feast    = route.params.feast ;
      const office   = route.params.office ;
      const objLanguage = new String ( route.params.language ) ;
      const lowerLang   = objLanguage.toLowerCase ( ) ;
      let i               = 0 ;   
      const arrayFeasts = [
        { title   : 'Domenica in Palmis', 
          titleFr : 'Dimanche des Rameaux' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntPueriVestimenta2.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntPueriVestimenta2.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2      : null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntTibiRevelavi.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntTibiRevelavi.vue' ) ) ,
              psalm1       : defineAsyncComponent ( () =>                            
                             import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue'  ) ) ,
              psalm2       : null } ,
            { titleOffice  : 'Ad nonam', 
              antiphona    : defineAsyncComponent ( () =>                            
                             import ( '../components/g50Antiphona/' + 'AntInvocabo2.vue' ) )  ,
              antiphonaTR  : defineAsyncComponent ( () =>                            
                             import ( '../components/g50Antiphona/' + lowerLang  + '/AntInvocabo2.vue' ) )  ,
              psalm1       : defineAsyncComponent ( () =>                            
                             import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue' ) ) ,
              psalm2       : null } ] } ,    
        { title   : 'Hebdomada Sancta Feria II' , 
          titleFr : 'Lundi Saint' , 
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntFramea2.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntFramea2.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2      : null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/'  + 'AntAppenderunt.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntAppenderunt.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue'  ) ) ,
              psalm2      : null } ,    
            { titleOffice : 'Ad nonam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntLabiaInsurgentibus.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntLabiaInsurgentibus.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue'  ) ) ,
              psalm2      : null } ] } ,    
        { title   : 'Hebdomada Sancta Feria III',
          titleFr : 'Mardi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntAnteDiemPaschae.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntAnteDiemPaschae.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2      : null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntPotestatemHabeo2.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntPotestatemHabeo2.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue'  ) ) ,
              psalm2      : null } ,         
            { titleOffice : 'Ad nonam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntPotestatemHabeo2.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntPotestatemHabeo2.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue'  ) ) ,
              psalm2      : null } ] } ,    
        { title     : 'Hebdomada Sancta Feria IV',
          titleFr   : 'Mercredi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntIpsiVeroInVanum2.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntIpsiVeroInVanum2.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) ,
              psalm2      : null } ,
            { titleOffice : 'Ad sextam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntAppenderunt.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntAppenderunt.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2      : null } ,          
            { titleOffice : 'Ad nonam', 
              antiphona   : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + 'AntLiberaMe.vue' ) ) ,
              antiphonaTR : defineAsyncComponent ( () =>                            
                            import ( '../components/g50Antiphona/' + lowerLang  + '/AntLiberaMe.vue' ) ) ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) ,
              psalm2      : null } ] } ,          
        { title     : 'Hebdomada Sancta Feria V',
          titleFr   : 'Jeudi Saint' ,
          arrayFeastOffices  : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                                                  
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue') ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } ,      
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) } ] } ,                 
        { title     : 'Hebdomada Sancta Feria VI',
          titleFr   : 'Vendredi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                                        
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue') ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } , 
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) } ] } ,
        { title     : 'Hebdomada Sancta Feria VII',
          titleFr   : 'Samedi Saint' ,
          arrayFeastOffices : [
            { titleOffice : 'Ad tertiam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D01-04.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D05-08.vue' ) ) } ,                                                
            { titleOffice : 'Ad sextam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D09-12.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D13-16.vue' ) ) } , 
            { titleOffice : 'Ad nonam', 
              antiphona   : null ,
              antiphonaTR : null ,
              psalm1      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D17-19.vue' ) ) ,
              psalm2      : defineAsyncComponent ( () =>                            
                            import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps118D20-22.vue' ) ) } ] } ] ;
      const feastNum        = +feast ;
      const officeNum       = +office / 3 ; 
      const feastCurrent    = arrayFeasts [feastNum-1] ; // Feast is 1,2,... while index in table is 0,1,...
      const feastOffice     = feastCurrent.arrayFeastOffices ;
      const officeCurrent   = feastOffice [officeNum-1] ;


      const arrayTemporumLiturgicorum1  = [
      {   tempus:         "triduum" ,
          inAdiutorium:   null ,
          inAdiutoriumTR: null ,                    
          benedicamus:    null ,
          benedicamusTR:  null } ,
      {   tempus:         "non est triduum" ,
          inAdiutorium:   defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + 'InAdiutorium.vue' ) ) ,
          inAdiutoriumTR: defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + lowerLang  + '/InAdiutorium.vue' ) ) , 
          benedicamus:    defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + 'BenedicamusDom.vue' ) ) ,
          benedicamusTR:    defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + lowerLang  + '/BenedicamusDom.vue' ) ) } ] ; 
      i                   = 0 ;
      if (  feastNum < 5  || feastNum > 7 ) { i = 1 ; }     /* not in Triduum  */     
      const officeTempusLiturgicus1      = arrayTemporumLiturgicorum1 [i] ;
      const arrayTemporumLiturgicorum2   = [
      {   tempus:             "triduum" ,
          inAdiutoriumFin:    null ,
          inAdiutoriumFinTR:  null ,
          benedicamus:        null } ,
      {   tempus:         "quadragesimae" ,
          inAdiutoriumFin: defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + 'LausTibi.vue' ) ) , 
          inAdiutoriumFinTR: defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/' + lowerLang  + '/LausTibi.vue' ) ) } ,
      {   tempus:         "paschali" ,
          inAdiutoriumFin: defineAsyncComponent(() =>                            
                              import ( '../components/g95InOrdineOfficii/Alleluia.vue' ) ) ,
          inAdiutoriumFinTR:  null } ] ;
      i                   = 0 ;
      if (  feastNum < 5 || feastNum == 9 ) { i = 1 ; }            // tempus quadragesimae, not in Triduum
      else if ( feastNum == 8 ) { i = 2 ; }                        // tempus paschali 
      const officeTempusLiturgicus2      = arrayTemporumLiturgicorum2 [i] ;
      const arrayOffices  = [
        { title   : 'Ad tertiam', 
          hymnus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g60Hymnus/' + 'HymDeiFide.vue') ) ,
          respons : defineAsyncComponent ( () =>                            
                      import ( '../components/g55Responsum/' + 'RepErueAFramea.vue' ) ) , 
          responsTR : defineAsyncComponent ( () =>                            
                      import ( '../components/g55Responsum/' + lowerLang  + '/RepErueAFramea.vue' ) ) , 
          versus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + 'DeOreLeonis.vue' ) ) ,
          versusTR: defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + lowerLang  + '/DeOreLeonis.vue' ) )} , 
        { title   : 'Ad Sextam',
          hymnus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g60Hymnus/' + 'HymQuaChristusOra.vue') ) ,
          respons : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + 'DeOreLeonis.vue' ) ) , 
          responsTR : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + lowerLang  + '/DeOreLeonis.vue' ) ) , 
          versus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + 'NePerdas.vue' ) ) ,
          versusTR  : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + lowerLang  + '/NePerdas.vue' ) )} , 
        { title   : 'Ad Nonam',
          hymnus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g60Hymnus/' + 'HymTernisTerHoris.vue') ) ,
          respons : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + 'NePerdas.vue' ) ) , 
          responsTR : defineAsyncComponent ( () =>                            
                      import ( '../components/g00Text/' + lowerLang  + '/NePerdas.vue' ) ) , 
          versus  : defineAsyncComponent ( () =>                            
                      import ( '../components/g85Versus/' + 'VersEripeMeHomine.vue') ) ,
          versusTR  : defineAsyncComponent ( () =>                            
                      import ( '../components/g85Versus/' + lowerLang  + '/VersEripeMeHomine.vue') ) } ] ; 
      const DoxChristumRogamus = defineAsyncComponent ( () =>                            
                      import ( '../components/g60Hymnus/' + 'DoxChristumRogamus.vue') ) ;
      const typeOffice  = arrayOffices [ officeNum - 1 ] ;   // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
      const arrayCapitulum  = [
        { capitulum: null ,
          capitulumTR: null } ,
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapPhilCh02V05.vue' ) ) ,      // Dom. in Palmis Ad Tertiam
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapPhilCh02V05.vue' ) ) } ,      // Dom. in Palmis Ad Tertiam
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapPhilCh02V08.vue' ) ) ,      // Dom. in Palmis Ad Sextam
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapPhilCh02V08.vue' ) ) } , 
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapPhilCh02V10.vue' ) ) ,      // Dom. in Palmis Ad Nonam
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapPhilCh02V10.vue' ) ) } , 
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapIerCh17V13.vue' ) )  ,      // Hebdomada Sancta Ad Tertiam
          capitulumTR: defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapIerCh17V13.vue' ) ) } ,
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapIerCh17V18.vue' ) )  ,      // Hebdomada Sancta Ad Sextam
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapIerCh17V18.vue' ) ) } ,
        { capitulum: defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/CapIerCh18V20.vue' ) ) ,       // Hebdomada Sancta Ad Nonam
          capitulumTR: defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/CapIerCh18V20.vue' ) ) } ,
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/XFactusEstFeria5.vue' ) ) ,        // Feria V 
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/XFactusEstFeria5.vue' ) ) } , 
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/XFactusEstFeria6.vue' ) ) ,        // Feria VI     
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/XFactusEstFeria6.vue' ) ) } ,          
        { capitulum:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/XFactusEstFeria7.vue' ) ) ,
          capitulumTR:  defineAsyncComponent(() =>                            
                      import ( '../components/g75Lectio/' + lowerLang  + '/XFactusEstFeria7.vue' ) ) } ]  ;      // Feria VII
      i = 0 ;  
      if ( feastNum ==  1 ) { i = officeNum ; }
      else if ( feastNum > 1  && feastNum < 5 ) { i =  officeNum + 3 } 
      else  if ( feastNum > 4  && feastNum < 8 )  { i =  feastNum + 2 }       
      const officeCapitulum      = arrayCapitulum [i] ;
      const arrayOratio  = [
        {   oratio :  null ,
            oratioTR : null } ,
        {   oratio :  defineAsyncComponent(() => 
                    import ( '../components/g80Oratio/OraQuiHumanoGeneri.vue' ) ) ,      // Dom. in Palmis 
            oratioTR :defineAsyncComponent(() => 
                    import ( '../components/g80Oratio/' + lowerLang  + '/OraQuiHumanoGeneri.vue' ) ) } ,                                                
        {   oratio :  defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/OraUtQuiInTot.vue' ) ) ,          // Feria II  
            oratioTR :defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/' + lowerLang  + '/OraUtQuiInTot.vue' ) ) } ,         
        {   oratio : defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/OraDaNobisIta.vue' ) ) ,          // Feria III
            oratioTR :defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/' + lowerLang  + '/OraDaNobisIta.vue' ) ) } ,         
        {   oratio : defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/OraUtQuiNostri.vue' ) ) ,        // Feria IV
            oratioTR :defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/' + lowerLang  + '/OraUtQuiNostri.vue' ) ) } ,       
        {   oratio : defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/OraSuperHancFamiliamTriduo.vue' ) ) ,  // Feria V, VI, VII       
            oratioTR :defineAsyncComponent(() =>                            
                    import ( '../components/g80Oratio/' + lowerLang  + '/OraSuperHancFamiliamTriduo.vue' ) ) } ]     
      i = 0 ; 
      if ( feastNum  < 5 ) { i = feastNum ; }
      else if (  feastNum > 4  && feastNum < 8 ) {  i = 5 ; }      
      const officeOratio      = arrayOratio [i] ;
      const arrayFinalHora  = [
        { kyrie:    defineAsyncComponent ( () => 
                      import ( '../components/g95InOrdineOfficii/Kyrie.vue' ) ) ,
          pater:    defineAsyncComponent ( () => 
                      import ( '../components/g95InOrdineOfficii/PaterNosterSilentio.vue' ) ) ,
          vobiscum: defineAsyncComponent ( () => 
                      import ( '../components/g95InOrdineOfficii/DominusVobiscum.vue' ) ) } ,
        { kyrie:    null ,
          pater:    defineAsyncComponent ( () =>                            
                      import ( '../components/g95InOrdineOfficii/PaterNosterTriduum.vue' ) )  ,
          vobiscum: null  } ] ;
      i = 0 ; 
      if ( feastNum >  4 && officeNum < 8  ) { i = 1 ; }   /* Triduum  */
      const officeFinalHora  = arrayFinalHora[i] ; 
      return  { feastNum , feastCurrent , feast, office , 
                typeOffice , officeCurrent , officeTempusLiturgicus1 , officeTempusLiturgicus2 ,
                officeCapitulum , DoxChristumRogamus , officeOratio ,
                officeFinalHora , home , arrowBackSharp } 
    }
  })
</script>
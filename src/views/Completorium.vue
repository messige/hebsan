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
        <br class="psalm" />&nbsp;-&nbsp;<strong>Ad Completorium</strong></p>
    </ion-header>

    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <br />
        <p><ImageDisplay   :imgSource  = "officeTempusLiturgicus1.iube" /></p>  
        <p><ImageDisplay   :imgSource  = "officeTempusLiturgicus1.fratres" /></p>
        <p><img src        = "@/assets/g95InOrdineOfficii/AdiutoriumNostrum.jpg" /></p>        
    </template>
    <p><Confitebor /></p>
    <p><img src         = "@/assets/g95InOrdineOfficii/ConverteNos.jpg" /></p>
    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><ImageDisplay    :imgSource  = "officeTempusLiturgicus2.inAdiutorium" /></p>
        <p><ImageDisplay    :imgSource  = "officeTempusLiturgicus2.ant" /></p>
    </template>
    <p><ImageDisplay    :imgSource  = "officeTempusLiturgicus1.ton" /></p>
    <p><component       :is         = "officeTempusLiturgicus1.ps004"/></p>
    <p><component       :is         = "officeTempusLiturgicus1.ps090"/></p>
    <p><component       :is         = "officeTempusLiturgicus1.ps133"/></p>        
    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><ImageDisplay :imgSource = "officeTempusLiturgicus2.ant" /></p>
        <p><rubrique>Hymnus</rubrique></p>
        <p><ImageDisplay    :imgSource  = "officeTempusLiturgicus2.hymnus" /></p>
        <p><Capitulum /></p>
        <p><rubrique>Responsorium breve</rubrique></p>
        <p><ImageDisplay    :imgSource  = "officeTempusLiturgicus2.responsum" /></p>
        <p><rubrique>Versus</rubrique></p>
        <p><img src = "@/assets/g85Versus/VerCustodiNos.jpg" /></p>                
    </template>
    <p><rubrique>Nunc dimitis</rubrique></p>
    <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><img src = "@/assets/g50Antiphona/AntSalvaNosDomine.jpg" /></p>
        <p><img src = "@/assets/g65Psalmodia/NuncDimittisT32Fb.jpg" /></p>
        <p><img src = "@/assets/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
        <p><img src = "@/assets/g95InOrdineOfficii/PaterNosterSilentio.jpg" /></p>
        <p><DominusVobiscum /></p>
        <p><Oratio /></p>
        <p><DominusVobiscum /></p>        
    </template> 
    <template  v-else> 
        <p><NuncDimittisSineGloria /></p>
        <p>{{ officeLectio }}</p>
        <rubrique>Secreto</rubrique>
        <p>Pater noster ...</p>
        <rubrique>Aliquantulum altius</rubrique> 
        <p><Oratio /></p>
        <rubrique>Et sub silentio concluditur.</rubrique> 
        <p><PerDominum /></p>             
    </template> 
    <p><ImageDisplay :imgSource = "officeTempusLiturgicus1.benedicamus" /></p> 
    <p><ImageDisplay :imgSource = "officeTempusLiturgicus1.aveRegina" /></p> 
    <p>&nbsp;</p>
      <ion-toolbar>
        <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="home" /></ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-button color="primary" shape="round" router-link="/tabs/tab3"><ion-icon :icon="arrowBackSharp" /></ion-button>
      </ion-toolbar>
    <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>           
</ion-content>
</ion-page>
</template>

<script lang="ts"> 
    import { IonPage , IonContent , IonButton , IonIcon , IonBackButton } from '@ionic/vue';
    import { useRoute }             from 'vue-router';
    import { defineAsyncComponent } from 'vue';
    import { ref }                  from 'vue';
    import ImageDisplay             from '@/components/ImageDisplay.vue';
    import { defineComponent }      from 'vue';
    import { home , arrowBackSharp }  from 'ionicons/icons';
    import Confitebor               from '@/components/g95InOrdineOfficii/Confitebor.vue' ;
    import Capitulum                from '@/components/g75Lectio/CapIerCh14V09.vue' ;
    import NuncDimittisSineGloria   from '@/components/g65Psalmodia/NuncDimittisR13SineGloria.vue';    
    import Oratio                   from '@/components/g80Oratio/OraHabitationemIstam.vue' ;
    import DominusVobiscum          from '@/components/g95InOrdineOfficii/DominusVobiscum.vue' ;
    import PerDominum               from '@/components/g80Oratio/PerDominum.vue';
  
    export default defineComponent ( {
        name: 'Completorium',
        components: {   Confitebor , Capitulum , NuncDimittisSineGloria , Oratio , DominusVobiscum , PerDominum ,
                        ImageDisplay ,IonPage , IonContent , IonButton , IonIcon , IonBackButton } ,
        setup ( ) {
            let route       = useRoute ( ) ;
            let feast       = route.params.feast ;
            let arrayFeasts = ref ( [
                {   title   : 'Domenica in Palmis', 
                    titleFr : 'Dimanche des Rameaux' } ,
                {   title   : 'Hebdomada Sancta Feria II' , 
                    titleFr : 'Lundi Saint' } ,
                {   title   : 'Hebdomada Sancta Feria III',
                    titleFr : 'Mardi Saint' } ,
                {   title   : 'Hebdomada Sancta Feria IV',
                    titleFr : 'Mercredi Saint' } ,
                {   title   : 'Hebdomada Sancta Feria V',
                    titleFr : 'jeudi Saint' } ,
                {   title   : 'Hebdomada Sancta Feria VI',
                    titleFr : 'Vendredi Saint' } ,            
                {   title   : 'Hebdomada Sancta Feria VII',
                    titleFr : 'Samedi Saint' } ,
                {   title   : 'Resurrectio Domini',
                    titleFr : 'Dimanche de Pâques' } ,
                {   title   : 'Domenica in Palmis',
                    titleFr : 'Dimanche des Rameaux - la veille' } ] ) ; 
            let feastNum        = +feast ;
            let i               = 0 ;
            let feastCurrent    = arrayFeasts.value [feastNum-1] ; // Feast is 1,2,... while index in table is 0,1,...
            let arrayTemporumLiturgicorum1  = [
            {   tempus:         "triduum" ,
                iube:           null ,                                                  // Triduum
                fratres:        null ,
                ton:            require ( "../assets/g70Tonus/Tonus13Fc.jpg" ) ,        // tonus in directum 
                ps004:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps004R13SineGloria.vue') ) ,   
                ps090:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps090R13SineGloria.vue') ) ,             
                ps133:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps133R13SineGloria.vue') ) , 
                aveRegina:      null ,            
                benedicamus:    null } ,
            {   tempus:         "non est triduum" ,
                iube:           require ( "../assets/g95InOrdineOfficii/IubeDomne.jpg" ) ,
                fratres:        require ( "../assets/g75Lectio/FratresSobrii.jpg" ) ,
                ton:            require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                ps004:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps004R03.vue') ) ,   
                ps090:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps090R03.vue') ) ,             
                ps133:          defineAsyncComponent(() =>                            
                                    import('@/components/g65Psalmodia/Ps133R03.vue') ) ,             
                aveRegina:      require ( "../assets/g50Antiphona/AntAveReginaSimplex.jpg" ) ,
                benedicamus:    require ( "../assets/g95InOrdineOfficii/BenedicamusDomSimplex.jpg" ) } ] ; 
            i                   = 0 ;
            if (  feastNum < 5  || feastNum > 7 ) { i = 1 ; }     /* not in Triduum  */     
            let officeTempusLiturgicus1      = arrayTemporumLiturgicorum1 [i] ;
            let arrayTemporumLiturgicorum2   = [
            {   tempus:         "triduum" ,
                inAdiutorium:   null ,
                ant:            null ,
                hymnus:         null ,
                responsum:      null } ,
            {   tempus:         "quadragesimae" ,
                inAdiutorium:   require ( "../assets/g95InOrdineOfficii/InAdiutoriumCompQuad.jpg" ) ,
                ant:            require ( "../assets/g50Antiphona/AntMiserereMihi.jpg" ) ,
                hymnus:         require ( "../assets/g60Hymnus/HymTeLlucisHebdoSancta.jpg" ) ,
                responsum:      require ( "../assets/g55Responsum/RepInManusTuas.jpg" ) } ,
            {   tempus:         "paschali" ,
                inAdiutorium:   require ( "../assets/g95InOrdineOfficii/InAdiutoriumCompPascha.jpg" ) ,
                ant:            require ( "../assets/g50Antiphona/AntAlleluiaPasqua.jpg" ) ,
                hymnus:         require ( "../assets/g60Hymnus/HymTeLucisTP.jpg" ) ,
                responsum:      require ( "../assets/g55Responsum/RepInManusTuasTP.jpg" ) } ] ;
            i                   = 0 ;
            if (  feastNum < 5 || feastNum == 9 ) { i = 1 ; }            // tempus quadragesimae, not in Triduum
            else if ( feastNum == 8 ) { i = 2 ; }       // tempus paschali 
            let officeTempusLiturgicus2      = arrayTemporumLiturgicorum2 [i] ;
            let arrayLectio = [
            { index         : '5' ,
                lectio      : "Christus factus pro nobis obediens usque ad mortem." } ,
            { index         : '6' ,
                lectio      : "Christus factus pro nobis obediens usque ad mortem, mortem autem crucis." } ] ; 
            let officeLectio    = "" ;
            if (  feastNum == 5 || feastNum == 6 ) {
                officeLectio    = arrayLectio [feastNum - 5].lectio; 
            }                    
            return  {   feastNum , feastCurrent , officeTempusLiturgicus1 , officeTempusLiturgicus2 , 
                        officeLectio , home , arrowBackSharp }
        }
    } )
</script>

<style>
  @import '../components/css/officii.css' ;
</style>
  import { defineAsyncComponent }   from 'vue';  
  export interface OfficeAnt {
    arrayOfffice: {
        antID: number;
       antLA: string ;
        tonPs: string ;
        psalmCant: string ; } [][] ;
    arrayCant: {
       antLA: string ;
        tonPs: string ; 
        cant: string ; } [] ; }
  const arrayFeasts: OfficeAnt [] = [
    { arrayOfffice : [  
      [  { antID : 1 ,antLA   : " " , tonPs   : " " , psalmCant : " " } ] ,     // in Palmis Sabb.
      [
        { antID : 1 ,                                                           // Ad vesperas
         antLA   : require ( "../assets/g50Antiphona/AntRegnumTuum.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps144R03.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntLaudaboDeum.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus12Fe2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps145R09.vue' ) ) , } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntDeoNostro.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps146R03.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntLaudaIerusalem.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps147R04.vue' ) ) } ] ] ,
      arrayCant : [
        {antLA   : " " , tonPs : " " , cant :" " } , 
        {antLA   : require ( "../assets/g50Antiphona/AntPaterIuste.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR23.vue' ) ) } ] } ,      
      { arrayOfffice : [  [                                                       // in Palmis
        { antID : 1 ,                                                             // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntDomDeusAuxiliator.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R02.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntCircumdantesCircumdederunt.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Fa2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps117R18.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntIudicaCausam.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps062R03.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntCumAngelisEtPueris.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantTriumPuerorumR19.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntConfundanturQuiMe.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps148149150R10.vue') ) } ] ,
        [ 
        { antID : 1 ,                                                           // Ad vesperas
         antLA   : require ( "../assets/g50Antiphona/AntDixitDomDom.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps109R19.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntMagnaOperaDom.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus32Fb.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps110R20.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntQuiTimetDom.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus41Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps111R07.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntSitNomenDom.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps112R19.vue' ) ) } ] ] ,
        arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntTurbaMulta.jpg" ) ,        //antLA. Ad Benedictus Ad Laudes
          tonPs   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR08.vue' ) ) } , 
        {antLA   : require ( "../assets/g50Antiphona/AntScriptumEstEnim.jpg" ) ,   //antLA. Ad Magnificat Ad Vesperas
          tonPs   : require ( "../assets/g70Tonus/Tonus08SFa.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR03.vue' ) ) } ] } ,   
      { arrayOfffice : [  [                                                          // Feria II
        { antID : 1 ,                                                                // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntFaciemMeam.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R10.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntFrameaSuscitare.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps005R02.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntAppenderuntMercedem.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus42Fe.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps035R08.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntInundaveruntAquae.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantIsaie12R03.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntLabiaInsurgentium.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps148149150R03.vue' ) ) } ] ,
      [
        { antID : 1 ,                                                           // Ad Vesperas
         antLA   : require ( "../assets/g50Antiphona/AntNosQuiVivimus.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus19.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps113R14.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntInclinavitDom.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps114R18.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntCredidiPropter.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps115-116R03.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntSaepeExpungaverunt.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps128R01.vue' ) ) } ] ] ,
        arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntClarificaMe.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR18.vue' ) ) } , 
        {antLA   : require ( "../assets/g50Antiphona/AntNonHaberes.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus10Fb.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR07.vue' ) ) } ] } ,            
      { arrayOfffice : [  [                                                         // Feria III
        { antID : 1 ,                                                               // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntVideDom.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R19.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntDiscerneCausam.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps042R19.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntDumTribularer.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps056R19.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntDomVim.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus32Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantTriumPuerorumR19.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntDixeruntImpii.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps148149150R10.vue' ) ) } ] ,
      [ 
        { antID : 1 ,                                                                 // Ad Vesperas
         antLA   : require ( "../assets/g50Antiphona/AntDeProfundis.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps129R03.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntSperetIsrael.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps130R04.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntEtOmnis.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps131R04.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntEcceQuam.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps132R18.vue' ) ) } ] ] ,
        arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntAnteDiem.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,                            
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR08.vue' ) ) } ,      /* same as Feast 1 */
        {antLA   : require ( "../assets/g50Antiphona/AntPotestatemHabeo.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus10Fb.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR07.vue' ) ) } ] } , 
      { arrayOfffice : [  [                                                         // Feria IV
        { antID : 1 ,                                                               // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/ANTLiberaMeDeSanguinibus.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R03.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntContumeliasEtTerrores.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps063R03.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntIpsiVero.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps064R01.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntOmnesInimici.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Cant1Sam02R19.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntAlligaDom.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps148149150R18.vue' ) ) } ] ,
      [ 
        { antID : 1 ,                                                                 // Ad Vesperas
         antLA   : require ( "../assets/g50Antiphona/AntOmniaQuaecumque.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps134R18.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntQuoniamInAeternum.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps135R18.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntHymnumCantate.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps136R03.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntInConspectuAngelorum.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus05Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps137R04.vue' ) ) } ] ] ,
        arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntSimonDormis.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR03.vue' ) ) } , 
        {antLA   : require ( "../assets/g50Antiphona/AntAncillaDixit.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Fg.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR18.vue' ) ) } ] },   
      { arrayOfffice : [  [                                                         // Feria V
        { antID : 1 ,                                                               // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntIustificerisDom.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R03SineGloria.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntDomTamquam.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps089R01SineGloria.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntContritumEst.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps035R03SineGloria.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntExhortatusEs.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus10Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantEx15R10SineGloria.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntOblatusEst.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps146R01SineGloria.vue' ) ) } ] ,
      [ { antID : 1 ,antLA : " " , tonPs : " " , psalmCant : " " } ] ] ,           // Ad Vesperas
      arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntTraditorAutem.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
          cant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR21SineGloria.vue' ) ) } , 
        {antLA : " " , tonPs : " " , cant  : " " } ] } , 
      { arrayOfffice : [  [                                                         // Feria VI
        { antID : 1 ,                                                               // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntProprioFilio.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R19SineGloria.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntAnxiatusEst.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps142R08SineGloria.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntAitLatro.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps084R18SineGloria.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntDumConturbata.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Cant1Hab03R18SineGloria.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntMementoMei.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps147R03SineGloria.vue' ) ) } ] ,
      [ { antID : 1 ,antLA : " " , tonPs : " " , psalmCant : " " } ] ] ,                  // Ad Vesperas
      arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntPosueruntSuper.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
          cant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR21SineGloria.vue' ) ) } ,    // // Benedcitus same as Cant51 
        {antLA : " " , tonPs : " " , cant  : " " } ] },
      
        { arrayOfffice : [  [                                                       // Feria VII
        { antID : 1 ,                                                               // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntOMors.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus41Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps050R11SineGloria.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntPlangentEum.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps091R10SineGloria.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntAttenditeUniversi.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps063R19SineGloria.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntAPortaInferi.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantIsaie38R01SineGloria.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntOVosOmnes.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps150R03SineGloria.vue' ) ) } ] ,
       [ { antID : 1 ,antLA : " ", tonPs : " " , psalmCant : " "  } ] ] ,            // Ad Vesperas
       arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntMulieresSedentes.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus01SFg.jpg" )  ,
          cant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR21SineGloria.vue' ) ) } ,      // Benedictus same as 5th feast                                                                    // Benedictus same as 5th feast 
        {antLA : " " , tonPs : " " , cant  : " " } ] },
    { arrayOfffice : [  [                                                         // Resur.
        { antID : 1 ,                                                             // Ad Laudes
         antLA   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps092R03.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps099R19.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps062R03.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntPraeTimore.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantTriumPuerorumR19.vue' ) ) } ,
        { antID : 5 , 
         antLA   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fe.jpg" )  ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps148149150R03.vue' ) ) } ] ,
      [ 
        { antID : 1 ,                                                              // Ad Vesperas
         antLA   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps109R03.vue' ) ) } ,
        { antID : 2 , 
         antLA   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps110R19.vue' ) ) } ,
        { antID : 3 , 
         antLA   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps111R07.vue' ) ) } ,
        { antID : 4 , 
         antLA   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
          psalmCant : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/Ps112R19.vue'  ) ) } ] ] ,
      arrayCant : [
        {antLA   : require ( "../assets/g50Antiphona/AntEtValdeMane.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus08SFg.jpg" ) , 
          cant  :   defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantBenedictusR21.vue' ) ) } , 
        {antLA   : require ( "../assets/g50Antiphona/AntEtRespicientes.jpg" ) ,
          tonPs   : require ( "../assets/g70Tonus/Tonus31Fa.jpg" ) , 
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/la/CantMagnificatR19.vue' ) ) } ] } ]  ;
        export const feastOffices = (feastNum: number) => arrayFeasts [feastNum] ;

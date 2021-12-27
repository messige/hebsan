  import { defineAsyncComponent }   from 'vue';  
  export interface OfficeAnt {
    arrayPsalmody: {
      antID: number ;
      ant: string ;
      antTR: string ;
      psalmTR: string ; }[][] ;  // 2 offices: Ad Laudes, Ad Vesperas + for each 4 or 5 antiphonae and psalmodies
    arrayCant: {
      ant: string ;
      antTR: string ;
      cant: string ; }[] ; }    // 2 offices: Ad Laudes, Ad Vesperas + for each ONE canticle Ad Benedictus or Magnifacat
    const arrayFeasts: OfficeAnt [] = [
      { arrayPsalmody : [  
        [ { antID : 1 , ant  : " " , antTR   : " " , psalmTR : " " } ] ,
        [ { antID : 1 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntRegnumTuum.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntRegnumTuum.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps144.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntLaudaboDeum.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntLaudaboDeum.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps145.vue' ) ) , } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDeoNostro.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDeoNostro.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps146.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntLaudaIerusalem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntLaudaIerusalem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps147.vue' ) ) } ] ] ,
      arrayCant : [
        { ant   : " " , antTR : " " , cant : " " } , 
        { ant   : defineAsyncComponent ( () =>                            
                    import ( '../components/g50Antiphona/AntPaterIuste.vue' ) ) ,
          antTR   : defineAsyncComponent ( () =>                            
                    import ( '../components/g50Antiphona/' + lowerLang  + '/AntPaterIuste.vue' ) ) ,
          cant  : defineAsyncComponent ( () =>                            
                  import ( '../components/g65Psalmodia/' + lowerLang    + '/CantMagnificat.vue' ) ) } ] } ,
      { arrayPsalmody : [  [                                                                   // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDomDeusAuxiliator.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDomDeusAuxiliator.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntCircumdantesCircumdederunt.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntCircumdantesCircumdederunt.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps117.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntIudicaCausam.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntIudicaCausam.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps062.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntCumAngelisEtPueris.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntCumAngelisEtPueris.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantTriumPuerorum.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntConfundanturQuiMe.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntConfundanturQuiMe.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue') ) } ] ,
          [ 
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDixitDomDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDixitDomDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps109.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntMagnaOperaDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntMagnaOperaDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps110.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntQuiTimetDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntQuiTimetDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps111.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntSitNomenDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntSitNomenDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps112.vue') ) } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntTurbaMulta.vue' ) ) ,   // ant. Ad Benedictus Ad Laudes   
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntTurbaMulta.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntScriptumEstEnim.vue' ) ) ,     // ant. Ad Magnificat Ad Vesperas 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntScriptumEstEnim.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] } ,    
      { arrayPsalmody : [  [                                                                      // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntFaciemMeam.vue' ) ) , 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntFaciemMeam.vue' ) ) , 
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntFramea2.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntFramea2.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps005.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAppenderunt.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAppenderunt.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps035.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntInundaveruntAquae.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntInundaveruntAquae.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantIsaie12.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntLabiaInsurgentibus.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntLabiaInsurgentibus.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          [                                                                 // Ad Vesperas
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntNosQuiVivimus.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntNosQuiVivimus.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps113.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntInclinavitDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntInclinavitDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps114.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntCredidiPropter.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntCredidiPropter.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps115-116.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntSaepeExpungaverunt.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntSaepeExpungaverunt.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps128.vue' ) ) } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntClarificaMe.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntClarificaMe.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntNonHaberes.vue' ) ) ,
            antTR  : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntNonHaberes.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },            
      { arrayPsalmody : [  [                                                           // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntVideDomEtConsidera.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntVideDomEtConsidera.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDiscerneCausam.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDiscerneCausam.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps042.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDumTribularer.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDumTribularer.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps056.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDomVim.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDomVim.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantTriumPuerorum.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDixeruntImpii.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDixeruntImpii.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          [ 
          { antID : 1 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDeProfundis.vue' ) ) , 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDeProfundis.vue' ) ) , 
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps129.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntSperetIsrael.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntSperetIsrael.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps130.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEtOmnis.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEtOmnis.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps131.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEcceQuam.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEcceQuam.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps132.vue' ) ) } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAnteDiemPaschae.vue' ) ) ,               
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAnteDiemPaschae.vue' ) ) , 
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } ,      /* same as Feast 1 */
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntPotestatemHabeo2.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntPotestatemHabeo2.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },  
      { arrayPsalmody : [  [                                                            // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntLiberaMe.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntLiberaMe.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntContumeliasEtTerrores.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntContumeliasEtTerrores.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps063.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntIpsiVeroInVanum2.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntIpsiVeroInVanum2.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps064.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntOmnesInimici.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntOmnesInimici.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Cant1Sam02.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAlligaDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAlligaDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps148149150.vue' ) ) } ] ,
          [ 
          { antID : 1 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntOmniaQuaecumque.vue' ) ) , 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntOmniaQuaecumque.vue' ) ) , 
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps134.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntQuoniamInAeternum.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntQuoniamInAeternum.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps135.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntHymnumCantate.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntHymnumCantate.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps136.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntInConspectuAngelorum.vue' ) ) ,              
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntInConspectuAngelorum.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps137.vue' ) ) } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntSimonDormis.vue' ) ) ,
            antTR  : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntSimonDormis.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAncillaDixit.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAncillaDixit.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantMagnificat.vue' ) ) } ] },   
      { arrayPsalmody : [  [                                                             // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntIustificerisDom.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntIustificerisDom.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDomTamquam.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDomTamquam.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps089.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntContritumEst.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntContritumEst.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps035.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntExhortatusEs.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntExhortatusEs.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantEx15.vue' ) ) } ,
          { antID : 5 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntOblatusEst.vue' ) ) ,            
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntOblatusEst.vue' ) ) , 
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps146.vue' ) ) } ] ,
            [ { antID : 1 , ant : " " , antTR : " " , psalmTR : " " } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntTraditorAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntTraditorAutem.vue' ) ) ,
            cant : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/CantBenedictus.vue' ) ) } , 
          { ant : " " , antTR : " " , cant  : " " } ] },
      { arrayPsalmody : [  [                                                            // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntProprioFilio.vue' ) ) , 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntProprioFilio.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps050.vue' ) ) } ,
          { antID : 2 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAnxiatusEst.vue' ) ) ,  
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAnxiatusEst.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps142.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAitLatro.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAitLatro.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang  + '/Ps084.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntDumConturbata.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntDumConturbata.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Cant1Hab03.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntMementoMei.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntMementoMei.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps147.vue' ) ) } ] ,
          [ { antID : 1 , ant : " " , antTR : " " , psalmTR : " " } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntPosueruntSuper.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntPosueruntSuper.vue' ) ) ,
            cant : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } ,    // // Benedcitus same as Cant51 
          { ant : " " , antTR : " " , cant  : " " } ] },
        
      { arrayPsalmody : [  [                                                            // Ad Laudes
          { antID : 1 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntOMors.vue' ) ) , 
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntOMors.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps050.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntPlangentEum.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntPlangentEum.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps091.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAttenditeUniversi.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAttenditeUniversi.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps063.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAPortaInferi.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAPortaInferi.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantIsaie38.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntOVosOmnes.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntOVosOmnes.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps150.vue' ) ) } ] ,
        [ { antID : 1 , ant : " " , antTR : " " , psalmTR : " " } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntMulieresSedentes.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntMulieresSedentes.vue' ) ) ,
            cant : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } ,      // Benedictus same as 5th feast                                                                    // Benedictus same as 5th feast 
          { ant : " " , antTR : " " , cant  : " " } ] },
      { arrayPsalmody : [  [                                                             // Ad Laudes
          { antID : 1 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAngelusAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAngelusAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps092.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEtEcceTerraemotus.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEtEcceTerraemotus.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps099.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEratAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEratAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps062.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntPraeTimore.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntPraeTimore.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantTriumPuerorum.vue' ) ) } ,
          { antID : 5 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntRespondensAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntRespondensAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps148149150.vue' ) ) } ] ,
          [ 
          { antID : 1 ,
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntAngelusAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntAngelusAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps109.vue' ) ) } ,
          { antID : 2 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEtEcceTerraemotus.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEtEcceTerraemotus.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps110.vue' ) ) } ,
          { antID : 3 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEratAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEratAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps111.vue' ) ) } ,
          { antID : 4 , 
            ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntRespondensAutem.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntRespondensAutem.vue' ) ) ,
            psalmTR : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/Ps112.vue' ) ) } ] ] ,
        arrayCant : [
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEtValdeMane.vue' ) ) ,
            antTR   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEtValdeMane.vue' ) ) ,
            cant  :   defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantBenedictus.vue' ) ) } , 
          { ant   : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/AntEtRespicientes.vue' ) ) ,
            antTR  : defineAsyncComponent ( () =>                            
                      import ( '../components/g50Antiphona/' + lowerLang  + '/AntEtRespicientes.vue' ) ) ,
            cant  : defineAsyncComponent ( () =>                            
                    import ( '../components/g65Psalmodia/' + lowerLang    + '/CantMagnificat.vue' ) ) } ] } ] ;
        export const feastOffices = (feastNum: number) => arrayFeasts [feastNum] ;

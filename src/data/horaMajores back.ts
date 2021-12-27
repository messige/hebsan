  import { defineAsyncComponent }   from 'vue';  

/*   Example: Type of Array                 https://www.tutorialsteacher.com/typescript/typescript-interface
        interface NumList {
            [index:number]:number
    }

    let numArr: NumList = [1, 2, 3];
    numArr[0]; 
    numArr[1];*/
    export interface AntPs {
        feastOfficeID: number ;
        ants: Array<{
            antID:      number ;
            ant:        string ;
            ton:        string ;
            psalm:      string ; } > } ;

        const arrayAnts: AntPs[]   = [
            {   feastOfficeID: 2 ,    //feastID: 0 Domenica in Palmis -  - la veille  Ad Vesperas officeID = 2      
                ants: [ 
                    {   antID   : 1 ,             
                        ant     : require ( "../assets/g50Antiphona/AntRegnumTuum.jpg" ) ,  
                        ton     : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
                        psalm   : defineAsyncComponent ( () =>                            
                                    import ( '../components/g65Psalmodia/Ps144R03.vue' ) ) } ,
                    {   antID   : 2 , 
                        ant     : require ( "../assets/g50Antiphona/AntLaudaboDeum.jpg" ) ,
                        ton     : require ( "../assets/g70Tonus/Tonus12Fe2.jpg" ) ,
                        psalm   : defineAsyncComponent ( () =>                            
                                    import ( '../components/g65Psalmodia/Ps145R09.vue' ) ) , } ,
                    {   antID : 3 ,
                        ant   : require ( "../assets/g50Antiphona/AntDeoNostro.jpg" ) ,
                        ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps146R03.vue' ) ) } ,
                    {   antID : 4 , 
                        ant   : require ( "../assets/g50Antiphona/AntLaudaIerusalem.jpg" )  ,
                        ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps147R04.vue' ) ) } ] },
            {   feastOfficeID: 11 ,     // Domenica in Palmis Ad Laudes feastID: 1 officeID = 1      
                ants: [ 
                    {   antID : 1 ,                             
                        ant   : require ( "../assets/g50Antiphona/AntDomDeusAuxiliator.jpg" ) ,  
                        ton   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps050R02.vue' ) ) } ,
                    {   antID : 2 , 
                        ant   : require ( "../assets/g50Antiphona/AntCircumdantesCircumdederunt.jpg" ) ,
                        ton   : require ( "../assets/g70Tonus/Tonus01Fa2.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps117R18.vue' ) ) } ,
                    {   antID : 3 , 
                        ant   : require ( "../assets/g50Antiphona/AntIudicaCausam.jpg" ) ,
                        ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps062R03.vue' ) ) } ,
                    {   antID : 4 , 
                        ant   : require ( "../assets/g50Antiphona/AntCumAngelisEtPueris.jpg" )  ,
                        ton   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
                    {   antID : 5 , 
                        ant   : require ( "../assets/g50Antiphona/AntConfundanturQuiMe.jpg" )  ,
                        ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" )  ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps148149150R10.vue' ) ) } ] },
        {   feastOfficeID: 12 ,     // Domenica in Palmis Ad Vesperas feastID: 1 officeID = 2     
                ants: [ 
                    {   antID : 1 ,                             
                        ant   : require ( "../assets/g50Antiphona/AntDixitDomDom.jpg" ) ,  
                        ton   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps109R19.vue' ) ) } ,
                    {   antID : 2 , 
                        ant   : require ( "../assets/g50Antiphona/AntMagnaOperaDom.jpg" ) ,
                        ton   : require ( "../assets/g70Tonus/Tonus32Fb.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps110R20.vue' ) ) } ,
                    {   antID : 3 , 
                        ant   : require ( "../assets/g50Antiphona/AntQuiTimetDom.jpg" ) ,
                        ton   : require ( "../assets/g70Tonus/Tonus41Fg.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps111R07.vue' ) ) } ,
                    {   antID : 4 , 
                        ant   : require ( "../assets/g50Antiphona/AntSitNomenDom.jpg" )  ,
                        ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
                        psalm : defineAsyncComponent ( () =>                            
                                import ( '../components/g65Psalmodia/Ps112R19.vue') ) } ] ,
    
        {   id        : 2 ,
            title     : 'Hebdomada Sancta Feria II' , 
            titleFr   : 'Lundi Saint' , 
            titleDe   : 'Lundi Saint' , 
            arrayOffice1 : [                                                                       // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntFaciemMeam.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R10.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntFramea2.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps005R02.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntAppenderunt.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus42Fe.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps035R08.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntInundaveruntAquae.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/CantIsaie12R03.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntLabiaInsurgentibus.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps148149150R03.vue' ) ) } ] ,
            arrayOffice2 : [                                                                 // Ad Vesperas
            { antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntNosQuiVivimus.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus19.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps113R14.vue' ) ) } ,
            { antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntInclinavitDom.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps114R18.vue' ) ) } ,
            { antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntCredidiPropter.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps115-116R03.vue' ) ) } ,
            { antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntSaepeExpungaverunt.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps128R01.vue' ) ) } ] },            
        {   id        :  3 ,
            title     : 'Hebdomada Sancta Feria III',
            titleFr   : 'Mardi Saint' ,
            titleDe   : 'Mardi Saint' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntVideDomEtConsidera.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus07Fc2.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R19.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntDiscerneCausam.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps042R19.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntDumTribularer.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps056R19.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntDomVim.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus32Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntDixeruntImpii.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps148149150R10.vue' ) ) } ] ,
            arrayOffice2 : [ 
            {   antID : 1 ,
                ant   : require ( "../assets/g50Antiphona/AntDeProfundis.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps129R03.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntSperetIsrael.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps130R04.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntEtOmnis.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus17Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps131R04.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntEcceQuam.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus01Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps132R18.vue' ) ) } ] ,
},  
        {   id        :  4 ,
            title     : 'Hebdomada Sancta Feria IV',
            titleFr   : 'Mercredi Saint' ,
            titleDe   : 'Mercredi Saint' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntLiberaMe.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R03.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntContumeliasEtTerrores.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps063R03.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntIpsiVero.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps064R01.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntOmnesInimici.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Cant1Sam02R19.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntAlligaDom.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus01Fg2.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps148149150R18.vue' ) ) } ] ,
            arrayOffice2 : [ 
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntOmniaQuaecumque.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps134R18.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntQuoniamInAeternum.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus31Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps135R18.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntHymnumCantate.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps136R03.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntInConspectuAngelorum.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus05Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps137R04.vue' ) ) } ] ,
},   
        {   id        :  5 ,
            title     : 'Hebdomada Sancta Feria V - In Coena Domini',
            titleFr   : 'Jeudi Saint' ,
            titleDe   : 'Jeudi Saint' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntIustificerisDom.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R03SineGloria.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntDomTamquam.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps089R01SineGloria.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntContritumEst.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps035R03SineGloria.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntExhortatusEs.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus10Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/CantEx15R10SineGloria.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntOblatusEst.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps146R01SineGloria.vue' ) ) } ] ,
            arrayOffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
,
        {   id        :  6 ,
            title     : 'Hebdomada Sancta Feria VI - In Parasceve',
            titleFr   : 'Vendredi Saint' ,
            titleDe   : 'Vendredi Saint' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntProprioFilio.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R19SineGloria.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntAnxiatusEst.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus41Fe.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps142R08SineGloria.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntAitLatro.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps084R18SineGloria.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntDumConturbata.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus01Ff.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Cant1Hab03R18SineGloria.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntMementoMei.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps147R03SineGloria.vue' ) ) } ] ,
            arrayOffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] ,
 },
            
        {   id        :  7 ,
            title     : 'Sabbato Sancto',
            titleFr   : 'Samedi Saint' ,
            titleDe   : 'Samedi Saint' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 ,
                ant   : require ( "../assets/g50Antiphona/AntOMors.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus41Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps050R11SineGloria.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntPlangentEum.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus09Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps091R10SineGloria.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntAttenditeUniversi.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fd.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps063R19SineGloria.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntAPortaInferi.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus02Fd2.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/CantIsaie38R01SineGloria.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntOVosOmnes.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fa.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps150R03SineGloria.vue' ) ) } ] ,
            arrayOffice2 : [ { antID : 1 , ant : null , ton : null , psalm : null } ] },
        {   id        :  8 ,
            title   : 'Resurrectio Domini',
            titleFr : 'Dimanche de Pâques' ,
            titleDe : 'Dimanche de Pâques' ,
            arrayOffice1 : [                                                             // Ad Laudes
            {   antID : 1 , 
                ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps092R03.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps099R19.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps062R03.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntPraeTimore.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus07SFa.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/CantTriumPuerorumR19.vue' ) ) } ,
            {   antID : 5 , 
                ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" )  ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps148149150R03.vue' ) ) } ] ,
            arrayOffice2 : [ 
            {   antID : 1 ,
                ant   : require ( "../assets/g50Antiphona/AntAngelusAutem.jpg" ) ,  
                ton   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps109R03.vue' ) ) } ,
            {   antID : 2 , 
                ant   : require ( "../assets/g50Antiphona/AntEtEcceTerraemotus.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus07Fc.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps110R19.vue' ) ) } ,
            {   antID : 3 , 
                ant   : require ( "../assets/g50Antiphona/AntEratAutem.jpg" ) ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fc.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps111R07.vue' ) ) } ,
            {   antID : 4 , 
                ant   : require ( "../assets/g50Antiphona/AntRespondensAutem.jpg" )  ,
                ton   : require ( "../assets/g70Tonus/Tonus08Fg.jpg" ) ,
                psalm : defineAsyncComponent ( () =>                            
                        import ( '../components/g65Psalmodia/Ps112R19.vue' ) ) } ] } ;




              
    
    export const getAnts = ( feastOfficeID: number ) => arrayAnts.find ( m => m.feastOfficeID === feastOfficeID ) ;
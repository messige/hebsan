<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{feastTitle }}</ion-title> 
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col>
              <strong>{{FeastTitle }}</strong>              <strong>{{feastTitle}}</strong><br />
              <strong>{{feastTitleFr}}</strong>            </ion-col>
            <ion-col>
              <ion-button color="tertiary" router-link="/" >Back to Home</ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <strong> {{OfficeTitle}}</strong>
            </ion-col>
            <ion-col>
              <template v-if="feast == 9">
                <ion-button color="tertiary" router-link="/officeList/9">Back to Sabb.</ion-button>  
              </template>
              <template  v-else-if="feast == 1"> 
                <ion-button color="tertiary" router-link="/officeList/1">Back to Dom.</ion-button>  
              </template>          
              <template  v-else-if="feast == 2">
               <ion-button color="tertiary" router-link="/officeList/2">Back to Feria II</ion-button>  
              </template>
              <template  v-else-if="feast == 3">
                <ion-button color="tertiary" router-link="/officeList/3">Back to Feria III</ion-button>  
              </template>
              <template  v-else-if="feast == 4">
                <ion-button color="tertiary" router-link="/officeList/4">Back to Feria IV</ion-button>  
              </template>            
              <template  v-else-if="feast == 5"> 
                <ion-button color="tertiary" router-link="/officeList/5">Back to Feria V</ion-button>               
              </template>
              <template  v-else-if="feast == 6"> 
               <ion-button color="tertiary" router-link="/officeList/6">Back to Feria VI</ion-button>              
              </template>
              <template  v-else-if="feast == 7"> 
                <ion-button color="tertiary" router-link="/officeList/7">Back to Sabb.</ion-button>             
              </template>
              <template  v-else-if="feast == 8"> 
                <ion-button color="tertiary" router-link="/officeList/8">Back to Dom.</ion-button>           
              </template>           
            </ion-col>
          </ion-row>          
        </ion-grid>

        <div class="content">
          <template  v-if="feast == 8">                                                            <!-- Le Dimanche de Pâques aux Vêpres  -->
            <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumSolemn.jpg" />
          </template>
          <template v-else>
          <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumSolemnQuad.jpg" />
          </template>
          <p>
            <rubrique>Antiphona</rubrique><br />
            <template v-if="feast == 1">
              <template v-if="office == 1"> 
                 <p>                                                                                          <!-- Le Dimanche des Rameaux aux Laudes -->
                  <img src="../../public/assets/images/g50Antiphona/AntDomDeusAuxiliatorNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntDomDeusAuxiliator.jpg" /><br />             
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd2.jpg" />
                  <Ps111 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDomDeusAuxiliator.jpg" />   
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntCircumdantesCircumdederuntNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntCircumdantesCircumdederunt.jpg" /><br />     
                  <img src="../../public/assets/images/g70Tonus/Tonus01Fa2.jpg" />
                  <Ps112 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntCircumdantesCircumdederunt.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntIudicaCausamNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntIudicaCausam.jpg" /><br />                  
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" />
                  <Ps113 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntIudicaCausam.jpg" />   
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntCumAngelisEtPuerisNeu.png" /><br />  
                  <img src="../../public/assets/images/g50Antiphona/AntCumAngelisEtPueris.jpg" /><br />   
                  <img src="../../public/assets/images/g70Tonus/Tonus07SFa.jpg" />
                  <Ps114 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntCumAngelisEtPueris.jpg" />   
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntConfundanturQuiMeNeu.png" /><br />  
                  <img src="../../public/assets/images/g50Antiphona/AntConfundanturQuiMe.jpg" /><br /> 
                  <img src="../../public/assets/images/g70Tonus/Tonus09Fa.jpg" />
                  <Ps115 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntConfundanturQuiMe.jpg" />>
                </p>                  
              </template>
              <template  v-else-if="office == 2">                                        <!-- Le Dimanche des Rameaux aux Vêpres -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDixitDomDom.jpg" /><br /> 
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc2.jpg" /><br />
                  <Ps121 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDixitDomDom.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntMagnaOperaDom.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus32Fb.jpg" /><br />
                  <Ps122 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntMagnaOperaDom.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntQuiTimetDom.jpg" /><br /> 
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fg.jpg" /><br />
                  <Ps123 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntQuiTimetDom.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntSitNomenDom.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc.jpg" /><br />
                  <Ps124 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntSitNomenDom.jpg" /> 
                </p>
              </template>
            </template>  
   
            <template v-else-if="feast == 2">
              <template v-if="office == 1">                                                                 <!-- Le Lundi Saint aux Laudes -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTFaciemMeam.png" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus09Fa.jpg" /><br />
                  <Ps211 /><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTFaciemMeam.png" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntFramea2.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps212 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntFramea2.jpg" /> 
                </p>                
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" /><br />
                  <Ps213 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntInundaveruntAquae.png" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps214 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntInundaveruntAquae.png" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntLabiaInsurgentibus.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps215 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntLabiaInsurgentibus.jpg" />
                </p>                   
              </template>
              <template  v-else-if="office == 2">                                                             <!-- Le Lundi Saint aux Vêpres -->
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../public/assets/images/g50Antiphona/AntNosQuiVivimusNeu.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNosQuiVivimus.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus19.jpg" /><br />
                  <Ps221 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNosQuiVivimus.jpg"  />
                </p>  
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../public/assets/images/g50Antiphona/AntInclinavitDomNeu.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntInclinavitDom.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Fg2.jpg" /><br />
                  <Ps222 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntInclinavitDom.jpg" />
                </p> 
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../public/assets/images/g50Antiphona/AntCredidiPropterNeu.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntCredidiPropter.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fa.jpg" /><br />
                  <Ps223 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntCredidiPropter.jpg" />
                </p>                 
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../public/assets/images/g50Antiphona/AntSaepeExpungaveruntNeu.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntSaepeExpungaverunt.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps224 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntSaepeExpungaverunt.jpg" />
                </p>  
              </template>              
            </template>
            <template v-else-if="feast == 3">
              <template v-if="office == 1">                                                                       <!-- Le Mardi Saint aux Laudes -->  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntVideDomEtConsidera.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc2.jpg" /><br />
                  <Ps311 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntVideDomEtConsidera.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDiscerneCausam.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fd.jpg" /><br />
                  <Ps312 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDiscerneCausam.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDumTribularer.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fa.jpg" /><br />
                  <Ps313 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDumTribularer.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDomVim.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus32Fa.jpg" /><br />
                  <Ps314 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDomVim.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDixeruntImpii.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps215 /><br />                                                                                           <!-- same as above --> 
                  <img src="../../public/assets/images/g50Antiphona/AntDixeruntImpii.jpg" />
                </p> 
              </template> 
              <template  v-else-if="office == 2">                                                                       <!-- Le Mardi Saint aux Vêpres -->
                                                          
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDeProfundis.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc2.jpg" /><br />
                  <Ps321 /><br />                                                                                          
                  <img src="../../public/assets/images/g50Antiphona/AntDeProfundis.jpg" /><br />
                </p>                 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntSperetIsrael.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus17Fa.jpg" />
                  <Ps322 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/AntSperetIsrael.jpg" /><br />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntEtOmnis.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus17Fa.jpg" /><br />
                  <Ps323 /><br />                                                                                         
                  <img src="../../public/assets/images/g50Antiphona/AntEtOmnis.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntEcceQuam.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Fa.jpg" /><br />
                  <Ps324 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/AntEcceQuam.jpg" />
                </p> 
              </template>
            </template>   
            <template v-else-if="feast == 4">
              <template v-if="office == 1">                                                                         <!-- Le Mercredi Saint aux Laudes -->        
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntLiberaMe.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps411 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/AntLiberaMe.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTContumeliasEtTerrores.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fa.jpg" /><br />
                  <Ps412 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTContumeliasEtTerrores.jpg" />
                </p>                 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTIpsiVero.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps413 /><br />                                                                                   
                  <img src="../../public/assets/images/g50Antiphona/ANTIpsiVero.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTOmnesInimici.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fa.jpg" /><br />
                  <Ps414 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTOmnesInimici.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAlligaDom.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Fg2.jpg" /><br />
                  <Ps415 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTAlligaDom.jpg" />
                </p>                     
              </template>
              <template  v-else-if="office == 2">                                                               <!-- Le Mercredi Saint aux Vêpres  -->
                <p><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTOmniaQuaecumque.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus31Fg.jpg" /><br />
                  <Ps421 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTOmniaQuaecumque.jpg" />
                </p>                 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTQuoniamInAeternum.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus31Fg.jpg" /><br />
                  <Ps422 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTQuoniamInAeternum.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTHymnumCantate.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps423 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTHymnumCantate.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTInConspectuAngelorum.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus05Fa.jpg" /><br />
                  <Ps424 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTInConspectuAngelorum.jpg" />
                </p>  
              </template>
            </template>  
            <template v-else-if="feast == 5">
              <template v-if="office == 1">                                                                       <!-- Le Jeundi Saint aux Laudes -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTIustificerisDom.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps511 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTIustificerisDom.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTDomTamquam.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps512 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTDomTamquam.jpg" />
                </p>                                   
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTContritumEst.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps513 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTContritumEst.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTExhortatusEs.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus10Fa.jpg" /><br />
                  <Ps514 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTExhortatusEs.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTOblatusEst.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps515 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTOblatusEst.jpg" />
                </p>  
              </template>
            </template>
            <template v-else-if="feast == 6">
              <template v-if="office == 1">                                                                      <!-- Le Vendredi Saint aux Laudes -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTProprioFilio.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc.jpg" /><br />
                  <Ps611 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTProprioFilio.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAnxiatusEst.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" /><br />
                  <Ps612 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTAnxiatusEst.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAitLatro.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" /><br />
                  <Ps613 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTAitLatro.jpg" />
                </p>                                                
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTDumConturbata.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" /><br />
                  <Ps614 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTDumConturbata.jpg" />
                </p>               
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTMementoMei.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps615 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTMementoMei.jpg" />
                </p>                
              </template>
            </template>                                       
            <template v-else-if="feast == 7">
              <template v-if="office == 1">                                                                     <!-- Le Samedi Saint aux Laudes -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTOMors.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fd.jpg" /><br />
                  <Ps711 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTOMors.jpg" />
                </p>  
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTPlangentEum.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus09Fa.jpg" /><br />
                  <Ps712 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTPlangentEum.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAttenditeUniversi.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fd.jpg" /><br />
                  <Ps713 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTAttenditeUniversi.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAPortaInferi.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" /><br />
                  <Ps714 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTAPortaInferi.jpg" />
                </p> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTOVosOmnes.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fa.jpg" /><br />
                  <Ps715 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTOVosOmnes.jpg" />
                </p> 
              </template>
            </template>
            <template v-else-if="feast == 8">
              <template v-if="office == 1">                                                                    <!-- Le Dimanche de Pâques aux Laudes --> 
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAngelusAutem.png" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps811 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTAngelusAutem.png" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEtEcceTerraemotus.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fa.jpg" />
                  <Ps812 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTEtEcceTerraemotus.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEratAutem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" />
                  <Ps813 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTEratAutem.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTPraeTimore.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07SFa.jpg" /><br />
                  <Ps114 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTPraeTimore.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTRespondensAutem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps215 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTRespondensAutem.jpg" />
                </p>                  
              </template>
              <template  v-else-if="office == 2">                                                               <!-- Le Dimanche de Pâques aux Vêpres  -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAngelusAutem.png" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fc.jpg" /><br />
                  <Ps821 /><br />                                                                                           
                  <img src="../../public/assets/images/g50Antiphona/ANTAngelusAutem.png" />
                </p>              
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEtEcceTerraemotus.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus07Fc.jpg" />
                  <Ps822 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTEtEcceTerraemotus.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEratAutem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fc.jpg" />
                  <Ps123 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTEratAutem.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTRespondensAutem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Ps124 /><br />                                                                                            
                  <img src="../../public/assets/images/g50Antiphona/ANTRespondensAutem.jpg" />
                </p>  
              </template>
            </template>
            <template v-else-if="feast == 9">
              <template  v-if="office == 2">                                                                  <!-- La veille des Rameaux aux Vêpres  -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntRegnumTuumNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntRegnumTuum.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fc.jpg" /> 
                  <Ps921 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntRegnumTuum.jpg" /> 
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntLaudaboDeumMeumNeu.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntLaudaboDeumMeum.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus12Fe2.jpg" /> 
                  <Ps922 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntLaudaboDeumMeum.jpg" />
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntDeoNostroIucundaNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntDeoNostroIucunda.jpg" /><br />              
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" />
                  <Ps923 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntDeoNostroIucunda.jpg" />    
                </p>
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntLaudaIerusalem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus17Fa.jpg" />
                  <Ps924 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntLaudaIerusalem.jpg" />
                </p>
              </template>
            </template>  
          </p>             

          <p>
            <template v-if="feast == 1 || feast == 9" >
                <p><Capitulum13 /></p>
            </template>
            <template v-else-if="feast == 2 || feast == 3 || feast == 4">
              <template v-if="office == 1">
                <p><Capitulum21 /></p> 
              </template>
              <template  v-else-if="office == 2">  
                <p><Capitulum22 /></p>
              </template>                
            </template> 
            <template v-else-if="feast == 8">
                <p><Capitulum81 /></p> 
            </template> 
           </p>

          <p>
              <template v-if="feast == 1">
                <template v-if="office == 1">
                  <img src="../../public/assets/images/g55Responsum/RepErueAFramea2.jpg" />
                </template>
                <template  v-else-if="office == 2">  
                  <img src="../../public/assets/images/g55Responsum/RepDeOreLeonis2.jpg" />
                </template>                  
              </template>
              <template  v-else-if="feast == 2 || feast == 3 || feast == 4">
                <template v-if="office == 1">
                  <img src="../../public/assets/images/g55Responsum/RepErueAFramea3.jpg" />
                </template>
                <template  v-else-if="office == 2">  
                  <img src="../../public/assets/images/g55Responsum/RepDeOreLeonis.jpg" />
                </template>                             
              </template>
              <template  v-else-if="feast == 8">
                <template v-if="office == 1">
                  <img src="../../public/assets/images/g55Responsum/RepSurrexitDominusDeSepulchro.jpg" />
                </template>
                <template  v-else-if="office == 2">  
                  <img src="../../public/assets/images/g55Responsum/RepSurrexitDominusVereSolemn.jpg" />
                </template>                             
              </template>
              <template  v-else-if="feast == 9">              
                <img src="../../public/assets/images/g55Responsum/RepDeOreLeonis2.jpg" />
              </template>
          </p>

          <template v-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 9">
            <p>
              <rubrique>Hymnus</rubrique><br />
              <template v-if="office == 1">
                <img src="../../public/assets/images/g60Hymnus/HymCruxFidelis.jpg" /><br />
                <img src="../../public/assets/images/g60Hymnus/HymCruxFidelis2.jpg" /><br />
                <img src="../../public/assets/images/g60Hymnus/HymCruxFidelis3.jpg" />
              </template>
              <template  v-else-if="office == 2">  
                 <img src="../../public/assets/images/g60Hymnus/HymVexillaRegis1.jpg" /><br />
                <img src="../../public/assets/images/g60Hymnus/HymVexillaRegis2.jpg" />
              </template>
            </p>
          </template>
          <template  v-else-if="feast == 8">
            <p>
              <rubrique>Hymnus</rubrique><br />              
              <template v-if="office == 1">
                <img src="../../public/assets/images/g60Hymnus/HymAuroraLucisRutilat.jpg" /><br />
                <img src="../../public/assets/images/g60Hymnus/HymAuroraLucisRutilat2.jpg" />
              </template>
              <template  v-else-if="office == 2">  
                  <img src="../../public/assets/images/g60Hymnus/HymAdCoenamAgni.jpg" /><br />
                  <img src="../../public/assets/images/g60Hymnus/HymAdCoenamAgni2.jpg" /><br />
                  <img src="../../public/assets/images/g60Hymnus/HymAdCoenamAgni3.jpg" />
              </template>
            </p>
          </template>

          <template v-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 9">
            <p>
              <rubrique>Versus</rubrique><br />
                <template v-if="office == 1">
                  <img src="../../public/assets/images/g85Versus/VersEripeMeInimicis.jpg" />
                </template>
                <template  v-else-if="office == 2">              
                  <img src="../../public/assets/images/g85Versus/VersEripeMeHomine.jpg" />
                </template>
            </p> 
          </template>
          <template  v-else-if="feast == 5">   
            <p>
              <rubrique>Versus</rubrique><br />
              <img src="../../public/assets/images/g85Versus/VerHomoPacis.jpg" />
            </p>
          </template>          
          <template  v-else-if="feast == 6">   
            <p>
              <rubrique>Versus</rubrique><br />
              <img src="../../public/assets/images/g85Versus/VerCollocavitIn.jpg" />
            </p>
          </template> 
          <template  v-else-if="feast == 7">   
            <p>
              <rubrique>Versus</rubrique><br />
              <img src="../../public/assets/images/g85Versus/VerCaroMea.jpg" />
            </p>
          </template>                 
          <template  v-else-if="feast == 8">   
            <p>
              <rubrique>Versus</rubrique><br />
              <img src="../../public/assets/images/g85Versus/VersHaecDies.jpg" />
            </p>
          </template> 

          <p>
            <template v-if="office == 1">  
              <rubrique>Antiphona ad Benedictus</rubrique><br />
            </template>          
            <template  v-else-if="office == 2">
              <rubrique>Antiphona ad Magnificat</rubrique><br />                
            </template> 
            <template v-if="feast == 1">
              <template v-if="office == 1">                                                       <!-- Le Dimanche des Rameaux aux Laudes -->
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntTurbaMultaNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntTurbaMulta.jpg" /><br />               
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" />
                  <Cant11 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntTurbaMulta.jpg" /> 
                </p>
              </template>
              <template  v-else-if="office == 2">                                                 <!-- Le Dimanche des Rameaux aux Vêpres -->
                 <p>
                   <img src="../../public/assets/images/g50Antiphona/AntScriptumEstEnim.jpg" /><br /> 
                  <img src="../../public/assets/images/g70Tonus/Tonus08SFa.jpg" /><br /> 
                  <Cant12 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntScriptumEstEnim.jpg" /> 
                 </p>
              </template>
            </template>       
            <template v-else-if="feast == 2">
              <template v-if="office == 1">
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/AntClarificaMe.png" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" /><br />
                  <Cant21 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntClarificaMe.png" /> 
                 </p>
              </template>
              <template  v-else-if="office == 2">                                                     <!-- Le Lundi Saint aux Vêpres -->
                 <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../public/assets/images/g50Antiphona/AntNonHaberesNeu1.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNonHaberes1.jpg" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNonHaberesNeu2.png" /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNonHaberes2.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus10Fb.jpg" /><br />
                  <Cant22 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntNonHaberes.jpg" />
                 </p>
              </template>
            </template>
            <template v-else-if="feast == 3">
              <template v-if="office == 1">                                                           <!-- Le mardi Saint aux Laudes -->
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/AntAnteDiemPaschae.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" /><br />
                  <Cant11 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntAnteDiemPaschae.jpg" />
                 </p>                                                                          
              </template>
              <template  v-else-if="office ==2">                                                      <!-- Le Mardi Saint aux Vêpres -->
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus10Fb.jpg" /><br />
                  <Cant32 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" />
                 </p>   
              </template>
            </template>   
            <template v-else-if="feast == 4">
              <template v-if="office == 1">                                                           <!-- Le Mercredi Saint aux Laudes -->
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTSimonDormis.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /><br />
                  <Cant41 /><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTSimonDormis.jpg" />
                 </p>                
              </template>
              <template  v-else-if="office == 2">                                                     <!-- Le Mercredi Saint aux Vêpres -->
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTAncillaDixit.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01Fg.jpg" /><br />
                  <Cant42 /><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTAncillaDixit.jpg" />
                 </p> 
              </template>
            </template>    
            <template v-else-if="feast == 5">                                                         <!-- Le Jeudi Saint aux Laudes -->
              <template v-if="office == 1">   
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTTraditorAutem.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01SFg.jpg" /><br />
                  <Cant51 /><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTTraditorAutem.jpg" />
                 </p> 
                <p>Christus factus pro nobis obediens usque ad mortem.</p>    
              </template>
            </template>
            <template v-else-if="feast == 6">                                                          <!-- Le Vendredi Saint aux Laudes -->
              <template v-if="office == 1">   
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTPosueruntSuper.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01SFg.jpg" /><br />
                  <Cant51 /><br />
                  <img src="../../public/assets/images/g50Antiphona/ANTPosueruntSuper.jpg" />
                 </p> 
                 <p>Christus factus pro nobis obédiens usque ad mortem,<br />
                    mortem autem crucis.</p>    
              </template>             
            </template>
            <template v-else-if="feast == 7">                                                          <!-- Le Samedi Saint aux Laudes -->
              <template v-if="office == 1">   
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTMulieresSedentes.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus01SFg.jpg" /><br />
                  <Cant51 /><br />                                                                             <!-- Same as above -->
                  <img src="../../public/assets/images/g50Antiphona/ANTMulieresSedentes.jpg" />
                 </p> 
                 <p>Christus factus pro nobis obédiens usque ad mortem,<br />
                    mortem autem crucis.Propter quod et Deus exaltávit illum<br />
                    et dedit illi nomen, quod est super omne nomen.</p>                   
              </template>
            </template>
            <template v-else-if="feast == 8">                                                           <!-- Le Dimanche de Pâques aux Laudes -->
              <template v-if="office == 1">   
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEtValdeMane.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus08SFg.jpg" /><br />
                  <Cant81 /><br />                                                                             <!-- Same as above -->
                  <img src="../../public/assets/images/g50Antiphona/ANTEtValdeMane.jpg" />
                 </p> 
              </template>
              <template  v-else-if="office == 2">                                                        <!-- Le Dimanche de Pâques aux Vêpres -->
                 <p>
                  <img src="../../public/assets/images/g50Antiphona/ANTEtRespicientes.jpg" /><br />
                  <img src="../../public/assets/images/g70Tonus/Tonus31Fa.jpg" /><br />
                  <Cant82 /><br />                                                                             
                  <img src="../../public/assets/images/g50Antiphona/ANTEtRespicientes.jpg" />
                 </p>
              </template>
            </template>     
            <template v-else-if="feast == 9">                                                           <!-- La veille des Rameaux -->
              <template v-if="office == 2">
                <p>
                  <img src="../../public/assets/images/g50Antiphona/AntPaterIusteMundusNeu.png" /><br /> 
                  <img src="../../public/assets/images/g50Antiphona/AntPaterIusteMundus.jpg" /><br />                 
                  <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" />
                  <Cant92 /><br />
                  <img src="../../public/assets/images/g50Antiphona/AntPaterIusteMundus.jpg" />   
                </p>                 
              </template>
            </template>            
          </p>
          <template  v-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 8 || feast == 9" >  
            <p><img src="../../public/assets/images/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
          </template>
          <template  v-if="feast == 5 || feast == 6 || feast == 7"> 
              Pater Noster sub silentio- « à voix basse »
          </template>
          <template   v-else-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 8 || feast == 9" >  
            <p><img src="../../public/assets/images/g95InOrdineOfficii/PaterNosterOfficii.jpg" /></p>
          </template>
          <template  v-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 8 || feast == 9" >           
              <p><DominusVobiscum /></p>
          </template>
          <p>
                                                                                                                 
              <template v-if="feast == 1 || feast == 9">                                                              <!-- Oratio -->
                <p><Oratio1 /></p>
              </template>
              <template  v-else-if="feast == 2">
                <template v-if="office == 1">   
                  <p><Oratio2 /></p>
                </template>
                <template  v-else-if="office ==2"> 
                  <p><Oratio5 /></p>
                </template>                       
              </template>
              <template  v-else-if="feast == 3">            
                <template v-if="office == 1">   
                  <p><Oratio3 /></p>
                </template>
                <template  v-else-if="office ==2"> 
                  <p><Oratio6 /></p>
                </template>  
              </template>
              <template  v-else-if="feast == 4">            
                <template v-if="office == 1">   
                  <p><Oratio4 /></p>
                </template>
                <template  v-else-if="office ==2"> 
                  <p><Oratio7 /></p>
                </template>
              </template>
              <template v-else-if="feast == 5 || feast == 6 || feast == 7" > 
                <p>
                  <Oratio9 />
                </p>
              </template>                
              <template v-else-if="feast == 8">
                <p><Oratio8 /></p>
              </template>
          </p>
          <template  v-if="feast == 1 || feast == 2 || feast == 3 || feast == 4 || feast == 8 || feast == 9" >           
              <p><DominusVobiscum /></p>
          </template>
           
          <template v-if="feast == 9">
             <p><img src="../../public/assets/images/g95InOrdineOfficii/BenedicamusDominoPrimVesperis.jpg" /></p>
          </template>
          <template  v-else-if="feast == 1"> 
            <template v-if="office == 1">   
              <p><img src="../../public/assets/images/g95InOrdineOfficii/BenedicamusDominoAdLaudes.jpg" /></p>
            </template>         
            <template  v-else-if="office ==2"> 
              <p><img src="../../public/assets/images/g95InOrdineOfficii/BenedicamusDominoSecVesperis.jpg" /></p>
            </template>
          </template>          
          <template  v-else-if="feast == 2 || feast == 3 || feast == 4">
            <p><img src="../../public/assets/images/g95InOrdineOfficii/BenedicamusDominoAdvQuadVigil.jpg" /></p>
          </template>
          <template  v-else-if="feast == 8"> 
            <p><img src="../../public/assets/images/g95InOrdineOfficii/BenedicamusDominoPascha.jpg" /></p>
          </template>
          <p>&nbsp;</p>
              <template v-if="feast == 9">
                <ion-button color="tertiary" router-link="/officeList/9">Back to Sabb.</ion-button>  
              </template>
              <template  v-else-if="feast == 1"> 
                <ion-button color="tertiary" router-link="/officeList/1">Back to Dom.</ion-button>  
              </template>          
              <template  v-else-if="feast == 2">
               <ion-button color="tertiary" router-link="/officeList/2">Back to Feria II</ion-button>  
              </template>
              <template  v-else-if="feast == 3">
                <ion-button color="tertiary" router-link="/officeList/3">Back to Feria III</ion-button>  
              </template>
              <template  v-else-if="feast == 4">
                <ion-button color="tertiary" router-link="/officeList/4">Back to Feria IV</ion-button>  
              </template>            
              <template  v-else-if="feast == 5"> 
                <ion-button color="tertiary" router-link="/officeList/5">Back to Feria V</ion-button>               
              </template>
              <template  v-else-if="feast == 6"> 
               <ion-button color="tertiary" router-link="/officeList/6">Back to Feria VI</ion-button>              
              </template>
              <template  v-else-if="feast == 7"> 
                <ion-button color="tertiary" router-link="/officeList/7">Back to Sabb.</ion-button>             
              </template>
              <template  v-else-if="feast == 8"> 
                <ion-button color="tertiary" router-link="/officeList/8">Back to Dom.</ion-button>           
              </template>                         
            <p><ion-button color="tertiary" router-link="/">Back to home</ion-button></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>         
        </div> 
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage , IonContent , IonButton } from '@ionic/vue';
    import { useRoute }      from 'vue-router'; 

    import Ps111             from '@/components/g65Psalmodia/Ps050R02.vue';        // 1st feast 1st office 1st psalm - Dimanche
    import Ps112             from '@/components/g65Psalmodia/Ps117R18.vue';
    import Ps113             from '@/components/g65Psalmodia/Ps062R03.vue';
    import Ps114             from '@/components/g65Psalmodia/CantTriumPuerorumR19.vue';
    import Ps115             from '@/components/g65Psalmodia/Ps148149150R10.vue';
    import Cant11            from '@/components/g65Psalmodia/CantBenedictusR08.vue';  

    import Ps121             from '@/components/g65Psalmodia/Ps109R19.vue';       // 1st feast 2nd office 1st psalm
    import Ps122             from '@/components/g65Psalmodia/Ps110R20.vue'; 
    import Ps123             from '@/components/g65Psalmodia/Ps111R07.vue'; 
    import Ps124             from '@/components/g65Psalmodia/Ps112R19.vue';
    import Cant12            from '@/components/g65Psalmodia/CantMagnificatR03.vue';

    import Ps211             from '@/components/g65Psalmodia/Ps050R10.vue';       // 2nd feast 1st office 1st psalm - Lundi
    import Ps212             from '@/components/g65Psalmodia/Ps005R02.vue'; 
    import Ps213             from '@/components/g65Psalmodia/Ps035R08.vue';  
    import Ps214             from '@/components/g65Psalmodia/CantIsaie12R03.vue'; 
    import Ps215             from '@/components/g65Psalmodia/Ps148149150R03.vue';  
    import Cant21            from '@/components/g65Psalmodia/CantBenedictusR18.vue'; 

    import Ps221             from '@/components/g65Psalmodia/Ps113R14.vue';       // 2nd feast 2nd office 1st psalm
    import Ps222             from '@/components/g65Psalmodia/Ps114R18.vue';
    import Ps223             from '@/components/g65Psalmodia/Ps115116R03.vue'; 
    import Ps224             from '@/components/g65Psalmodia/Ps128R01.vue'; 
    import Cant22            from '@/components/g65Psalmodia/CantMagnificatR07.vue';

    import Ps311             from '@/components/g65Psalmodia/Ps050R19.vue';       // 3rd feast 1st office 1st psalm - Mardi
    import Ps312             from '@/components/g65Psalmodia/Ps042R19.vue';
    import Ps313             from '@/components/g65Psalmodia/Ps056R19.vue';
    import Ps314             from '@/components/g65Psalmodia/CantIsaie38R20.vue';

    import Ps321             from '@/components/g65Psalmodia/Ps129R03.vue';    // 3nd feast 2nd office 1st psalm
    import Ps322             from '@/components/g65Psalmodia/Ps130R04.vue'; 
    import Ps323             from '@/components/g65Psalmodia/Ps131R04.vue'; 
    import Ps324             from '@/components/g65Psalmodia/Ps132R18.vue';
    import Cant32            from '@/components/g65Psalmodia/CantMagnificatR07.vue';

    import Ps411             from '@/components/g65Psalmodia/Ps050R03.vue';    // 4th feast 1st office 1st psalm - Mercredi
    import Ps412             from '@/components/g65Psalmodia/Ps063R03.vue'; 
    import Ps413             from '@/components/g65Psalmodia/Ps064R01.vue';
    import Ps414             from '@/components/g65Psalmodia/Cant1Sam02R19.vue';   
    import Ps415             from '@/components/g65Psalmodia/Ps148149150R18.vue';  
    import Cant41            from '@/components/g65Psalmodia/CantBenedictusR03.vue'; 

    import Ps421             from '@/components/g65Psalmodia/Ps134R18.vue';    // 4th feast 2st office 1st psalm
    import Ps422             from '@/components/g65Psalmodia/Ps135R18.vue';
    import Ps423             from '@/components/g65Psalmodia/Ps136R03.vue'; 
    import Ps424             from '@/components/g65Psalmodia/Ps137R04.vue';  
    import Cant42            from '@/components/g65Psalmodia/CantMagnificatR18.vue'; 

    import Ps511             from '@/components/g65Psalmodia/Ps050R03SineGloria.vue';    // 5th feast 1st office 1st psalm - jeudi
    import Ps512             from '@/components/g65Psalmodia/Ps089R01SineGloria.vue';
    import Ps513             from '@/components/g65Psalmodia/Ps035R03SineGloria.vue';
    import Ps514             from '@/components/g65Psalmodia/CantEx15R10SineGloria.vue';
    import Ps515             from '@/components/g65Psalmodia/Ps146R01SineGloria.vue';
    import Cant51            from '@/components/g65Psalmodia/CantBenedictusR21SineGloria.vue'; 

    import Ps611             from '@/components/g65Psalmodia/Ps050R19SineGloria.vue';    // 6th feast 1st office 1st psalm - vendredi
    import Ps612             from '@/components/g65Psalmodia/Ps142R08SineGloria.vue';
    import Ps613             from '@/components/g65Psalmodia/Ps084R18SineGloria.vue';
    import Ps614             from '@/components/g65Psalmodia/Cant1Hab03R18SineGloria.vue';
    import Ps615             from '@/components/g65Psalmodia/Ps147R03SineGloria.vue';
        // Benedcitus same as Cant51

    import Ps711             from '@/components/g65Psalmodia/Ps050R11SineGloria.vue';    // 7th feast 1st office 1st psalm - samedi
    import Ps712             from '@/components/g65Psalmodia/Ps091R10SineGloria.vue';
    import Ps713             from '@/components/g65Psalmodia/Ps063R19SineGloria.vue';
    import Ps714             from '@/components/g65Psalmodia/CantIsaie38R01SineGloria.vue';
    import Ps715             from '@/components/g65Psalmodia/Ps150R03SineGloria.vue';     // Benedictus same as 5th feast

    import Ps811             from '@/components/g65Psalmodia/Ps092R03.vue';               // 8th feast 1st office 1st psalm - dimanche de Pâques
    import Ps812             from '@/components/g65Psalmodia/Ps099R19.vue';
    import Ps813             from '@/components/g65Psalmodia/Ps062R03.vue';
    import Cant81            from '@/components/g65Psalmodia/CantBenedictusR21.vue'; 

    import Ps821             from '@/components/g65Psalmodia/Ps109R03.vue'; 
    import Ps822             from '@/components/g65Psalmodia/Ps110R19.vue';
    import Cant82            from '@/components/g65Psalmodia/CantMagnificatR19.vue'; 

    import Ps921             from '@/components/g65Psalmodia/Ps144R03.vue';               // 9th feast 2nd office 1st psalm - La veille des Rameaux
    import Ps922             from '@/components/g65Psalmodia/Ps145R09.vue';
    import Ps923             from '@/components/g65Psalmodia/Ps146R03.vue';
    import Ps924             from '@/components/g65Psalmodia/Ps147R04.vue';
    import Cant92            from '@/components/g65Psalmodia/CantMagnificatR23.vue';

    import Capitulum13       from '@/components/g75Lectio/CapPhilCh02V05.vue';
    import Capitulum21       from '@/components/g75Lectio/CapIerCh11V19.vue';
    import Capitulum22       from '@/components/g75Lectio/CapIerCh11V20.vue';
    import Capitulum81       from '@/components/g75Lectio/CapCor1Ch05V07.vue';


    import Oratio1           from '@/components/g80Oratio/OraQuiHumanoGeneri.vue';
    import Oratio2           from '@/components/g80Oratio/OraUtQuiInTot.vue';
    import Oratio3           from '@/components/g80Oratio/OraDaNobisIta.vue';
    import Oratio4           from '@/components/g80Oratio/OraUtQuiNostris.vue';
    import Oratio5           from '@/components/g80Oratio/OraAdBeneficiaRecolenda.vue';
    import Oratio6           from '@/components/g80Oratio/OraTuaNosMisericordia.vue';
    import Oratio7           from '@/components/g80Oratio/OraSuperHancFamíliam.vue';
    import Oratio8           from '@/components/g80Oratio/OraQuiHodiernaDie.vue';
    import Oratio9           from '@/components/g80Oratio/OraSuperHancFamíliamTriduo.vue';

    import DominusVobiscum   from '@/components/g95InOrdineOfficii/DominusVobiscum.vue';
    export default ( {
        name:      'HoraMinor',
        components: { Ps111 , Ps112 , Ps113 , Ps114 , Ps115 , Cant11 ,    // 1st feast 1st office - Dimanche des Rameaux
                      Ps121 , Ps122 , Ps123 , Ps124 , Cant12 ,            // 1st feast 2nd office
                      Ps211 , Ps212 , Ps213 , Ps214 , Ps215 , Cant21 ,    // 2nd feast 1st office - Lundi Saint
                      Ps221 , Ps222 , Ps223 , Ps224 , Cant22 ,            // 2nd feast 2nd office
                      Ps311 , Ps312 , Ps313 , Ps314 ,                     // 3rd feast 1st office - Mardi Saint
                      Ps321 , Ps322 , Ps323 , Ps324 , Cant32 ,            // 3rd feast 2ndt office
                      Ps411 , Ps412 , Ps413 , Ps414 , Ps415 , Cant41 ,    // 4th feast 1st office - Mercredi Saint
                      Ps421 , Ps422 , Ps423 , Ps424 , Cant42 ,            // 4th feast 2ndt office
                      Ps511 , Ps512 , Ps513 , Ps514 , Ps515 , Cant51 ,    // 5th feast 1st office - Jeudi Saint
                      Ps611 , Ps612 , Ps613 , Ps614 , Ps615 ,             // 6th feast 1st office - Vendredi Saint
                      Ps711 , Ps712 , Ps713 , Ps714 , Ps715 ,             // 7th feast 1st office - Samedi Saint
                      Ps811 , Ps812 , Ps813 , Cant81 ,                    // 8th feast 1st office - Dimanche de Pâques
                      Ps821 , Ps822 , Cant82 ,                            // 8th feast 2nd office
                      Ps921 , Ps922 , Ps923 , Ps924 , Cant92 ,            // 9th feast 2nd office - La veille des Rameaux

                      Capitulum13 , Capitulum21 , Capitulum22 , Capitulum81 ,

                      Oratio1 , Oratio2 , Oratio3 , Oratio4 , Oratio5 , Oratio6 , Oratio7 , Oratio8 , Oratio9 ,
                      DominusVobiscum , 
                      IonPage , IonContent , IonButton  } ,
        // props : ["feastOffice"] ,
        setup() {
          const route    = useRoute () ;
          const feast    = route.params.feast;
          const office   = route.params.office;
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
          const feastCurrent    = arrayFeasts [+feast-1] ; // Feast is 1 OR 2 while index in table is 0 OR  1
          const feastTitle      = feastCurrent?.title ;
          const feastTitleFr    = feastCurrent?.titleFr ;
          const arrayOffices  = [
            {
              title   : 'Ad Laudes', 
            } ,
            {
              title   : 'Ad Vesperas',
            } ,
          ] ; 
          const OfficeCurrent = arrayOffices [+office-1] ;   // office is 1 OR 2 while index in table is 0 OR 1 OR 2
          const OfficeTitle   = OfficeCurrent?.title ;  
          return  { feast, office , feastTitle , feastTitleFr , OfficeTitle } ;
        }

    })

</script>

<style>
@import '../components/css/officii.css';
</style>
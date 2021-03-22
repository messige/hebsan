 <template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-header>
        <ion-tab-bar>
          <ion-tab-button><ion-button fill="clear" strong router-link="/">Back to home</ion-button></ion-tab-button> 
          <ion-tab-button> 
            <template v-if="feast == 9">
              <ion-button fill="clear" strong router-link="/officeList/9">Back to Sabb.</ion-button>  
            </template>
            <template  v-else-if="feast == 1"> 
              <ion-button fill="clear" strong router-link="/officeList/1">Back to Dom.</ion-button>  
            </template>          
            <template  v-else-if="feast == 2">
              <ion-button fill="clear" strong router-link="/officeList/2">Back to Feria II</ion-button>  
            </template>
            <template  v-else-if="feast == 3">
              <ion-button fill="clear" strong router-link="/officeList/3">Back to Feria III</ion-button>  
            </template>
            <template  v-else-if="feast == 4">
              <ion-button fill="clear" strong router-link="/officeList/4">Back to Feria IV</ion-button>  
            </template>            
            <template  v-else-if="feast == 5"> 
              <ion-button fill="clear" strong router-link="/officeList/5">Back to Feria V</ion-button>               
            </template>
            <template  v-else-if="feast == 6"> 
              <ion-button fill="clear" strong router-link="/officeList/6">Back to Feria VI</ion-button>              
            </template>
            <template  v-else-if="feast == 7"> 
              <ion-button fill="clear" strong router-link="/officeList/7">Back to Sabb.</ion-button>             
            </template>
            <template  v-else-if="feast == 8"> 
              <ion-button fill="clear" strong router-link="/officeList/8">Back to Dom.</ion-button>           
            </template>                         
          </ion-tab-button>
          <ion-tab-button><ion-back-button default-href="/"></ion-back-button></ion-tab-button>  
        </ion-tab-bar>
        <strong>{{feastTitle}}<br class="psalm" />&nbsp;&nbsp;&nbsp;{{OfficeTitle}}</strong>
        </ion-header>  
        <div class="content">
          <p> 
            <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumMinorQuad1.jpg" /><br />
            <resp>Dómine ad adiuvándum me festína.</resp><br />
            Glória Patri, et Fílio et Spirítui Sancto.<br />
            Sicut erat in princípio,  et nunc, et semper<br />
            et in sǽcula sæculórum. Amen.<br />
            <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumMinorQuad2.jpg" />
          </p>

          <p>
            <rubrique>Hymnus</rubrique><br />
              <template v-if="office == 3">
                <img src="../../public/assets/images/g60Hymnus/HymDeiFide.jpg" />
              </template>
              <template  v-else-if="office == 6">              
                <img src="../../public/assets/images/g60Hymnus/HymQuaChristusOra.jpg" />
              </template>
              <template  v-else-if="office == 9">              
                <img src="../../public/assets/images/g60Hymnus/HymTernisTerHoris.jpg" />
              </template>
          </p>
    
          <p>
            <rubrique>Antiphona</rubrique><br />
            <template v-if="feast == 1">
              <template v-if="office == 3">   
                <img src="../../public/assets/images/g50Antiphona/AntPueriVestimenta2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" />
                  <p><Ps118D01 /></p>
                  <p><Ps118D02 /></p>
                  <p><Ps118D03 /></p>
                  <p><Ps118D04 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntPueriVestimenta2.jpg" />
              </template>
              <template  v-else-if="office == 6">
                <img src="../../public/assets/images/g50Antiphona/AntTibiRevelavi.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus09Fb.jpg" />
                  <p><Ps118D05 /></p>
                  <p><Ps118D06 /></p>
                  <p><Ps118D07 /></p>
                  <p><Ps118D08 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntTibiRevelavi.jpg" />  
              </template>
              <template  v-else-if="office == 9">
                <img src="../../public/assets/images/g50Antiphona/AntInvocabo2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus09Fb.jpg" />
                  <p><Ps118D09 /></p>
                  <p><Ps118D10 /></p>
                  <p><Ps118D11 /></p>
                  <p><Ps118D12 /></p>               
                <img src="../../public/assets/images/g50Antiphona/AntInvocabo2.jpg" />
              </template>   
            </template>         
            <template v-else-if="feast == 2">
              <template v-if="office == 3">   
                <img src="../../public/assets/images/g50Antiphona/AntFramea2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" />
                  <p><Ps118D13 /></p>
                  <p><Ps118D14 /></p>
                  <p><Ps118D15 /></p>
                  <p><Ps118D16 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntFramea2.jpg" />
              </template>
              <template  v-else-if="office == 6">
                <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" /> 
                  <p><Ps118D17 /></p>
                  <p><Ps118D18 /></p>
                  <p><Ps118D19 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" /> 
              </template>
              <template  v-else-if="office == 9">
                <img src="../../public/assets/images/g50Antiphona/AntLabiaInsurgentibus.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" />
                  <p><Ps118D20 /></p>
                  <p><Ps118D21 /></p>
                  <p><Ps118D22 /></p>
                <img src="../../public/assets/images/g50Antiphona/AntLabiaInsurgentibus.jpg" />
              </template>   
            </template>
            <template v-else-if="feast == 3">
              <template v-if="office == 3">   
                <img src="../../public/assets/images/g50Antiphona/AntAnteDiemPaschae.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus01Ff.jpg" />
                  <p><Ps118D01 /></p>
                  <p><Ps118D02 /></p>
                  <p><Ps118D03 /></p>
                  <p><Ps118D04 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntAnteDiemPaschae.jpg" />
              </template>
              <template  v-else-if="office == 6">
                <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus09Fb.jpg" />
                  <p><Ps118D05 /></p>
                  <p><Ps118D06 /></p>
                  <p><Ps118D07 /></p>
                  <p><Ps118D08 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" />
              </template>
              <template  v-else-if="office == 9">
                <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus09Fb.jpg" />
                  <p><Ps118D09 /></p>
                  <p><Ps118D10 /></p>
                  <p><Ps118D11 /></p>
                  <p><Ps118D12 /></p>               
                  <img src="../../public/assets/images/g50Antiphona/AntPotestatemHabeo2.jpg" /> 
              </template>   
            </template>   
            <template v-else-if="feast == 4">
              <template v-if="office == 3">   
                <img src="../../public/assets/images/g50Antiphona/AntIpsiVeroInVanum2.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus02Fd.jpg" />
                  <p><Ps118D13 /></p>
                  <p><Ps118D14 /></p>
                  <p><Ps118D15 /></p>
                  <p><Ps118D16 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntIpsiVeroInVanum2.jpg" />
              </template>
              <template  v-else-if="office == 6">
                <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus41Fe.jpg" />
                  <p><Ps118D17 /></p>
                  <p><Ps118D18 /></p>
                  <p><Ps118D19 /></p>
                  <img src="../../public/assets/images/g50Antiphona/AntAppenderunt.jpg" />
              </template>
              <template  v-else-if="office == 9">
                <img src="../../public/assets/images/g50Antiphona/AntLiberaMe.jpg" /><br />
                <img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" />
                  <p><Ps118D20 /></p>
                  <p><Ps118D21 /></p>
                  <p><Ps118D22 /></p>
                <img src="../../public/assets/images/g50Antiphona/AntLiberaMe.jpg" />
              </template>   
            </template>                      
          </p>

          <p>
            <template v-if="feast == 1">
              <template v-if="office == 3">   
                <p><Capitulum13 /></p>
              </template>
              <template  v-else-if="office == 6">              
                <p><Capitulum16 /></p>
              </template>
              <template  v-else-if="office == 9">              
                <p><Capitulum19 /></p>   
              </template>
            </template>
            <template v-else-if="feast == 2 || feast == 3 || feast == 4">
              <template v-if="office == 3">   
                <p><Capitulum23 /></p> 
              </template> 
              <template v-else-if="office == 6">
                <p><Capitulum26 /></p> 
              </template>
               <template v-else-if="office == 9">
                <p><Capitulum29 /></p> 
              </template>
            </template> 
          </p>

          <p>
            <rubrique>Responsorium breve</rubrique><br />
              <template v-if="office == 3">
                <img src="../../public/assets/images/g55Responsum/RepErueAFramea.jpg" />
              </template>
              <template  v-else-if="office == 6">              
                <img src="../../public/assets/images/g55Responsum/RepDeOreLeonis.jpg" />
              </template>
              <template  v-else-if="office == 9">              
                <img src="../../public/assets/images/g55Responsum/RepNePerdas.jpg" />  
              </template>
          </p>

          <p>
            <rubrique>Versus</rubrique><br />
              <template v-if="office == 3">
                <img src="../../public/assets/images/g85Versus/VerDeOreLeonisSimplex.jpg" />
              </template>
              <template  v-else-if="office == 6">              
                <img src="../../public/assets/images/g85Versus/VerNePerdasSimplex.jpg" />
              </template>
              <template  v-else-if="office == 9">              
                <img src="../../public/assets/images/g85Versus/VersEripeMeSimplex.jpg" />
              </template>
          </p>

          <p><img src="../../public/assets/images/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
          <p><img src="../../public/assets/images/g95InOrdineOfficii/PaterNosterOfficiiSilencio.jpg" /></p>
          <p><DominusVobiscum /></p>

          <p>
            <rubrique>Oratio</rubrique><br />
              <template v-if="feast == 1">
                <p><Oratio1 /></p>
              </template>
              <template  v-else-if="feast == 2">          
                <p><Oratio2 /></p>
              </template>
              <template  v-else-if="feast == 3">            
                <p><Oratio3 /></p> 
              </template>
              <template  v-else-if="feast == 4">            
                <p><Oratio4 /></p>
              </template>
          </p>
          
          <p><DominusVobiscum /></p>
          
          <p><img src="../../public/assets/images/g95InOrdineOfficii/benedicamus_domino_quad.jpg" /></p>
          <p>&nbsp;</p>
        <ion-tab-bar>
          <ion-tab-button><ion-button fill="clear" strong router-link="/">Back to home</ion-button></ion-tab-button> 
          <ion-tab-button> 
            <template v-if="feast == 9">
              <ion-button fill="clear" strong router-link="/officeList/9">Back to Sabb.</ion-button>  
            </template>
            <template  v-else-if="feast == 1"> 
              <ion-button fill="clear" strong router-link="/officeList/1">Back to Dom.</ion-button>  
            </template>          
            <template  v-else-if="feast == 2">
              <ion-button fill="clear" strong router-link="/officeList/2">Back to Feria II</ion-button>  
            </template>
            <template  v-else-if="feast == 3">
              <ion-button fill="clear" strong router-link="/officeList/3">Back to Feria III</ion-button>  
            </template>
            <template  v-else-if="feast == 4">
              <ion-button fill="clear" strong router-link="/officeList/4">Back to Feria IV</ion-button>  
            </template>            
            <template  v-else-if="feast == 5"> 
              <ion-button fill="clear" strong router-link="/officeList/5">Back to Feria V</ion-button>               
            </template>
            <template  v-else-if="feast == 6"> 
              <ion-button fill="clear" strong router-link="/officeList/6">Back to Feria VI</ion-button>              
            </template>
            <template  v-else-if="feast == 7"> 
              <ion-button fill="clear" strong router-link="/officeList/7">Back to Sabb.</ion-button>             
            </template>
            <template  v-else-if="feast == 8"> 
              <ion-button fill="clear" strong router-link="/officeList/8">Back to Dom.</ion-button>           
            </template>                         
          </ion-tab-button>
          <ion-tab-button><ion-back-button default-href="/"></ion-back-button></ion-tab-button>  
        </ion-tab-bar>
          <p>&nbsp;</p>
          <p>&nbsp;</p>              
          <p>&nbsp;</p>
          <p>&nbsp;</p>        
        </div>  
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage , IonContent , IonButton , IonBackButton } from '@ionic/vue';
    import { useRoute }         from 'vue-router';  
    import Ps118D01             from '@/components/g65Psalmodia/Ps118D01R18.vue';
    import Ps118D02             from '@/components/g65Psalmodia/Ps118D02R18.vue';
    import Ps118D03             from '@/components/g65Psalmodia/Ps118D03R18.vue';
    import Ps118D04             from '@/components/g65Psalmodia/Ps118D04R18.vue';
    
    import Ps118D05             from '@/components/g65Psalmodia/Ps118D05R10.vue';
    import Ps118D06             from '@/components/g65Psalmodia/Ps118D06R10.vue';
    import Ps118D07             from '@/components/g65Psalmodia/Ps118D07R10.vue';
    import Ps118D08             from '@/components/g65Psalmodia/Ps118D08R10.vue';
    
    import Ps118D09             from '@/components/g65Psalmodia/Ps118D09R10.vue';
    import Ps118D10             from '@/components/g65Psalmodia/Ps118D10R10.vue';
    import Ps118D11             from '@/components/g65Psalmodia/Ps118D11R10.vue';
    import Ps118D12             from '@/components/g65Psalmodia/Ps118D12R10.vue';

    import Ps118D13             from '@/components/g65Psalmodia/Ps118D13R01.vue';
    import Ps118D14             from '@/components/g65Psalmodia/Ps118D14R01.vue';
    import Ps118D15             from '@/components/g65Psalmodia/Ps118D15R01.vue';
    import Ps118D16             from '@/components/g65Psalmodia/Ps118D16R01.vue';

    import Ps118D17             from '@/components/g65Psalmodia/Ps118D17R08.vue';
    import Ps118D18             from '@/components/g65Psalmodia/Ps118D18R08.vue';
    import Ps118D19             from '@/components/g65Psalmodia/Ps118D19R08.vue';
    
    import Ps118D20             from '@/components/g65Psalmodia/Ps118D20R03.vue';
    import Ps118D21             from '@/components/g65Psalmodia/Ps118D21R03.vue';
    import Ps118D22             from '@/components/g65Psalmodia/Ps118D22R03.vue';

    import Capitulum13          from '@/components/g75Lectio/CapPhilCh02V05.vue';
    import Capitulum16          from '@/components/g75Lectio/CapPhilCh02V08.vue';
    import Capitulum19          from '@/components/g75Lectio/CapPhilCh02V10.vue'; 
    import Capitulum23          from '@/components/g75Lectio/CapIerCh17V13.vue';
    import Capitulum26          from '@/components/g75Lectio/CapIerCh17V18.vue';
    import Capitulum29          from '@/components/g75Lectio/CapIerCh18V20.vue';

    import Oratio1              from '@/components/g80Oratio/OraQuiHumanoGeneri.vue';
    import Oratio2              from '@/components/g80Oratio/OraUtQuiInTot.vue';
    import Oratio3              from '@/components/g80Oratio/OraDaNobisIta.vue';
    import Oratio4              from '@/components/g80Oratio/OraUtQuiNostris.vue';

    import DominusVobiscum      from '@/components/g95InOrdineOfficii/DominusVobiscum.vue';
    export default ( {
        name:      'HoraMinor',
        components: { Ps118D01 , Ps118D02 , Ps118D03 , Ps118D04 , 
                      Ps118D05 , Ps118D06 , Ps118D07 , Ps118D08 ,
                      Ps118D09 , Ps118D10 , Ps118D11 , Ps118D12 ,
                      Ps118D13 , Ps118D14 , Ps118D15 , Ps118D16 ,
                      Ps118D17 , Ps118D18 , Ps118D19 , 
                      Ps118D20 , Ps118D21 , Ps118D22 , 
                      Capitulum13 , Capitulum16 , Capitulum19 ,
                      Capitulum23 , Capitulum26 , Capitulum29 ,
                      Oratio1 , Oratio2 , Oratio3 , Oratio4 ,
                      DominusVobiscum , 
                      IonPage , IonContent , IonButton , IonBackButton } ,
        // props : ["feastOffice"] ,
        setup() {
          const route    = useRoute () ;
          const  feast   = route.params.feast;
          const  office  = route.params.office;
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
          const feastCurrent    = arrayFeasts [+feast-1] ; // Feast is 1, 2, ... while index in table is 0, 1, ...
          const feastTitle      = feastCurrent?.title ;
          const feastTitleFr    = feastCurrent?.titleFr ;
          const arrayOffices  = [
            {
              title   : 'Ad tertiam', 
            } ,
            {
              title   : 'Ad Sextam',
            } ,
            {
              title   : 'Ad Nonam',          
            } ,
          ] ; 
          const OfficeCurrent = arrayOffices [(+office/3)-1] ;   // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
          const OfficeTitle   = OfficeCurrent?.title ;  
          return  { feast, office , feastTitle , feastTitleFr , OfficeTitle } ;
        }

    })

</script>

<style>
  @import '../components/css/officii.css';
</style>
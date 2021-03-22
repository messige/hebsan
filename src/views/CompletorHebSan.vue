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
          </ion-tab-button>
          <ion-tab-button><ion-back-button default-href="/"></ion-back-button></ion-tab-button>  
        </ion-tab-bar>
        &nbsp;&nbsp;&nbsp;<strong>{{feastTitle}}<br class="psalm" />&nbsp;&nbsp;&nbsp;Ad Completorium</strong>
        </ion-header>  
    <div class="content">
        <br />
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/IubeDomne.jpg" /></p>
        <p><img src   = "../../public/assets/images/g75Lectio/FratresSobrii.jpg" /></p>
        <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumMinorQuad1.jpg" /><br />
        <resp>Dómine ad adiuvándum me festína.</resp><br />
        Glória Patri, et Fílio et Spirítui Sancto.<br />
        Sicut erat in princípio,  et nunc, et semper<br />
        et in sǽcula sæculórum. Amen.<br />
        <img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumMinorQuad2.jpg" />
    </div>
    <p></p>
    <div align="left">
        <p><Confitebor /></p>
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/ConverteNos.jpg" /></p>
    </div>    
    <div class="content">
        <p><img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumCompQuad.jpg" /></p>
        <p>
          <rubrique>Antiphona</rubrique><br />
          <img src="../../public/assets/images/g50Antiphona/AntMiserereMihi.jpg" />
        </p>
    <p><img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /></p>
      
    <p><Ps004 /></p>

    <p><Ps090 /></p>

     <p><Ps133 /></p>

    <p><img src="../../public/assets/images/g50Antiphona/AntMiserereMihi.jpg" /></p>
    
    <p>
        <rubrique>Hymnus</rubrique>
    </p>
    <p><img src="../../public/assets/images/g60Hymnus/HymTeLlucisHebdoSancta.jpg" /></p>
  
   <p><Capitulum /></p>
   
    <rubrique>Responsorium breve</rubrique><br />
    <p><img src="../../public/assets/images/g55Responsum/RepInManusTuas.jpg" /></p>
    
    <rubrique>Versus</rubrique><br />
    <p><img src="../../public/assets/images/g85Versus/VerCustodiNos.jpg" /></p>
    
    <rubrique>Nunc dimitis</rubrique><br />
    <p><img src="../../public/assets/images/g50Antiphona/AntSalvaNosDomine.jpg" /></p>
    <p><img src="../../public/assets/images/g65Psalmodia/NuncDimittisT32Fb.jpg" /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/PaterNosterOfficiiSilencio.jpg" /></p>

    <p><DominusVobiscum /></p>

    <p><Oratio /></p>

    <p><DominusVobiscum /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/benedicamus_domino_quad.jpg" /></p>
    
    <p><img src="../../public/assets/images/g50Antiphona/ANTAveReginaSimplex.jpg" /></p>
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
    import Ps004                from '@/components/g65Psalmodia/Ps004R03.vue';
    import Ps090                from '@/components/g65Psalmodia/Ps090R03.vue';
    import Ps133                from '@/components/g65Psalmodia/Ps133R03.vue';
    import Confitebor           from '@/components/g95InOrdineOfficii/Confitebor.vue';
    import Capitulum            from '@/components/g75Lectio/CapIerCh14V09.vue';
    import Oratio               from '@/components/g80Oratio/OraHabitationemIstam.vue';
    import DominusVobiscum      from '@/components/g95InOrdineOfficii/DominusVobiscum.vue';
    export default ( {
        name: 'Completor',
        components: { Ps004 , Ps090 , Ps133 , 
                      Confitebor , Capitulum , Oratio , DominusVobiscum , 
                     IonPage , IonContent , IonButton , IonBackButton } ,
        setup() {
          const route     = useRoute();
          const feast    = route.params.feast;
          const arrayFeasts = [
            {
              index   : 'HebSanFeria1',
              title   : 'Domenica in Palmis', 
              titleFr : 'Dimanche des Rameaux' ,
              antiphon: 'AntMiserereMihi' ,
            } ,
            {
              index   : 'HebSanFeria2' ,
              title   : 'Hebdomada Sancta Feria 2' , 
              titleFr : 'Lundi saint' ,
              antiphon: 'AntMiserereMihi' ,
            } ,
            {
              index   : 'HebSanFeria3' ,
              title   : 'Hebdomada Sancta Feria 3',
              titleFr : 'Mardi saint' ,
              antiphon: 'AntMiserereMihi' ,
            } ,
            {
              index   : 'HebSanFeria4' ,
              title   : 'Hebdomada Sancta Feria 4',
              titleFr : 'Mercredi saint' ,
              antiphon: 'AntMiserereMihi' ,
            } ,
            {
              index   : 'HebSanFeria5' ,
              title   : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr : 'Jeudi saint' ,
              antiphon: '' ,
            } ,
            {
              index   : 'HebSanFeria6' ,
              title   : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr : 'Vendredi saint' ,
              antiphon: '' ,
            } ,
            {
              index   : 'HebSanFeria7' ,
              title   : 'Sabbato Sancto',
              titleFr : 'Samedi saint' ,
              antiphon: '' ,
            } ,
            {
              index   : 'HebPaschaFeria8' ,
              title   : 'Resurrectio Domini',
              titleFr : 'Dimanche de Pâques' ,
              antiphon: 'AntAlleluiaPasqua' ,
            } ,
                        {
              index   : 'HebSanFeria9',
              title   : 'Domenica in Palmis', 
              titleFr : 'Dimanche des Rameaux - la veille' ,
              antiphon: 'AntMiserereMihi' ,            
            } , 
          ] ; 

          const feastCurrent = arrayFeasts [+feast-1] ;
          const feastTitle = feastCurrent?.title ;
          const feastTitleFr = feastCurrent?.titleFr ;
          const feastAntiphon = '<img src="../../public/assets/images/g50Antiphona/' + feastCurrent?.antiphon + '.jpg" />';
          return  { feast , feastTitle , feastTitleFr , feastAntiphon } ;
        }

    })

</script>

<style>
  @import '../components/css/officii.css';
</style>
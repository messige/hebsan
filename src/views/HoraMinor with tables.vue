<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{feastTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <strong>{{FeastTitle }}</strong>
        <p><strong> {{OfficeTitle}}</strong></p>
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
            <img :src='OfficeHymnus' alt='hymnus'/>
          </p>   
                  <!-- <p><img src="../../public/assets/images/g60Hymnus/HymDeiFide.jpg" /></p>         -->
          
          <p>
            <rubrique>Antiphona</rubrique><br />
            <img :src='OfficeAntiphon' alt='antiphon'/><br /> 
              <img :src='OfficepsalmTon' alt='Tonus'/>
          </p>
          
          <p><Ps118D01 /></p>
          <p><Ps118D02 /></p>
          <p><Ps118D03 /></p>
          <p><Ps118D04 /></p>
          <img :src='OfficeAntiphon' alt='antiphon'/>  
        
          <p><Capitulum /></p>
      
          <p>
            <rubrique>Responsorium breve</rubrique><br />
            <img src="../../public/assets/images/g55Responsum/RepInManusTuas.jpg" />
          </p>
        
          <p>
            <rubrique>Versus</rubrique><br />
            <img src="../../public/assets/images/g85Versus/VerCustodiNos.jpg" />
          </p>
          
          <p><img src="../../public/assets/images/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
          <p><img src="../../public/assets/images/g95InOrdineOfficii/pater_noster_officii.jpg" /></p>
          <p><DominusVobiscum /></p>

          <p><Oratio /></p>
          <p><DominusVobiscum /></p>
          
          <p><img src="../../public/assets/images/g95InOrdineOfficii/benedicamus_domino_quad.jpg" /></p>
      
        </div>  
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent } from '@ionic/vue';
    import { useRoute }         from 'vue-router';  
    import Ps118D01             from '@/components/g65Psalmodia/Ps118D01T01Ff.vue';
    import Ps118D02             from '@/components/g65Psalmodia/Ps118D02T01Ff.vue';
    import Ps118D03             from '@/components/g65Psalmodia/Ps118D03T01Ff.vue';
    import Ps118D04             from '@/components/g65Psalmodia/Ps118D04T01Ff.vue';
    import Capitulum            from '@/components/g75Lectio/CapIerCh14V9.vue';
    import Oratio               from '@/components/g80Oratio/OraHabitationemIstam.vue';
    import DominusVobiscum      from '@/components/g95InOrdineOfficii/DominusVobiscum.vue';
    export default ( {
        name:      'HoraMinor',
        components: { Ps118D01 , Ps118D02 , Ps118D03 , Ps118D04 , Capitulum , Oratio , DominusVobiscum , IonContent, IonPage } ,
        // props : ["feastOffice"] ,
        setup() {
          const route    = useRoute () ;
          const  feast   = route.params.feast;
          const  office  = route.params.office;
          const arrayFeasts = [
            {
              title     : 'Domenica in Palmis', 
              titleFr   : 'Dimanche des Rameaux' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo.jpg' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02AstFb.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02AstFb.jpg' ] ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 2' , 
              titleFr   : 'Lundi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntFramea.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntAppenderunt.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntLabiaInsurgentibus.jpg' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02Fd.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/ .jpg' ] ,
         
            } ,
            {
              title     : 'Hebdomada Sancta Feria 3',
              titleFr   : 'Mardi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntAnteDiemPaschae.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntPotestatemHabeo.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntPotestatemHabeo.jpg' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02AstFb.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02AstFb.jpg' ] ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 4',
              titleFr   : 'Mercredi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntIpsiVeroInVanum.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntAppenderunt.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntLiberaMe.jpg' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus02Fd.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus04Fe.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus08Fg.jpg' ] ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr   : 'Jeudi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' ] ,
            } ,
            {
              title     : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr   : 'Vendredi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' ] ,
            } ,
            {
              title     : 'Sabbato Sancto',
              titleFr   : 'Samedi saint' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' ] ,
            } ,
            {
              title     : 'Resurrectio Domini',
              titleFr   : 'Dimanche de Pâques' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' ] ,
            } ,
            {
              title     : 'Domenica in Palmis', 
              titleFr   : 'Dimanche des Rameaux - la veille' ,
              antiphon  : ['https://gregorien.be/public/images/assets/images/g50Antiphona/AntPueriVestimenta.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntTibiRevelavi.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g50Antiphona/AntInvocabo' ] ,
              psalmTon  : ['https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' , 
                          'https://gregorien.be/public/images/assets/images/g70Tonus/Tonus01Ff.jpg' ] ,

            } , 
          ] ;  
          const FeastCurrent    = arrayFeasts [+feast-1] ; // Feast is 1, 2, ... while index in table is 0, 1, ...
          const FeastTitle      = FeastCurrent?.title + " - " + FeastCurrent?.titleFr ;
          const OfficeAntiphon  =  FeastCurrent?.antiphon [(+office/3)-1] ;
          const OfficepsalmTon  =  FeastCurrent?.psalmTon [(+office/3)-1] ;  
          const arrayOffices  = [
            {
              title   : 'Ad tertiam', 
              hymnus  : 'https://gregorien.be/public/images/assets/images/g60Hymnus/HymDeiFide.jpg' , // not working with relative path in <script> but well in <template> !
            } ,
            {
              title   : 'Ad Sextam', 
              hymnus  : 'https://gregorien.be/public/images/assets/images/g60Hymnus/HymQuaChristusOra.jpg' ,
            } ,
            {
              title   : 'Ad Nonam', 
              hymnus  : 'https://gregorien.be/public/images/assets/images/g60Hymnus/HymTernisTerHoris.jpg' ,            
            } ,
          ] ; 
          const OfficeCurrent = arrayOffices [(+office/3)-1] ;   // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
          const OfficeTitle   = OfficeCurrent?.title ;  
          const OfficeHymnus  = OfficeCurrent?.hymnus ;  
          return  { feast, office , FeastTitle , OfficeTitle , OfficeHymnus , OfficeAntiphon , OfficepsalmTon } ;
        }

    })

</script>

<style>
    @media (min-width: 1025px)  {         
        #container {
            position: absolute;
            left: 22%;
            right: 15%;
            top: 3%;
        }
    }
    @media (min-width: 769px) and (max-width: 1024px) {          
        #container {
            position: absolute;
            left: 20%;
            right: 25%;
            top: 2%;
        }
    }
    @media (max-width:768px)  {           /* Device = Tablets, Ipads (portrait) */
        #container {
            position: absolute;
            left: 1%;
            right: 1%;
        }
    }
       .content {                         /* https://www.w3docs.com/snippets/css/how-to-resize-images-proportionally-scaled-using-css-for-responsive-web-design.html */
        padding: 2px;
        width: 100%;
      }
    @media only screen and (min-width: 600px) { 
        .content {
          width: 75%;
        }
      }
    @media only screen and (min-width: 768px) {
        .content {
          width: 79%;
        }
      } 
    html {
        font-family: "Lucida Sans", sans-serif;
      } 
    td {
        text-align: left;
        padding-left: 7px;
        padding-bottom: 4px;
        vertical-align: top;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
    highlight1:before { 
      content: '\00a0'; 
    }
    highlight2:before {
        content: "-";
    }
    #container p {
        font-size: 16px;
        line-height: 22px;
        text-align: left;
    }
    #container strong {
      font-size: 20px;
      line-height: 26px;
    }
    #container rubrique {
        font-size: 12px;
        line-height: 14px;
        color: rgb(156, 26, 101);
        text-align: left;
    }
    #container rubpad {
        font-size: 12px;
        padding-left: 100px;
        color: rgb(156, 26, 101);
    }
    greStar:before {
        font-size: 20px;
        content: '\00a0\2217\0a0';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    greDagger:before {
        font-size: 20px;
        content: '\2020\00a0\00a0';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    #container a {
        text-decoration: none;
    }
    #container rougeliturgique {
       color: rgb(156, 26, 101);
    }
    img {
      img {
        width: 100%;
        height: auto;
      }
    }
    img.bottom {
        vertical-align: bottom;
    }
    vers:before {
        font-size: 20px;
        content: '\2123 .';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    resp:before {
        font-size: 20px;
        content: '\211F . ';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    downarrow:before {
        font-size: 20px;
        content: '\00A0\00A0\00A0\21D3\00A0\00A0\00A0';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    uparrow:before {
        font-size: 20px;
        content: '\00A0\00A0\00A0\21D1\00A0\00A0\00A0';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    accent {
        font-weight: bold;
    }
    prepa {
        font-style: italic ;
    }
</style>

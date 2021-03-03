<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Ad Completorium</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container">
              <strong>{{feastTitle }}</strong>
              <p>&nbsp;</p>
    <p><strong>Ad Completorium</strong></p>
    <br />
    <div class="content">
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/IubeDomne.jpg" /></p>
        <p><img src   = "../../public/assets/images/g75Lectio/FratresSobrii.jpg" /></p>
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/AdiutoriumNostrum.jpg" /></p>
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/ConverteNos.jpg" /></p>
    </div>
    <p></p>
    <div align="left">
        <p><Confitebor /></p>
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

    <p>{{feastAntiphon}}</p>
    
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
    <p><img src="../../public/assets/images/g65Psalmodia/NuncDimittisT03Fa.jpg" /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/pater_noster_officii.jpg" /></p>

    <p><DominusVobiscum /></p>

    <p><Oratio /></p>

    <p><DominusVobiscum /></p>
    
    <p><img src="../../public/assets/images/g95InOrdineOfficii/benedicamus_domino_quad.jpg" /></p>
    
    <p><img src="../../public/assets/images/g50Antiphona/ant_ave_regina_caelorum_simplex.jpg" /></p>
      </div>  
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent } from '@ionic/vue';
    import { useRoute }         from 'vue-router';    
    import Ps004                from '@/components/g65Psalmodia/Ps004T08Fg.vue';
    import Ps090                from '@/components/g65Psalmodia/Ps090T08Fg.vue';
    import Ps133                from '@/components/g65Psalmodia/Ps133T08Fg.vue';
    import Confitebor           from '@/components/g95InOrdineOfficii/Confitebor.vue';
    import Capitulum            from '@/components/g75Lectio/CapIerCh14V9.vue';
    import Oratio               from '@/components/g80Oratio/OraHabitationemIstam.vue';
    import DominusVobiscum      from '@/components/g95InOrdineOfficii/DominusVobiscum.vue';
    export default ( {
        name: 'Completor',
        components: { Ps004 , Ps090 , Ps133 , Confitebor , Capitulum , Oratio , DominusVobiscum , IonContent, IonPage } ,
        setup() {
          const route     = useRoute();
          const { feastId } = route.params;
          const arrayFeasts = [
            {
              index   : 'HebSanFeria_1',
              title   : 'Domenica in Palmis', 
              titleFr : 'Dimanche des Rameaux - la veille' ,
              antiphon: 'AntMiserereMihi' ,
            } ,            
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

          const feastCurrent = arrayFeasts [+feastId] ;
          const feastTitle = feastCurrent?.title + " - " + feastCurrent?.titleFr ;
          const feastAntiphon = '<img src="../../public/assets/images/g50Antiphona/' + feastCurrent?.antiphon + '.jpg" />';
          return  { feastId , feastTitle , feastAntiphon } ;
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

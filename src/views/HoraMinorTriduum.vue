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
              <strong>{{feastTitle}}</strong><br />
              <strong>{{feastTitleFr}}</strong>
            </ion-col>
            <ion-col>
              <ion-button color="tertiary" router-link="/" >Back to Home</ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <strong> {{OfficeTitle}}</strong>
            </ion-col>
            <ion-col>
              <template  v-if="feast == 5"> 
                <ion-button color="tertiary" router-link="/officeList/5">Back to Feria V</ion-button>               
              </template>
              <template  v-else-if="feast == 6"> 
               <ion-button color="tertiary" router-link="/officeList/6">Back to Feria VI</ion-button>              
              </template>
              <template  v-else-if="feast == 7"> 
                <ion-button color="tertiary" router-link="/officeList/7">Back to Sabb.</ion-button>             
              </template>     
            </ion-col>
          </ion-row>          
        </ion-grid>
        <div class="content">
                <p><img src="../../public/assets/images/g70Tonus/Tonus13Fc.jpg" /></p>
                <p>
                    <template v-if="office == 3">   
                        <p><Ps118D01 /></p>
                        <p><Ps118D02 /></p>
                        <p><Ps118D03 /></p>
                        <p><Ps118D04 /></p>
                        <p><Ps118D05 /></p>
                        <p><Ps118D06 /></p>
                        <p><Ps118D07 /></p>
                        <p><Ps118D08 /></p>                            
                    </template>
                    <template  v-else-if="office == 6">
                        <p><Ps118D09 /></p>
                        <p><Ps118D10 /></p>
                        <p><Ps118D11 /></p>
                        <p><Ps118D12 /></p> 
                        <p><Ps118D13 /></p>
                        <p><Ps118D14 /></p>
                        <p><Ps118D15 /></p>
                        <p><Ps118D16 /></p>  
                    </template>
                    <template  v-else-if="office == 9">
                        <p><Ps118D17 /></p>
                        <p><Ps118D18 /></p>
                        <p><Ps118D19 /></p>
                        <p><Ps118D20 /></p> 
                        <p><Ps118D21 /></p>
                        <p><Ps118D22 /></p>                        
                    </template>  
                </p>  
                <p>
                    <rubrique>Flexis génibus</rubrique><br />
                    <template v-if="feast == 5"> 
                        Christus factus est pro nobis obédiens usque ad mortem.<br />
                    </template>
                    <template v-else-if="feast == 6">
                        Christus factus est pro nobis obédiens usque ad mortem, mortem autem crucis.<br />
                    </template>
                    <template v-else-if="feast == 7">
                        Christus factus est pro nobis obédiens usque ad mortem , mortem autem crucis.<br />
                        Propter quod et Deus exaltávit illum et dedit illi nomen, quod est super omne nomen.<br />
                    </template> 
                </p> 
                <p>
                    <rubrique>Sub silentio</rubrique><br />
                    Pater noster…<br />
                </p>
                <p>
                    <rubrique>Oratio dicitur gravi et recta voce et ultima syllaba deprimitur per tonum in fine</rubrique><br />
                    <template v-if="feast == 5 || feast == 6"> 
                        Réspice, quǽsumus Domine, super hanc famíliam tuam,<br />
                        pro qua Dóminus noster Iesus Christus non dubitávit mánibus tradi nocéntium<br />
                        et crucis subire torméntum.<br /><br />
                        <rubrique>Sub silentio</rubrique><br />
                        Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, <br />
                        per ómnia sǽcula sæculórum. Amen. <br /><br /><br />	 
                    </template>
                    <template v-else-if="feast == 7">
                        Concéde, quǽsumus, omnípotens Deus: <br />
                        ut, qui Filii tui resurrectiónem devóta exspectatióne praevenímus;<br />
                        eiúsdem resurrectiónis glóriam consequámur.<br /><br />
                        <rubrique>Sub silentio</rubrique><br />
                        Per eúmdem Dóminum nostrum Iesum Christum Fílium tuum,<br />
                        qui tecum vivit et regnat in unitáte Spíritus Sancti Deus,<br /> 
                        per ómnia sǽcula sæculórum. Amen.<br /><br /><br />	
                    </template>
                </p> 
          <p>&nbsp;</p>        
              <template  v-if="feast == 5"> 
                <ion-button color="tertiary" router-link="/officeList/5">Back to Feria V</ion-button>               
              </template>
              <template  v-else-if="feast == 6"> 
               <ion-button color="tertiary" router-link="/officeList/6">Back to Feria VI</ion-button>              
              </template>
              <template  v-else-if="feast == 7"> 
                <ion-button color="tertiary" router-link="/officeList/7">Back to Sabb.</ion-button>             
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
    import { useRoute }         from 'vue-router';  
    import Ps118D01             from '@/components/g65Psalmodia/Ps118D01R13.vue';
    import Ps118D02             from '@/components/g65Psalmodia/Ps118D02R13.vue';
    import Ps118D03             from '@/components/g65Psalmodia/Ps118D03R13.vue';
    import Ps118D04             from '@/components/g65Psalmodia/Ps118D04R13.vue';
    import Ps118D05             from '@/components/g65Psalmodia/Ps118D05R13.vue';
    import Ps118D06             from '@/components/g65Psalmodia/Ps118D06R13.vue';
    import Ps118D07             from '@/components/g65Psalmodia/Ps118D07R13.vue';
    import Ps118D08             from '@/components/g65Psalmodia/Ps118D08R13.vue';
    
    import Ps118D09             from '@/components/g65Psalmodia/Ps118D09R13.vue';
    import Ps118D10             from '@/components/g65Psalmodia/Ps118D10R13.vue';
    import Ps118D11             from '@/components/g65Psalmodia/Ps118D11R13.vue';
    import Ps118D12             from '@/components/g65Psalmodia/Ps118D12R13.vue';
    import Ps118D13             from '@/components/g65Psalmodia/Ps118D13R13.vue';
    import Ps118D14             from '@/components/g65Psalmodia/Ps118D14R13.vue';
    import Ps118D15             from '@/components/g65Psalmodia/Ps118D15R13.vue';
    import Ps118D16             from '@/components/g65Psalmodia/Ps118D16R13.vue';

    import Ps118D17             from '@/components/g65Psalmodia/Ps118D17R13.vue';
    import Ps118D18             from '@/components/g65Psalmodia/Ps118D18R13.vue';
    import Ps118D19             from '@/components/g65Psalmodia/Ps118D19R13.vue';
    import Ps118D20             from '@/components/g65Psalmodia/Ps118D20R13.vue';
    import Ps118D21             from '@/components/g65Psalmodia/Ps118D21R13.vue';
    import Ps118D22             from '@/components/g65Psalmodia/Ps118D22R13.vue';

    export default ( {
        name:      'HoraMinorTriduum',
        components: { Ps118D01 , Ps118D02 , Ps118D03 , Ps118D04 , 
                      Ps118D05 , Ps118D06 , Ps118D07 , Ps118D08 ,
                      Ps118D09 , Ps118D10 , Ps118D11 , Ps118D12 ,
                      Ps118D13 , Ps118D14 , Ps118D15 , Ps118D16 ,
                      Ps118D17 , Ps118D18 , Ps118D19 , 
                      Ps118D20 , Ps118D21 , Ps118D22 , 
                      IonPage , IonContent , IonButton } ,
        // props : ["feastOffice"] ,
        setup() {
          const route    = useRoute () ;
          const  feast   = route.params.feast;
          const  office  = route.params.office;
          const arrayFeasts = [
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
          ] ;  
          const feastCurrent    = arrayFeasts [+feast-5] ; // Feast is 1, 2, ... while index in table is 0, 1, ...
          const feastTitle      = feastCurrent?.title ;
          const feastTitleFr    = feastCurrent?.titleFr ;
          const arrayOffices    = [
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
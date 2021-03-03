<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Ad Completorium</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container" class="content">
                <strong>{{feastTitle }}</strong>
                <p>&nbsp;</p>
                <p><strong>Ad Completorium</strong></p>
                 <br />
        <p><Confitebor /></p>

    <p><img src="../../public/assets/images/g70Tonus/TonusC.jpg" /></p>

        <p><Ps004 /></p>

        <p><Ps090 /></p>

        <p><Ps133 /></p>

        <p><NuncDimittis /></p>

        <p>Christus factus est pro nobis obédiens usque ad mortem.</p>

        <rubrique>Secreto</rubrique>
        <p>Pater noster ...</p>

        <rubrique>Aliquantulum altius</rubrique> 

        <p><Oratio /></p>

        <rubrique>Et sub silentio concluditur.</rubrique>
        
        <p><PerDominum /></p>

        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent }  from '@ionic/vue';
    import { useRoute }             from 'vue-router';    
    import Ps004                    from '@/components/g65Psalmodia/Ps004TCSineGloria.vue';
    import Ps090                    from '@/components/g65Psalmodia/Ps090TCSineGloria.vue';
    import Ps133                    from '@/components/g65Psalmodia/Ps133TCSineGloria.vue';
    import NuncDimittis             from '@/components/g65Psalmodia/NuncDimittisTCSineGloria.vue';
    import Confitebor               from '@/components/g95InOrdineOfficii/Confitebor.vue';
    import Oratio                   from '@/components/g80Oratio/OraHabitationemIstamRectoT.vue';
    import PerDominum               from '@/components/g80Oratio/PerDominum.vue';
    export default ( {
        name: 'Completor',
        components: { Ps004 , Ps090 , Ps133 , NuncDimittis , Confitebor , Oratio , PerDominum , IonContent, IonPage } ,
        setup() {
          const route     = useRoute();
          const { feastId } = route.params;
          const arrayFeasts = [
            {
              index         : 'HebSanFeria5' ,
              title         : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr       : 'Jeudi saint' ,
            } ,
            {
              index         : 'HebSanFeria6' ,
              title         : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr       : 'Vendredi saint' ,
            }
          ] ; 

          const feastCurrent    = arrayFeasts [+feastId] ;
          const feastTitle      = feastCurrent?.title + " - " + feastCurrent?.titleFr ;
          return  { feastId , feastTitle } ;
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
        font-family: "Lucida Sans", sans-serif;
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
        content: '\00A0\00A0\21D3\00A0\00A0';
        color: rgb(156, 26, 101);
        font-weight: bold;
    }
    uparrow:before {
        font-size: 20px;
        content: '\00A0\00A0\21D1\00A0\00A0';
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
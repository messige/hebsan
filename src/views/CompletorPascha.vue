<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="container">
          <strong>Ad Completorium<br />Resurrectio Domini<br />Dimanche de Pâques</strong>
          <div class="content">
            <p><img src   = "../../public/assets/images/g95InOrdineOfficii/IubeDomne.jpg" /></p>
            <p><img src   = "../../public/assets/images/g75Lectio/FratresSobrii.jpg" /></p>
            <p><img src   = "../../public/assets/images/g95InOrdineOfficii/AdiutoriumNostrum.jpg" /></p>
          </div>
    <p></p>
    <div align="left">
        <p><Confitebor /></p>
        <p><img src   = "../../public/assets/images/g95InOrdineOfficii/ConverteNos.jpg" /></p>
    </div>    
    <div class="content">
        <p><img src="../../public/assets/images/g95InOrdineOfficii/InAdiutoriumCompPascha.jpg" /></p>
        <p>
          <rubrique>Antiphona</rubrique><br />
          <img src="../../public/assets/images/g50Antiphona/AntAlleluiaPasqua.jpg" />
        </p>
    <p><img src="../../public/assets/images/g70Tonus/Tonus08Fg.jpg" /></p>
      
    <p><Ps004 /></p>

    <p><Ps090 /></p>

     <p><Ps133 /></p>

    <p><img src="../../public/assets/images/g50Antiphona/AntAlleluiaPasqua.jpg" /></p>
    
    <p>
        <rubrique>Hymnus</rubrique>
    </p>
    <p><img src="../../public/assets/images/g60Hymnus/HymTeLucisTP.jpg" /></p>
  
   <p><Capitulum /></p>
   
    <rubrique>Responsorium breve</rubrique><br />
    <p><img src="../../public/assets/images/g55Responsum/RepInManusTuasTP.jpg" /></p>
    
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
    
    <p><img src="../../public/assets/images/g50Antiphona/AntReginaCaeliSimplex.jpg" /></p>

    <p>&nbsp;</p>
          <p><ion-button color="light" router-link="/officeList/8">Resurrectio Domini- index</ion-button></p>             
          <p><ion-button color="light" router-link="/">Hebdomada Sancta - index</ion-button></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>   
      </div>  
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent , IonButton } from '@ionic/vue';
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
        components: { Ps004 , Ps090 , Ps133 , Confitebor , Capitulum , Oratio , DominusVobiscum , 
        IonPage , IonContent , IonButton } ,
        setup() {
          const route     = useRoute();
          const { feast } = route.params;
          const arrayFeasts = [
            {
              index   : 'TempusPascalis11' ,
              title   : 'Resurrectio Domini',
              titleFr : 'Dimanche de Pâques' ,
              antiphon: 'AntAlleluiaPasqua' ,
            } ,
            {
              index   : 'TempusPascalis11' ,
              title   : 'Resurrectio Domini',
              titleFr : 'Dimanche de Pâques' ,
              antiphon: 'AntAlleluiaPasqua' ,
            }            
          ] ; 

          const feastCurrent = arrayFeasts [+feast] ;
          const feastTitle = feastCurrent?.title + " - " + feastCurrent?.titleFr ;
          return  { feast , feastTitle } ;
        }

    })

</script>

<style>
  @import '../components/css/officii.css';
</style>
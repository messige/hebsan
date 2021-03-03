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

    <p><img src="../../public/assets/images/g70Tonus/Tonus13Fc.jpg" /></p>

        <p><Ps004 /></p>

        <p><Ps090 /></p>

        <p><Ps133 /></p>

        <p><NuncDimittis /></p>

        <p>&nbsp;</p>
        <p>{{ lectio }}</p>

        <rubrique>Secreto</rubrique>
        <p>Pater noster ...</p>

        <rubrique>Aliquantulum altius</rubrique> 

        <p><Oratio /></p>

        <rubrique>Et sub silentio concluditur.</rubrique>
        
        <p><PerDominum /></p>

        <p>&nbsp;</p>
            <template  v-if="feast == 0"> 
              <p><ion-button color="light" router-link="/officeList/5">Feria 5 - In Coena Domini - index</ion-button></p>             
            </template>
            <template  v-else-if="feast == 1"> 
              <p><ion-button color="light" router-link="/officeList/6">Feria 6 - In Parasceve - index</ion-button></p>              
            </template>
          <p><ion-button color="light" router-link="/">Hebdomada Sancta - index</ion-button></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>   
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent , IonButton }  from '@ionic/vue';
    import { useRoute }             from 'vue-router';    
    import Ps004                    from '@/components/g65Psalmodia/Ps004R13SineGloria.vue';
    import Ps090                    from '@/components/g65Psalmodia/Ps090R13SineGloria.vue';
    import Ps133                    from '@/components/g65Psalmodia/Ps133R13SineGloria.vue';
    import NuncDimittis             from '@/components/g65Psalmodia/NuncDimittisR13SineGloria.vue';
    import Confitebor               from '@/components/g95InOrdineOfficii/Confitebor.vue';
    import Oratio                   from '@/components/g80Oratio/OraHabitationemIstamRectoT.vue';
    import PerDominum               from '@/components/g80Oratio/PerDominum.vue';
    export default ( {
        name: 'Completor',
        components: { Ps004 , Ps090 , Ps133 , NuncDimittis , Confitebor , Oratio , PerDominum , 
        IonPage , IonContent , IonButton } ,
        setup() {
          const route     = useRoute();
          const { feast } = route.params;
          const arrayFeasts = [
            {
              index         : 'HebSanFeria5' ,
              title         : 'Hebdomada Sancta Feria 5 - In Coena Domini',
              titleFr       : 'Jeudi saint' ,
              Lectio        : "Christus factus pro nobis obediens usque ad mortem."              
            } ,
            {
              index         : 'HebSanFeria6' ,
              title         : 'Hebdomada Sancta Feria 6 - In Parasceve',
              titleFr       : 'Vendredi saint' ,
              Lectio        : "Christus factus pro nobis obediens usque ad mortem, mortem autem crucis."              
            }
          ] ; 

          const feastCurrent    = arrayFeasts [+feast] ;
          const feastTitle      = feastCurrent?.title + " - " + feastCurrent?.titleFr ;
          const lectio          = feastCurrent?.Lectio;          
          return  { feast , feastTitle , lectio } ;
        }

    })
</script>

<style>
  @import '../components/css/officii.css';
</style>
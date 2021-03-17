<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>

          <div id="container"> 
            <p> <strong>Hebdomada Sancta - Ad horas Majores et Minores</strong></p>
                  <p>Last update: 17/03/2021</p>
            <p>
        Les Heures  de la Semaine Sainte<br />
        telles que chantées à l'abbaye de Fontfroide<br />par le Choeur grégorien de Paris.<br />
     </p>
       <p>Neumes des antiennes des Petites heures : Giedrius Gapsys.<br />
        Autres neumes : Antiphonale Symopticum  http://gregorianik.uni-regensburg.de/an/<br />
        Application développées par Gerald Messiaen.<br />
        Merci d'adresser vos remarques à<br />
        info@gregorien.be
      </p>
       <p><strong>PRIVACY POLICY of The App Hebsan</strong></p>
       <p><strong>About This Policy</strong></p>
         <p>This privacy policy describes the privacy practices of the apps published by L'Académie de Chant grégorien, which includes a link to this policy.</p>
         <p><strong>Personal Information Collection</strong></p>
         <p>Apps published by L'Académie de Chant grégorien will not collect any personal information.<br />
        L'Académie de Chant grégorien will never implement a sign  feature nor access to things such as your location, contacts, calendars, microphone, camera or photos.<br />
        This App is not collecting and using your data, including information like your location, browsing history, and contacts.</p>  
         <p><strong>Personal Information Sharing</strong></p>
        <p>Apps published by L'Académie de Chant grégorien may not share personal information about consumers with third parties for their own marketing purposes.</p>
         <p><strong>Children Online Privacy Protection Act</strong></p>
        <p>Our mobile applications comply with the Children’s Online Privacy Protection Act (“COPPA”).<br /> 
        We don’t knowingly collect personal information from children under the age of 13 years old.<br />
        If a user is identified as under 13 years old, we will not collect or use any information of this user 
        and we will delete any information already received in a secure manner.</p>
        <p><strong>Other Privacy Related Issues</strong></p>
        <p>Apps published by L'Académie de Chant grégorien may contain links to other sites or applications which are owned or run by 3rd parties.<br />
        L'Académie de Chant grégorien will not be responsible for those linked sites or application.</p>
        <p><strong>Changes on Privacy Policy</strong></p>
        <p>If we change or update the privacy policy to allow L'Académie de Chant grégorien to use or share previously collected personal information in a different way,
        we will update the Policy on this web page.<br /> 
        We encourage to periodically visit this page for the latest privacy practices.</p>
         <p><strong>POWERED BY</strong></p>
         <p>L'Académie de Chant grégorien<br />
         https://gregorien.be</p>

        <p><strong>SUPPORT</strong></p>

        <p>If you need to contact us or if you have a complaint regarding anything you should address your message to:<br />
        Email: info@gregorien.be</p>

      </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

    export default {
        name: 'Tab2',
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
    }
</script>
<style scoped>
#container {
  position: absolute;
  left: 10%;
  right: 0;
  top: 2%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 20;
}

#container a {
  text-decoration: none;
}
</style>
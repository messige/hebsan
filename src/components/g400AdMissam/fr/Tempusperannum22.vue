<!-- DEBUG-VIEW START 327 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Miserere mihi Domine,<br />
quoniam ad te clamavi tota die :<br />
quia tu Domine suavis ac mitis es,<br />
et copiosus in misericordia<br />
omnibus invocantibus te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ayez pitié de moi, Seigneur,<br />
car j’ai lancé vers vous mon appel tout au long du jour :<br />
car vous, Seigneur, vous êtes doux et bon :<br />
et abondant en miséricorde<br />
pour tous ceux qui vous invoquent.</ion-text></ion-col> </ion-row></ion-grid>Ps. Inclina, Domine, aurem tuam,<br />
et exaudi me :<br />
quoniam inops, et pauper sum ego.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Inclinez l’oreille, Seigneur,<br />
et exaucez-moi :<br />
car livré à moi-même, je suis sans ressource et malheureux.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Timebunt gentes nomen tuum, Domine :<br />
et omnes reges terrae gloriam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les nations craindront votre nom, Seigneur :<br />
et tous les rois de la terre, votre gloire.</ion-text></ion-col> </ion-row></ion-grid>V./  Quoniam aedificavit Dominus Sion,<br />
et videbitur in maiestate sua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Car le Seigneur a édifié Sion,<br />
et il y paraîtra dans sa majesté.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Cantate Domino canticum novum :<br />
quia mirabilia fecit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Chantez au Seigneur un cantique nouveau :<br />
car le Seigneur a fait des merveilles.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Domine, in auxilium meum respice :<br />
confundantur et revereantur,<br />
qui quaerunt animam meam, ut auferant eam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, posez sur moi le regard pour me secourir :<br />
qu’ils soient confondus et honteux tout à la fois,<br />
ceux qui en veulent à ma vie pour me l’ôter.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Qui vult venire post me,<br />
abneget semetipsum<br />
et tollat crucem suam,<br />
et sequatur me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qui veut venir à ma suite,<br />
qu’il renonce à lui-même,<br />
et qu’il prenne sa croix,<br />
et qu’il me suive.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Domine, memorabor iustitiae tuae solius :<br />
Deus, docuisti me a iuventute mea,<br />
et usque in senectam et senium,<br />
Deus, ne derelinquas me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, je ne me souviendrai
que de votre justice :<br />
Dieu, vous m’avez instruit dès ma jeunesse :<br />
et jusqu’à la vieillesse et à la sénilité :<br />
Dieu, ne m’abandonnez pas.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<br />
</template>
<script>
  export default {
    props: {
      annoABC: {
        type: String,    
      }
    }
  }
</script>	

<!-- DEBUG-VIEW ENDED 327 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

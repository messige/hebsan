<!-- DEBUG-VIEW START 351 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Intret oratio mea in conspectu tuo :<br />
inclina aurem tuam ad precem meam Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que mon oraison soit introduite en votre présence :<br />
prêtez l’oreille à ma prière, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>Ps. Domine Deus salutis meae,<br />
in die clamavi, et nocte coram te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur Dieu de mon salut :<br />
le jour et la nuit j’ai crié devant vous.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Dirigatur oratio mea<br />sicut incensum in conspectu tuo, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que ma prière s'élève devant vous<br />comme de l’encens, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Elevatio manuum mearum sacrificium vespertinum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L’élévation de mes mains est un sacrifice du soir.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Quinque prudentes virgines acceperunt oleum<br />
in vasis suis cum lampadibus :<br />
media autem nocte clamor <span class="fc">factus est</span> :<br />
ecce sponsus venit :<br />
exite obviam Christo Domino.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les cinq vierges prudentes prirent de l’huile<br />
dans leurs flacons avec leurs lampes :<br />
or, au milieu de la nuit, un cri se fit entendre :<br />
Voici l’époux qui vient,<br />
sortez à la rencontre du Christ Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Qui posuit fines tuos pacem,<br />
et adipe frumenti satiat te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lui qui a établi tes frontières comme havre de paix,<br />
et qui te rassasie de la fleur du froment.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Gressus meos dirige Domine secundum eloquium tuum :<br />
ut non dominetur omnis iniustitia, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dirigez mes pas selon votre prononcé, Seigneur :<br />
que nulle injustice ne me domine, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Quinque prudentes virgines acceperunt oleum<br />
in vasis suis cum lampadibus :<br />
media autem nocte clamor <span class="fc">factus est</span> :<br />
ecce sponsus venit :<br />
exite obviam Christo Domino.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les cinq vierges prudentes prirent de l’huile<br />
dans leurs flacons avec leurs lampes :<br />
or, au milieu de la nuit, un cri se fit entendre :<br />
Voici l’époux qui vient,<br />
sortez à la rencontre du Christ Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Dominus regit me,<br />
et nihil mihi deerit :<br />
in loco pascuae ibi me collocavit :<br />
super aquam refectionis educavit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur me conduit,<br />
et rien ne me manquera :<br />
sur une aire de pâturage, voilà où il m’a installé :<br />
au bord d’une eau revigorante il m’a fait parvenir.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 351 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

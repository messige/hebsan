<!-- DEBUG-VIEW START 279 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Exaudi, Domine, vocem meam,<br />
qua clamavi ad te, alleluia :<br />
tibi dixit cor meum,<br />
quaesivi vultum tuum,<br />
vultum tuum Domine requiram :<br />
ne avertas faciem tuam a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Exaucez, Seigneur, ma voix<br />
qui a lancé vers vous son appel, alléluia :<br />
mon cœur vous a dit :<br />
j'ai cherché votre visage ;<br />
je rechercherai votre visage, Seigneur :<br />
ne détournez pas de moi votre face.</ion-text></ion-col> </ion-row></ion-grid>Ps. Dominus illuminatio mea et salus mea :<br />
quem timebo ?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est la lumière qui m’inonde, et mon salut,<br />
qui craindrai-je ?</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Regnavit Dominus super omnes gentes :<br />
Deus sedet super sedem sanctam suam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est roi sur tous les peuples ;<br />
Dieu siège sur son trône sacré.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Non vos relinquam orphanos,<br />
vado et veniam (venio) ad vos,<br />
et gaudebit cor vestrum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je ne vous laisserai pas orphelins,<br />
je m'en vais, et je viendrai (viens) vers vous,<br />
et votre coeur sera dans la joie.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Exivi a Patre,<br />
et veni in mundum<br />
iterum relinquo mundum,<br />
et vado ad Patrem.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je suis sorti du Père<br />
et je suis venu dans le monde : en retour, je quitte le monde<br />
et je vais au Père.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Ascendit Deus in iubilatione,<br />
(et) Dominus in voce tubae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il s'est élevé, Dieu, dans l’allégresse :<br />
(et) le Seigneur, au son de la trompette.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Viri Galilaei,<br />
quid admiramini aspicientes in caelum?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Hommes de Galilée,<br />
pourquoi regardez-vous avec étonnement vers le ciel ?</ion-text></ion-col> </ion-row></ion-grid> Hic Iesus qui assumptus est a vobis in caelum,<br />
sic veniet.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ce Jésus qui vous a été enlevé,<br />
viendra comme cela</ion-text></ion-col> </ion-row></ion-grid> Quemadmodum vidistis eum ascendentem in caelum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme vous avez vu Jésus monter au ciel.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Pater cum essem cum eis,<br />
ego servabam eos,<br />
quos dedisti mihi, alleluia :<br />
nunc autem ad te venio :<br />
non rogo ut tollas eos de mundo,<br />
sed ut serves eos a malo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Père, quand j'étais avec eux,<br />
je gardais, moi, ceux<br />
que vous m'avez donnés, alléluia:<br />
mais maintenant je viens à vous :<br />
je ne vous prie pas de les retirer du monde,<br />
mais de les garder du Mauvais.</ion-text></ion-col> </ion-row></ion-grid>	
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

<!-- DEBUG-VIEW ENDED 279 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

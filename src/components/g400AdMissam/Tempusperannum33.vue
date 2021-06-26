<!-- DEBUG-VIEW START 141 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Dicit Dominus :<br />
ego cogito cogitationes pacis,<br />
et non afflictionis :<br />
invocabitis me,<br />
et ego exaudiam vos :<br />
et reducam captivitatem vestram<br />
de cunctis locis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur dit :<br />
Mes pensées sont des pensées de paix et non d’affliction :<br />
vous m’invoquerez,<br />
et moi, je vous exaucerai :<br />
et je vous ramènerai de captivité,<br />
de tout lieu.</ion-text></ion-col> </ion-row></ion-grid>Ps. Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez-béni, Seigneur, votre terre.</ion-text></ion-col> </ion-row></ion-grid>Ps. Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Liberasti nos, Domine,<br />
ex affligentibus nos :<br />
et eos qui nos oderunt, confudisti.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous nous avez délivrés, Seigneur,<br />
de ceux qui nous affligeaient :<br />
et ceux qui nous haïssaient, vous les avez couverts de confusion.</ion-text></ion-col> </ion-row></ion-grid>V./  In Deo laudabimur tota die,<br />
et nomini tuo confitebimur in saecula.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En Dieu nous serons glorifiés tout au long du jour :<br />
et nous acclamerons votre nom à jamais.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Des profondeurs j’ai lancé vers vous mon appel, Seigneur :<br />
Seigneur, exaucez ma voix.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Des profondeurs j’ai lancé vers vous mon appel, Seigneur :<br />
Seigneur, exaucez ma voix.</ion-text></ion-col> </ion-row></ion-grid>V./  Fiant aures tuae intendentes in orationem servi tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que vos oreilles se fassent attentives à la prière de votre serviteur.</ion-text></ion-col> </ion-row></ion-grid>V./  Si iniquitates observaveris, Domine,<br />
Domine quis sustinebit?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Si vous examinez les iniquités, Seigneur, Seigneur, qui subsistera ?</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Domine, quinque talenta tradidisti mihi:<br />
ecce alia quinque <span class="fc">superlucratus sum</span>.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous m’avez confié cinq talents ;<br />
voici que j’en ai gagné de plus cinq autres.</ion-text></ion-col> </ion-row></ion-grid> Euge serve fidelis<br />
quia in pauca fuisti fidelis,<br />
supra (super) multa te constituam,<br />
intra in gaudium Domini tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C'est bien, serviteur bon et fidèle,<br />
en peu de choses tu as été fidèle,<br />
sur beaucoup je t'établirai;<br />
entre dans la joie de ton Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Amen dico vobis,<br />
quidquid orantes petitis,<br />
credite quia accipietis,<br />
et fiet vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Amen, je vous le dis,<br />
tout ce que vous demandez en priant,<br />
croyez que vous le recevrez,<br />
et cela vous arrivera.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Amen dico vobis,<br />
quidquid orantes petitis,<br />
credite quia accipietis,<br />
et fiet vobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Amen, je vous le dis,<br />
tout ce que vous demandez en priant,<br />
croyez que vous le recevrez,<br />
et cela vous arrivera.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 141 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

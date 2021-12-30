<!-- DEBUG-VIEW START 301 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu réside dans son lieu saint,<br />Dieu qui fait habiter dans sa maison ceux qu’anime un même esprit ;<br />lui-même donnera force et puissance à son peuple.</ion-text></ion-col> </ion-row></ion-grid>Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que Dieu se lève, et que ses ennemis soient dispersés ;<br />
et qu’ils fuient devant sa face, ceux qui le haïssent.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
In Deo speravit cor meum,<br />
et <span class="fc">adiutus sum</span> :<br />
et refloruit caro mea :<br />
et ex voluntate mea :<br />
confitebor illi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C'est en Dieu que mon cœur a mis son espérance,<br />
et j’ai été secouru :<br />
et ma chair a refleuri :<br />
et de tout mon vouloir,<br />
je l’acclamrai.</ion-text></ion-col> </ion-row></ion-grid>V./  Ad te, Domine, clamavi:<br />
Deus meus, ne sileas:<br />
ne discedas a me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vers vous, Seigneur, j'ai lancé mon appel :<br />
mon Dieu, ne gardez pas silence :<br />
ne vous éloignez pas de moi.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Oculi omnium in te sperant, Domine :<br />
et tu das illis escam in tempore opportuno.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les yeux de tous mettent en vous leur espérance, Seigneur :<br />
et vous, vous leur donnez leur nourriture au temps opportun.</ion-text></ion-col> </ion-row></ion-grid>V./  Aperis tu manum tuam:<br />
et imples omne animal benedictione.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous ouvrez vous-même la main :<br />
et vous comblez tout vivant de bénédiction.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Exsultate Deo adiutori nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tressaillez d’allégresse pour Dieu, notre secours.</ion-text></ion-col> </ion-row></ion-grid> iubilate Deo Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour le Dieu de Jacob.</ion-text></ion-col> </ion-row></ion-grid> Sumite psalmum iucundum cum cithara.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Entonnez un psaume joyeux sur la cithare !</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je chanterai vos grandeurs, Seigneur,<br />
car vous m’avez recueilli :<br />
et vous n’avez pas réjoui mes ennemis à mon sujet.</ion-text></ion-col> </ion-row></ion-grid> Domine, clamavi ad te,<br />
et sanasti me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, j’ai lancé vers vous mon appel,<br />
et vous m’avez guéri.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Simile est regnum caelorum homini negotiatori,<br />
quaerenti bonas margaritas;<br />
inventa una pretiosa margarita,<br />
dedit omnia sua<br />
et comparavit eam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le royaume des cieux est comparable à un homme d’affaires<br />
qui cherche de bonnes perles :<br />
ayant trouvé une perle précieuse,<br />
il a donné tout ce qu’il avait,<br />
et l’a achetée.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Honora Dominum de tua substantia,<br />
et de primitiis frugum tuarum :<br />
ut impleantur horrea tua saturitate,<br />
et vino torcularia redundabunt.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Fais honneur au Seigneur de tes biens<br />
et des prémices de tes revenus,<br />
afin que tes greniers regorgent d'abondance<br />
et que tes pressoirs débordent de vin.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Petite et accipietis<br />
quaerite et invenietis,<br />
pulsate et aperietur vobis.<br />
Omnis enim qui petit accipit,<br />
et qui quaerit invenit,<br />
pulsanti aperietur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Demandez et vous recevrez,<br />
cherchez et vous trouverez,<br />
frappez et l'on vous ouvrira.<br />
Quiconque en effet demande, reçoit,<br />
et qui cherche trouve,<br />
et à qui frappe on ouvrira.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 301 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

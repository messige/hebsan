<!-- DEBUG-VIEW START 323 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Protector noster aspice, Deus,<br />
et respice in faciem Christi tui:<br />
quia melior est dies una in atriis tuis<br />
super milia.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu notre protecteur, jetez un regard :<br />
et posez le regard sur la face de votre Christ :<br />
car meilleur est un seul jour en vos parvis,<br />
plus que des milliers d’autres.</ion-text></ion-col> </ion-row></ion-grid>Ps. Quam dilecta tabernacula tua,<br />
Domine, virtutum!<br />
concupiscit et deficit anima mea in atria Domini.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’ils sont aimés, vos tabernacles, Seigneur des puissances ! Mon âme est éprise, et languit pour les parvis du Seigneur.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Bonum est confidere in Domino,<br />
quam confidere in homine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il est bon de mettre sa confiance dans le Seigneur,<br />
plutôt que de mettre sa confiance en l’homme.</ion-text></ion-col> </ion-row></ion-grid>V./  Bonum est sperare in Domino<br />
quam sperare in principibus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Il est bon de mettre son espérance dans le Seigneur,<br />
plutôt que de mettre son espérance dans les princes.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez, tressaillons d’allégresse pour le Seigneur :<br />
jubilons pour Dieu notre sauveur.</ion-text></ion-col> </ion-row></ion-grid> Praeoccupemus faciem eius<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Hodie si vocem eius audieritis<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Aujourd’hui, si vous entendez sa voix.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Caro mea vere est cibus,<br />
et sanguis meus vere est potus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma chair est vraiment une nourriture<br />
et mon sang vraiment une boisson.</ion-text></ion-col> </ion-row></ion-grid> Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Celui qui mange ma chair<br />
et boit mon sang<br />
demeure en moi, et moi en lui.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Venez, tressaillons d’allégresse pour le Seigneur :<br />
jubilons pour Dieu notre sauveur.</ion-text></ion-col> </ion-row></ion-grid> Praeoccupemus faciem eius<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Hodie si vocem eius audieritis<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Aujourd’hui, si vous entendez sa voix.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Immittet angelus Domini<br />
in circuitu timentium eum,<br />
et eripiet eos :<br />
gustate et videte,<br />
quoniam suavis est Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">L’ange du Seigneur se déploiera<br />
à l’entour de ceux qui le craignent,<br />
et il les délivrera :<br />
goûtez et voyez<br />
combien le Seigneur est doux.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Domus mea, domus orationis vocabitur, <br>dicit Dominus :<br />
in ea omnis, qui petit, accipit :<br />
et qui quaerit, invenit, <br>et pulsanti aperietur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma maison sera appelée maison de prière, dit le Seigneur :<br />
en elle, quiconque demande reçoit,<br />
et qui cherche trouve, et à qui frappe, on ouvrira.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Qui manducat carnem meam,<br />
et bibit sanguinem meum,<br />
in me manet, et ego in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Celui qui mange ma chair<br />
et boit mon sang<br />
demeure en moi, et moi en lui.</ion-text></ion-col> </ion-row></ion-grid> Dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dit le Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Primum quaerite regnum Dei,<br />
et omnia adicientur vobis,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Cherchez d'abord le royaume de Dieu<br />
et tout cela vous sera donné par surcroît,<br />
dit le Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 323 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

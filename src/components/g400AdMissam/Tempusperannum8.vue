<!-- DEBUG-VIEW START 39 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
<span class="fc">Factus est</span> Dominus protector meus,<br />
et eduxit me in latitudinem :<br />
salvum me fecit, quoniam voluit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur s’est fait mon protecteur ;<br />
et il m’a retiré au large :<br />
il m’a sauvé, car il m’a choisi.</ion-text></ion-col> </ion-row></ion-grid>Ps. Diligam te Domine, fortitudo mea (virtus mea):<br />
Dominus firmamentum meum,<br />
et refugium meum(,et liberator meus).<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je vous aimerai, Seigneur, ma vigueur (ma force) :<br />
le Seigneur est mon assise,<br />
et mon refuge(, et mon libérateur).</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Ad Dominum, dum tribularer, clamavi,<br />
et exaudivit me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dans ma détresse, j’ai lancé mon appel vers le Seigneur :<br />
et il m’a exaucé.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine, libera animam meam a labiis iniquis,<br />
et a lingua dolosa.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, délivrez mon âme des lèvres iniques,<br />
et de la langue trompeuse.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine Deus meus in te speravi :<br />
libera me ab omnibus persequentibus me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur mon Dieu, en vous j’ai mis mon espérance :<br />
délivrez-moi de tous ceux qui me persécutent.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Domine convertere,<br />
et eripe animam meam :<br />
salvum me fac propter misericordiam tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Retournez-vous, Seigneur,<br />
et dégagez mon âme :<br />
sauvez-moi en raison de votre miséricorde.</ion-text></ion-col> </ion-row></ion-grid>V./  Domine, ne in ira tua arguas me:<br />
neque in furore tuo corripias me.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, ne me reprenez pas dans votre courroux,<br />
et ne me punissez pas dans votre indignation.</ion-text></ion-col> </ion-row></ion-grid>V./  Miserere mihi, Domine, quoniam infirmus sum :<br />
sana me, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ayez pitié de moi, Seigneur, car je suis sans force, Seigneur :<br />
guérissez-moi, Seigneur.</ion-text></ion-col> </ion-row></ion-grid>V./  Quoniam conturbata sunt omnia ossa mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Parce que je tremble de tous mes os.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Primum quaerite regnum Dei,<br />
et omnia adicientur vobis,<br />
dicit Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Cherchez d'abord le royaume de Dieu<br />
et tout cela vous sera donné par surcroît,<br />
dit le Seigneur.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Cantabo Domino,<br />
qui bona tribuit mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je chanterai pour le Seigneur<br />
qui m’a comblé de biens.</ion-text></ion-col> </ion-row></ion-grid> <b>Cantate</b> Domino, qui bona tribuit mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Et psallam nomini Domini altissimi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et je psalmodierai pour le nom du Seigneur, le Très-Haut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Cantabo Domino,<br />
qui bona tribuit mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je chanterai pour le Seigneur<br />
qui m’a comblé de biens.</ion-text></ion-col> </ion-row></ion-grid> <b>Cantate</b> Domino, qui bona tribuit mihi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary"></ion-text></ion-col> </ion-row></ion-grid> Et psallam nomini Domini altissimi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et je psalmodierai pour le nom du Seigneur, le Très-Haut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 39 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->

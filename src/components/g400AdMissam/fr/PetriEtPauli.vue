<template>
<!-- - keyCalendar = 205 - keyPiece = 6341 - keyText = 6475 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Nunc scio vere,<br />
quia misit Dominus angelum suum :<br />
et eripuit me de manu Herodis,<br />
et de omni exspectatione plebis Iudaeorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Maintenant je sais vraiment<br />
que le Seigneur a envoyé son ange<br />
et qu'il m'a arraché à la main d'Hérode<br />
et à tout ce qu'attendait le peuple juif.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2671 -->Ps. Domine, probasti me,<br />
et cognovisti me :<br />
tu cognovisti sessionem meam,<br />
et resurrectionem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, vous m’avez sondé,<br />
et vous me connaissez :<br />
c’est vous qui connaissez mon affaissement,<br />
et mon redressement.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1663 - keyText = 1683 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Constitues eos principes super omnem terram;<br />
memores erunt nominis tui, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous les établirez princes sur toute la terre ;<br />
ils se rappelleront votre nom, Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 7357 -->V./  Pro patribus tuis <span class="fc">nati sunt</span> tibi filii:<br />
propterea populi confitebuntur tibi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Pour remplacer vos pères vous sont nés des fils ;<br />
c’est pourquoi les peuples vous acclameront.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9198 - keyText = 9406 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Tu es Petrus,<br />
et super hanc petram<br />
aedificabo Ecclesiam meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Tu es Pierre<br />
et sur cette pierre<br />
je bâtirai mon Eglise.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1661 - keyText = 1684 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Constitues eos principes super omnem terram;<br />
memores erunt nominis tui,<br />
in omni progenie et generatione.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous les établirez princes sur toute la terre ;<br />
ils se rappelleront votre nom, toujours,<br />
de génération en génération.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 9201 - keyText = 9406 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Tu es Petrus,<br />
et super hanc petram<br />
aedificabo Ecclesiam meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Tu es Pierre<br />
et sur cette pierre<br />
je bâtirai mon Eglise.</ion-text></ion-col></ion-row></ion-grid>

</template>
 <br /></template>
 <script lang="ts">
 export default {
 props: {
 annoABC: {
 type: String,
 }
 }
 }
 </script>
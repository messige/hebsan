<template>
<!-- - keyCalendar = 143 - keyPiece = 3326 - keyText = 3376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Soyez pour moi un Dieu protecteur,<br />
et un lieu fortifié :<br />
qu’ainsi vous me sauviez.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7927 --> Quoniam firmamentum meum,<br />
 et refugium meum es tu:<br />
et propter nomen tuum dux mihi eris,<br />
et enutries me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Car mon assise, et mon refuge, c’est vous :<br />
et en raison de votre nom, vous serez pour moi un guide,<br />
et vous me nourrirez.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 10850 -->Ps. In te, Domine, speravi,<br />
non confundar in aeternum:<br />
in iustitia tua libera me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En vous, Seigneur, j’ai mis mon espérance,<br />
je ne serai pas confondu à jamais :<br />
en votre justice libérez-moi.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9189 - keyText = 9400 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Tu es Deus, qui facis mirabilia solus,<br />
notam fecisti in gentibus virtutem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">C’est vous Dieu, qui seul faites des merveilles :<br />
vous avez fait connaître parmi les peuples votre puissance.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5655 -->V./  Liberasti in brachio tuo populum tuum,<br />
filios Israel et Ioseph.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Par votre bras, vous avez délivré votre peuple,<br />
les enfants d'Israël et de Joseph.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1291 - keyText = 1309 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Cantate Domino canticum novum :<br />
quia mirabilia fecit Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Chantez au Seigneur un cantique nouveau :<br />
car le Seigneur a fait des merveilles.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1179 - keyText = 1201 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
doce me iustificationes tuas :<br />
in labiis meis pronuntiavi omnia iudicia oris tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous êtes béni, Seigneur :<br />
enseignez-moi vos justes dispositions :<br />
sur mes lèvres, j’ai prononcé tous les jugements de votre bouche.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5696 - keyText = 5802 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Manducaverunt, et <span class="fc">saturati sunt</span> nimis,<br />
et desiderium eorum attulit eis Dominus :<br />
non sunt fraudati a desiderio suo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ils mangèrent et furent rassasiés avec surabondance ;<br />
et le Seigneur combla leur désir :<br />
et ne les déçut point dans leur attente.</ion-text></ion-col></ion-row></ion-grid>

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
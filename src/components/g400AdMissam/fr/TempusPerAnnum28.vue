<template>
<!-- - keyCalendar = 165 - keyPiece = 8489 - keyText = 8703 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Si iniquitates observaveris Domine,<br />
Domine quis sustinebit?<br />
Quia apud te propitiatio est, Deus Israel.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Si vous regardez nos péchés, Seigneur,<br />Seigneur, qui subsistera devant vous ?<br />
Car près de vous est le pardon, Dieu d'Israël.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2090 -->Ps. De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du fond de l’abîme j’ai crié vers
vous, Seigneur;<br />
Seigneur,exaucez ma voix.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 8454 - keyText = 8663 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Graduale</rubrique><br /><br />Si ambulem in medio umbrae mortis,<br />
non timebo mala :<br />
quoniam tu mecum es, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Si je circule en pleine ombre de la mort,<br />
je ne craindrai aucun mal :<br />
car vous, vous êtes avec moi, Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9956 -->V./  Virga tua et baculus tuus,<br />
ipsa me consolata sunt.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Votre houlette et votre bâton :<br />
ce sont eux qui m’ont réconforté.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 3005 - keyText = 3052 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ecce quam bonum et quam iucundum<br />
habitare fratres in unum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Voyez comme il est bon et comme il est agréable<br />
d’habiter en frères, d’un seul cœur !</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 8778 -->V./  Sicut unguentum in capite,<br />
quod descendit in barbam, barbam Aaron.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C’est comme un parfum sur la tête,<br />
qui ruisselle sur la barbe, la barbe d’Aaron.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 7582 - keyText = 7735 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Qui timent Dominum,<br />
sperent in eo :<br />
adiutor et protector eorum est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ceux qui craignent le Seigneur,<br />
qu'ils mettent en lui leur espérance :<br />
il est leur secours et leur protecteur.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 7744 - keyText = 7975 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Recordare mei, Domine,<br />
omni potentatui dominans :<br />
da sermonem rectum in os meum,<br />
ut placeant verba mea in conspectu principis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Souvenez-vous de moi, Seigneur,<br />
qui dominez sur toute puissance :<br />
mettez dans ma bouche un propos droit,<br />
que mes mots plaisent<br />
en présence du prince.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 764 - keyText = 808 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Aufer a me opprobrium et contemptum,<br />
quia mandata tua exquisivi, Domine :<br />
nam et testimonia tua meditatio mea est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ôtez de moi l’opprobre et le mépris :<br />
car j’ai recherché vos commandements, Seigneur :<br />
Et en effet, ma méditation, c’est vos révélations.</ion-text></ion-col></ion-row></ion-grid>

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
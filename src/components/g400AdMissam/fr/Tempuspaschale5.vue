<template>
<!-- - keyCalendar = 94 - keyTitle = 1175 - prev_keyPiece = 1289 - keyType = 1 - officeYear =  - keyText = 1304 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Cantate Domino canticum novum, alleluia :<br />
quia mirabilia fecit Dominus, alleluia :<br />
ante conspectum gentium revelavit iustitiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Chantez au Seigneur un cantique nouveau, alléluia :<br />
car le Seigneur a fait des merveilles, alléluia :<br />
en présence des nations, il a révélé sa justice.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 8286 -->Ps. Salvavit sibi dextera eius :<br />
et brachium sanctum eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le salut lui est venu de sa droite,<br />
 et son bras de sainteté.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 94 - keyTitle = 2018 - prev_keyPiece = 2231 - keyType = 3 - officeYear =  - keyText = 2273 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Dextera Dei fecit virtutem :<br />
dextera Domini exaltavit me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">La droite de Dieu a déployé sa puissance :<br />
la droite du Seigneur m’a exalté.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 94 - keyTitle = 1293 - prev_keyPiece = 1415 - keyType = 3 - officeYear =  - keyText = 1447 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Christus resurgens<br />
ex mortuis iam non moritur,<br />
mors illi ultra non dominabitur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ressuscité d'entre les morts,<br />
le Christ ne meurt plus :<br />
la mort n'aura désormais plus d'empire sur lui.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 94 - keyTitle = 4645 - prev_keyPiece = 5190 - keyType = 5 - officeYear =  - keyText = 5337 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iubilate Deo universa terra :<br />
psalmum dicite nomini eius :<br />
venite, et audite, et narrabo vobis,<br />
omnes qui timetis Deum<br />
quanta fecit Dominus animae meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jubilez pour Dieu, toute de la terre,<br />
dites un psaume à l’honneur de son nom :<br />
venez, et écoutez, et je vous raconterai,<br />
vous tous qui craignez le Seigneur,<br />
tout ce que le Seigneur a fait pour mon âme.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 94 - keyTitle = 8008 - prev_keyPiece = 8962 - keyType = 6 - officeYear = A - keyText = 9171 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Tanto tempore vobiscum sum,<br />
et non cognovistis me?<br />
Philippe, qui videt me,<br />
videt et Patrem, alleluia :<br />
non credis quia ego in Patre,<br />
et Pater in me est?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Depuis si longtemps je suis avec vous,<br />
et vous ne me connaissez pas ?<br />
Philippe, qui me voit,<br />
voit aussi le Père, alléluia :<br />
ne crois-tu pas que moi je suis dans le Père,<br />
et que le Père est en moi ?</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 94 - keyTitle = 2818 - prev_keyPiece = 3152 - keyType = 6 - officeYear = C - keyText = 3195 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ego sum vitis vera et vos palmites,<br />
qui manet in me et ego in eo,<br />
hic fert fructum multum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Moi, je suis la vraie vigne, et vous, les sarments :<br />
qui demeure en moi, et moi en lui,<br />
celui-là porte un fruit abondant.</ion-text></ion-col></ion-row></ion-grid>

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
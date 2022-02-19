<template>
<!-- - keyCalendar = 137 - keyPiece = 6693 - keyText = 6823 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Omnis terra adoret te, Deus,<br />
et psallat tibi;<br />
psalmum dicat nomini tuo, Altissime..
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Que toute la terre vous adore, Dieu,<br />
et psalmodie pour vous :<br />
qu’elle dise un psaume à l’honneur de votre nom, Très-Haut.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 5335 -->Ps. Iubilate Deo omnis terra,<br />
psalmum dicite nomini eius :<br />
date gloriam laudi eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute de la terre,<br />
dites un psaume à l’honneur de son nom :<br />
rendez gloire à sa louange !</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5923 - keyText = 6043 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Misit Dominus verbum suum, et sanavit eos :<br />
et eripuit eos de interitu eorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur a envoyé son Verbe, et il les a guéris :<br />
et il les a arrachés à leur perdition.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 1615 -->V./  Confiteantur Domino misericordiae eius:<br />
et mirabilia eius filiis hominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Qu’ils louent le Seigneur pour sa miséricorde<br />et pour ses merveilles, en faveur des enfants des hommes. </ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5441 - keyText = 5541 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Laudate Deum omnes angeli eius :<br />
laudate eum omnes virtutes eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Louez Dieu, tous ses Anges :<br />
louez-le, toutes ses puissances.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5190 - keyText = 5337 -->
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
<!-- - keyPiece = 5355 - keyText = 5464 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Laetabimur in salutari tuo :<br />
et in nomine Domini Dei nostri magnificabimur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nous nous réjouirons en votre salut :<br />
et dans le nom du Seigneur notre Dieu, nous serons glorifiés.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2253 - keyText = 2302 -->
 <template v-if=" annoABC == 'B'">
<rubrique>Communio</rubrique><br /><br />Dicit Andreas Simoni fratri suo :<br />
invenimus Messiam,<br />
qui dicitur Christus :<br />
et adduxit eum ad Iesum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">André dit à son frère Simon:<br />
nous avons trouvé le Messie,<br />
celui qu'on appelle le Christ :<br />
et il l'amena à Jésus.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2255 - keyText = 2305 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Dicit Dominus :<br />
implete hydrias aqua<br />
et ferte architriclino.<br />
Cum (Dum) gustasset architriclinus<br />
aquam vinum factam,<br />
dicit sponso :<br />
servasti vinum bonum usque adhuc.<br />
Hoc signum fecit Iesus primum coram discipulis suis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur dit:<br />
remplissez d'eau les jarres<br />
et portez-en au maître du festin.<br />
Quand celui-ci eut goûté<br />
l'eau changée en vin<br />
il dit à l'époux :<br />
tu as gardé le bon vin jusqu'à maintenant.<br />
Ce fut le premier signe que Jésus fit devant ses disciples.</ion-text></ion-col></ion-row></ion-grid>

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
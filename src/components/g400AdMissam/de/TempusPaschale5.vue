<template>
<!-- - keyCalendar = 94 - keyPiece = 1289 - keyText = 1304 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Cantate Domino canticum novum, alleluia :<br />
quia mirabilia fecit Dominus, alleluia :<br />
ante conspectum gentium revelavit iustitiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Singet dem Herrn ein neues Lied, Halleluja,<br />
 denn wunderbare Taten hat der Herr vollbracht, Halleluja!<br />
Vor den Augen der Völker hat er seine Gerechtigkeit enthüllt!</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 8286 -->Ps. Salvavit sibi dextera eius :<br />
et brachium sanctum eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seine Rechte hat ihm den Sieg verschafft<br />
und sein heiliger Arm.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2231 - keyText = 2273 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Dextera Dei fecit virtutem :<br />
dextera Domini exaltavit me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die Rechte Gottes hat machtvoll gehandelt!<br />
Die Rechte des Herrn hat mich erhöht.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1415 - keyText = 1447 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Christus resurgens ex mortuis, iam non moritur,<br />
mors illi ultra non dominabitur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Christus, auferstanden von den Toten, stirbt nicht mehr;<br />
der Tod hat keine Macht mehr über ihn.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5190 - keyText = 5337 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iubilate Deo universa terra :<br />
psalmum dicite nomini eius :<br />
venite, et audite, et narrabo vobis,<br />
omnes qui timetis Deum<br />
quanta fecit Dominus animae meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jauchzet Gott, alle Welt! Jauchzet Gott, alle Welt!<br />
Lobsinget zum Ruhm seines Namens.<br />
Kommt, und hört und ich will euch erzählen<br />
- allen, die ihr den Herrn fürchtet -<br />
wie viel der Herr meinem Leben Gutes getan hat!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 8962 - keyText = 9171 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Tanto tempore vobiscum sum,<br />
et non cognovistis me?<br />
Philippe, qui videt me,<br />
videt et Patrem, alleluia :<br />
non credis quia ego in Patre,<br />
et Pater in me est?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">So lange Zeit bin ich bei euch,<br />
und ihr habt mich nicht erkannt?<br />
Philippus, wer mich sieht,<br />
der sieht auch den Vater, Halleluja.<br />
Glaubst du nicht, dass ich im Vater bin,<br />
und der Vater in mir ist?</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3152 - keyText = 3195 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ego sum vitis vera et vos palmites,<br />
qui manet in me et ego in eo,<br />
hic fert fructum multum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich bin der wahre Weinstock und ihr die Reben,<br />
wer in mir bleibt und ich in ihm,<br />
der bringt reiche Frucht.</ion-text></ion-col></ion-row></ion-grid>

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
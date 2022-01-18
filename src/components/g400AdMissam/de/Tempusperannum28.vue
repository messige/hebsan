<template>
<!-- - keyCalendar = 165 - keyTitle = 7597 - prev_keyPiece = 8489 - keyType = 1 - officeYear =  - keyText = 8703 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Si iniquitates observaveris Domine,<br />
Domine quis sustinebit?<br />
Quia apud te propitiatio est, Deus Israel.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wenn du auf das Unrecht acht hättest, Herr,<br />
Herr, wer könnte bestehen?<br />
Denn bei dir ist die Versöhnung, Gott Israels.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2090 -->Ps. De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Aus der Tiefe rufe ich, Herr, zu dir,<br />
Herr, höre meine Stimme.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 165 - keyTitle = 7563 - prev_keyPiece = 8454 - keyType = 2 - officeYear = A - keyText = 8663 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Graduale</rubrique><br /><br />Si ambulem in medio umbrae mortis,<br />
non timebo mala :<br />
quoniam tu mecum es, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wenn ich auch wandelte inmitten des Schattens des Todes,<br />
ich werde nichts Böses fürchten,<br />
denn du bist bei mir, Herr.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9956 -->V./  Virga tua et baculus tuus,<br />
ipsa me consolata sunt.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dein Stab und dein Stock,<br />
die trösten mich.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 165 - keyTitle = 2695 - prev_keyPiece = 3005 - keyType = 2 - officeYear = C - keyText = 3052 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ecce quam bonum et quam iucundum<br />
habitare fratres in unum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seht, wie gut und lieblich ist es,<br />
wenn Brüder einträchtig beieinander wohnen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 8778 -->V./  Sicut unguentum in capite,<br />
quod descendit in barbam, barbam Aaron.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie Salböl auf dem Haupt,<br />
das niedersteigt auf den Bart, den Bart Aarons.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 165 - keyTitle = 6764 - prev_keyPiece = 7582 - keyType = 3 - officeYear =  - keyText = 7735 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Qui timent Dominum,<br />
sperent in eo :<br />
adiutor et protector eorum est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die den Herrn fürchten,<br />
sollen auf ihn vertrauen.<br />
Er ist ihr Helfer und Schützer.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 165 - keyTitle = 6917 - prev_keyPiece = 7744 - keyType = 5 - officeYear =  - keyText = 7975 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Recordare mei, Domine,<br />
omni potentatui dominans :<br />
da sermonem rectum in os meum,<br />
ut placeant verba mea in conspectu principis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gedenke meiner Herr,<br />
der du über jede Herrschaft Herr bist.<br />
Gib das rechte Wort in meinen Mund,<br />
damit meine Reden Gefallen finden vor dem Angesicht des Fürsten.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 165 - keyTitle = 726 - prev_keyPiece = 764 - keyType = 6 - officeYear =  - keyText = 808 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Aufer a me opprobrium et contemptum,<br />
quia mandata tua exquisivi, Domine :<br />
nam et testimonia tua meditatio mea est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nimm von mir Schimpf und Schande,<br />
denn ich habe deine Zeugnisse bewahrt, Herr,<br />
denn über deine Zeugnisse sinne ich nach.</ion-text></ion-col></ion-row></ion-grid>

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
<template>
<!-- - keyCalendar = 144 - keyPiece = 2578 - keyText = 2634 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Domine, in tua misericordia speravi :<br />
exsultavit cor meum in salutari tuo :<br />
cantabo Domino, qui bona tribuit mihi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, ich habe auf deine Erbarmen gehofft.<br />
Mein Herz jubelt über deine Hilfe.<br />
Singen will ich dem Herrn, der mir Gutes getan hat.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 9559 -->Ps. Usquequo Domine oblivisceris me in finem ?<br />
usquequo avertis faciem tuam a me ?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie lange noch, Herr, vergisst du mich für immer?<br />
Wie lange noch wendest du dein Angesicht ab von mir?</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 3102 - keyText = 3144 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ego dixi: Domine, miserere mei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich sprach: Herr, erbarme dich meiner.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10848 --> Sana animam meam, quoniam peccavi tibi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heile meine Seele, denn gesündigt habe ich an dir.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 1067 -->V./  Beatus qui intelligit super egenum et pauperem:<br />
in die mala liberabit eum Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig, der zur Einsicht kommt angesichts des Elenden und Armen;<br />
am bösen Tag wird ihn der Herr befreien.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9523 - keyText = 10849 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Verba mea auribus percipe, Domine :<br />
intellige clamorem meum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vernimm mit deinen Ohren, Herr, meine Worte;<br />
achte auf mein Schreien!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 4949 - keyText = 5094 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Intende voci orationis meae,<br />
rex meus, et Deus meus :<br />
quoniam ad te orabo, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Höre auf die Stimme meines Betens,<br />
mein König und mein Gott;<br />
denn zu dir will ich beten, Herr!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6065 - keyText = 6187 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Narrabo omnia mirabilia tua:<br />
laetabor et exsultabo in te:<br />
psallam nomini tuo, Altissime.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Erzählen will ich all deine Wundertaten.<br />
Ich freue mich und frohlocke in dir:<br />
Deinem Namen will ich einen Psalm singen, Allerhöchster.</ion-text></ion-col></ion-row></ion-grid>

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
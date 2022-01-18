<template>
<!-- - keyCalendar = 148 - keyTitle = 3112 - prev_keyPiece = 3475 - keyType = 1 - officeYear =  - keyText = 3635 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Exaudi, Domine,vocem meam,<br />
qua clamavi ad te :<br />
adiutor meus esto,<br />
ne derelinquas me,<br />
neque despicias me,<br />
Deus salutaris meus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Erhöre, Herr, meine Stimme,<br />
mit der ich zu dir schrie;<br />
sei du mein Helfer;<br />
verlass mich nicht,<br />
und verachte mich nicht,<br />
du Gott meines Heils!</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2746 -->Ps. Dominus illuminatio mea et salus mea :<br />
quem timebo ?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist mein Licht und mein Heil:<br />
Vor wem sollte ich mich fürchten?</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 148 - keyTitle = 6506 - prev_keyPiece = 7287 - keyType = 2 - officeYear =  - keyText = 7412 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Protector noster aspice, Deus,<br />
et respice super servos tuos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Unser Schützer, sieh doch, Gott;<br />
schau auf deine Knechte.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 2602 -->V./  Domine Deus virtutum,<br />
exaudi preces servorum tuorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, Gott der Mächte,<br />
erhöre die Bitten deiner Diener.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 148 - keyTitle = 2316 - prev_keyPiece = 2580 - keyType = 3 - officeYear =  - keyText = 2636 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Domine, in virtute tua laetabitur rex :<br />
et super salutare tuum exsultabit vehementer.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, an deiner Macht freut sich der König,<br />
und über dein Heil frohlockt er laut.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 148 - keyTitle = 1003 - prev_keyPiece = 1084 - keyType = 5 - officeYear =  - keyText = 1111 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedicam Domino qui mihi tribuit intellectum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich will den Herrn preisen, der mir Einsicht gegeben hat.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7417 --> Providebam Deum in conspectu meo semper :<br />
quoniam a dextris est mihi ne commovear.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich habe Gott ständig vor Augen,<br />
denn er steht mir zur Rechten, damit ich nicht wanke.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 148 - keyTitle = 8313 - prev_keyPiece = 9315 - keyType = 6 - officeYear =  - keyText = 9524 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.

<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nur eines erbitte ich vom Herrn,<br />
danach verlangt mich:<br />
Im Haus des Herrn zu wohnen<br />
alle Tage meines Lebens.</ion-text></ion-col></ion-row></ion-grid>

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
<template>
<!-- - keyCalendar = 134 - keyPiece = 4664 - keyText = 4791 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />In excelso throno vidi sedere virum,<br />
quem adorat multitudo angelorum,<br />
psallentes in unum :<br />
ecce cuius imperium permanet in aeternum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Auf einem hohen Thron sah ich einen Mann sitzen,<br />
den die Vielzahl der Engel anbetet,<br />
indem sie einmütig singt:<br />
Seht, seine Herrschaft dauert in Ewigkeit an.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 5336 -->Ps. Iubilate Deo omnis terra<br />
servite Domino in laetitia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzt Gott, alle Lande,<br />
dient dem Herrn in Freude.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1163 - keyText = 1184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedictus Dominus Deus Israel,<br />
qui facit mirabilia magna solus a saeculo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei der Herr, der Gott Israels,<br />
der allein große Wunder tut von Ewigkeit an.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9133 -->V./  Suscipiant montes pacem populo tuo,<br />
et colles iustitiam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dann tragen die Berge Frieden für das Volk<br />
und die Höhen Gerechtigkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5188 - keyText = 5336 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Iubilate Deo omnis terra<br />
servite Domino in laetitia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jauchzt Gott, alle Lande,<br />
dient dem Herrn in Freude.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5187 - keyText = 5334 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iubilate Deo omnis terra<br />
iubilate Deo omnis terra<br />
servite Domino in laetitia<br />
intrate in conspectu eius in exsultatione<br />
quia Dominus ipse est Deus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jauchzt Gott, alle Welt!<br />
Jauchzt Gott, alle Welt!<br />
Dient dem Herrn mit Freuden;<br />
kommt vor sein Angesicht mit Frohlocken!<br />
Denn der Herr, er selbst ist Gott.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6294 - keyText = 10845 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Notas mihi fecisti vias vitae:<br />
adimplebis me laetitia cum vultu tuo, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du zeigtest mir die Wege zum Leben, Herr.<br />
Du wirst mich mich mit Freude erfüllen mit deinem Angesicht.</ion-text></ion-col></ion-row></ion-grid>

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
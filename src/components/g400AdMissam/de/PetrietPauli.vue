<template>
<!-- - keyCalendar = 205 - keyPiece = 6341 - keyText = 6475 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Nunc scio vere,<br />
quia misit Dominus angelum suum :<br />
et eripuit me de manu Herodis,<br />
et de omni exspectatione plebis Iudaeorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nun weiß ich wahrhaftig,<br />
dass der Herr seinen Engel gesandt hat<br />
und mich der Hand des Herodes entrissen hat<br />
und all dem, was das jüdische Volk erhoffte.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2671 -->Ps. Domine, probasti me,<br />
et cognovisti me :<br />
tu cognovisti sessionem meam,<br />
et resurrectionem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, du hast mich erforscht<br />
und du kennst mich.<br />
Du kennst mein Sitzen<br />
und mein Aufstehen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1663 - keyText = 1683 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Constitues eos principes super omnem terram;<br />
memores erunt nominis tui, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du wirst sie als Herrscher einsetzen über die ganze Erde;<br />
gedenken werden sie deines Namens, Herr.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 7357 -->V./  Pro patribus tuis <span class="fc">nati sunt</span> tibi filii:<br />
propterea populi confitebuntur tibi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Statt deiner Väter wurden dir Kinder geboren,<br />
deshalb werden die Völker dich preisen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9198 - keyText = 9406 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Tu es Petrus,<br />
et super hanc petram<br />
aedificabo Ecclesiam meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du bist Petrus [der Fels],<br />
und auf diesen Felsen<br />
werde ich meine Kirche bauen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1661 - keyText = 1684 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Constitues eos principes super omnem terram;<br />
memores erunt nominis tui,<br />
in omni progenie et generatione.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du wirst sie als Herrscher einsetzen über die ganze Erde,<br />
gedenken werden sie deines Namens<br />
von Geschlecht zu Geschlecht.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 9201 - keyText = 9406 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Tu es Petrus,<br />
et super hanc petram<br />
aedificabo Ecclesiam meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du bist Petrus [der Fels],<br />
und auf diesen Felsen<br />
werde ich meine Kirche bauen.</ion-text></ion-col></ion-row></ion-grid>

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
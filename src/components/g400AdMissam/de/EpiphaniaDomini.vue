<template>
<!-- - keyCalendar = 31 - keyTitle = 2600 - prev_keyPiece = 2897 - keyType = 1 - officeYear =  - keyText = 2945 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Ecce advenit dominator Dominus<br />
et regnum in manu eius<br />
et potestas et imperium.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seht, es kommt der Herrscher, der Herr.<br />
Und in seiner Hand ist das Königtum,<br />
und die Macht und die Herrschaft.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2225 -->Ps. Deus, iudicium tuum regi da :<br />
et iustitiam tuam filio regis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, gib dein Gericht dem König,<br />
dem Königssohn gib dein gerechtes Walten.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 8044 -->Ps. Reges Tharsis et insulae munera offerent<br />
reges Arabum et Saba dona adducent.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Könige von Tarsis und von den Inseln werden Geschenke bringen,<br />
die Könige der Araber und Saba werden Geschenke herbeiführen.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 3393 -->Ps. Et adorabunt eum omnes reges terrae :<br />
omnes gentes servient ei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und anbeten werden ihn alle Könige der Erde,<br />
alle Völker werden ihm dienen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 31 - keyTitle = 5918 - prev_keyPiece = 6619 - keyType = 2 - officeYear =  - keyText = 6744 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Omnes de Saba venient,<br />
aurum et thus deferentes,<br />
et laudem Domino annuntiantes.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Alle werden von Saba kommen,<br />
Gold und Weihrauch bringen<br />
und mit Freuden das Lob des Herrn verkündigen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9069 -->V./  Surge, et illuminare Ierusalem:<br />
quia gloria Domini super te <span class="fc">orta est</span>.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auf, werde licht, Jerusalem,<br />
denn die Herrlichkeit des Herrn ist über dir aufgegangen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 31 - keyTitle = 8619 - prev_keyPiece = 9660 - keyType = 3 - officeYear =  - keyText = 9885 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Vidimus stellam eius in Oriente,<br />
et venimus cum muneribus<br />
adorare Dominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wir haben seinen Stern aufgehen sehen im Morgenland<br />
und sind gekommen mit Gaben,<br />
um ihn anzubeten.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 31 - keyTitle = 6983 - prev_keyPiece = 7818 - keyType = 5 - officeYear =  - keyText = 8044 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Reges Tharsis et insulae munera offerent<br />
reges Arabum et Saba dona adducent.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die Könige von Tarsis und von den Inseln werden Geschenke bringen,<br />
die Könige der Araber und Saba werden Geschenke herbeiführen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3393 --> Et adorabunt eum omnes reges terrae :<br />
omnes gentes servient ei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und anbeten werden ihn alle Könige der Erde,<br />
alle Völker werden ihm dienen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 31 - keyTitle = 8619 - prev_keyPiece = 9661 - keyType = 6 - officeYear =  - keyText = 9885 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Vidimus stellam eius in Oriente,<br />
et venimus cum muneribus<br />
adorare Dominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wir haben seinen Stern aufgehen sehen im Morgenland<br />
und sind gekommen mit Gaben,<br />
um ihn anzubeten.</ion-text></ion-col></ion-row></ion-grid>

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
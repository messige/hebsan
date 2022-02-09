<template>
<!-- - keyCalendar = 218 - keyPiece = 3868 - keyText = 4036 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Gaudeamus omnes in Domino,<br />
diem festum celebrantes sub honore Sanctorum omnium :<br />
de quorum solemnitate gaudent angeli,<br />
et collaudant Filium Dei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Freuen wir uns alle im Herrn,<br />
feiern wir den festlichen Tag zu Ehren aller Heiligen.<br />
An deren Fest freuen sich [mit uns] die Engel<br />
und loben Gottes Sohn.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3727 -->Ps. Exsultate iusti in Domino,<br />
rectos decet collaudatio.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubelt, ihr Gerechten, im Herrn.<br />
Für die Redlichen ziemt sich der Lobpreis.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9090 - keyText = 9296 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Timete Dominum omnes sancti eius,<br />
quoniam nihil deest timentibus eum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Fürchtet den Herrn, all seine Heiligen,<br />
denn es gibt keinen Mangel für die, die ihn fürchten.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5068 -->V./  Inquirentes autem Dominum non deficient omni bono.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die aber den Herrn suchen, an keinem Guten wird es ihnen fehlen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9479 - keyText = 9710 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Kommt alle zu mir,<br />
die ihr euch plagt<br />
und schwere Lasten zu tragen habt.<br />
Ich werde euch erquicken.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5271 - keyText = 5417 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iustorum animae in manu Dei sunt:<br />
et non tanget illos tormentum malitiae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die Seelen der Gerechten sind in Gottes Hand<br />
und keine Qual des Übels kann sie berühren.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10011 --> Visi sunt oculis insipientium mori:<br />
illi autem sunt in pace.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">In den Augen der Toren sind sie gestorben,<br />
sie aber sind in Frieden.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 892 - keyText = 934 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Beati mundo corde, quoniam ipsi Deum videbunt:<br />
Beati pacifici,  quoniam filii Dei vocabuntur:<br />
Beati qui persecutionem patiuntur propter iustitiam,<br />
quoniam ipsorum est regnum caelorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Selig, die ein reines Herz haben, denn sie werden Gott sehen.<br>Selig, die Friedfertigen, denn sie werden Söhne Gottes genannt werden.<br>Selig, die Verfolgung leiden um der Gerechtigkeit willen,<br>denn ihrer ist das Himmelreich.</ion-text></ion-col></ion-row></ion-grid>

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
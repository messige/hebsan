<template>
<!-- - keyCalendar = 172 - keyPiece = 1144 - keyText = 1168 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B'">
<rubrique>Introitus</rubrique><br /><br />Benedicta sit sancta Trinitas,<br />
atque indivisa Unitas,<br />
confitebimur ei,<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei die heilige Dreieinigkeit<br />
und ungeteilte Einheit.<br />
Lasst uns sie preisen,<br />
denn sie hat uns ihr Erbarmen geschenkt.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2608 -->Ps. Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, unser Herrscher,<br />
wie wunderbar ist dein Name auf der ganzen Erde!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1310 - keyText = 1331 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Caritas Dei <span class="fc">diffusa est</span> in cordibus nostris, alleluia :<br />
per inhabitantem Spiritum eius in nobis,
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die Liebe Gottes, ausgegossen wurde sie in unsere Herzen, Halleluja,<br />
durch den Heiligen Geist, der in uns innewohnt.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1106 -->Ps. Benedic anima mea Domino :<br />
et omnia quae intra me sunt, nomini santo eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Preise, meine Seele, den Herrn,<br />
und alles, was in mir ist, seinen heiligen Namen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1176 - keyText = 1204 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
qui intueris abyssos,<br />
et sedes super Cherubim.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen bist du, Herr,<br />
der du in die Tiefen schaust<br />
und auf den Kerubim thronst.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 1203 -->V./  <span class="fc">Benedictus es</span> Domine,<br />
in firmamento caeli,<br />
et laudabilis in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
am Gewölbe des Himmels,<br />
und lobwürdig in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1181 - keyText = 1199 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Pro GR. cantari potest hymnus sequens :</i><br />
Hymnus</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen bist du, Herr,<br />
du Gott unserer Väter,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10856 --> Et benedictum nomen gloriae tuae, quod est sanctum,<br />
et laudabile et gloriosum in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und gepriesen ist der Name deiner Herrlichkeit, die heilig ist,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10858 --> <span class="fc">Benedictus es</span> in templo sancto gloriae tuae,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du im Tempel deiner heiligen Herrlichkeit,<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10857 --> <span class="fc">Benedictus es</span> super thronum sanctum regni tui,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du auf dem heiligen Thron deines Reiches<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10859 --> <span class="fc">Benedictus es</span>  super sceptrum divinitatis tuae,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du über das Szepter deiner Göttlichkeit<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10860 --> <span class="fc">Benedictus es</span>, qui sedes super Cherubim, intuens abyssos,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, der du über Cherubim thronst und in Tiefen schaust,<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10861 --> <span class="fc">Benedictus es</span>, qui ambulas super pennas ventorum<br />et super undas maris,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, der du wandelst auf den Flügeln der Winde<br />und auf den Wellen des Meeres<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10862 --> Benedicant te omnes Angeli et Sancti tui.<br />Et laudent te et glorificent in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dich preisen all Deine Engel und deine Heiligen,<br />sie loben und verherrlichen dich in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10863 --> Benedicant te caeli, terra, mare, et omnia quae in eis sunt.<br />Et laudent te et gloríficent in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dich preisen Himmel, Erde, Meer und alles, was in ihnen ist<br />sie loben und verherrlichen dich in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10864 --> Gloria Patri, et Filio, et Spiritui Sancto,<br />
et laudabili et glorioso in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ehre sei dem Vater, und dem Sohn, und dem Heiligen Geist,<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 10865 --> Sicut erat in princípio, et nunc, et semper <br />et in saecula sæculorum. Amen.<br />
Et laudabili et glorioso in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie im Anfang, so auch jetzt und alle Zeit,
<br />und in Ewigkeit. Amen.<br />gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 1199 --> <span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gepriesen bist du, Herr,<br />
du Gott unserer Väter,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1180 - keyText = 1199 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
Deus Patrum nostrorum,<br />
et laudabilis et gloriosus in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen bist du, Herr,<br />
du Gott unserer Väter,<br />
gelobt und gerühmt in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1194 - keyText = 1213 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Benedictus sit</span> Deus Pater,<br />
unigenitusque Dei Filius,<br />
Sanctus quoque Spiritus:<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei Gott, der Vater,<br />
und Gottes eingeborener Sohn<br />
und der Heilige Geist;<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1113 - keyText = 1138 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wir preisen den Gott des Himmels<br />
und vor allen Lebenden bekennen wir ihn,<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2028 - keyText = 2062 -->
 <template v-if=" annoABC == 'B'">
<rubrique>Communio</rubrique><br /><br /><span class="fc">Data est</span> mihi omnis potestas in caelo et in terra, alleluia :<br />
euntes, docete omnes gentes,<br />
baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gegeben ist mir alle Macht, im Himmel und auf Erden, Halleluja.<br />
Geht, lehrt alle Völker,<br />
tauft sie im Namen des Vaters und des Sohnes und des Heiligen Geistes.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1113 - keyText = 1138 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Benedicimus Deum caeli,<br />
et coram omnibus viventibus confitebimur ei :<br />
quia fecit nobiscum misericordiam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wir preisen den Gott des Himmels<br />
und vor allen Lebenden bekennen wir ihn,<br />
denn er hat uns sein Erbarmen geschenkt.</ion-text></ion-col></ion-row></ion-grid>

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
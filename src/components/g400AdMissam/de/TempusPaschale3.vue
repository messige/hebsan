<template>
<!-- - keyCalendar = 91 - keyPiece = 5186 - keyText = 5333 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius, alleluia <br />
date gloriam laudi eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jauchzet Gott zu, alle Lande, Halleluja,<br />
spielt zum Ruhm seines Namens, Halleluja<br />
verherrlicht ihn mit Lobpreis.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2318 -->Ps. Dicite Deo,<br />
quam terribilia sunt opera tua, Domine,<br />
in multitudine virtutis tuae<br />(mentientur tibi inimici tui)
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sagt zu Gott:<br />
Wie furchtbar sind deine Werke, Herr.<br />
Ob der Fülle deiner Macht (müssen deine Feinde dir heucheln).</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1523 - keyText = 1550 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Cognoverunt discipuli Dominum Iesum in fractione panis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Die Jünger erkannten Jesus, den Herrn, am Brotbrechen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6709 - keyText = 6839 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Oportebat pati Christum<br />
et resurgere a mortuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Christus musste leiden<br />
und von den Toten auferstehen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3480 --> Et ita intrare in gloriam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und so in seine Herrlichkeit eintreten.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5425 - keyText = 5522 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Lobe den Herrn, meine Seele!<br />
Ich will den Herrn loben, solange ich lebe,<br />
und meinem Gott lobsingen, solange ich bin.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 8891 - keyText = 9103 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Surrexit Dominus,<br />
et apparuit Petro.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Der Herr ist auferstanden<br />
und er ist dem Petrus erschienen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1294 - keyText = 1312 -->
 <template v-if=" annoABC == 'B'">
<rubrique>Communio</rubrique><br /><br />Cantate Domino, alleluia :<br />Cantate Domino,  benedicite nomen eius :<br />
bene nuntiate de die in diem salutare eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Singt dem Herrn, Halleluja:<br />Singt dem Herrn, preist seinen Namen!<br />
Verkündet sein Heil von Tag zu Tag.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 8587 - keyText = 8805 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Simon Ioannis, diligis me plus his?<br />
Domine, tu omnia nosti :<br />
tu scis, Domine, quia amo te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Simon, Sohn des Johannes, liebst du mich mehr als die [mich lieben]?<br />
Herr, du weißt alles;<br />
du weißt [auch], Herr, dass ich dich liebe!</ion-text></ion-col></ion-row></ion-grid>

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
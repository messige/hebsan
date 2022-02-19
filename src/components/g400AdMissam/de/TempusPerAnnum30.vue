<template>
<!-- - keyCalendar = 167 - keyPiece = 5399 - keyText = 5495 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Laetetur cor quaerentium Dominum :<br />
quaerite Dominum, et confirmamini :<br />
quaerite faciem eius semper.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Freuen soll sich das Herz derer, die den Herrn suchen.<br />
Sucht den Herrn, und seid stark:<br />
Sucht sein Angesicht immerdar!</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1628 -->Ps. Confitemini Domino,<br />
et invocate nomen eius :<br />
annuntiate inter gentes opera eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dankt dem Herrn!<br />
Ruft seinen Namen an!<br />
Macht unter den Völkern seine Taten bekannt!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9314 - keyText = 9524 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B'">
<rubrique>Graduale</rubrique><br /><br />Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.

<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nur eines erbitte ich vom Herrn,<br />
danach verlangt mich:<br />
Im Haus des Herrn zu wohnen<br />
alle Tage meines Lebens.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9610 -->V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Um die Freundlichkeit des Herrn zu schauen<br />
und Zuflucht zu finden in seinem heiligen Tempel.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1477 - keyText = 1503 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Clamaverunt iusti,<br />
et Dominus exaudivit eos:<br />
et ex omnibus tribulationibus eorum<br />
liberavit eos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Es schrien die Gerechten,<br />
und der Herr hat sie erhört.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5441 -->V./  Iuxta est Dominus his,<br />
qui tribulato sunt corde :<br />
et humiles spiritu salvabit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nahe ist der Herr denen,<br />
die zerschlagenen Herzens sind,<br />
und die Demütigen im Geiste rettet er.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5426 - keyText = 5524 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Lauda Ierusalem Dominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Lobe, Jerusalem, den Herrn.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 5523 --> Lauda Deum tuum Sion.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lobe deinen Gott, Zion.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2663 - keyText = 2713 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Domine, vivifica me secundum eloquium tuum :<br />
ut sciam testimonia tua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, durch dein Wort belebe mich,<br />
damit ich verstehe, was du gebietest.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5355 - keyText = 5464 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Laetabimur in salutari tuo :<br />
et in nomine Domini Dei nostri magnificabimur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wir wollen jubeln in deinem Heil,<br />
und im Namen des Herrn, unsres Gottes, wollen wir uns rühmen.</ion-text></ion-col></ion-row></ion-grid>

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
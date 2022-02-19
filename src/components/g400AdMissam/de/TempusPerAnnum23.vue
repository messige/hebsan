<template>
<!-- - keyCalendar = 160 - keyPiece = 5288 - keyText = 5429 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Iustus es Domine, et rectum iudicium tuum:<br />
fac cum servo tuo secundum misericordiam tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gerecht bist du, Herr, und richtig ist dein Urteil.<br />
Handle an deinem Knecht nach deiner Barmherzigkeit.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 925 -->Ps. Beati immaculati in via :<br />
qui ambulant in lege Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig, die untadelig sind auf dem Weg,<br />
die wandeln im Gesetz des Herrn.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 859 - keyText = 902 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B'">
<rubrique>Graduale</rubrique><br /><br />Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Selig das Volk, dessen Gott der Herr ist,<br />
das Volk, das er sich zum Erbe erwählt.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9751 -->V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2628 - keyText = 2683 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, Zuflucht warst du uns<br />
von Geschlecht zu Geschlecht!</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 7342 -->V./  Priusquam montes fierent,<br />
aut formaretur terra et orbis :<br />
a saeculo, et usque in saeculum tu es, Deus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ehe die Berge entstanden<br />
und gebildet wurden die Welt und der Erdkreis,<br />
von Ewigkeit bis in Ewigkeit bist du Gott!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2555 - keyText = 2614 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Domine exaudi orationem meam<br />
et clamor meus ad te (per)veniat.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, erhöre mein Gebet,<br />
und lass mein Rufen zu dir kommen!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6748 - keyText = 6875 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Oravi Deum meum ego Daniel, dicens :<br />
exaudi, Domine, preces servi tui :<br />
illumina faciem tuam super sanctuarium tuum :<br />
et propitius intende populum istum,<br />
super quem <span class="fc">invocatum est</span> nomen tuum, Deus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich betete zu meinem Gott, ich Daniel, ich sagte:<br />
Erhöre, Herr, die Bitten deines Knechtes.<br />
Lass dein Angesicht über deinem Heiligtum leuchten,<br />
und achte gnädig auf dieses Volk,<br />
über das dein Name angerufen ist, Gott.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 9850 - keyText = 10081 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Vovete, et reddite Domino Deo vestro,<br />
omnes qui in circuitu eius affertis munera<br />
terribili, et ei qui aufert spiritum principum :<br />
terribili apud omnes reges terrae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Legt Gelübde ab und erfüllt sie dem Herrn, eurem Gott,<br />
ihr alle rings um ihn werdet Geschenke darbringen,<br />
dem Furchtbaren, und dem, der den Herrschenden den Geist wegnimmt.<br />
Der furchtbarer ist als alle Könige der Erde.</ion-text></ion-col></ion-row></ion-grid>

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
<template>
<!-- - keyCalendar = 164 - keyTitle = 4324 - prev_keyPiece = 4837 - keyType = 1 - officeYear =  - keyText = 4970 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />In voluntate tua, Domine, universa sunt posita,<br />
et non est qui possit resistere voluntati tuae:<br />
tu enim fecisti omnia, caelum et terram,<br />
et universa quae caeli ambitu continentur:<br />
Dominus universorum tu es.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Unter deinen Willen, Herr, ist alles gestellt,<br />
und nichts gibt es, was sich deinem Willen widersetzen kann.<br />
Du nämlich hast alles gemacht, Himmel und Erde,<br />
und alles, was die Himmel in ihrem Kreis umfassen.<br />
Der Herr über alles: Du bist es.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 925 -->Ps. Beati immaculati in via :<br />
qui ambulant in lege Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig, die untadelig sind auf dem Weg,<br />
die wandeln im Gesetz des Herrn.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 164 - keyTitle = 2355 - prev_keyPiece = 2628 - keyType = 2 - officeYear =  - keyText = 2683 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
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
<!-- - keyCalendar = 164 - keyTitle = 4172 - prev_keyPiece = 4665 - keyType = 3 - officeYear =  - keyText = 4792 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />In exitu Israel de Aegypto domus Iacob de populo barbaro.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Als Israel aus Ägypten zog, das Haus Jakob aus dem Volk fremder Sprache.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 164 - keyTitle = 8670 - prev_keyPiece = 9715 - keyType = 5 - officeYear =  - keyText = 9943 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Vir erat in terra nomine Iob,<br />
simplex et rectus, ac timens Deum :<br />
quem Satan petiit, ut tentaret:<br />
et <span class="fc">data est</span> ei potestas a Domino<br />
in facultate et in carne eius:<br />
perdiditque omnem substantiam ipsius, et filios:<br />
carnem quoque eius gravi ulcere vulneravit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ein Mann lebte auf Erden mit Namen Job,<br />
einfach und aufrichtig und gottesfürchtig.<br />
Diesen erbat sich der Satan, um ihn zu versuchen.<br />
Und gegeben wurde ihm die Macht vom Herrn<br />
über sein Vermögen und über sein Fleisch.<br />
Und er richtete seine ganze Habe zugrunde, und seine Söhne,<br />
und auch sein Fleisch schlug er mit bösartigem Geschwür.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 164 - keyTitle = 4267 - prev_keyPiece = 4776 - keyType = 6 - officeYear =  - keyText = 4905 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />In salutari tuo anima mea,<br />
et in verbum tuum speravi :<br />
quando facies de persequentibus me iudicium?<br />
iniqui <span class="fc">persecuti sunt</span> me,<br />
adiuva me, Domine Deus meus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Auf dein Heil hofft meine Seele,<br />
und auf dein Wort hoffe ich.<br />
Wann hältst du über meine Verfolger Gericht?<br />
Ungerechte verfolgen mich;<br />
hilf mir, Herr, mein Gott.</ion-text></ion-col></ion-row></ion-grid>

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
<template>
<!-- - keyCalendar = 140 - keyPiece = 5399 - keyText = 5495 -->
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
<!-- - keyPiece = 7667 - keyText = 7858 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Quis sicut Dominus Deus noster,<br />
qui in altis habitat :<br />
humilia respicit in caelo et in terra?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wer ist wie der Herr, unser Gott,<br />
der in der Höhe wohnt,<br />
der auf das Niedere schaut im Himmel und auf Erden?</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9139 -->V./  Suscitans a terra inopem,<br />
et de stercore erigens pauperem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der den Armen von der Erde aufrichtet,<br />
und den Elenden erhebt, der im Mist liegt.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 244 - keyText = 271 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Adorabo ad templum sanctum tuum :<br />
et confitebor nomini tuo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Anbeten werde ich zu deinem heiligen Tempel hin<br />
und deinen Namen preisen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1219 - keyText = 1237 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Bonum est confiteri Domino.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gut ist es, den Herrn zu preisen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3509 --> Et psallere nomini tuo, altissime.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und deinem Namen zu lobsingen, du Höchster.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 892 - keyText = 934 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Beati mundo corde, quoniam ipsi Deum videbunt:<br />
Beati pacifici,  quoniam filii Dei vocabuntur:<br />
Beati qui persecutionem patiuntur propter iustitiam,<br />
quoniam ipsorum est regnum caelorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Selig, die ein reines Herz haben, denn sie werden Gott sehen.<br>Selig, die Friedfertigen, denn sie werden Söhne Gottes genannt werden.<br>Selig, die Verfolgung leiden um der Gerechtigkeit willen,<br>denn ihrer ist das Himmelreich.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 4560 - keyText = 4679 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Illumina faciem tuam super servum tuum,<br />
et salvum me fac in tua misericordia :<br />
Domine, non confundar,<br />
quoniam invocavi te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Lass dein Angesicht leuchten über deinem Knecht,<br />
mache mich heil in deiner Barmherzigkeit.<br />
Herr, lass mich nicht zuschanden werden,<br />
denn dich habe ich angerufen.</ion-text></ion-col></ion-row></ion-grid>

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
<template>
<!-- - keyCalendar = 143 - keyPiece = 3326 - keyText = 3376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sei mir ein schützender Gott,<br />
und ein Ort der Zuflucht,<br />
um mich zu retten (heil zu machen).</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7927 --> Quoniam firmamentum meum,<br />
 et refugium meum es tu:<br />
et propter nomen tuum dux mihi eris,<br />
et enutries me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Denn du bist mein Feste<br />
 und meine Zuflucht.<br />
und um deines Namens willen wirst du mich führen<br />
und mich ernähren.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 10850 -->Ps. In te, Domine, speravi,<br />
non confundar in aeternum:<br />
in iustitia tua libera me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auf dich, Herr, habe ich gehofft.<br />
Möge ich nicht zuschanden werden in Ewigkeit.<br />
In deiner Gerechtigkeit befreie mich.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9189 - keyText = 9400 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Tu es Deus, qui facis mirabilia solus,<br />
notam fecisti in gentibus virtutem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du bist der Gott, der allein Wunder tut,<br />
du tatest deine Macht bei den Völkern kund.<br />
</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5655 -->V./  Liberasti in brachio tuo populum tuum,<br />
filios Israel et Ioseph.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Befreit hast du mit deinem Arm dein Volk,<br />
die Kinder von Jakob und Joseph.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1291 - keyText = 1309 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Cantate Domino canticum novum :<br />
quia mirabilia fecit Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Singt dem Herrn ein neues Lied,<br />
denn Wunderbares hat der Herr getan.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1179 - keyText = 1201 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Benedictus es</span>, Domine,<br />
doce me iustificationes tuas :<br />
in labiis meis pronuntiavi omnia iudicia oris tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen bist du, Herr.<br />
Lehre mich deine Gesetze!<br />
Mit meinen Lippen verkünde ich alle Urteile deines Mundes.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5696 - keyText = 5802 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Manducaverunt, et <span class="fc">saturati sunt</span> nimis,<br />
et desiderium eorum attulit eis Dominus :<br />
non sunt fraudati a desiderio suo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sie haben gegessen und sie wurden völlig satt;<br />
der Herr brachte ihnen, wonach sie verlangt hatten.<br />
In ihrem Verlangen wurden sie nicht betrogen [enttäuscht].</ion-text></ion-col></ion-row></ion-grid>

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
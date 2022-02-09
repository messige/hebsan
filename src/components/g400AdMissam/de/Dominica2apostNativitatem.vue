<template>
<!-- - keyCalendar = 27 - keyPiece = 2826 - keyText = 2876 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Dum medium silentium tenerent omnia,<br />
et nox in suo cursu medium iter haberet<br />
omnipotens sermo tuus, Domine,<br />
de caelis a regalibus sedibus venit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Als tiefes Schweigen das All umfing<br />
und die Nacht bis zur Mitte gelangt war,<br />
da stieg dein allmächtiges Wort, Herr,<br />
vom Himmel herab, vom königlichen Thron.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2771 -->Ps. Dominus regnavit,<br />
decorem <span class="fc">indutus est</span> :<br />
<span class="fc">indutus est</span> Dominus fortitudinem,<br />
et praecinxit se.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr regiert als König!<br />
Er hat sich mit Schmuck bekleidet;<br />
der Herr hat sich bekleidet mit Macht,<br />
er hat sich damit umgürtet.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 8645 - keyText = 8867 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Speciosus forma prae filiis hominum :<br />
<span class="fc">diffusa est</span> gratia in labiis tuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du bist der Schönste von allen Menschenkindern,<br />
Anmut ist ausgegossen über deine Lippen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 3355 -->V./  Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Herz brachte ein gutes Wort hervor,<br />
ich sage meine Werke dem König.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 5671 -->V./  Lingua mea calamus scribae velociter scribentis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Meine Zunge gleicht dem Griffel eines flinken Schreibers.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2723 - keyText = 2770 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Dominus regnavit, decorem induit :<br />
induit Dominus fortitudinem,<br />
et praecinxit se virtute.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Der Herr regiert als König! Er hat sich mit Hoheit bekleidet;<br />
der Herr hat sich mit Kraft bekleidet<br />
und mit Macht umgürtet.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1077 - keyText = 1105 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedic anima mea Domino,<br />
et noli oblivisci omnes retributiones eius :<br />
et renovabitur, sicut aquilae, iuventus tua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Lobe den Herrn, meine Seele,<br />
und vergiss nicht, was er dir Gutes getan hat;<br />
und wie dem Adler wird dir die Jugend erneuert.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2549 - keyText = 2608 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, unser Herrscher,<br />
wie wunderbar ist dein Name auf der ganzen Erde!</ion-text></ion-col></ion-row></ion-grid>

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
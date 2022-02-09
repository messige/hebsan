<template>
<!-- - keyCalendar = 27 - keyPiece = 2826 - keyText = 2876 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Dum medium silentium tenerent omnia,<br />
et nox in suo cursu medium iter haberet<br />
omnipotens sermo tuus, Domine,<br />
de caelis a regalibus sedibus venit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Alors qu'un profond silence enveloppait toutes choses<br />
et que la nuit était au milieu de son cours,<br />
votre Parole toute-puissante, Seigneur,<br />
est venue du haut des cieux, des demeures royales.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2771 -->Ps. Dominus regnavit,<br />
decorem <span class="fc">indutus est</span> :<br />
<span class="fc">indutus est</span> Dominus fortitudinem,<br />
et praecinxit se.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur a établi son règne,<br />
il s’est revêtu de splendeur :<br />
le Seigneur s’est revêtu de force<br />
et a bouclé son ceinturon.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 8645 - keyText = 8867 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Speciosus forma prae filiis hominum :<br />
<span class="fc">diffusa est</span> gratia in labiis tuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Splendide de beauté, vous surpassez les enfants des hommes ;<br />
la grâce est répandue sur vos lèvres.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 3355 -->V./  Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon cœur a fait jaillir la bonne parole :<br />
je dédie mes œuvres au Roi.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 5671 -->V./  Lingua mea calamus scribae velociter scribentis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma langue est comme la plume de l'écrivain habile.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2723 - keyText = 2770 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Dominus regnavit, decorem induit :<br />
induit Dominus fortitudinem,<br />
et praecinxit se virtute.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur a établi son règne, il s’est revêtu de splendeur :<br />
le Seigneur s’est revêtu de force<br />
et a bouclé son ceinturon de puissance.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1077 - keyText = 1105 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedic anima mea Domino,<br />
et noli oblivisci omnes retributiones eius :<br />
et renovabitur, sicut aquilae, iuventus tua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Bénis, mon âme, Seigneur :<br />
et n’oublie pas toutes ses récompenses :<br />
et ta jeunesse sera renouvelée comme celle de l’aigle.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2549 - keyText = 2608 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, notre Seigneur,<br />
qu’il est admirable votre nom, sur la terre entière !</ion-text></ion-col></ion-row></ion-grid>

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
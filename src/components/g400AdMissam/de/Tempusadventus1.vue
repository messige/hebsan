<template>
<!-- - keyCalendar = 2 - keyPiece = 169 - keyText = 189 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Ad te levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Zu dir erhob ich meine Seele.<br />
Mein Gott, auf dich vertraue ich.<br />
Lass mich nicht zuschanden werden.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6265 --> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lass meine Feinde mich nicht verlachen!<br />
Ja, alle, die auf dich harren,<br />
werden nicht zuschanden.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 9787 -->Ps. Vias tuas, Domine, demonstra mihi :<br />
et semitas tuas edoce me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zeige mir, Herr, deine Wege<br />
und lehre mich deine Pfade!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9327 - keyText = 9537 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Universi qui te exspectant,<br />
non confundentur, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Alle, die auf dich ihre Erwartung setzen,<br />
werden nicht zuschanden, Herr.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9788 -->V./  Vias tuas, Domine, notas fac mihi:<br />
et semitas tuas edoce me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zeige mir, Herr, deine Wege<br />
und lehre mich deine Pfade!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 6788 - keyText = 6911 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Zeige uns, Herr, deine Erbarmen<br />
und schenke uns dein Heil.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 165 - keyText = 186 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ad te, Domine, levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Zu dir, Herr, erhob ich meine Seele.<br />
Mein Gott, auf dich vertraue ich.<br />
Lass mich nicht zuschanden werden.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6265 --> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lass meine Feinde mich nicht verlachen!<br />
Ja, alle, die auf dich harren,<br />
werden nicht zuschanden.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2683 - keyText = 2732 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Dominus dabit benignitatem :<br />
et terra nostra dabit fructum suum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Der Herr wird Güte geben,<br />
und unsere Erde wird ihre Frucht geben.</ion-text></ion-col></ion-row></ion-grid>

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
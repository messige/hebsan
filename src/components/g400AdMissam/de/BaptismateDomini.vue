<template>
<!-- - keyCalendar = 32 - keyPiece = 2324 - keyText = 2376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Dilexisti iustitiam, et odisti iniquitatem :<br />
propterea unxit te Deus, Deus tuus,<br />
oleo laetitiae prae consortibus tuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du liebtest Gerechtigkeit und hasstest das Unrecht.<br />
Darum salbte dich Gott, dein Gott,<br />
mit dem Öl der Freude vor deinen Gefährten.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3355 -->Ps. Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Herz brachte ein gutes Wort hervor,<br />
ich sage meine Werke dem König.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1163 - keyText = 1184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedictus Dominus Deus Israel,<br />
qui facit mirabilia magna solus a saeculo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei der Herr, der Gott Israels,<br />
der allein große Wunder tut von Ewigkeit an.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9133 -->V./  Suscipiant montes pacem populo tuo,<br />
et colles iustitiam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dann tragen die Berge Frieden für das Volk<br />
und die Höhen Gerechtigkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2325 - keyText = 2374 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Ad libitum :</i><br />
Graduale</rubrique><br /><br />Dilexisti iustitiam et odisti iniquitatem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du liebtest Gerechtigkeit und hasstest das Unrecht.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 10847 -->V./  Propterea unxit te Deus, Deus tuus,<br />
oleo laetitiae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Darum salbte dich Gott, dein Gott,<br />
mit dem Öl der Freude.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1190 - keyText = 1212 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Benedictus qui venit in nomine Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei er, der kommt im Namen des Herrn.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 2199 --> Deus Dominus, et illuxit nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr ist Gott und er ist uns aufgestrahlt.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5013 - keyText = 5156 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Ad libitum :</i><br />
Versus alleluiaticus</rubrique><br /><br />Inveni David servum meum :<br />
oleo sancto meo unxi eum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich habe David, meinen Knecht, gefunden<br />
und ihn mit meinem heiligen Öl gesalbt.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1191 - keyText = 1212 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedictus qui venit in nomine Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gepriesen sei er, der kommt im Namen des Herrn.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 1216 --> Benediximus vobis de domo Domini :<br />
Deus Dominus, et illuxit nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wir segnen euch vom Haus des Herrn her.<br />
Gott, der Herr, erleuchte uns.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 6639 - keyText = 6762 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Omnes qui in Christo baptizati estis,<br />
Christum induistis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ihr alle, die ihr in Christus getauft seid,<br />
Christus habt ihr [als Gewand] angezogen.</ion-text></ion-col></ion-row></ion-grid>

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
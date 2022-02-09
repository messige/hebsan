<template>
<!-- - keyCalendar = 222 - keyPiece = 3880 - keyText = 4043 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Gaudens gaudebo in Domino,<br />
et exsultabit anima mea in Deo meo :<br />
quia induit me vestimentis salutis,<br />
et indumento iustitiae circumdedit me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je me réjouirai, et me réjouirai encore dans le Seigneur,<br />
et mon âme tressaillira d’allégresse en mon Dieu :<br />
car il m’a revêtu des vêtements du salut,<br />
et il m’a enveloppé d’un manteau de justice.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7561 --> Quasi sponsam ornatam monilibus suis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme une épouse parée de ses bijoux.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 3607 -->Ps. Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je chanterai vos grandeurs, Seigneur,<br />
car vous m’avez recueilli :<br />
et vous n’avez pas réjoui mes ennemis à mon sujet.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1135 - keyText = 1160 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedicta es tu, Virgo Maria,<br />
a Domino Deo excelso,<br />
prae omnibus mulieribus super terram..
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous êtes bénie, Vierge Marie, par le Seigneur,<br />
le Dieu Très-Haut,<br />
plus que toutes les femmes sur la terre.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9418 -->V./  Tu gloria Ierusalem,<br />
tu laetitia Israel,<br />
tu honorificentia populi nostri
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous êtes la gloire de Jérusalem, vous, l'allégressee d' Israël :<br />
vous, le titre d'honneur de notre peuple.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9116 - keyText = 9323 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Tota pulchra es, Maria:<br />
et macula originalis non est in te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous êtes toute belle, Marie,<br />
et la tache originelle n'est pas en vous.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 792 - keyText = 838 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ave Maria, gratia plena,<br />
Dominus tecum;<br />
benedicta tu in mulieribus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je vous salue, Marie, pleine de grâce,<br />
le Seigneur est avec vous,<br />
vous êtes bénie entre les femmes.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3992 - keyText = 4128 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Gloriosa dicta sunt de te, Maria,<br />
quia fecit magna qui potens est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Glorieuses choses qu’on a dites de vous, Marie,<br />
car il a fait de grandes choses, celui qui est puissant.</ion-text></ion-col></ion-row></ion-grid>

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
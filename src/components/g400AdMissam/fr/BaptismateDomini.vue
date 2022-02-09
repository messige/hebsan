<template>
<!-- - keyCalendar = 32 - keyPiece = 2324 - keyText = 2376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Dilexisti iustitiam, et odisti iniquitatem :<br />
propterea unxit te Deus, Deus tuus,<br />
oleo laetitiae prae consortibus tuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous avez aimé la justice, et haï l’iniquité :<br />
c’est pour cela que Dieu, votre Dieu, vous a oint de l’huile d’allégresse,<br />en présence de vos compagnons.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3355 -->Ps. Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mon cœur a fait jaillir la bonne parole :<br />
je dédie mes œuvres au Roi.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1163 - keyText = 1184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedictus Dominus Deus Israel,<br />
qui facit mirabilia magna solus a saeculo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni soit le Seigneur, Dieu d’Israël,<br />
qui seul fait de grandes merveilles depuis toujours.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9133 -->V./  Suscipiant montes pacem populo tuo,<br />
et colles iustitiam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que les montagnes reçoivent la paix pour votre peuple,<br />
et les collines la justice.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2325 - keyText = 2374 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Ad libitum :</i><br />
Graduale</rubrique><br /><br />Dilexisti iustitiam et odisti iniquitatem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous avez aimé la justice et haï l'iniquité.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 10847 -->V./  Propterea unxit te Deus, Deus tuus,<br />
oleo laetitiae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Voilà pourquoi Dieu, votre Dieu, vous a oint de l’huile d’allégresse.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1190 - keyText = 1212 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Benedictus qui venit in nomine Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni soit celui qui vient au nom du Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 2199 --> Deus Dominus, et illuxit nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur Dieu nous illumine.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5013 - keyText = 5156 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique><i>Ad libitum :</i><br />
Versus alleluiaticus</rubrique><br /><br />Inveni David servum meum :<br />
oleo sancto meo unxi eum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">J’ai trouvé David mon serviteur :<br />
je l’ai oint de mon huile sainte.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1191 - keyText = 1212 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedictus qui venit in nomine Domini.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni soit celui qui vient au nom du Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 1216 --> Benediximus vobis de domo Domini :<br />
Deus Dominus, et illuxit nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nous vous avons béni depuis la maison du Seigneur :<br />
 le Seigneur est Dieu, et il a fait briller sa lumière sur nous.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 6639 - keyText = 6762 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Omnes qui in Christo baptizati estis,<br />
Christum induistis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous tous qui avez été baptisés dans le Christ,<br />
vous avez revêtu le Christ.</ion-text></ion-col></ion-row></ion-grid>

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
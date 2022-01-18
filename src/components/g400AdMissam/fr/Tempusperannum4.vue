<template>
<!-- - keyCalendar = 140 - keyTitle = 4813 - prev_keyPiece = 5399 - keyType = 1 - officeYear =  - keyText = 5495 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Laetetur cor quaerentium Dominum :<br />
quaerite Dominum, et confirmamini :<br />
quaerite faciem eius semper.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Que le cœur de ceux qui cherchent le Seigneur se réjouisse :<br />
cherchez le Seigneur, et soyez forts :<br />
cherchez sans cesse son visage.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1628 -->Ps. Confitemini Domino,<br />
et invocate nomen eius :<br />
annuntiate inter gentes opera eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Acclamez le Seigneur,<br />
et invoquez son nom :<br />
annoncez ses œuvres parmi les nations.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 140 - keyTitle = 6844 - prev_keyPiece = 7667 - keyType = 2 - officeYear =  - keyText = 7858 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Quis sicut Dominus Deus noster,<br />
qui in altis habitat :<br />
humilia respicit in caelo et in terra?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Qui est semblable au Seigneur notre Dieu<br />
qui habite dans les hauteurs,<br />
et qui pose le regard sur ce qui est humble dans le ciel et sur la terre ?</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9139 -->V./  Suscitans a terra inopem,<br />
et de stercore erigens pauperem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lui qui ramasse par terre l’indigent,<br />
et qui, du fumier, relève le pauvre.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 140 - keyTitle = 232 - prev_keyPiece = 244 - keyType = 3 - officeYear =  - keyText = 271 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Adorabo ad templum sanctum tuum :<br />
et confitebor nomini tuo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">J’adorerai dans votre saint Temple :<br />
et j’acclamerai votre nom.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 140 - keyTitle = 1114 - prev_keyPiece = 1219 - keyType = 5 - officeYear =  - keyText = 1237 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Bonum est confiteri Domino.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Il est bon d’acclamer le Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3509 --> Et psallere nomini tuo, altissime.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et de psalmodier pour votre nom, Très-Haut.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 140 - keyTitle = 841 - prev_keyPiece = 892 - keyType = 6 - officeYear = A - keyText = 934 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Beati mundo corde, quoniam ipsi Deum videbunt:<br />
Beati pacifici,  quoniam filii Dei vocabuntur:<br />
Beati qui persecutionem patiuntur propter iustitiam,<br />
quoniam ipsorum est regnum caelorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Heureux les cœurs purs : car ils verront Dieu.<br />
Heureux les pacifiques : car ils seront appelés fils de Dieu.<br />
Heureux ceux qui subissent persécution pour la justice :<br />
car le royaume des cieux est à eux.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 140 - keyTitle = 4078 - prev_keyPiece = 4560 - keyType = 6 - officeYear = C - keyText = 4679 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Illumina faciem tuam super servum tuum,<br />
et salvum me fac in tua misericordia :<br />
Domine, non confundar,<br />
quoniam invocavi te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Faites resplendir votre face sur votre serviteur,<br />
et sauvez-moi dans votre miséricorde : Seigneur,<br />
que je ne sois pas confondu,<br />
car je vous ai invoqué.</ion-text></ion-col></ion-row></ion-grid>

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
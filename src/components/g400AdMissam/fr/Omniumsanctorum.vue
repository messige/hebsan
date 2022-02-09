<template>
<!-- - keyCalendar = 218 - keyPiece = 3868 - keyText = 4036 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Gaudeamus omnes in Domino,<br />
diem festum celebrantes sub honore Sanctorum omnium :<br />
de quorum solemnitate gaudent angeli,<br />
et collaudant Filium Dei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Réjouissons-nous tous dans le Seigneur<br />
en célébrant ce jour de fête en l'honneur de tous les Saints ;<br />
cette fête cause la joie des anges ;<br />
ensemble ils louent le Fils de Dieu.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3727 -->Ps. Exsultate iusti in Domino,<br />
rectos decet collaudatio.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Exultez, vous les justes, dans le Seigneur :<br />
aux hommes droits il appartient de le chanter en chœur !</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9090 - keyText = 9296 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Timete Dominum omnes sancti eius,<br />
quoniam nihil deest timentibus eum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Craignez le Seigneur, vous tous ses saints :<br />
car rien ne manque à ceux qui le craignent.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5068 -->V./  Inquirentes autem Dominum non deficient omni bono.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et ceux qui cherchent le Seigneur ne manqueront d’aucun bien.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9479 - keyText = 9710 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Venez à moi, vous tous qui peinez<br />
et ployez sous le fardeau,<br />
et moi je vous soulagerai.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5271 - keyText = 5417 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iustorum animae in manu Dei sunt:<br />
et non tanget illos tormentum malitiae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Les âmes des justes sont dans la main de Dieu,<br />
et le tourment de la méchanceté ne les touchera pas.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10011 --> Visi sunt oculis insipientium mori:<br />
illi autem sunt in pace.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Aux yeux des insensés, ils ont paru mourir:<br />
mais eux, ils sont dans la paix.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 892 - keyText = 934 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
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
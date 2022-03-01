<template>
<!-- - keyCalendar = 2 - keyPiece = 169 - keyText = 189 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Ad te levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vers vous j’ai élevé mon âme :<br />
Mon Dieu, en vous je me confie ;<br />
que je n’aie pas à rougir !</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6265 --> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et que mes ennemis ne se moquent pas de moi :<br />
car aucun de ceux qui vous attendent<br /> ne sera confondu. </ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 9787 -->Ps. Vias tuas, Domine, demonstra mihi :<br />
et semitas tuas edoce me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, faites-moi voir vos voies :<br />
et enseignez-moi vos sentiers.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9327 - keyText = 9537 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Universi qui te exspectant,<br />
non confundentur, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">De tous ceux qui ont en vous leur attente,<br />
aucun ne sera confondu, Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9788 -->V./  Vias tuas, Domine, notas fac mihi:<br />
et semitas tuas edoce me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, faites-moi connaître vos voies :<br />
et enseignez-moi vos sentiers.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 6788 - keyText = 6911 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Montrez-nous, Seigneur, votre miséricorde :<br />
et donnez-nous votre salut.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 165 - keyText = 186 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ad te, Domine, levavi animam meam :<br />
Deus meus, in te confido,<br />
non erubescam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vers vous, Seigneur, j’ai élevé mon âme :<br />
Mon Dieu, en vous je me confie ;<br />
que je n’aie pas à rougir !</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6265 --> Neque irrideant me inimici mei:<br />
etenim universi qui te exspectant,<br />
non confundentur.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Et que mes ennemis ne se moquent pas de moi :<br />
car aucun de ceux qui vous attendent<br /> ne sera confondu. </ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 2683 - keyText = 2732 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Dominus dabit benignitatem :<br />
et terra nostra dabit fructum suum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur répandra sur nous ses bienfaits :<br />
et notre terre donnera son fruit.</ion-text></ion-col></ion-row></ion-grid>

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